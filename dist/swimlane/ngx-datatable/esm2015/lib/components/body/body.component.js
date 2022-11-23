import { Component, Output, EventEmitter, Input, HostBinding, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ScrollerComponent } from './scroller.component';
import { columnsByPin, columnGroupWidths } from '../../utils/column';
import { RowHeightCache } from '../../utils/row-height-cache';
import { translateXY } from '../../utils/translate';
export class DataTableBodyComponent {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    constructor(cd) {
        this.cd = cd;
        this.selected = [];
        this.scroll = new EventEmitter();
        this.page = new EventEmitter();
        this.activate = new EventEmitter();
        this.select = new EventEmitter();
        this.detailToggle = new EventEmitter();
        this.rowContextmenu = new EventEmitter(false);
        this.treeAction = new EventEmitter();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new WeakMap();
        this.rowExpansions = [];
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (row, index) => {
            if (!this.rowDetail) {
                return 0;
            }
            const rowHeight = this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
        };
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (index, row) => {
            const idx = this.getRowIndex(row);
            if (this.trackByProp) {
                return row[this.trackByProp];
            }
            else {
                return idx;
            }
        };
    }
    set pageSize(val) {
        this._pageSize = val;
        this.recalcLayout();
    }
    get pageSize() {
        return this._pageSize;
    }
    set rows(val) {
        this._rows = val;
        this.recalcLayout();
    }
    get rows() {
        return this._rows;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
    get columns() {
        return this._columns;
    }
    set offset(val) {
        this._offset = val;
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization))
            this.recalcLayout();
    }
    get offset() {
        return this._offset;
    }
    set rowCount(val) {
        this._rowCount = val;
        this.recalcLayout();
    }
    get rowCount() {
        return this._rowCount;
    }
    get bodyWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        else {
            return '100%';
        }
    }
    set bodyHeight(val) {
        if (this.scrollbarV) {
            this._bodyHeight = val + 'px';
        }
        else {
            this._bodyHeight = 'auto';
        }
        this.recalcLayout();
    }
    get bodyHeight() {
        return this._bodyHeight;
    }
    /**
     * Returns if selection is enabled.
     */
    get selectEnabled() {
        return !!this.selectionType;
    }
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     */
    get scrollHeight() {
        if (this.scrollbarV && this.virtualization && this.rowCount) {
            return this.rowHeightsCache.query(this.rowCount - 1);
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
    /**
     * Called after the constructor, initializing input properties
     */
    ngOnInit() {
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe(({ type, value }) => {
                if (type === 'row') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe(({ type, value }) => {
                if (type === 'group') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
    }
    /**
     * Called once, before the instance is destroyed.
     */
    ngOnDestroy() {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    }
    /**
     * Updates the Y offset given a new offset.
     */
    updateOffsetY(offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            const rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    }
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    onBodyScroll(event) {
        const scrollYPos = event.scrollYPos;
        const scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    }
    /**
     * Updates the page given a direction.
     */
    updatePage(direction) {
        let offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset });
        }
    }
    /**
     * Updates the rows in the view port
     */
    updateRows() {
        const { first, last } = this.indexes;
        let rowIndex = first;
        let idx = 0;
        const temp = [];
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            let maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                const group = this.groupedRows[rowIndex];
                this.rowIndexes.set(group, rowIndex);
                if (group.value) {
                    // add indexes for each group item
                    group.value.forEach((g, i) => {
                        const _idx = `${rowIndex}-${i}`;
                        this.rowIndexes.set(g, _idx);
                    });
                }
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                const row = this.rows[rowIndex];
                if (row) {
                    // add indexes for each row
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    }
    /**
     * Get the row height
     */
    getRowHeight(row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return this.rowHeight;
    }
    /**
     * @param group the group with all rows
     */
    getGroupHeight(group) {
        let rowHeight = 0;
        if (group.value) {
            for (let index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    }
    /**
     * Calculate row height based on the expanded state of the row.
     */
    getRowAndDetailHeight(row) {
        let rowHeight = this.getRowHeight(row);
        const expanded = this.getRowExpanded(row);
        // Adding detail row height if its expanded.
        if (expanded) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    }
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param rows the row that needs to be placed in the 2D space.
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getRowsStyles(rows) {
        const styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            let idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                const row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            const pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, this.offsetX, pos);
        }
        return styles;
    }
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getBottomSummaryRowStyles() {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        const styles = { position: 'absolute' };
        const pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    }
    /**
     * Hides the loading indicator
     */
    hideIndicator() {
        setTimeout(() => (this.loadingIndicator = false), 500);
    }
    /**
     * Updates the index of the rows in the viewport
     */
    updateIndexes() {
        let first = 0;
        let last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                const height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first, last };
    }
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    refreshRowHeightCache() {
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            const rowExpansions = new Set();
            for (const row of this.rows) {
                if (this.getRowExpanded(row)) {
                    rowExpansions.add(row);
                }
            }
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions
            });
        }
    }
    /**
     * Gets the index for the view port
     */
    getAdjustedViewPortIndex() {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        const viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    }
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    toggleRowExpansion(row) {
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
        const expanded = rowExpandedIdx > -1;
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            const idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        if (expanded) {
            this.rowExpansions.splice(rowExpandedIdx, 1);
        }
        else {
            this.rowExpansions.push(row);
        }
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    toggleAllRows(expanded) {
        // clear prev expansions
        this.rowExpansions = [];
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        if (expanded) {
            for (const row of this.rows) {
                this.rowExpansions.push(row);
            }
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Recalculates the table
     */
    recalcLayout() {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    }
    /**
     * Tracks the column
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * Gets the row pinning group styles
     */
    stylesByGroup(group) {
        const widths = this.columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    getRowExpanded(row) {
        if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
            for (const group of this.groupedRows) {
                this.rowExpansions.push(group);
            }
        }
        return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
    }
    getRowExpandedIdx(row, expanded) {
        if (!expanded || !expanded.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return expanded.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
    /**
     * Gets the row index given a row
     */
    getRowIndex(row) {
        return this.rowIndexes.get(row) || 0;
    }
    onTreeAction(row) {
        this.treeAction.emit({ row });
    }
}
DataTableBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'datatable-body',
                template: `
    <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            role="row"
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              role="row"
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          role="row"
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'datatable-body'
                }
            },] }
];
DataTableBodyComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
DataTableBodyComponent.propDecorators = {
    scrollbarV: [{ type: Input }],
    scrollbarH: [{ type: Input }],
    loadingIndicator: [{ type: Input }],
    externalPaging: [{ type: Input }],
    rowHeight: [{ type: Input }],
    offsetX: [{ type: Input }],
    emptyMessage: [{ type: Input }],
    selectionType: [{ type: Input }],
    selected: [{ type: Input }],
    rowIdentity: [{ type: Input }],
    rowDetail: [{ type: Input }],
    groupHeader: [{ type: Input }],
    selectCheck: [{ type: Input }],
    displayCheck: [{ type: Input }],
    trackByProp: [{ type: Input }],
    rowClass: [{ type: Input }],
    groupedRows: [{ type: Input }],
    groupExpansionDefault: [{ type: Input }],
    innerWidth: [{ type: Input }],
    groupRowsBy: [{ type: Input }],
    virtualization: [{ type: Input }],
    summaryRow: [{ type: Input }],
    summaryPosition: [{ type: Input }],
    summaryHeight: [{ type: Input }],
    pageSize: [{ type: Input }],
    rows: [{ type: Input }],
    columns: [{ type: Input }],
    offset: [{ type: Input }],
    rowCount: [{ type: Input }],
    bodyWidth: [{ type: HostBinding, args: ['style.width',] }],
    bodyHeight: [{ type: Input }, { type: HostBinding, args: ['style.height',] }],
    scroll: [{ type: Output }],
    page: [{ type: Output }],
    activate: [{ type: Output }],
    select: [{ type: Output }],
    detailToggle: [{ type: Output }],
    rowContextmenu: [{ type: Output }],
    treeAction: [{ type: Output }],
    scroller: [{ type: ViewChild, args: [ScrollerComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9ib2R5L2JvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBQ0wsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixTQUFTLEVBR1QsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBMkdwRCxNQUFNLE9BQU8sc0JBQXNCO0lBaUpqQzs7T0FFRztJQUNILFlBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBM0loQyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBd0ZwQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxtQkFBYyxHQUFHLElBQUksWUFBWSxDQUFrQyxLQUFLLENBQUMsQ0FBQztRQUMxRSxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUF3QjdELG9CQUFlLEdBQW1CLElBQUksY0FBYyxF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S0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7b0NBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFFTCxLQUFLO21CQVNMLEtBQUs7c0JBU0wsS0FBSztxQkFVTCxLQUFLO3VCQVNMLEtBQUs7d0JBU0wsV0FBVyxTQUFDLGFBQWE7eUJBU3pCLEtBQUssWUFDTCxXQUFXLFNBQUMsY0FBYztxQkFlMUIsTUFBTTttQkFDTixNQUFNO3VCQUNOLE1BQU07cUJBQ04sTUFBTTsyQkFDTixNQUFNOzZCQUNOLE1BQU07eUJBQ04sTUFBTTt1QkFFTixTQUFTLFNBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxlckNvbXBvbmVudCB9IGZyb20gJy4vc2Nyb2xsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9zZWxlY3Rpb24udHlwZSc7XG5pbXBvcnQgeyBjb2x1bW5zQnlQaW4sIGNvbHVtbkdyb3VwV2lkdGhzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29sdW1uJztcbmltcG9ydCB7IFJvd0hlaWdodENhY2hlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcm93LWhlaWdodC1jYWNoZSc7XG5pbXBvcnQgeyB0cmFuc2xhdGVYWSB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zbGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1ib2R5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGF0YXRhYmxlLXByb2dyZXNzICpuZ0lmPVwibG9hZGluZ0luZGljYXRvclwiPiA8L2RhdGF0YWJsZS1wcm9ncmVzcz5cbiAgICA8ZGF0YXRhYmxlLXNlbGVjdGlvblxuICAgICAgI3NlbGVjdG9yXG4gICAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxuICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICBbc2VsZWN0Q2hlY2tdPVwic2VsZWN0Q2hlY2tcIlxuICAgICAgW3NlbGVjdEVuYWJsZWRdPVwic2VsZWN0RW5hYmxlZFwiXG4gICAgICBbc2VsZWN0aW9uVHlwZV09XCJzZWxlY3Rpb25UeXBlXCJcbiAgICAgIFtyb3dJZGVudGl0eV09XCJyb3dJZGVudGl0eVwiXG4gICAgICAoc2VsZWN0KT1cInNlbGVjdC5lbWl0KCRldmVudClcIlxuICAgICAgKGFjdGl2YXRlKT1cImFjdGl2YXRlLmVtaXQoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGRhdGF0YWJsZS1zY3JvbGxlclxuICAgICAgICAqbmdJZj1cInJvd3M/Lmxlbmd0aFwiXG4gICAgICAgIFtzY3JvbGxiYXJWXT1cInNjcm9sbGJhclZcIlxuICAgICAgICBbc2Nyb2xsYmFySF09XCJzY3JvbGxiYXJIXCJcbiAgICAgICAgW3Njcm9sbEhlaWdodF09XCJzY3JvbGxIZWlnaHRcIlxuICAgICAgICBbc2Nyb2xsV2lkdGhdPVwiY29sdW1uR3JvdXBXaWR0aHM/LnRvdGFsXCJcbiAgICAgICAgKHNjcm9sbCk9XCJvbkJvZHlTY3JvbGwoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIDxkYXRhdGFibGUtc3VtbWFyeS1yb3dcbiAgICAgICAgICAqbmdJZj1cInN1bW1hcnlSb3cgJiYgc3VtbWFyeVBvc2l0aW9uID09PSAndG9wJ1wiXG4gICAgICAgICAgW3Jvd0hlaWdodF09XCJzdW1tYXJ5SGVpZ2h0XCJcbiAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICBbaW5uZXJXaWR0aF09XCJpbm5lcldpZHRoXCJcbiAgICAgICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgPlxuICAgICAgICA8L2RhdGF0YWJsZS1zdW1tYXJ5LXJvdz5cbiAgICAgICAgPGRhdGF0YWJsZS1yb3ctd3JhcHBlclxuICAgICAgICAgIFtncm91cGVkUm93c109XCJncm91cGVkUm93c1wiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHRlbXA7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHJvd1RyYWNraW5nRm5cIlxuICAgICAgICAgIFtpbm5lcldpZHRoXT1cImlubmVyV2lkdGhcIlxuICAgICAgICAgIFtuZ1N0eWxlXT1cImdldFJvd3NTdHlsZXMoZ3JvdXApXCJcbiAgICAgICAgICBbcm93RGV0YWlsXT1cInJvd0RldGFpbFwiXG4gICAgICAgICAgW2dyb3VwSGVhZGVyXT1cImdyb3VwSGVhZGVyXCJcbiAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICBbZGV0YWlsUm93SGVpZ2h0XT1cImdldERldGFpbFJvd0hlaWdodChncm91cCAmJiBncm91cFtpXSwgaSlcIlxuICAgICAgICAgIFtyb3ddPVwiZ3JvdXBcIlxuICAgICAgICAgIFtleHBhbmRlZF09XCJnZXRSb3dFeHBhbmRlZChncm91cClcIlxuICAgICAgICAgIFtyb3dJbmRleF09XCJnZXRSb3dJbmRleChncm91cCAmJiBncm91cFtpXSlcIlxuICAgICAgICAgIChyb3dDb250ZXh0bWVudSk9XCJyb3dDb250ZXh0bWVudS5lbWl0KCRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRhdGF0YWJsZS1ib2R5LXJvd1xuICAgICAgICAgICAgcm9sZT1cInJvd1wiXG4gICAgICAgICAgICAqbmdJZj1cIiFncm91cGVkUm93czsgZWxzZSBncm91cGVkUm93c1RlbXBsYXRlXCJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgW2lzU2VsZWN0ZWRdPVwic2VsZWN0b3IuZ2V0Um93U2VsZWN0ZWQoZ3JvdXApXCJcbiAgICAgICAgICAgIFtpbm5lcldpZHRoXT1cImlubmVyV2lkdGhcIlxuICAgICAgICAgICAgW29mZnNldFhdPVwib2Zmc2V0WFwiXG4gICAgICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgICAgIFtyb3dIZWlnaHRdPVwiZ2V0Um93SGVpZ2h0KGdyb3VwKVwiXG4gICAgICAgICAgICBbcm93XT1cImdyb3VwXCJcbiAgICAgICAgICAgIFtyb3dJbmRleF09XCJnZXRSb3dJbmRleChncm91cClcIlxuICAgICAgICAgICAgW2V4cGFuZGVkXT1cImdldFJvd0V4cGFuZGVkKGdyb3VwKVwiXG4gICAgICAgICAgICBbcm93Q2xhc3NdPVwicm93Q2xhc3NcIlxuICAgICAgICAgICAgW2Rpc3BsYXlDaGVja109XCJkaXNwbGF5Q2hlY2tcIlxuICAgICAgICAgICAgW3RyZWVTdGF0dXNdPVwiZ3JvdXAgJiYgZ3JvdXAudHJlZVN0YXR1c1wiXG4gICAgICAgICAgICAodHJlZUFjdGlvbik9XCJvblRyZWVBY3Rpb24oZ3JvdXApXCJcbiAgICAgICAgICAgIChhY3RpdmF0ZSk9XCJzZWxlY3Rvci5vbkFjdGl2YXRlKCRldmVudCwgaW5kZXhlcy5maXJzdCArIGkpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9kYXRhdGFibGUtYm9keS1yb3c+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNncm91cGVkUm93c1RlbXBsYXRlPlxuICAgICAgICAgICAgPGRhdGF0YWJsZS1ib2R5LXJvd1xuICAgICAgICAgICAgICByb2xlPVwicm93XCJcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHJvdyBvZiBncm91cC52YWx1ZTsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogcm93VHJhY2tpbmdGblwiXG4gICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICBbaXNTZWxlY3RlZF09XCJzZWxlY3Rvci5nZXRSb3dTZWxlY3RlZChyb3cpXCJcbiAgICAgICAgICAgICAgW2lubmVyV2lkdGhdPVwiaW5uZXJXaWR0aFwiXG4gICAgICAgICAgICAgIFtvZmZzZXRYXT1cIm9mZnNldFhcIlxuICAgICAgICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XCJnZXRSb3dIZWlnaHQocm93KVwiXG4gICAgICAgICAgICAgIFtyb3ddPVwicm93XCJcbiAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwLnZhbHVlXCJcbiAgICAgICAgICAgICAgW3Jvd0luZGV4XT1cImdldFJvd0luZGV4KHJvdylcIlxuICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwiZ2V0Um93RXhwYW5kZWQocm93KVwiXG4gICAgICAgICAgICAgIFtyb3dDbGFzc109XCJyb3dDbGFzc1wiXG4gICAgICAgICAgICAgIChhY3RpdmF0ZSk9XCJzZWxlY3Rvci5vbkFjdGl2YXRlKCRldmVudCwgaSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kYXRhdGFibGUtYm9keS1yb3c+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kYXRhdGFibGUtcm93LXdyYXBwZXI+XG4gICAgICAgIDxkYXRhdGFibGUtc3VtbWFyeS1yb3dcbiAgICAgICAgICByb2xlPVwicm93XCJcbiAgICAgICAgICAqbmdJZj1cInN1bW1hcnlSb3cgJiYgc3VtbWFyeVBvc2l0aW9uID09PSAnYm90dG9tJ1wiXG4gICAgICAgICAgW25nU3R5bGVdPVwiZ2V0Qm90dG9tU3VtbWFyeVJvd1N0eWxlcygpXCJcbiAgICAgICAgICBbcm93SGVpZ2h0XT1cInN1bW1hcnlIZWlnaHRcIlxuICAgICAgICAgIFtvZmZzZXRYXT1cIm9mZnNldFhcIlxuICAgICAgICAgIFtpbm5lcldpZHRoXT1cImlubmVyV2lkdGhcIlxuICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICA+XG4gICAgICAgIDwvZGF0YXRhYmxlLXN1bW1hcnktcm93PlxuICAgICAgPC9kYXRhdGFibGUtc2Nyb2xsZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1wdHktcm93XCIgKm5nSWY9XCIhcm93cz8ubGVuZ3RoICYmICFsb2FkaW5nSW5kaWNhdG9yXCIgW2lubmVySFRNTF09XCJlbXB0eU1lc3NhZ2VcIj48L2Rpdj5cbiAgICA8L2RhdGF0YWJsZS1zZWxlY3Rpb24+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdkYXRhdGFibGUtYm9keSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVCb2R5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzY3JvbGxiYXJWOiBib29sZWFuO1xuICBASW5wdXQoKSBzY3JvbGxiYXJIOiBib29sZWFuO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuO1xuICBASW5wdXQoKSBleHRlcm5hbFBhZ2luZzogYm9vbGVhbjtcbiAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXIgfCAnYXV0bycgfCAoKHJvdz86IGFueSkgPT4gbnVtYmVyKTtcbiAgQElucHV0KCkgb2Zmc2V0WDogbnVtYmVyO1xuICBASW5wdXQoKSBlbXB0eU1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZTtcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHJvd0lkZW50aXR5OiBhbnk7XG4gIEBJbnB1dCgpIHJvd0RldGFpbDogYW55O1xuICBASW5wdXQoKSBncm91cEhlYWRlcjogYW55O1xuICBASW5wdXQoKSBzZWxlY3RDaGVjazogYW55O1xuICBASW5wdXQoKSBkaXNwbGF5Q2hlY2s6IGFueTtcbiAgQElucHV0KCkgdHJhY2tCeVByb3A6IHN0cmluZztcbiAgQElucHV0KCkgcm93Q2xhc3M6IGFueTtcbiAgQElucHV0KCkgZ3JvdXBlZFJvd3M6IGFueTtcbiAgQElucHV0KCkgZ3JvdXBFeHBhbnNpb25EZWZhdWx0OiBib29sZWFuO1xuICBASW5wdXQoKSBpbm5lcldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGdyb3VwUm93c0J5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZpcnR1YWxpemF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBzdW1tYXJ5Um93OiBib29sZWFuO1xuICBASW5wdXQoKSBzdW1tYXJ5UG9zaXRpb246IHN0cmluZztcbiAgQElucHV0KCkgc3VtbWFyeUhlaWdodDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNldCBwYWdlU2l6ZSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VTaXplID0gdmFsO1xuICAgIHRoaXMucmVjYWxjTGF5b3V0KCk7XG4gIH1cblxuICBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcm93cyh2YWw6IGFueVtdKSB7XG4gICAgdGhpcy5fcm93cyA9IHZhbDtcbiAgICB0aGlzLnJlY2FsY0xheW91dCgpO1xuICB9XG5cbiAgZ2V0IHJvd3MoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9yb3dzO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGNvbHVtbnModmFsOiBhbnlbXSkge1xuICAgIHRoaXMuX2NvbHVtbnMgPSB2YWw7XG4gICAgY29uc3QgY29sc0J5UGluID0gY29sdW1uc0J5UGluKHZhbCk7XG4gICAgdGhpcy5jb2x1bW5Hcm91cFdpZHRocyA9IGNvbHVtbkdyb3VwV2lkdGhzKGNvbHNCeVBpbiwgdmFsKTtcbiAgfVxuXG4gIGdldCBjb2x1bW5zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBvZmZzZXQodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXQgPSB2YWw7XG4gICAgaWYgKCF0aGlzLnNjcm9sbGJhclYgfHwgKHRoaXMuc2Nyb2xsYmFyViAmJiAhdGhpcy52aXJ0dWFsaXphdGlvbikpIHRoaXMucmVjYWxjTGF5b3V0KCk7XG4gIH1cblxuICBnZXQgb2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCByb3dDb3VudCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3Jvd0NvdW50ID0gdmFsO1xuICAgIHRoaXMucmVjYWxjTGF5b3V0KCk7XG4gIH1cblxuICBnZXQgcm93Q291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcm93Q291bnQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgZ2V0IGJvZHlXaWR0aCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhckgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGggKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJzEwMCUnO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgc2V0IGJvZHlIZWlnaHQodmFsKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyVikge1xuICAgICAgdGhpcy5fYm9keUhlaWdodCA9IHZhbCArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2JvZHlIZWlnaHQgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgdGhpcy5yZWNhbGNMYXlvdXQoKTtcbiAgfVxuXG4gIGdldCBib2R5SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9ib2R5SGVpZ2h0O1xuICB9XG5cbiAgQE91dHB1dCgpIHNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZXRhaWxUb2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcm93Q29udGV4dG1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQ7IHJvdzogYW55IH0+KGZhbHNlKTtcbiAgQE91dHB1dCgpIHRyZWVBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoU2Nyb2xsZXJDb21wb25lbnQpIHNjcm9sbGVyOiBTY3JvbGxlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogUmV0dXJucyBpZiBzZWxlY3Rpb24gaXMgZW5hYmxlZC5cbiAgICovXG4gIGdldCBzZWxlY3RFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuc2VsZWN0aW9uVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0aGF0IHdvdWxkIGNhbGN1bGF0ZSB0aGUgaGVpZ2h0IG9mIHNjcm9sbCBiYXJcbiAgICogYmFzZWQgb24gdGhlIHJvdyBoZWlnaHRzIGNhY2hlIGZvciB2aXJ0dWFsIHNjcm9sbCBhbmQgdmlydHVhbGl6YXRpb24uIE90aGVyIHNjZW5hcmlvc1xuICAgKiBjYWxjdWxhdGUgc2Nyb2xsIGhlaWdodCBhdXRvbWF0aWNhbGx5IChhcyBoZWlnaHQgd2lsbCBiZSB1bmRlZmluZWQpLlxuICAgKi9cbiAgZ2V0IHNjcm9sbEhlaWdodCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbiAmJiB0aGlzLnJvd0NvdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3dIZWlnaHRzQ2FjaGUucXVlcnkodGhpcy5yb3dDb3VudCAtIDEpO1xuICAgIH1cbiAgICAvLyBhdm9pZCBUUzcwMzA6IE5vdCBhbGwgY29kZSBwYXRocyByZXR1cm4gYSB2YWx1ZS5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcm93SGVpZ2h0c0NhY2hlOiBSb3dIZWlnaHRDYWNoZSA9IG5ldyBSb3dIZWlnaHRDYWNoZSgpO1xuICB0ZW1wOiBhbnlbXSA9IFtdO1xuICBvZmZzZXRZID0gMDtcbiAgaW5kZXhlczogYW55ID0ge307XG4gIGNvbHVtbkdyb3VwV2lkdGhzOiBhbnk7XG4gIGNvbHVtbkdyb3VwV2lkdGhzV2l0aG91dEdyb3VwOiBhbnk7XG4gIHJvd1RyYWNraW5nRm46IGFueTtcbiAgbGlzdGVuZXI6IGFueTtcbiAgcm93SW5kZXhlczogYW55ID0gbmV3IFdlYWtNYXA8YW55LCBzdHJpbmc+KCk7XG4gIHJvd0V4cGFuc2lvbnM6IGFueVtdID0gW107XG5cbiAgX3Jvd3M6IGFueVtdO1xuICBfYm9keUhlaWdodDogYW55O1xuICBfY29sdW1uczogYW55W107XG4gIF9yb3dDb3VudDogbnVtYmVyO1xuICBfb2Zmc2V0OiBudW1iZXI7XG4gIF9wYWdlU2l6ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIERhdGFUYWJsZUJvZHlDb21wb25lbnQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIC8vIGRlY2xhcmUgZm4gaGVyZSBzbyB3ZSBjYW4gZ2V0IGFjY2VzcyB0byB0aGUgYHRoaXNgIHByb3BlcnR5XG4gICAgdGhpcy5yb3dUcmFja2luZ0ZuID0gKGluZGV4OiBudW1iZXIsIHJvdzogYW55KTogYW55ID0+IHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZ2V0Um93SW5kZXgocm93KTtcbiAgICAgIGlmICh0aGlzLnRyYWNrQnlQcm9wKSB7XG4gICAgICAgIHJldHVybiByb3dbdGhpcy50cmFja0J5UHJvcF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciwgaW5pdGlhbGl6aW5nIGlucHV0IHByb3BlcnRpZXNcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvd0RldGFpbCkge1xuICAgICAgdGhpcy5saXN0ZW5lciA9IHRoaXMucm93RGV0YWlsLnRvZ2dsZS5zdWJzY3JpYmUoKHsgdHlwZSwgdmFsdWUgfTogeyB0eXBlOiBzdHJpbmc7IHZhbHVlOiBhbnkgfSkgPT4ge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3JvdycpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVJvd0V4cGFuc2lvbih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdhbGwnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVBbGxSb3dzKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlZnJlc2ggcm93cyBhZnRlciB0b2dnbGVcbiAgICAgICAgLy8gRml4ZXMgIzg4M1xuICAgICAgICB0aGlzLnVwZGF0ZUluZGV4ZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSb3dzKCk7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ncm91cEhlYWRlcikge1xuICAgICAgdGhpcy5saXN0ZW5lciA9IHRoaXMuZ3JvdXBIZWFkZXIudG9nZ2xlLnN1YnNjcmliZSgoeyB0eXBlLCB2YWx1ZSB9OiB7IHR5cGU6IHN0cmluZzsgdmFsdWU6IGFueSB9KSA9PiB7XG4gICAgICAgIGlmICh0eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSb3dFeHBhbnNpb24odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQWxsUm93cyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWZyZXNoIHJvd3MgYWZ0ZXIgdG9nZ2xlXG4gICAgICAgIC8vIEZpeGVzICM4ODNcbiAgICAgICAgdGhpcy51cGRhdGVJbmRleGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUm93cygpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbmNlLCBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIGRlc3Ryb3llZC5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvd0RldGFpbCB8fCB0aGlzLmdyb3VwSGVhZGVyKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIFkgb2Zmc2V0IGdpdmVuIGEgbmV3IG9mZnNldC5cbiAgICovXG4gIHVwZGF0ZU9mZnNldFkob2Zmc2V0PzogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gc2Nyb2xsZXIgaXMgbWlzc2luZyBvbiBlbXB0eSB0YWJsZVxuICAgIGlmICghdGhpcy5zY3JvbGxlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbiAmJiBvZmZzZXQpIHtcbiAgICAgIC8vIEZpcnN0IGdldCB0aGUgcm93IEluZGV4IHRoYXQgd2UgbmVlZCB0byBtb3ZlIHRvLlxuICAgICAgY29uc3Qgcm93SW5kZXggPSB0aGlzLnBhZ2VTaXplICogb2Zmc2V0O1xuICAgICAgb2Zmc2V0ID0gdGhpcy5yb3dIZWlnaHRzQ2FjaGUucXVlcnkocm93SW5kZXggLSAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsYmFyViAmJiAhdGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbGVyLnNldE9mZnNldChvZmZzZXQgfHwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQm9keSB3YXMgc2Nyb2xsZWQsIHRoaXMgaXMgbWFpbmx5IHVzZWZ1bCBmb3JcbiAgICogd2hlbiBhIHVzZXIgaXMgc2VydmVyLXNpZGUgcGFnaW5hdGlvbiB2aWEgdmlydHVhbCBzY3JvbGwuXG4gICAqL1xuICBvbkJvZHlTY3JvbGwoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHNjcm9sbFlQb3M6IG51bWJlciA9IGV2ZW50LnNjcm9sbFlQb3M7XG4gICAgY29uc3Qgc2Nyb2xsWFBvczogbnVtYmVyID0gZXZlbnQuc2Nyb2xsWFBvcztcblxuICAgIC8vIGlmIHNjcm9sbCBjaGFuZ2UsIHRyaWdnZXIgdXBkYXRlXG4gICAgLy8gdGhpcyBpcyBtYWlubHkgdXNlZCBmb3IgaGVhZGVyIGNlbGwgcG9zaXRpb25zXG4gICAgaWYgKHRoaXMub2Zmc2V0WSAhPT0gc2Nyb2xsWVBvcyB8fCB0aGlzLm9mZnNldFggIT09IHNjcm9sbFhQb3MpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmVtaXQoe1xuICAgICAgICBvZmZzZXRZOiBzY3JvbGxZUG9zLFxuICAgICAgICBvZmZzZXRYOiBzY3JvbGxYUG9zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLm9mZnNldFkgPSBzY3JvbGxZUG9zO1xuICAgIHRoaXMub2Zmc2V0WCA9IHNjcm9sbFhQb3M7XG5cbiAgICB0aGlzLnVwZGF0ZUluZGV4ZXMoKTtcbiAgICB0aGlzLnVwZGF0ZVBhZ2UoZXZlbnQuZGlyZWN0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZVJvd3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwYWdlIGdpdmVuIGEgZGlyZWN0aW9uLlxuICAgKi9cbiAgdXBkYXRlUGFnZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBvZmZzZXQgPSB0aGlzLmluZGV4ZXMuZmlyc3QgLyB0aGlzLnBhZ2VTaXplO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgb2Zmc2V0ID0gTWF0aC5jZWlsKG9mZnNldCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgb2Zmc2V0ID0gTWF0aC5mbG9vcihvZmZzZXQpO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgdGhpcy5wYWdlLmVtaXQoeyBvZmZzZXQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHJvd3MgaW4gdGhlIHZpZXcgcG9ydFxuICAgKi9cbiAgdXBkYXRlUm93cygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGZpcnN0LCBsYXN0IH0gPSB0aGlzLmluZGV4ZXM7XG4gICAgbGV0IHJvd0luZGV4ID0gZmlyc3Q7XG4gICAgbGV0IGlkeCA9IDA7XG4gICAgY29uc3QgdGVtcDogYW55W10gPSBbXTtcblxuICAgIC8vIGlmIGdyb3Vwcm93c2J5IGhhcyBiZWVuIHNwZWNpZmllZCB0cmVhdCByb3cgcGFnaW5nXG4gICAgLy8gcGFyYW1ldGVycyBhcyBncm91cCBwYWdpbmcgcGFyYW1ldGVycyBpZSBpZiBsaW1pdCAxMCBoYXMgYmVlblxuICAgIC8vIHNwZWNpZmllZCB0cmVhdCBpdCBhcyAxMCBncm91cHMgcmF0aGVyIHRoYW4gMTAgcm93c1xuICAgIGlmICh0aGlzLmdyb3VwZWRSb3dzKSB7XG4gICAgICBsZXQgbWF4Um93c1Blckdyb3VwID0gMztcbiAgICAgIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIGdyb3VwIHNldCB0aGUgbWF4aW11bSBudW1iZXIgb2ZcbiAgICAgIC8vIHJvd3MgcGVyIGdyb3VwIHRoZSBzYW1lIGFzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93c1xuICAgICAgaWYgKHRoaXMuZ3JvdXBlZFJvd3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG1heFJvd3NQZXJHcm91cCA9IHRoaXMuZ3JvdXBlZFJvd3NbMF0udmFsdWUubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAocm93SW5kZXggPCBsYXN0ICYmIHJvd0luZGV4IDwgdGhpcy5ncm91cGVkUm93cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gQWRkIHRoZSBncm91cHMgaW50byB0aGlzIHBhZ2VcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdyb3VwZWRSb3dzW3Jvd0luZGV4XTtcbiAgICAgICAgdGhpcy5yb3dJbmRleGVzLnNldChncm91cCwgcm93SW5kZXgpO1xuXG4gICAgICAgIGlmIChncm91cC52YWx1ZSkge1xuICAgICAgICAgIC8vIGFkZCBpbmRleGVzIGZvciBlYWNoIGdyb3VwIGl0ZW1cbiAgICAgICAgICBncm91cC52YWx1ZS5mb3JFYWNoKChnOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgX2lkeCA9IGAke3Jvd0luZGV4fS0ke2l9YDtcbiAgICAgICAgICAgIHRoaXMucm93SW5kZXhlcy5zZXQoZywgX2lkeCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcFtpZHhdID0gZ3JvdXA7XG4gICAgICAgIGlkeCsrO1xuXG4gICAgICAgIC8vIEdyb3VwIGluZGV4IGluIHRoaXMgY29udGV4dFxuICAgICAgICByb3dJbmRleCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAocm93SW5kZXggPCBsYXN0ICYmIHJvd0luZGV4IDwgdGhpcy5yb3dDb3VudCkge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLnJvd3Nbcm93SW5kZXhdO1xuXG4gICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICAvLyBhZGQgaW5kZXhlcyBmb3IgZWFjaCByb3dcbiAgICAgICAgICB0aGlzLnJvd0luZGV4ZXMuc2V0KHJvdywgcm93SW5kZXgpO1xuICAgICAgICAgIHRlbXBbaWR4XSA9IHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIGlkeCsrO1xuICAgICAgICByb3dJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSByb3cgaGVpZ2h0XG4gICAqL1xuICBnZXRSb3dIZWlnaHQocm93OiBhbnkpOiBudW1iZXIge1xuICAgIC8vIGlmIGl0cyBhIGZ1bmN0aW9uIHJldHVybiBpdFxuICAgIGlmICh0eXBlb2YgdGhpcy5yb3dIZWlnaHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvd0hlaWdodChyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJvd0hlaWdodCBhcyBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGdyb3VwIHRoZSBncm91cCB3aXRoIGFsbCByb3dzXG4gICAqL1xuICBnZXRHcm91cEhlaWdodChncm91cDogYW55KTogbnVtYmVyIHtcbiAgICBsZXQgcm93SGVpZ2h0ID0gMDtcblxuICAgIGlmIChncm91cC52YWx1ZSkge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdyb3VwLnZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICByb3dIZWlnaHQgKz0gdGhpcy5nZXRSb3dBbmREZXRhaWxIZWlnaHQoZ3JvdXAudmFsdWVbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcm93SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSByb3cgaGVpZ2h0IGJhc2VkIG9uIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiB0aGUgcm93LlxuICAgKi9cbiAgZ2V0Um93QW5kRGV0YWlsSGVpZ2h0KHJvdzogYW55KTogbnVtYmVyIHtcbiAgICBsZXQgcm93SGVpZ2h0ID0gdGhpcy5nZXRSb3dIZWlnaHQocm93KTtcbiAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuZ2V0Um93RXhwYW5kZWQocm93KTtcblxuICAgIC8vIEFkZGluZyBkZXRhaWwgcm93IGhlaWdodCBpZiBpdHMgZXhwYW5kZWQuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICByb3dIZWlnaHQgKz0gdGhpcy5nZXREZXRhaWxSb3dIZWlnaHQocm93KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm93SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaGVpZ2h0IG9mIHRoZSBkZXRhaWwgcm93LlxuICAgKi9cbiAgZ2V0RGV0YWlsUm93SGVpZ2h0ID0gKHJvdz86IGFueSwgaW5kZXg/OiBhbnkpOiBudW1iZXIgPT4ge1xuICAgIGlmICghdGhpcy5yb3dEZXRhaWwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCByb3dIZWlnaHQgPSB0aGlzLnJvd0RldGFpbC5yb3dIZWlnaHQ7XG4gICAgcmV0dXJuIHR5cGVvZiByb3dIZWlnaHQgPT09ICdmdW5jdGlvbicgPyByb3dIZWlnaHQocm93LCBpbmRleCkgOiAocm93SGVpZ2h0IGFzIG51bWJlcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHN0eWxlcyBmb3IgdGhlIHJvdyBzbyB0aGF0IHRoZSByb3dzIGNhbiBiZSBtb3ZlZCBpbiAyRCBzcGFjZVxuICAgKiBkdXJpbmcgdmlydHVhbCBzY3JvbGwgaW5zaWRlIHRoZSBET00uICAgSW4gdGhlIGJlbG93IGNhc2UgdGhlIFkgcG9zaXRpb24gaXNcbiAgICogbWFuaXB1bGF0ZWQuICAgQXMgYW4gZXhhbXBsZSwgaWYgdGhlIGhlaWdodCBvZiByb3cgMCBpcyAzMCBweCBhbmQgcm93IDEgaXNcbiAgICogMTAwIHB4IHRoZW4gZm9sbG93aW5nIHN0eWxlcyBhcmUgZ2VuZXJhdGVkOlxuICAgKlxuICAgKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpOyAgICAtPiAgcm93MFxuICAgKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMzBweCwgMHB4KTsgICAtPiAgcm93MVxuICAgKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMTMwcHgsIDBweCk7ICAtPiAgcm93MlxuICAgKlxuICAgKiBSb3cgaGVpZ2h0cyBoYXZlIHRvIGJlIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIHJvdyBoZWlnaHRzIGNhY2hlIGFzIHdlIHdvbnRcbiAgICogYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hpY2ggcm93IGlzIG9mIHdoYXQgaGVpZ2h0IGJlZm9yZSBoYW5kLiAgSW4gdGhlIGFib3ZlXG4gICAqIGNhc2UgdGhlIHBvc2l0aW9uWSBvZiB0aGUgdHJhbnNsYXRlM2QgZm9yIHJvdzIgd291bGQgYmUgdGhlIHN1bSBvZiBhbGwgdGhlXG4gICAqIGhlaWdodHMgb2YgdGhlIHJvd3MgYmVmb3JlIGl0IChpLmUuIHJvdzAgYW5kIHJvdzEpLlxuICAgKlxuICAgKiBAcGFyYW0gcm93cyB0aGUgcm93IHRoYXQgbmVlZHMgdG8gYmUgcGxhY2VkIGluIHRoZSAyRCBzcGFjZS5cbiAgICogQHJldHVybnMgdGhlIENTUzMgc3R5bGUgdG8gYmUgYXBwbGllZFxuICAgKlxuICAgKiBAbWVtYmVyT2YgRGF0YVRhYmxlQm9keUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0Um93c1N0eWxlcyhyb3dzOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHN0eWxlczogYW55ID0ge307XG5cbiAgICAvLyBvbmx5IGFkZCBzdHlsZXMgZm9yIHRoZSBncm91cCBpZiB0aGVyZSBpcyBhIGdyb3VwXG4gICAgaWYgKHRoaXMuZ3JvdXBlZFJvd3MpIHtcbiAgICAgIHN0eWxlcy53aWR0aCA9IHRoaXMuY29sdW1uR3JvdXBXaWR0aHMudG90YWw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyViAmJiB0aGlzLnZpcnR1YWxpemF0aW9uKSB7XG4gICAgICBsZXQgaWR4ID0gMDtcblxuICAgICAgaWYgKHRoaXMuZ3JvdXBlZFJvd3MpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBsYXRlc3Qgcm93IHJvd2luZGV4IGluIGEgZ3JvdXBcbiAgICAgICAgY29uc3Qgcm93ID0gcm93c1tyb3dzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZHggPSByb3cgPyB0aGlzLmdldFJvd0luZGV4KHJvdykgOiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWR4ID0gdGhpcy5nZXRSb3dJbmRleChyb3dzKTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgcG9zID0gaWR4ICogcm93SGVpZ2h0O1xuICAgICAgLy8gVGhlIHBvc2l0aW9uIG9mIHRoaXMgcm93IHdvdWxkIGJlIHRoZSBzdW0gb2YgYWxsIHJvdyBoZWlnaHRzXG4gICAgICAvLyB1bnRpbCB0aGUgcHJldmlvdXMgcm93IHBvc2l0aW9uLlxuICAgICAgY29uc3QgcG9zID0gdGhpcy5yb3dIZWlnaHRzQ2FjaGUucXVlcnkoaWR4IC0gMSk7XG5cbiAgICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgdGhpcy5vZmZzZXRYLCBwb3MpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGJvdHRvbSBzdW1tYXJ5IHJvdyBvZmZzZXQgZm9yIHNjcm9sbGJhciBtb2RlLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBjYWNoZSBhbmQgb2Zmc2V0IGNhbGN1bGF0aW9uXG4gICAqIHNlZSBkZXNjcmlwdGlvbiBmb3IgYGdldFJvd3NTdHlsZXNgIG1ldGhvZFxuICAgKlxuICAgKiBAcmV0dXJucyB0aGUgQ1NTMyBzdHlsZSB0byBiZSBhcHBsaWVkXG4gICAqXG4gICAqIEBtZW1iZXJPZiBEYXRhVGFibGVCb2R5Q29tcG9uZW50XG4gICAqL1xuICBnZXRCb3R0b21TdW1tYXJ5Um93U3R5bGVzKCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbGJhclYgfHwgIXRoaXMucm93cyB8fCAhdGhpcy5yb3dzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGVzID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9O1xuICAgIGNvbnN0IHBvcyA9IHRoaXMucm93SGVpZ2h0c0NhY2hlLnF1ZXJ5KHRoaXMucm93cy5sZW5ndGggLSAxKTtcblxuICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgMCwgcG9zKTtcblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIGxvYWRpbmcgaW5kaWNhdG9yXG4gICAqL1xuICBoaWRlSW5kaWNhdG9yKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlKSwgNTAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBpbmRleCBvZiB0aGUgcm93cyBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIHVwZGF0ZUluZGV4ZXMoKTogdm9pZCB7XG4gICAgbGV0IGZpcnN0ID0gMDtcbiAgICBsZXQgbGFzdCA9IDA7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWKSB7XG4gICAgICBpZiAodGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgICAvLyBDYWxjdWxhdGlvbiBvZiB0aGUgZmlyc3QgYW5kIGxhc3QgaW5kZXhlcyB3aWxsIGJlIGJhc2VkIG9uIHdoZXJlIHRoZVxuICAgICAgICAvLyBzY3JvbGxZIHBvc2l0aW9uIHdvdWxkIGJlIGF0LiAgVGhlIGxhc3QgaW5kZXggd291bGQgYmUgdGhlIG9uZVxuICAgICAgICAvLyB0aGF0IHNob3dzIHVwIGluc2lkZSB0aGUgdmlldyBwb3J0IHRoZSBsYXN0LlxuICAgICAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUludCh0aGlzLmJvZHlIZWlnaHQsIDApO1xuICAgICAgICBmaXJzdCA9IHRoaXMucm93SGVpZ2h0c0NhY2hlLmdldFJvd0luZGV4KHRoaXMub2Zmc2V0WSk7XG4gICAgICAgIGxhc3QgPSB0aGlzLnJvd0hlaWdodHNDYWNoZS5nZXRSb3dJbmRleChoZWlnaHQgKyB0aGlzLm9mZnNldFkpICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHZpcnR1YWwgcm93cyBhcmUgbm90IG5lZWRlZFxuICAgICAgICAvLyBXZSByZW5kZXIgYWxsIGluIG9uZSBnb1xuICAgICAgICBmaXJzdCA9IDA7XG4gICAgICAgIGxhc3QgPSB0aGlzLnJvd0NvdW50O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgc2VydmVyIGlzIGhhbmRsaW5nIHBhZ2luZyBhbmQgd2lsbCBwYXNzIGFuIGFycmF5IHRoYXQgYmVnaW5zIHdpdGggdGhlXG4gICAgICAvLyBlbGVtZW50IGF0IGEgc3BlY2lmaWVkIG9mZnNldC4gIGZpcnN0IHNob3VsZCBhbHdheXMgYmUgMCB3aXRoIGV4dGVybmFsIHBhZ2luZy5cbiAgICAgIGlmICghdGhpcy5leHRlcm5hbFBhZ2luZykge1xuICAgICAgICBmaXJzdCA9IE1hdGgubWF4KHRoaXMub2Zmc2V0ICogdGhpcy5wYWdlU2l6ZSwgMCk7XG4gICAgICB9XG4gICAgICBsYXN0ID0gTWF0aC5taW4oZmlyc3QgKyB0aGlzLnBhZ2VTaXplLCB0aGlzLnJvd0NvdW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmluZGV4ZXMgPSB7IGZpcnN0LCBsYXN0IH07XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIHRoZSBmdWxsIFJvdyBIZWlnaHQgY2FjaGUuICBTaG91bGQgYmUgdXNlZFxuICAgKiB3aGVuIHRoZSBlbnRpcmUgcm93IGFycmF5IHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgKi9cbiAgcmVmcmVzaFJvd0hlaWdodENhY2hlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zY3JvbGxiYXJWIHx8ICh0aGlzLnNjcm9sbGJhclYgJiYgIXRoaXMudmlydHVhbGl6YXRpb24pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgdGhlIHByZXZpb3VzIHJvdyBoZWlnaHQgY2FjaGUgaWYgYWxyZWFkeSBwcmVzZW50LlxuICAgIC8vIHRoaXMgaXMgdXNlZnVsIGR1cmluZyBzb3J0cywgZmlsdGVycyB3aGVyZSB0aGUgc3RhdGUgb2YgdGhlXG4gICAgLy8gcm93cyBhcnJheSBpcyBjaGFuZ2VkLlxuICAgIHRoaXMucm93SGVpZ2h0c0NhY2hlLmNsZWFyQ2FjaGUoKTtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHRyZWUgb25seSBpZiB0aGVyZSBhcmUgcm93cyBpbnNpZGUgdGhlIHRyZWUuXG4gICAgaWYgKHRoaXMucm93cyAmJiB0aGlzLnJvd3MubGVuZ3RoKSB7XG4gICAgICBjb25zdCByb3dFeHBhbnNpb25zID0gbmV3IFNldCgpO1xuICAgICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5yb3dzKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFJvd0V4cGFuZGVkKHJvdykpIHtcbiAgICAgICAgICByb3dFeHBhbnNpb25zLmFkZChyb3cpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMucm93SGVpZ2h0c0NhY2hlLmluaXRDYWNoZSh7XG4gICAgICAgIHJvd3M6IHRoaXMucm93cyxcbiAgICAgICAgcm93SGVpZ2h0OiB0aGlzLnJvd0hlaWdodCxcbiAgICAgICAgZGV0YWlsUm93SGVpZ2h0OiB0aGlzLmdldERldGFpbFJvd0hlaWdodCxcbiAgICAgICAgZXh0ZXJuYWxWaXJ0dWFsOiB0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy5leHRlcm5hbFBhZ2luZyxcbiAgICAgICAgcm93Q291bnQ6IHRoaXMucm93Q291bnQsXG4gICAgICAgIHJvd0luZGV4ZXM6IHRoaXMucm93SW5kZXhlcyxcbiAgICAgICAgcm93RXhwYW5zaW9uc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGluZGV4IGZvciB0aGUgdmlldyBwb3J0XG4gICAqL1xuICBnZXRBZGp1c3RlZFZpZXdQb3J0SW5kZXgoKTogbnVtYmVyIHtcbiAgICAvLyBDYXB0dXJlIHRoZSByb3cgaW5kZXggb2YgdGhlIGZpcnN0IHJvdyB0aGF0IGlzIHZpc2libGUgb24gdGhlIHZpZXdwb3J0LlxuICAgIC8vIElmIHRoZSBzY3JvbGwgYmFyIGlzIGp1c3QgYmVsb3cgdGhlIHJvdyB3aGljaCBpcyBoaWdobGlnaHRlZCB0aGVuIG1ha2UgdGhhdCBhcyB0aGVcbiAgICAvLyBmaXJzdCBpbmRleC5cbiAgICBjb25zdCB2aWV3UG9ydEZpcnN0Um93SW5kZXggPSB0aGlzLmluZGV4ZXMuZmlyc3Q7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWICYmIHRoaXMudmlydHVhbGl6YXRpb24pIHtcbiAgICAgIGNvbnN0IG9mZnNldFNjcm9sbCA9IHRoaXMucm93SGVpZ2h0c0NhY2hlLnF1ZXJ5KHZpZXdQb3J0Rmlyc3RSb3dJbmRleCAtIDEpO1xuICAgICAgcmV0dXJuIG9mZnNldFNjcm9sbCA8PSB0aGlzLm9mZnNldFkgPyB2aWV3UG9ydEZpcnN0Um93SW5kZXggLSAxIDogdmlld1BvcnRGaXJzdFJvd0luZGV4O1xuICAgIH1cblxuICAgIHJldHVybiB2aWV3UG9ydEZpcnN0Um93SW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBFeHBhbnNpb24gb2YgdGhlIHJvdyBpLmUuIGlmIHRoZSByb3cgaXMgZXhwYW5kZWQgdGhlbiBpdCB3aWxsXG4gICAqIGNvbGxhcHNlIGFuZCB2aWNlIHZlcnNhLiAgIE5vdGUgdGhhdCB0aGUgZXhwYW5kZWQgc3RhdHVzIGlzIHN0b3JlZCBhc1xuICAgKiBhIHBhcnQgb2YgdGhlIHJvdyBvYmplY3QgaXRzZWxmIGFzIHdlIGhhdmUgdG8gcHJlc2VydmUgdGhlIGV4cGFuZGVkIHJvd1xuICAgKiBzdGF0dXMgaW4gY2FzZSBvZiBzb3J0aW5nIGFuZCBmaWx0ZXJpbmcgb2YgdGhlIHJvdyBzZXQuXG4gICAqL1xuICB0b2dnbGVSb3dFeHBhbnNpb24ocm93OiBhbnkpOiB2b2lkIHtcbiAgICAvLyBDYXB0dXJlIHRoZSByb3cgaW5kZXggb2YgdGhlIGZpcnN0IHJvdyB0aGF0IGlzIHZpc2libGUgb24gdGhlIHZpZXdwb3J0LlxuICAgIGNvbnN0IHZpZXdQb3J0Rmlyc3RSb3dJbmRleCA9IHRoaXMuZ2V0QWRqdXN0ZWRWaWV3UG9ydEluZGV4KCk7XG4gICAgY29uc3Qgcm93RXhwYW5kZWRJZHggPSB0aGlzLmdldFJvd0V4cGFuZGVkSWR4KHJvdywgdGhpcy5yb3dFeHBhbnNpb25zKTtcbiAgICBjb25zdCBleHBhbmRlZCA9IHJvd0V4cGFuZGVkSWR4ID4gLTE7XG5cbiAgICAvLyBJZiB0aGUgZGV0YWlsUm93SGVpZ2h0IGlzIGF1dG8gLS0+IG9ubHkgaW4gY2FzZSBvZiBub24tdmlydHVhbGl6ZWQgc2Nyb2xsXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyViAmJiB0aGlzLnZpcnR1YWxpemF0aW9uKSB7XG4gICAgICBjb25zdCBkZXRhaWxSb3dIZWlnaHQgPSB0aGlzLmdldERldGFpbFJvd0hlaWdodChyb3cpICogKGV4cGFuZGVkID8gLTEgOiAxKTtcbiAgICAgIC8vIGNvbnN0IGlkeCA9IHRoaXMucm93SW5kZXhlcy5nZXQocm93KSB8fCAwO1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5nZXRSb3dJbmRleChyb3cpO1xuICAgICAgdGhpcy5yb3dIZWlnaHRzQ2FjaGUudXBkYXRlKGlkeCwgZGV0YWlsUm93SGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIHRvZ2dsZWQgcm93IGFuZCB1cGRhdGUgdGhpdmUgbmV2ZXJlIGhlaWdodHMgaW4gdGhlIGNhY2hlLlxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgdGhpcy5yb3dFeHBhbnNpb25zLnNwbGljZShyb3dFeHBhbmRlZElkeCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm93RXhwYW5zaW9ucy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXRhaWxUb2dnbGUuZW1pdCh7XG4gICAgICByb3dzOiBbcm93XSxcbiAgICAgIGN1cnJlbnRJbmRleDogdmlld1BvcnRGaXJzdFJvd0luZGV4XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhwYW5kL0NvbGxhcHNlIGFsbCB0aGUgcm93cyBubyBtYXR0ZXIgd2hhdCB0aGVpciBzdGF0ZSBpcy5cbiAgICovXG4gIHRvZ2dsZUFsbFJvd3MoZXhwYW5kZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBjbGVhciBwcmV2IGV4cGFuc2lvbnNcbiAgICB0aGlzLnJvd0V4cGFuc2lvbnMgPSBbXTtcblxuICAgIC8vIENhcHR1cmUgdGhlIHJvdyBpbmRleCBvZiB0aGUgZmlyc3Qgcm93IHRoYXQgaXMgdmlzaWJsZSBvbiB0aGUgdmlld3BvcnQuXG4gICAgY29uc3Qgdmlld1BvcnRGaXJzdFJvd0luZGV4ID0gdGhpcy5nZXRBZGp1c3RlZFZpZXdQb3J0SW5kZXgoKTtcblxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5yb3dzKSB7XG4gICAgICAgIHRoaXMucm93RXhwYW5zaW9ucy5wdXNoKHJvdyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyVikge1xuICAgICAgLy8gUmVmcmVzaCB0aGUgZnVsbCByb3cgaGVpZ2h0cyBjYWNoZSBzaW5jZSBldmVyeSByb3cgd2FzIGFmZmVjdGVkLlxuICAgICAgdGhpcy5yZWNhbGNMYXlvdXQoKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGFsbCByb3dzIHRoYXQgaGF2ZSBiZWVuIGV4cGFuZGVkLlxuICAgIHRoaXMuZGV0YWlsVG9nZ2xlLmVtaXQoe1xuICAgICAgcm93czogdGhpcy5yb3dzLFxuICAgICAgY3VycmVudEluZGV4OiB2aWV3UG9ydEZpcnN0Um93SW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZXMgdGhlIHRhYmxlXG4gICAqL1xuICByZWNhbGNMYXlvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoUm93SGVpZ2h0Q2FjaGUoKTtcbiAgICB0aGlzLnVwZGF0ZUluZGV4ZXMoKTtcbiAgICB0aGlzLnVwZGF0ZVJvd3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFja3MgdGhlIGNvbHVtblxuICAgKi9cbiAgY29sdW1uVHJhY2tpbmdGbihpbmRleDogbnVtYmVyLCBjb2x1bW46IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGNvbHVtbi4kJGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHJvdyBwaW5uaW5nIGdyb3VwIHN0eWxlc1xuICAgKi9cbiAgc3R5bGVzQnlHcm91cChncm91cDogc3RyaW5nKSB7XG4gICAgY29uc3Qgd2lkdGhzID0gdGhpcy5jb2x1bW5Hcm91cFdpZHRocztcbiAgICBjb25zdCBvZmZzZXRYID0gdGhpcy5vZmZzZXRYO1xuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgd2lkdGg6IGAke3dpZHRoc1tncm91cF19cHhgXG4gICAgfTtcblxuICAgIGlmIChncm91cCA9PT0gJ2xlZnQnKSB7XG4gICAgICB0cmFuc2xhdGVYWShzdHlsZXMsIG9mZnNldFgsIDApO1xuICAgIH0gZWxzZSBpZiAoZ3JvdXAgPT09ICdyaWdodCcpIHtcbiAgICAgIGNvbnN0IGJvZHlXaWR0aCA9IHBhcnNlSW50KHRoaXMuaW5uZXJXaWR0aCArICcnLCAwKTtcbiAgICAgIGNvbnN0IHRvdGFsRGlmZiA9IHdpZHRocy50b3RhbCAtIGJvZHlXaWR0aDtcbiAgICAgIGNvbnN0IG9mZnNldERpZmYgPSB0b3RhbERpZmYgLSBvZmZzZXRYO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gb2Zmc2V0RGlmZiAqIC0xO1xuICAgICAgdHJhbnNsYXRlWFkoc3R5bGVzLCBvZmZzZXQsIDApO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgcm93IHdhcyBleHBhbmRlZCBhbmQgc2V0IGRlZmF1bHQgcm93IGV4cGFuc2lvbiB3aGVuIHJvdyBleHBhbnNpb24gaXMgZW1wdHlcbiAgICovXG4gIGdldFJvd0V4cGFuZGVkKHJvdzogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucm93RXhwYW5zaW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy5ncm91cEV4cGFuc2lvbkRlZmF1bHQpIHtcbiAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgdGhpcy5ncm91cGVkUm93cykge1xuICAgICAgICB0aGlzLnJvd0V4cGFuc2lvbnMucHVzaChncm91cCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93RXhwYW5kZWRJZHgocm93LCB0aGlzLnJvd0V4cGFuc2lvbnMpID4gLTE7XG4gIH1cblxuICBnZXRSb3dFeHBhbmRlZElkeChyb3c6IGFueSwgZXhwYW5kZWQ6IGFueVtdKTogbnVtYmVyIHtcbiAgICBpZiAoIWV4cGFuZGVkIHx8ICFleHBhbmRlZC5sZW5ndGgpIHJldHVybiAtMTtcblxuICAgIGNvbnN0IHJvd0lkID0gdGhpcy5yb3dJZGVudGl0eShyb3cpO1xuICAgIHJldHVybiBleHBhbmRlZC5maW5kSW5kZXgociA9PiB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMucm93SWRlbnRpdHkocik7XG4gICAgICByZXR1cm4gaWQgPT09IHJvd0lkO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHJvdyBpbmRleCBnaXZlbiBhIHJvd1xuICAgKi9cbiAgZ2V0Um93SW5kZXgocm93OiBhbnkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnJvd0luZGV4ZXMuZ2V0KHJvdykgfHwgMDtcbiAgfVxuXG4gIG9uVHJlZUFjdGlvbihyb3c6IGFueSkge1xuICAgIHRoaXMudHJlZUFjdGlvbi5lbWl0KHsgcm93IH0pO1xuICB9XG59XG4iXX0=