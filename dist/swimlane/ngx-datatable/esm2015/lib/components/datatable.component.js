import { __decorate } from "tslib";
import { Component, Input, Output, ElementRef, EventEmitter, ViewChild, HostListener, ContentChildren, HostBinding, ContentChild, KeyValueDiffers, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, SkipSelf, Optional, Inject } from '@angular/core';
import { DatatableGroupHeaderDirective } from './body/body-group-header.directive';
import { BehaviorSubject } from 'rxjs';
import { groupRowsByParents, optionalGetterForProp } from '../utils/tree';
import { setColumnDefaults, translateTemplates } from '../utils/column-helper';
import { ColumnMode } from '../types/column-mode.type';
import { SelectionType } from '../types/selection.type';
import { SortType } from '../types/sort.type';
import { ContextmenuType } from '../types/contextmenu.type';
import { DataTableColumnDirective } from './columns/column.directive';
import { DatatableRowDetailDirective } from './row-detail/row-detail.directive';
import { DatatableFooterDirective } from './footer/footer.directive';
import { DataTableBodyComponent } from './body/body.component';
import { DataTableHeaderComponent } from './header/header.component';
import { ScrollbarHelper } from '../services/scrollbar-helper.service';
import { ColumnChangesService } from '../services/column-changes.service';
import { DimensionsHelper } from '../services/dimensions-helper.service';
import { throttleable } from '../utils/throttle';
import { forceFillColumnWidths, adjustColumnWidths } from '../utils/math';
import { sortRows } from '../utils/sort';
export class DatatableComponent {
    constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        this.columnChangesService = columnChangesService;
        this.configuration = configuration;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */
        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */
        this.columnMode = ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */
        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */
        this.swapColumns = true;
        /**
         * The type of sorting
         */
        this.sortType = SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */
        this.sorts = [];
        /**
         * Css class overrides
         */
        this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            sortUnset: 'datatable-icon-sort-unset',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
        };
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * @memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */
        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */
        this.summaryRow = false;
        /**
         * A height of summary row
         */
        this.summaryHeight = 30;
        /**
         * A property holds a summary row position: top/bottom
         */
        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new EventEmitter();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new EventEmitter();
        /**
         * A cell or row was selected.
         */
        this.select = new EventEmitter();
        /**
         * Column sort was invoked.
         */
        this.sort = new EventEmitter();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new EventEmitter();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new EventEmitter();
        /**
         * Column was resized.
         */
        this.resize = new EventEmitter();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new EventEmitter(false);
        /**
         * A row was expanded ot collapsed for tree
         */
        this.treeAction = new EventEmitter();
        this.rowCount = 0;
        this._offsetX = new BehaviorSubject(0);
        this._count = 0;
        this._offset = 0;
        this._subscriptions = [];
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */
        this.rowIdentity = (x) => {
            if (this._groupRowsBy) {
                // each group in groupedRows are stored as {key, value: [rows]},
                // where key is the groupRowsBy index
                return x.key;
            }
            else {
                return x;
            }
        };
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
        // apply global settings from Module.forRoot
        if (this.configuration && this.configuration.messages) {
            this.messages = Object.assign({}, this.configuration.messages);
        }
    }
    /**
     * Rows that are displayed in the table.
     */
    set rows(val) {
        this._rows = val;
        if (val) {
            this._internalRows = [...val];
        }
        // auto sort on new updates
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // recalculate sizes/etc
        this.recalculate();
        if (this._rows && this._groupRowsBy) {
            // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
            this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
        }
        this.cd.markForCheck();
    }
    /**
     * Gets the rows.
     */
    get rows() {
        return this._rows;
    }
    /**
     * This attribute allows the user to set the name of the column to group the data with
     */
    set groupRowsBy(val) {
        if (val) {
            this._groupRowsBy = val;
            if (this._rows && this._groupRowsBy) {
                // cretes a new array with the data grouped
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
        }
    }
    get groupRowsBy() {
        return this._groupRowsBy;
    }
    /**
     * Columns to be displayed.
     */
    set columns(val) {
        if (val) {
            this._internalColumns = [...val];
            setColumnDefaults(this._internalColumns);
            this.recalculateColumns();
        }
        this._columns = val;
    }
    /**
     * Get the columns.
     */
    get columns() {
        return this._columns;
    }
    /**
     * The page size to be shown.
     * Default value: `undefined`
     */
    set limit(val) {
        this._limit = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the limit.
     */
    get limit() {
        return this._limit;
    }
    /**
     * The total count of all rows.
     * Default value: `0`
     */
    set count(val) {
        this._count = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the count.
     */
    get count() {
        return this._count;
    }
    /**
     * The current offset ( page - 1 ) shown.
     * Default value: `0`
     */
    set offset(val) {
        this._offset = val;
    }
    get offset() {
        return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
    }
    /**
     * CSS class applied if the header height if fixed height.
     */
    get isFixedHeader() {
        const headerHeight = this.headerHeight;
        return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
    }
    /**
     * CSS class applied to the root element if
     * the row heights are fixed heights.
     */
    get isFixedRow() {
        return this.rowHeight !== 'auto';
    }
    /**
     * CSS class applied to root element if
     * vertical scrolling is enabled.
     */
    get isVertScroll() {
        return this.scrollbarV;
    }
    /**
     * CSS class applied to root element if
     * virtualization is enabled.
     */
    get isVirtualized() {
        return this.virtualization;
    }
    /**
     * CSS class applied to the root element
     * if the horziontal scrolling is enabled.
     */
    get isHorScroll() {
        return this.scrollbarH;
    }
    /**
     * CSS class applied to root element is selectable.
     */
    get isSelectable() {
        return this.selectionType !== undefined;
    }
    /**
     * CSS class applied to root is checkbox selection.
     */
    get isCheckboxSelection() {
        return this.selectionType === SelectionType.checkbox;
    }
    /**
     * CSS class applied to root if cell selection.
     */
    get isCellSelection() {
        return this.selectionType === SelectionType.cell;
    }
    /**
     * CSS class applied to root if single select.
     */
    get isSingleSelection() {
        return this.selectionType === SelectionType.single;
    }
    /**
     * CSS class added to root element if mulit select
     */
    get isMultiSelection() {
        return this.selectionType === SelectionType.multi;
    }
    /**
     * CSS class added to root element if mulit click select
     */
    get isMultiClickSelection() {
        return this.selectionType === SelectionType.multiClick;
    }
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     */
    set columnTemplates(val) {
        this._columnTemplates = val;
        this.translateColumns(val);
    }
    /**
     * Returns the column templates.
     */
    get columnTemplates() {
        return this._columnTemplates;
    }
    /**
     * Returns if all rows are selected.
     */
    get allRowsSelected() {
        let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            const indexes = this.bodyComponent.indexes;
            const rowsOnPage = indexes.last - indexes.first;
            allRowsSelected = this.selected.length === rowsOnPage;
        }
        return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
    }
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     */
    ngOnInit() {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    }
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     */
    ngAfterViewInit() {
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        if (typeof requestAnimationFrame === 'undefined') {
            return;
        }
        requestAnimationFrame(() => {
            this.recalculate();
            // emit page for virtual server-side kickoff
            if (this.externalPaging && this.scrollbarV) {
                this.page.emit({
                    count: this.count,
                    pageSize: this.pageSize,
                    limit: this.limit,
                    offset: 0
                });
            }
        });
    }
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     */
    ngAfterContentInit() {
        this.columnTemplates.changes.subscribe(v => this.translateColumns(v));
        this.listenForColumnInputChanges();
    }
    /**
     * Translates the templates to the column objects
     */
    translateColumns(val) {
        if (val) {
            const arr = val.toArray();
            if (arr.length) {
                this._internalColumns = translateTemplates(arr);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
            }
        }
    }
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param originalArray the original array passed via parameter
     * @param groupByIndex  the index of the column to group the data by
     */
    groupArrayBy(originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        const map = new Map();
        let i = 0;
        originalArray.forEach((item) => {
            const key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        });
        const addGroup = (key, value) => {
            return { key, value };
        };
        // convert map back to a simple array of objects
        return Array.from(map, x => addGroup(x[0], x[1]));
    }
    /*
     * Lifecycle hook that is called when Angular dirty checks a directive.
     */
    ngDoCheck() {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            else {
                this._internalRows = [...this.rows];
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            this.recalculatePages();
            this.cd.markForCheck();
        }
    }
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     */
    recalculate() {
        this.recalculateDims();
        this.recalculateColumns();
        this.cd.markForCheck();
    }
    /**
     * Window resize handler to update sizes.
     */
    onWindowResize() {
        this.recalculate();
    }
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     */
    recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
        if (!columns)
            return undefined;
        let width = this._innerWidth;
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
        }
        return columns;
    }
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     */
    recalculateDims() {
        const dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);
        if (this.scrollbarV) {
            let height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    }
    /**
     * Recalculates the pages after a update.
     */
    recalculatePages() {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    }
    /**
     * Body triggered a page event.
     */
    onBodyPage({ offset }) {
        // Avoid pagination caming from body events like scroll when the table
        // has no virtualization and the external paging is enable.
        // This means, let's the developer handle pagination by my him(her) self
        if (this.externalPaging && !this.virtualization) {
            return;
        }
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    }
    /**
     * The body triggered a scroll event.
     */
    onBodyScroll(event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    }
    /**
     * The footer triggered a page event.
     */
    onFooterPage(event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    }
    /**
     * Recalculates the sizes of the page
     */
    calcPageSize(val = this.rows) {
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV && this.virtualization) {
            const size = Math.ceil(this.bodyHeight / this.rowHeight);
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined) {
            return this.limit;
        }
        // otherwise use row length
        if (val) {
            return val.length;
        }
        // other empty :(
        return 0;
    }
    /**
     * Calculates the row count.
     */
    calcRowCount(val = this.rows) {
        if (!this.externalPaging) {
            if (!val)
                return 0;
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
            }
            else {
                return val.length;
            }
        }
        return this.count;
    }
    /**
     * The header triggered a contextmenu event.
     */
    onColumnContextmenu({ event, column }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.header, content: column });
    }
    /**
     * The body triggered a contextmenu event.
     */
    onRowContextmenu({ event, row }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.body, content: row });
    }
    /**
     * The header triggered a column resize event.
     */
    onColumnResize({ column, newValue }) {
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        let idx;
        const cols = this._internalColumns.map((c, i) => {
            c = Object.assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        });
        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
            column,
            newValue
        });
    }
    /**
     * The header triggered a column re-order event.
     */
    onColumnReorder({ column, newValue, prevValue }) {
        const cols = this._internalColumns.map(c => {
            return Object.assign({}, c);
        });
        if (this.swapColumns) {
            const prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
        }
        else {
            if (newValue > prevValue) {
                const movedCol = cols[prevValue];
                for (let i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                }
                cols[newValue] = movedCol;
            }
            else {
                const movedCol = cols[prevValue];
                for (let i = prevValue; i > newValue; i--) {
                    cols[i] = cols[i - 1];
                }
                cols[newValue] = movedCol;
            }
        }
        this._internalColumns = cols;
        this.reorder.emit({
            column,
            newValue,
            prevValue
        });
    }
    /**
     * The header triggered a column sort event.
     */
    onColumnSort(event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
        this.sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    }
    /**
     * Toggle all row selection
     */
    onHeaderSelect(event) {
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            const first = this.bodyComponent.indexes.first;
            const last = this.bodyComponent.indexes.last;
            const allSelected = this.selected.length === last - first;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this._internalRows.slice(first, last));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            const allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this.rows);
            }
        }
        this.select.emit({
            selected: this.selected
        });
    }
    /**
     * A row was selected from body
     */
    onBodySelect(event) {
        this.select.emit(event);
    }
    /**
     * A row was expanded or collapsed for tree
     */
    onTreeAction(event) {
        const row = event.row;
        // TODO: For duplicated items this will not work
        const rowIndex = this._rows.findIndex(r => r[this.treeToRelation] === event.row[this.treeToRelation]);
        this.treeAction.emit({ row, rowIndex });
    }
    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     */
    listenForColumnInputChanges() {
        this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(() => {
            if (this.columnTemplates) {
                this.columnTemplates.notifyOnChanges();
            }
        }));
    }
    sortInternalRows() {
        this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
    }
}
DatatableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-datatable',
                template: "<div role=\"table\" visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    role=\"rowgroup\"\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [sortUnsetIcon]=\"cssClasses.sortUnset\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    role=\"rowgroup\"\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ngx-datatable'
                },
                styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
            },] }
];
DatatableComponent.ctorParameters = () => [
    { type: ScrollbarHelper, decorators: [{ type: SkipSelf }] },
    { type: DimensionsHelper, decorators: [{ type: SkipSelf }] },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: KeyValueDiffers },
    { type: ColumnChangesService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['configuration',] }] }
];
DatatableComponent.propDecorators = {
    targetMarkerTemplate: [{ type: Input }],
    rows: [{ type: Input }],
    groupRowsBy: [{ type: Input }],
    groupedRows: [{ type: Input }],
    columns: [{ type: Input }],
    selected: [{ type: Input }],
    scrollbarV: [{ type: Input }],
    scrollbarH: [{ type: Input }],
    rowHeight: [{ type: Input }],
    columnMode: [{ type: Input }],
    headerHeight: [{ type: Input }],
    footerHeight: [{ type: Input }],
    externalPaging: [{ type: Input }],
    externalSorting: [{ type: Input }],
    limit: [{ type: Input }],
    count: [{ type: Input }],
    offset: [{ type: Input }],
    loadingIndicator: [{ type: Input }],
    selectionType: [{ type: Input }],
    reorderable: [{ type: Input }],
    swapColumns: [{ type: Input }],
    sortType: [{ type: Input }],
    sorts: [{ type: Input }],
    cssClasses: [{ type: Input }],
    messages: [{ type: Input }],
    rowClass: [{ type: Input }],
    selectCheck: [{ type: Input }],
    displayCheck: [{ type: Input }],
    groupExpansionDefault: [{ type: Input }],
    trackByProp: [{ type: Input }],
    selectAllRowsOnPage: [{ type: Input }],
    virtualization: [{ type: Input }],
    treeFromRelation: [{ type: Input }],
    treeToRelation: [{ type: Input }],
    summaryRow: [{ type: Input }],
    summaryHeight: [{ type: Input }],
    summaryPosition: [{ type: Input }],
    scroll: [{ type: Output }],
    activate: [{ type: Output }],
    select: [{ type: Output }],
    sort: [{ type: Output }],
    page: [{ type: Output }],
    reorder: [{ type: Output }],
    resize: [{ type: Output }],
    tableContextmenu: [{ type: Output }],
    treeAction: [{ type: Output }],
    isFixedHeader: [{ type: HostBinding, args: ['class.fixed-header',] }],
    isFixedRow: [{ type: HostBinding, args: ['class.fixed-row',] }],
    isVertScroll: [{ type: HostBinding, args: ['class.scroll-vertical',] }],
    isVirtualized: [{ type: HostBinding, args: ['class.virtualized',] }],
    isHorScroll: [{ type: HostBinding, args: ['class.scroll-horz',] }],
    isSelectable: [{ type: HostBinding, args: ['class.selectable',] }],
    isCheckboxSelection: [{ type: HostBinding, args: ['class.checkbox-selection',] }],
    isCellSelection: [{ type: HostBinding, args: ['class.cell-selection',] }],
    isSingleSelection: [{ type: HostBinding, args: ['class.single-selection',] }],
    isMultiSelection: [{ type: HostBinding, args: ['class.multi-selection',] }],
    isMultiClickSelection: [{ type: HostBinding, args: ['class.multi-click-selection',] }],
    columnTemplates: [{ type: ContentChildren, args: [DataTableColumnDirective,] }],
    rowDetail: [{ type: ContentChild, args: [DatatableRowDetailDirective,] }],
    groupHeader: [{ type: ContentChild, args: [DatatableGroupHeaderDirective,] }],
    footer: [{ type: ContentChild, args: [DatatableFooterDirective,] }],
    bodyComponent: [{ type: ViewChild, args: [DataTableBodyComponent,] }],
    headerComponent: [{ type: ViewChild, args: [DataTableHeaderComponent,] }],
    rowIdentity: [{ type: Input }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
__decorate([
    throttleable(5)
], DatatableComponent.prototype, "onWindowResize", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1kYXRhdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2RhdGF0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUlmLFdBQVcsRUFDWCxZQUFZLEVBRVosZUFBZSxFQUVmLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixRQUFRLEVBQ1IsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJC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Y0wsS0FBSzswQkFNTCxLQUFLOzBCQU1MLEtBQUs7dUJBS0wsS0FBSztvQkFNTCxLQUFLO3lCQUtMLEtBQUs7dUJBaUJMLEtBQUs7dUJBbUJMLEtBQUs7MEJBVUwsS0FBSzsyQkFVTCxLQUFLO29DQU9MLEtBQUs7MEJBTUwsS0FBSztrQ0FRTCxLQUFLOzZCQUtMLEtBQUs7K0JBS0wsS0FBSzs2QkFLTCxLQUFLO3lCQUtMLEtBQUs7NEJBS0wsS0FBSzs4QkFLTCxLQUFLO3FCQUtMLE1BQU07dUJBS04sTUFBTTtxQkFLTixNQUFNO21CQUtOLE1BQU07bUJBS04sTUFBTTtzQkFLTixNQUFNO3FCQUtOLE1BQU07K0JBT04sTUFBTTt5QkFLTixNQUFNOzRCQUtOLFdBQVcsU0FBQyxvQkFBb0I7eUJBVWhDLFdBQVcsU0FBQyxpQkFBaUI7MkJBUzdCLFdBQVcsU0FBQyx1QkFBdUI7NEJBU25DLFdBQVcsU0FBQyxtQkFBbUI7MEJBUy9CLFdBQVcsU0FBQyxtQkFBbUI7MkJBUS9CLFdBQVcsU0FBQyxrQkFBa0I7a0NBUTlCLFdBQVcsU0FBQywwQkFBMEI7OEJBUXRDLFdBQVcsU0FBQyxzQkFBc0I7Z0NBUWxDLFdBQVcsU0FBQyx3QkFBd0I7K0JBUXBDLFdBQVcsU0FBQyx1QkFBdUI7b0NBUW5DLFdBQVcsU0FBQyw2QkFBNkI7OEJBU3pDLGVBQWUsU0FBQyx3QkFBd0I7d0JBZ0J4QyxZQUFZLFNBQUMsMkJBQTJCOzBCQU14QyxZQUFZLFNBQUMsNkJBQTZCO3FCQU0xQyxZQUFZLFNBQUMsd0JBQXdCOzRCQU9yQyxTQUFTLFNBQUMsc0JBQXNCOzhCQVNoQyxTQUFTLFNBQUMsd0JBQXdCOzBCQWdIbEMsS0FBSzs2QkFrR0wsWUFBWSxTQUFDLGVBQWU7O0FBRTdCO0lBREMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3REFHZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ29udGVudENoaWxkcmVuLFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSG9zdEJpbmRpbmcsXG4gIENvbnRlbnRDaGlsZCxcbiAgRG9DaGVjayxcbiAgS2V5VmFsdWVEaWZmZXJzLFxuICBLZXlWYWx1ZURpZmZlcixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2tpcFNlbGYsXG4gIE9wdGlvbmFsLFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGF0YWJsZUdyb3VwSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9ib2R5L2JvZHktZ3JvdXAtaGVhZGVyLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJTmd4RGF0YXRhYmxlQ29uZmlnIH0gZnJvbSAnLi4vbmd4LWRhdGF0YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgZ3JvdXBSb3dzQnlQYXJlbnRzLCBvcHRpb25hbEdldHRlckZvclByb3AgfSBmcm9tICcuLi91dGlscy90cmVlJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uIH0gZnJvbSAnLi4vdHlwZXMvdGFibGUtY29sdW1uLnR5cGUnO1xuaW1wb3J0IHsgc2V0Q29sdW1uRGVmYXVsdHMsIHRyYW5zbGF0ZVRlbXBsYXRlcyB9IGZyb20gJy4uL3V0aWxzL2NvbHVtbi1oZWxwZXInO1xuaW1wb3J0IHsgQ29sdW1uTW9kZSB9IGZyb20gJy4uL3R5cGVzL2NvbHVtbi1tb2RlLnR5cGUnO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uL3R5cGVzL3NlbGVjdGlvbi50eXBlJztcbmltcG9ydCB7IFNvcnRUeXBlIH0gZnJvbSAnLi4vdHlwZXMvc29ydC50eXBlJztcbmltcG9ydCB7IENvbnRleHRtZW51VHlwZSB9IGZyb20gJy4uL3R5cGVzL2NvbnRleHRtZW51LnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2x1bW5zL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlIH0gZnJvbSAnLi9yb3ctZGV0YWlsL3Jvdy1kZXRhaWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQm9keUNvbXBvbmVudCB9IGZyb20gJy4vYm9keS9ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNjcm9sbGJhckhlbHBlciB9IGZyb20gJy4uL3NlcnZpY2VzL3Njcm9sbGJhci1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb2x1bW5DaGFuZ2VzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbHVtbi1jaGFuZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGltZW5zaW9uc0hlbHBlciB9IGZyb20gJy4uL3NlcnZpY2VzL2RpbWVuc2lvbnMtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGhyb3R0bGVhYmxlIH0gZnJvbSAnLi4vdXRpbHMvdGhyb3R0bGUnO1xuaW1wb3J0IHsgZm9yY2VGaWxsQ29sdW1uV2lkdGhzLCBhZGp1c3RDb2x1bW5XaWR0aHMgfSBmcm9tICcuLi91dGlscy9tYXRoJztcbmltcG9ydCB7IHNvcnRSb3dzIH0gZnJvbSAnLi4vdXRpbHMvc29ydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kYXRhdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlVXJsczogWycuL2RhdGF0YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtZGF0YXRhYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIERhdGF0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBUZW1wbGF0ZSBmb3IgdGhlIHRhcmdldCBtYXJrZXIgb2YgZHJhZyB0YXJnZXQgY29sdW1ucy5cbiAgICovXG4gIEBJbnB1dCgpIHRhcmdldE1hcmtlclRlbXBsYXRlOiBhbnk7XG5cbiAgLyoqXG4gICAqIFJvd3MgdGhhdCBhcmUgZGlzcGxheWVkIGluIHRoZSB0YWJsZS5cbiAgICovXG4gIEBJbnB1dCgpIHNldCByb3dzKHZhbDogYW55KSB7XG4gICAgdGhpcy5fcm93cyA9IHZhbDtcblxuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuX2ludGVybmFsUm93cyA9IFsuLi52YWxdO1xuICAgIH1cblxuICAgIC8vIGF1dG8gc29ydCBvbiBuZXcgdXBkYXRlc1xuICAgIGlmICghdGhpcy5leHRlcm5hbFNvcnRpbmcpIHtcbiAgICAgIHRoaXMuc29ydEludGVybmFsUm93cygpO1xuICAgIH1cblxuICAgIC8vIGF1dG8gZ3JvdXAgYnkgcGFyZW50IG9uIG5ldyB1cGRhdGVcbiAgICB0aGlzLl9pbnRlcm5hbFJvd3MgPSBncm91cFJvd3NCeVBhcmVudHMoXG4gICAgICB0aGlzLl9pbnRlcm5hbFJvd3MsXG4gICAgICBvcHRpb25hbEdldHRlckZvclByb3AodGhpcy50cmVlRnJvbVJlbGF0aW9uKSxcbiAgICAgIG9wdGlvbmFsR2V0dGVyRm9yUHJvcCh0aGlzLnRyZWVUb1JlbGF0aW9uKVxuICAgICk7XG5cbiAgICAvLyByZWNhbGN1bGF0ZSBzaXplcy9ldGNcbiAgICB0aGlzLnJlY2FsY3VsYXRlKCk7XG5cbiAgICBpZiAodGhpcy5fcm93cyAmJiB0aGlzLl9ncm91cFJvd3NCeSkge1xuICAgICAgLy8gSWYgYSBjb2x1bW4gaGFzIGJlZW4gc3BlY2lmaWVkIGluIF9ncm91cFJvd3NCeSBjcmVhdGVkIGEgbmV3IGFycmF5IHdpdGggdGhlIGRhdGEgZ3JvdXBlZCBieSB0aGF0IHJvd1xuICAgICAgdGhpcy5ncm91cGVkUm93cyA9IHRoaXMuZ3JvdXBBcnJheUJ5KHRoaXMuX3Jvd3MsIHRoaXMuX2dyb3VwUm93c0J5KTtcbiAgICB9XG5cbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHJvd3MuXG4gICAqL1xuICBnZXQgcm93cygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9yb3dzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgYXR0cmlidXRlIGFsbG93cyB0aGUgdXNlciB0byBzZXQgdGhlIG5hbWUgb2YgdGhlIGNvbHVtbiB0byBncm91cCB0aGUgZGF0YSB3aXRoXG4gICAqL1xuICBASW5wdXQoKSBzZXQgZ3JvdXBSb3dzQnkodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLl9ncm91cFJvd3NCeSA9IHZhbDtcbiAgICAgIGlmICh0aGlzLl9yb3dzICYmIHRoaXMuX2dyb3VwUm93c0J5KSB7XG4gICAgICAgIC8vIGNyZXRlcyBhIG5ldyBhcnJheSB3aXRoIHRoZSBkYXRhIGdyb3VwZWRcbiAgICAgICAgdGhpcy5ncm91cGVkUm93cyA9IHRoaXMuZ3JvdXBBcnJheUJ5KHRoaXMuX3Jvd3MsIHRoaXMuX2dyb3VwUm93c0J5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgZ3JvdXBSb3dzQnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyb3VwUm93c0J5O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgYXR0cmlidXRlIGFsbG93cyB0aGUgdXNlciB0byBzZXQgYSBncm91cGVkIGFycmF5IGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICAgKiAgW1xuICAgKiAgICB7Z3JvdXBpZD0xfSBbXG4gICAqICAgICAge2lkPTEgbmFtZT1cInRlc3QxXCJ9LFxuICAgKiAgICAgIHtpZD0yIG5hbWU9XCJ0ZXN0MlwifSxcbiAgICogICAgICB7aWQ9MyBuYW1lPVwidGVzdDNcIn1cbiAgICogICAgXX0sXG4gICAqICAgIHtncm91cGlkPTI+W1xuICAgKiAgICAgIHtpZD00IG5hbWU9XCJ0ZXN0NFwifSxcbiAgICogICAgICB7aWQ9NSBuYW1lPVwidGVzdDVcIn0sXG4gICAqICAgICAge2lkPTYgbmFtZT1cInRlc3Q2XCJ9XG4gICAqICAgIF19XG4gICAqICBdXG4gICAqL1xuICBASW5wdXQoKSBncm91cGVkUm93czogYW55W107XG5cbiAgLyoqXG4gICAqIENvbHVtbnMgdG8gYmUgZGlzcGxheWVkLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IGNvbHVtbnModmFsOiBUYWJsZUNvbHVtbltdKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5faW50ZXJuYWxDb2x1bW5zID0gWy4uLnZhbF07XG4gICAgICBzZXRDb2x1bW5EZWZhdWx0cyh0aGlzLl9pbnRlcm5hbENvbHVtbnMpO1xuICAgICAgdGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb2x1bW5zID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY29sdW1ucy5cbiAgICovXG4gIGdldCBjb2x1bW5zKCk6IFRhYmxlQ29sdW1uW10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3Qgb2Ygcm93IG9iamVjdHMgdGhhdCBzaG91bGQgYmVcbiAgICogcmVwcmVzZW50ZWQgYXMgc2VsZWN0ZWQgaW4gdGhlIGdyaWQuXG4gICAqIERlZmF1bHQgdmFsdWU6IGBbXWBcbiAgICovXG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgdmVydGljYWwgc2Nyb2xsYmFyc1xuICAgKi9cbiAgQElucHV0KCkgc2Nyb2xsYmFyVjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgaG9yeiBzY3JvbGxiYXJzXG4gICAqL1xuICBASW5wdXQoKSBzY3JvbGxiYXJIOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSByb3cgaGVpZ2h0OyB3aGljaCBpcyBuZWNlc3NhcnlcbiAgICogdG8gY2FsY3VsYXRlIHRoZSBoZWlnaHQgZm9yIHRoZSBsYXp5IHJlbmRlcmluZy5cbiAgICovXG4gIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyIHwgJ2F1dG8nIHwgKChyb3c/OiBhbnkpID0+IG51bWJlcikgPSAzMDtcblxuICAvKipcbiAgICogVHlwZSBvZiBjb2x1bW4gd2lkdGggZGlzdHJpYnV0aW9uIGZvcm11bGEuXG4gICAqIEV4YW1wbGU6IGZsZXgsIGZvcmNlLCBzdGFuZGFyZFxuICAgKi9cbiAgQElucHV0KCkgY29sdW1uTW9kZTogQ29sdW1uTW9kZSB8IGtleW9mIHR5cGVvZiBDb2x1bW5Nb2RlID0gQ29sdW1uTW9kZS5zdGFuZGFyZDtcblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gaGVhZGVyIGhlaWdodCBpbiBwaXhlbHMuXG4gICAqIFBhc3MgYSBmYWxzZXkgZm9yIG5vIGhlYWRlclxuICAgKi9cbiAgQElucHV0KCkgaGVhZGVySGVpZ2h0OiBudW1iZXIgPSAzMDtcblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gZm9vdGVyIGhlaWdodCBpbiBwaXhlbHMuXG4gICAqIFBhc3MgZmFsc2V5IGZvciBubyBmb290ZXJcbiAgICovXG4gIEBJbnB1dCgpIGZvb3RlckhlaWdodDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogSWYgdGhlIHRhYmxlIHNob3VsZCB1c2UgZXh0ZXJuYWwgcGFnaW5nXG4gICAqIG90aGVyd2lzZSBpdHMgYXNzdW1lZCB0aGF0IGFsbCBkYXRhIGlzIHByZWxvYWRlZC5cbiAgICovXG4gIEBJbnB1dCgpIGV4dGVybmFsUGFnaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElmIHRoZSB0YWJsZSBzaG91bGQgdXNlIGV4dGVybmFsIHNvcnRpbmcgb3JcbiAgICogdGhlIGJ1aWx0LWluIGJhc2ljIHNvcnRpbmcuXG4gICAqL1xuICBASW5wdXQoKSBleHRlcm5hbFNvcnRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIHBhZ2Ugc2l6ZSB0byBiZSBzaG93bi5cbiAgICogRGVmYXVsdCB2YWx1ZTogYHVuZGVmaW5lZGBcbiAgICovXG4gIEBJbnB1dCgpIHNldCBsaW1pdCh2YWw6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xpbWl0ID0gdmFsO1xuXG4gICAgLy8gcmVjYWxjdWxhdGUgc2l6ZXMvZXRjXG4gICAgdGhpcy5yZWNhbGN1bGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGxpbWl0LlxuICAgKi9cbiAgZ2V0IGxpbWl0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0b3RhbCBjb3VudCBvZiBhbGwgcm93cy5cbiAgICogRGVmYXVsdCB2YWx1ZTogYDBgXG4gICAqL1xuICBASW5wdXQoKSBzZXQgY291bnQodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb3VudCA9IHZhbDtcblxuICAgIC8vIHJlY2FsY3VsYXRlIHNpemVzL2V0Y1xuICAgIHRoaXMucmVjYWxjdWxhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjb3VudC5cbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBvZmZzZXQgKCBwYWdlIC0gMSApIHNob3duLlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgMGBcbiAgICovXG4gIEBJbnB1dCgpIHNldCBvZmZzZXQodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXQgPSB2YWw7XG4gIH1cbiAgZ2V0IG9mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih0aGlzLl9vZmZzZXQsIE1hdGguY2VpbCh0aGlzLnJvd0NvdW50IC8gdGhpcy5wYWdlU2l6ZSkgLSAxKSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgbGluZWFyIGxvYWRpbmcgYmFyLlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgZmFsc2VgXG4gICAqL1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFR5cGUgb2Ygcm93IHNlbGVjdGlvbi4gT3B0aW9ucyBhcmU6XG4gICAqXG4gICAqICAtIGBzaW5nbGVgXG4gICAqICAtIGBtdWx0aWBcbiAgICogIC0gYGNoZWNrYm94YFxuICAgKiAgLSBgbXVsdGlDbGlja2BcbiAgICogIC0gYGNlbGxgXG4gICAqXG4gICAqIEZvciBubyBzZWxlY3Rpb24gcGFzcyBhIGBmYWxzZXlgLlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgdW5kZWZpbmVkYFxuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZTtcblxuICAvKipcbiAgICogRW5hYmxlL0Rpc2FibGUgYWJpbGl0eSB0byByZS1vcmRlciBjb2x1bW5zXG4gICAqIGJ5IGRyYWdnaW5nIHRoZW0uXG4gICAqL1xuICBASW5wdXQoKSByZW9yZGVyYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFN3YXAgY29sdW1ucyBvbiByZS1vcmRlciBjb2x1bW5zIG9yXG4gICAqIG1vdmUgdGhlbS5cbiAgICovXG4gIEBJbnB1dCgpIHN3YXBDb2x1bW5zOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2Ygc29ydGluZ1xuICAgKi9cbiAgQElucHV0KCkgc29ydFR5cGU6IFNvcnRUeXBlID0gU29ydFR5cGUuc2luZ2xlO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBzb3J0ZWQgY29sdW1ucyBieSBwcm9wZXJ0eSBhbmQgdHlwZS5cbiAgICogRGVmYXVsdCB2YWx1ZTogYFtdYFxuICAgKi9cbiAgQElucHV0KCkgc29ydHM6IGFueVtdID0gW107XG5cbiAgLyoqXG4gICAqIENzcyBjbGFzcyBvdmVycmlkZXNcbiAgICovXG4gIEBJbnB1dCgpIGNzc0NsYXNzZXM6IGFueSA9IHtcbiAgICBzb3J0QXNjZW5kaW5nOiAnZGF0YXRhYmxlLWljb24tdXAnLFxuICAgIHNvcnREZXNjZW5kaW5nOiAnZGF0YXRhYmxlLWljb24tZG93bicsXG4gICAgc29ydFVuc2V0OiAnZGF0YXRhYmxlLWljb24tc29ydC11bnNldCcsXG4gICAgcGFnZXJMZWZ0QXJyb3c6ICdkYXRhdGFibGUtaWNvbi1sZWZ0JyxcbiAgICBwYWdlclJpZ2h0QXJyb3c6ICdkYXRhdGFibGUtaWNvbi1yaWdodCcsXG4gICAgcGFnZXJQcmV2aW91czogJ2RhdGF0YWJsZS1pY29uLXByZXYnLFxuICAgIHBhZ2VyTmV4dDogJ2RhdGF0YWJsZS1pY29uLXNraXAnXG4gIH07XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2Ugb3ZlcnJpZGVzIGZvciBsb2NhbGl6YXRpb25cbiAgICpcbiAgICogZW1wdHlNZXNzYWdlICAgICBbZGVmYXVsdF0gPSAnTm8gZGF0YSB0byBkaXNwbGF5J1xuICAgKiB0b3RhbE1lc3NhZ2UgICAgIFtkZWZhdWx0XSA9ICd0b3RhbCdcbiAgICogc2VsZWN0ZWRNZXNzYWdlICBbZGVmYXVsdF0gPSAnc2VsZWN0ZWQnXG4gICAqL1xuICBASW5wdXQoKSBtZXNzYWdlczogYW55ID0ge1xuICAgIC8vIE1lc3NhZ2UgdG8gc2hvdyB3aGVuIGFycmF5IGlzIHByZXNlbnRlZFxuICAgIC8vIGJ1dCBjb250YWlucyBubyB2YWx1ZXNcbiAgICBlbXB0eU1lc3NhZ2U6ICdObyBkYXRhIHRvIGRpc3BsYXknLFxuXG4gICAgLy8gRm9vdGVyIHRvdGFsIG1lc3NhZ2VcbiAgICB0b3RhbE1lc3NhZ2U6ICd0b3RhbCcsXG5cbiAgICAvLyBGb290ZXIgc2VsZWN0ZWQgbWVzc2FnZVxuICAgIHNlbGVjdGVkTWVzc2FnZTogJ3NlbGVjdGVkJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBSb3cgc3BlY2lmaWMgY2xhc3Nlcy5cbiAgICogU2ltaWxhciBpbXBsZW1lbnRhdGlvbiB0byBuZ0NsYXNzLlxuICAgKlxuICAgKiAgW3Jvd0NsYXNzXT1cIidmaXJzdCBzZWNvbmQnXCJcbiAgICogIFtyb3dDbGFzc109XCJ7ICdmaXJzdCc6IHRydWUsICdzZWNvbmQnOiB0cnVlLCAndGhpcmQnOiBmYWxzZSB9XCJcbiAgICovXG4gIEBJbnB1dCgpIHJvd0NsYXNzOiBhbnk7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbi9mdW5jdGlvbiB5b3UgY2FuIHVzZSB0byBjaGVjayB3aGV0aGVyIHlvdSB3YW50XG4gICAqIHRvIHNlbGVjdCBhIHBhcnRpY3VsYXIgcm93IGJhc2VkIG9uIGEgY3JpdGVyaWEuIEV4YW1wbGU6XG4gICAqXG4gICAqICAgIChzZWxlY3Rpb24pID0+IHtcbiAgICogICAgICByZXR1cm4gc2VsZWN0aW9uICE9PSAnRXRoZWwgUHJpY2UnO1xuICAgKiAgICB9XG4gICAqL1xuICBASW5wdXQoKSBzZWxlY3RDaGVjazogYW55O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHlvdSBjYW4gdXNlIHRvIGNoZWNrIHdoZXRoZXIgeW91IHdhbnRcbiAgICogdG8gc2hvdyB0aGUgY2hlY2tib3ggZm9yIGEgcGFydGljdWxhciByb3cgYmFzZWQgb24gYSBjcml0ZXJpYS4gRXhhbXBsZTpcbiAgICpcbiAgICogICAgKHJvdywgY29sdW1uLCB2YWx1ZSkgPT4ge1xuICAgKiAgICAgIHJldHVybiByb3cubmFtZSAhPT0gJ0V0aGVsIFByaWNlJztcbiAgICogICAgfVxuICAgKi9cbiAgQElucHV0KCkgZGlzcGxheUNoZWNrOiAocm93OiBhbnksIGNvbHVtbj86IGFueSwgdmFsdWU/OiBhbnkpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB5b3UgY2FuIHVzZSB0byBzZXQgdGhlIGRldGF1bHQgYmVoYXZpb3VyIG9mIHJvd3MgYW5kIGdyb3Vwc1xuICAgKiB3aGV0aGVyIHRoZXkgd2lsbCBzdGFydCBleHBhbmRlZCBvciBub3QuIElmIG9tbWl0ZWQgdGhlIGRlZmF1bHQgaXMgTk9UIGV4cGFuZGVkLlxuICAgKlxuICAgKi9cbiAgQElucHV0KCkgZ3JvdXBFeHBhbnNpb25EZWZhdWx0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIHdoaWNoIHlvdSBjYW4gdXNlIGZvciBjdXN0b20gdHJhY2tpbmcgb2Ygcm93cy5cbiAgICogRXhhbXBsZTogJ25hbWUnXG4gICAqL1xuICBASW5wdXQoKSB0cmFja0J5UHJvcDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byB3aGljaCB5b3UgY2FuIHVzZSBmb3IgZGV0ZXJtaW5pbmcgc2VsZWN0IGFsbFxuICAgKiByb3dzIG9uIGN1cnJlbnQgcGFnZSBvciBub3QuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBEYXRhdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNlbGVjdEFsbFJvd3NPblBhZ2UgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBmbGFnIGZvciByb3cgdmlydHVhbGl6YXRpb24gb24gLyBvZmZcbiAgICovXG4gIEBJbnB1dCgpIHZpcnR1YWxpemF0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVHJlZSBmcm9tIHJlbGF0aW9uXG4gICAqL1xuICBASW5wdXQoKSB0cmVlRnJvbVJlbGF0aW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRyZWUgdG8gcmVsYXRpb25cbiAgICovXG4gIEBJbnB1dCgpIHRyZWVUb1JlbGF0aW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgZmxhZyBmb3Igc3dpdGNoaW5nIHN1bW1hcnkgcm93IG9uIC8gb2ZmXG4gICAqL1xuICBASW5wdXQoKSBzdW1tYXJ5Um93OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgaGVpZ2h0IG9mIHN1bW1hcnkgcm93XG4gICAqL1xuICBASW5wdXQoKSBzdW1tYXJ5SGVpZ2h0OiBudW1iZXIgPSAzMDtcblxuICAvKipcbiAgICogQSBwcm9wZXJ0eSBob2xkcyBhIHN1bW1hcnkgcm93IHBvc2l0aW9uOiB0b3AvYm90dG9tXG4gICAqL1xuICBASW5wdXQoKSBzdW1tYXJ5UG9zaXRpb246IHN0cmluZyA9ICd0b3AnO1xuXG4gIC8qKlxuICAgKiBCb2R5IHdhcyBzY3JvbGxlZCB0eXBpY2FsbHkgaW4gYSBgc2Nyb2xsYmFyVjp0cnVlYCBzY2VuYXJpby5cbiAgICovXG4gIEBPdXRwdXQoKSBzY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBIGNlbGwgb3Igcm93IHdhcyBmb2N1c2VkIHZpYSBrZXlib2FyZCBvciBtb3VzZSBjbGljay5cbiAgICovXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEEgY2VsbCBvciByb3cgd2FzIHNlbGVjdGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIENvbHVtbiBzb3J0IHdhcyBpbnZva2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUaGUgdGFibGUgd2FzIHBhZ2VkIGVpdGhlciB0cmlnZ2VyZWQgYnkgdGhlIHBhZ2VyIG9yIHRoZSBib2R5IHNjcm9sbC5cbiAgICovXG4gIEBPdXRwdXQoKSBwYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQ29sdW1ucyB3ZXJlIHJlLW9yZGVyZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVvcmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIENvbHVtbiB3YXMgcmVzaXplZC5cbiAgICovXG4gIEBPdXRwdXQoKSByZXNpemU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUaGUgY29udGV4dCBtZW51IHdhcyBpbnZva2VkIG9uIHRoZSB0YWJsZS5cbiAgICogdHlwZSBpbmRpY2F0ZXMgd2hldGhlciB0aGUgaGVhZGVyIG9yIHRoZSBib2R5IHdhcyBjbGlja2VkLlxuICAgKiBjb250ZW50IGNvbnRhaW5zIGVpdGhlciB0aGUgY29sdW1uIG9yIHRoZSByb3cgdGhhdCB3YXMgY2xpY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB0YWJsZUNvbnRleHRtZW51ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBNb3VzZUV2ZW50OyB0eXBlOiBDb250ZXh0bWVudVR5cGU7IGNvbnRlbnQ6IGFueSB9PihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIEEgcm93IHdhcyBleHBhbmRlZCBvdCBjb2xsYXBzZWQgZm9yIHRyZWVcbiAgICovXG4gIEBPdXRwdXQoKSB0cmVlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQ1NTIGNsYXNzIGFwcGxpZWQgaWYgdGhlIGhlYWRlciBoZWlnaHQgaWYgZml4ZWQgaGVpZ2h0LlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZC1oZWFkZXInKVxuICBnZXQgaXNGaXhlZEhlYWRlcigpOiBib29sZWFuIHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQ6IG51bWJlciB8IHN0cmluZyA9IHRoaXMuaGVhZGVySGVpZ2h0O1xuICAgIHJldHVybiB0eXBlb2YgaGVhZGVySGVpZ2h0ID09PSAnc3RyaW5nJyA/IDxzdHJpbmc+aGVhZGVySGVpZ2h0ICE9PSAnYXV0bycgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENTUyBjbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWZcbiAgICogdGhlIHJvdyBoZWlnaHRzIGFyZSBmaXhlZCBoZWlnaHRzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZC1yb3cnKVxuICBnZXQgaXNGaXhlZFJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3dIZWlnaHQgIT09ICdhdXRvJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgYXBwbGllZCB0byByb290IGVsZW1lbnQgaWZcbiAgICogdmVydGljYWwgc2Nyb2xsaW5nIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNjcm9sbC12ZXJ0aWNhbCcpXG4gIGdldCBpc1ZlcnRTY3JvbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsYmFyVjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgYXBwbGllZCB0byByb290IGVsZW1lbnQgaWZcbiAgICogdmlydHVhbGl6YXRpb24gaXMgZW5hYmxlZC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MudmlydHVhbGl6ZWQnKVxuICBnZXQgaXNWaXJ0dWFsaXplZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aXJ0dWFsaXphdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50XG4gICAqIGlmIHRoZSBob3J6aW9udGFsIHNjcm9sbGluZyBpcyBlbmFibGVkLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zY3JvbGwtaG9yeicpXG4gIGdldCBpc0hvclNjcm9sbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxiYXJIO1xuICB9XG5cbiAgLyoqXG4gICAqIENTUyBjbGFzcyBhcHBsaWVkIHRvIHJvb3QgZWxlbWVudCBpcyBzZWxlY3RhYmxlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZWxlY3RhYmxlJylcbiAgZ2V0IGlzU2VsZWN0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25UeXBlICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gcm9vdCBpcyBjaGVja2JveCBzZWxlY3Rpb24uXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNoZWNrYm94LXNlbGVjdGlvbicpXG4gIGdldCBpc0NoZWNrYm94U2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvblR5cGUuY2hlY2tib3g7XG4gIH1cblxuICAvKipcbiAgICogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gcm9vdCBpZiBjZWxsIHNlbGVjdGlvbi5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2VsbC1zZWxlY3Rpb24nKVxuICBnZXQgaXNDZWxsU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvblR5cGUuY2VsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgYXBwbGllZCB0byByb290IGlmIHNpbmdsZSBzZWxlY3QuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpbmdsZS1zZWxlY3Rpb24nKVxuICBnZXQgaXNTaW5nbGVTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5zaW5nbGU7XG4gIH1cblxuICAvKipcbiAgICogQ1NTIGNsYXNzIGFkZGVkIHRvIHJvb3QgZWxlbWVudCBpZiBtdWxpdCBzZWxlY3RcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubXVsdGktc2VsZWN0aW9uJylcbiAgZ2V0IGlzTXVsdGlTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5tdWx0aTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgYWRkZWQgdG8gcm9vdCBlbGVtZW50IGlmIG11bGl0IGNsaWNrIHNlbGVjdFxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tdWx0aS1jbGljay1zZWxlY3Rpb24nKVxuICBnZXQgaXNNdWx0aUNsaWNrU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvblR5cGUubXVsdGlDbGljaztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2x1bW4gdGVtcGxhdGVzIGdhdGhlcmVkIGZyb20gYENvbnRlbnRDaGlsZHJlbmBcbiAgICogaWYgZGVzY3JpYmVkIGluIHlvdXIgbWFya3VwLlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpXG4gIHNldCBjb2x1bW5UZW1wbGF0ZXModmFsOiBRdWVyeUxpc3Q8RGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlPikge1xuICAgIHRoaXMuX2NvbHVtblRlbXBsYXRlcyA9IHZhbDtcbiAgICB0aGlzLnRyYW5zbGF0ZUNvbHVtbnModmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb2x1bW4gdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0IGNvbHVtblRlbXBsYXRlcygpOiBRdWVyeUxpc3Q8RGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtblRlbXBsYXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSb3cgRGV0YWlsIHRlbXBsYXRlcyBnYXRoZXJlZCBmcm9tIHRoZSBDb250ZW50Q2hpbGRcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoRGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlKVxuICByb3dEZXRhaWw6IERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZTtcblxuICAvKipcbiAgICogR3JvdXAgSGVhZGVyIHRlbXBsYXRlcyBnYXRoZXJlZCBmcm9tIHRoZSBDb250ZW50Q2hpbGRcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoRGF0YXRhYmxlR3JvdXBIZWFkZXJEaXJlY3RpdmUpXG4gIGdyb3VwSGVhZGVyOiBEYXRhdGFibGVHcm91cEhlYWRlckRpcmVjdGl2ZTtcblxuICAvKipcbiAgICogRm9vdGVyIHRlbXBsYXRlIGdhdGhlcmVkIGZyb20gdGhlIENvbnRlbnRDaGlsZFxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChEYXRhdGFibGVGb290ZXJEaXJlY3RpdmUpXG4gIGZvb3RlcjogRGF0YXRhYmxlRm9vdGVyRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIGJvZHkgY29tcG9uZW50IGZvciBtYW51YWxseVxuICAgKiBpbnZva2luZyBmdW5jdGlvbnMgb24gdGhlIGJvZHkuXG4gICAqL1xuICBAVmlld0NoaWxkKERhdGFUYWJsZUJvZHlDb21wb25lbnQpXG4gIGJvZHlDb21wb25lbnQ6IERhdGFUYWJsZUJvZHlDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgaGVhZGVyIGNvbXBvbmVudCBmb3IgbWFudWFsbHlcbiAgICogaW52b2tpbmcgZnVuY3Rpb25zIG9uIHRoZSBoZWFkZXIuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBEYXRhdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50KVxuICBoZWFkZXJDb21wb25lbnQ6IERhdGFUYWJsZUhlYWRlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogUmV0dXJucyBpZiBhbGwgcm93cyBhcmUgc2VsZWN0ZWQuXG4gICAqL1xuICBnZXQgYWxsUm93c1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIGxldCBhbGxSb3dzU2VsZWN0ZWQgPSB0aGlzLnJvd3MgJiYgdGhpcy5zZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5yb3dzLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmJvZHlDb21wb25lbnQgJiYgdGhpcy5zZWxlY3RBbGxSb3dzT25QYWdlKSB7XG4gICAgICBjb25zdCBpbmRleGVzID0gdGhpcy5ib2R5Q29tcG9uZW50LmluZGV4ZXM7XG4gICAgICBjb25zdCByb3dzT25QYWdlID0gaW5kZXhlcy5sYXN0IC0gaW5kZXhlcy5maXJzdDtcbiAgICAgIGFsbFJvd3NTZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09PSByb3dzT25QYWdlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkICYmIHRoaXMucm93cyAmJiB0aGlzLnJvd3MubGVuZ3RoICE9PSAwICYmIGFsbFJvd3NTZWxlY3RlZDtcbiAgfVxuXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBfaW5uZXJXaWR0aDogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyO1xuICBib2R5SGVpZ2h0OiBudW1iZXI7XG4gIHJvd0NvdW50OiBudW1iZXIgPSAwO1xuICByb3dEaWZmZXI6IEtleVZhbHVlRGlmZmVyPHt9LCB7fT47XG5cbiAgX29mZnNldFggPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuICBfbGltaXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgX2NvdW50OiBudW1iZXIgPSAwO1xuICBfb2Zmc2V0OiBudW1iZXIgPSAwO1xuICBfcm93czogYW55W107XG4gIF9ncm91cFJvd3NCeTogc3RyaW5nO1xuICBfaW50ZXJuYWxSb3dzOiBhbnlbXTtcbiAgX2ludGVybmFsQ29sdW1uczogVGFibGVDb2x1bW5bXTtcbiAgX2NvbHVtbnM6IFRhYmxlQ29sdW1uW107XG4gIF9jb2x1bW5UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU+O1xuICBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2tpcFNlbGYoKSBwcml2YXRlIHNjcm9sbGJhckhlbHBlcjogU2Nyb2xsYmFySGVscGVyLFxuICAgIEBTa2lwU2VsZigpIHByaXZhdGUgZGltZW5zaW9uc0hlbHBlcjogRGltZW5zaW9uc0hlbHBlcixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcbiAgICBwcml2YXRlIGNvbHVtbkNoYW5nZXNTZXJ2aWNlOiBDb2x1bW5DaGFuZ2VzU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KCdjb25maWd1cmF0aW9uJykgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBJTmd4RGF0YXRhYmxlQ29uZmlnXG4gICkge1xuICAgIC8vIGdldCByZWYgdG8gZWxtIGZvciBtZWFzdXJpbmdcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yb3dEaWZmZXIgPSBkaWZmZXJzLmZpbmQoe30pLmNyZWF0ZSgpO1xuXG4gICAgLy8gYXBwbHkgZ2xvYmFsIHNldHRpbmdzIGZyb20gTW9kdWxlLmZvclJvb3RcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcykge1xuICAgICAgdGhpcy5tZXNzYWdlcyA9IHsgLi4udGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGRhdGEtYm91bmRcbiAgICogcHJvcGVydGllcyBvZiBhIGRpcmVjdGl2ZSBhcmUgaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBuZWVkIHRvIGNhbGwgdGhpcyBpbW1lZGlhdGx5IHRvIHNpemVcbiAgICAvLyBpZiB0aGUgdGFibGUgaXMgaGlkZGVuIHRoZSB2aXNpYmlsaXR5XG4gICAgLy8gbGlzdGVuZXIgd2lsbCBpbnZva2UgdGhpcyBpdHNlbGYgdXBvbiBzaG93XG4gICAgdGhpcy5yZWNhbGN1bGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50J3NcbiAgICogdmlldyBoYXMgYmVlbiBmdWxseSBpbml0aWFsaXplZC5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZXh0ZXJuYWxTb3J0aW5nKSB7XG4gICAgICB0aGlzLnNvcnRJbnRlcm5hbFJvd3MoKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGhhcyB0byBiZSBkb25lIHRvIHByZXZlbnQgdGhlIGNoYW5nZSBkZXRlY3Rpb25cbiAgICAvLyB0cmVlIGZyb20gZnJlYWtpbmcgb3V0IGJlY2F1c2Ugd2UgYXJlIHJlYWRqdXN0aW5nXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMucmVjYWxjdWxhdGUoKTtcblxuICAgICAgLy8gZW1pdCBwYWdlIGZvciB2aXJ0dWFsIHNlcnZlci1zaWRlIGtpY2tvZmZcbiAgICAgIGlmICh0aGlzLmV4dGVybmFsUGFnaW5nICYmIHRoaXMuc2Nyb2xsYmFyVikge1xuICAgICAgICB0aGlzLnBhZ2UuZW1pdCh7XG4gICAgICAgICAgY291bnQ6IHRoaXMuY291bnQsXG4gICAgICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICAgICAgb2Zmc2V0OiAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50J3NcbiAgICogY29udGVudCBoYXMgYmVlbiBmdWxseSBpbml0aWFsaXplZC5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmNvbHVtblRlbXBsYXRlcy5jaGFuZ2VzLnN1YnNjcmliZSh2ID0+IHRoaXMudHJhbnNsYXRlQ29sdW1ucyh2KSk7XG4gICAgdGhpcy5saXN0ZW5Gb3JDb2x1bW5JbnB1dENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgYmUgdXNlZCB3aGVuIGRpc3BsYXlpbmcgb3Igc2VsZWN0aW5nIHJvd3MuXG4gICAqIHdoZW4gdHJhY2tpbmcvY29tcGFyaW5nIHRoZW0sIHdlJ2xsIHVzZSB0aGUgdmFsdWUgb2YgdGhpcyBmbixcbiAgICpcbiAgICogKGBmbih4KSA9PT0gZm4oeSlgIGluc3RlYWQgb2YgYHggPT09IHlgKVxuICAgKi9cbiAgQElucHV0KCkgcm93SWRlbnRpdHk6ICh4OiBhbnkpID0+IGFueSA9ICh4OiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5fZ3JvdXBSb3dzQnkpIHtcbiAgICAgIC8vIGVhY2ggZ3JvdXAgaW4gZ3JvdXBlZFJvd3MgYXJlIHN0b3JlZCBhcyB7a2V5LCB2YWx1ZTogW3Jvd3NdfSxcbiAgICAgIC8vIHdoZXJlIGtleSBpcyB0aGUgZ3JvdXBSb3dzQnkgaW5kZXhcbiAgICAgIHJldHVybiB4LmtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIHRoZSB0ZW1wbGF0ZXMgdG8gdGhlIGNvbHVtbiBvYmplY3RzXG4gICAqL1xuICB0cmFuc2xhdGVDb2x1bW5zKHZhbDogYW55KSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgY29uc3QgYXJyID0gdmFsLnRvQXJyYXkoKTtcbiAgICAgIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2ludGVybmFsQ29sdW1ucyA9IHRyYW5zbGF0ZVRlbXBsYXRlcyhhcnIpO1xuICAgICAgICBzZXRDb2x1bW5EZWZhdWx0cyh0aGlzLl9pbnRlcm5hbENvbHVtbnMpO1xuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucygpO1xuICAgICAgICB0aGlzLnNvcnRJbnRlcm5hbFJvd3MoKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG1hcCB3aXRoIHRoZSBkYXRhIGdyb3VwZWQgYnkgdGhlIHVzZXIgY2hvaWNlIG9mIGdyb3VwaW5nIGluZGV4XG4gICAqXG4gICAqIEBwYXJhbSBvcmlnaW5hbEFycmF5IHRoZSBvcmlnaW5hbCBhcnJheSBwYXNzZWQgdmlhIHBhcmFtZXRlclxuICAgKiBAcGFyYW0gZ3JvdXBCeUluZGV4ICB0aGUgaW5kZXggb2YgdGhlIGNvbHVtbiB0byBncm91cCB0aGUgZGF0YSBieVxuICAgKi9cbiAgZ3JvdXBBcnJheUJ5KG9yaWdpbmFsQXJyYXk6IGFueSwgZ3JvdXBCeTogYW55KSB7XG4gICAgLy8gY3JlYXRlIGEgbWFwIHRvIGhvbGQgZ3JvdXBzIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyByZXN1bHRzXG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICAgIGxldCBpOiBudW1iZXIgPSAwO1xuXG4gICAgb3JpZ2luYWxBcnJheS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGl0ZW1bZ3JvdXBCeV07XG4gICAgICBpZiAoIW1hcC5oYXMoa2V5KSkge1xuICAgICAgICBtYXAuc2V0KGtleSwgW2l0ZW1dKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcC5nZXQoa2V5KS5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkR3JvdXAgPSAoa2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7IGtleSwgdmFsdWUgfTtcbiAgICB9O1xuXG4gICAgLy8gY29udmVydCBtYXAgYmFjayB0byBhIHNpbXBsZSBhcnJheSBvZiBvYmplY3RzXG4gICAgcmV0dXJuIEFycmF5LmZyb20obWFwLCB4ID0+IGFkZEdyb3VwKHhbMF0sIHhbMV0pKTtcbiAgfVxuXG4gIC8qXG4gICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIHdoZW4gQW5ndWxhciBkaXJ0eSBjaGVja3MgYSBkaXJlY3RpdmUuXG4gICAqL1xuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm93RGlmZmVyLmRpZmYodGhpcy5yb3dzKSkge1xuICAgICAgaWYgKCF0aGlzLmV4dGVybmFsU29ydGluZykge1xuICAgICAgICB0aGlzLnNvcnRJbnRlcm5hbFJvd3MoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ludGVybmFsUm93cyA9IFsuLi50aGlzLnJvd3NdO1xuICAgICAgfVxuXG4gICAgICAvLyBhdXRvIGdyb3VwIGJ5IHBhcmVudCBvbiBuZXcgdXBkYXRlXG4gICAgICB0aGlzLl9pbnRlcm5hbFJvd3MgPSBncm91cFJvd3NCeVBhcmVudHMoXG4gICAgICAgIHRoaXMuX2ludGVybmFsUm93cyxcbiAgICAgICAgb3B0aW9uYWxHZXR0ZXJGb3JQcm9wKHRoaXMudHJlZUZyb21SZWxhdGlvbiksXG4gICAgICAgIG9wdGlvbmFsR2V0dGVyRm9yUHJvcCh0aGlzLnRyZWVUb1JlbGF0aW9uKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5yZWNhbGN1bGF0ZVBhZ2VzKCk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNhbGMncyB0aGUgc2l6ZXMgb2YgdGhlIGdyaWQuXG4gICAqXG4gICAqIFVwZGF0ZWQgYXV0b21hdGljYWxseSBvbiBjaGFuZ2VzIHRvOlxuICAgKlxuICAgKiAgLSBDb2x1bW5zXG4gICAqICAtIFJvd3NcbiAgICogIC0gUGFnaW5nIHJlbGF0ZWRcbiAgICpcbiAgICogQWxzbyBjYW4gYmUgbWFudWFsbHkgaW52b2tlZCBvciB1cG9uIHdpbmRvdyByZXNpemUuXG4gICAqL1xuICByZWNhbGN1bGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlY2FsY3VsYXRlRGltcygpO1xuICAgIHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaW5kb3cgcmVzaXplIGhhbmRsZXIgdG8gdXBkYXRlIHNpemVzLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIEB0aHJvdHRsZWFibGUoNSlcbiAgb25XaW5kb3dSZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY2FsdWxjYXRlcyB0aGUgY29sdW1uIHdpZHRocyBiYXNlZCBvbiBjb2x1bW4gd2lkdGhcbiAgICogZGlzdHJpYnV0aW9uIG1vZGUgYW5kIHNjcm9sbGJhciBvZmZzZXRzLlxuICAgKi9cbiAgcmVjYWxjdWxhdGVDb2x1bW5zKFxuICAgIGNvbHVtbnM6IGFueVtdID0gdGhpcy5faW50ZXJuYWxDb2x1bW5zLFxuICAgIGZvcmNlSWR4OiBudW1iZXIgPSAtMSxcbiAgICBhbGxvd0JsZWVkOiBib29sZWFuID0gdGhpcy5zY3JvbGxiYXJIXG4gICk6IGFueVtdIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIWNvbHVtbnMpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBsZXQgd2lkdGggPSB0aGlzLl9pbm5lcldpZHRoO1xuICAgIGlmICh0aGlzLnNjcm9sbGJhclYpIHtcbiAgICAgIHdpZHRoID0gd2lkdGggLSB0aGlzLnNjcm9sbGJhckhlbHBlci53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2x1bW5Nb2RlID09PSBDb2x1bW5Nb2RlLmZvcmNlKSB7XG4gICAgICBmb3JjZUZpbGxDb2x1bW5XaWR0aHMoY29sdW1ucywgd2lkdGgsIGZvcmNlSWR4LCBhbGxvd0JsZWVkKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sdW1uTW9kZSA9PT0gQ29sdW1uTW9kZS5mbGV4KSB7XG4gICAgICBhZGp1c3RDb2x1bW5XaWR0aHMoY29sdW1ucywgd2lkdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlcyB0aGUgZGltZW5zaW9ucyBvZiB0aGUgdGFibGUgc2l6ZS5cbiAgICogSW50ZXJuYWxseSBjYWxscyB0aGUgcGFnZSBzaXplIGFuZCByb3cgY291bnQgY2FsY3MgdG9vLlxuICAgKlxuICAgKi9cbiAgcmVjYWxjdWxhdGVEaW1zKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpbXMgPSB0aGlzLmRpbWVuc2lvbnNIZWxwZXIuZ2V0RGltZW5zaW9ucyh0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuX2lubmVyV2lkdGggPSBNYXRoLmZsb29yKGRpbXMud2lkdGgpO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyVikge1xuICAgICAgbGV0IGhlaWdodCA9IGRpbXMuaGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuaGVhZGVySGVpZ2h0KSBoZWlnaHQgPSBoZWlnaHQgLSB0aGlzLmhlYWRlckhlaWdodDtcbiAgICAgIGlmICh0aGlzLmZvb3RlckhlaWdodCkgaGVpZ2h0ID0gaGVpZ2h0IC0gdGhpcy5mb290ZXJIZWlnaHQ7XG4gICAgICB0aGlzLmJvZHlIZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy5yZWNhbGN1bGF0ZVBhZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGVzIHRoZSBwYWdlcyBhZnRlciBhIHVwZGF0ZS5cbiAgICovXG4gIHJlY2FsY3VsYXRlUGFnZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMuY2FsY1BhZ2VTaXplKCk7XG4gICAgdGhpcy5yb3dDb3VudCA9IHRoaXMuY2FsY1Jvd0NvdW50KCk7XG4gIH1cblxuICAvKipcbiAgICogQm9keSB0cmlnZ2VyZWQgYSBwYWdlIGV2ZW50LlxuICAgKi9cbiAgb25Cb2R5UGFnZSh7IG9mZnNldCB9OiBhbnkpOiB2b2lkIHtcbiAgICAvLyBBdm9pZCBwYWdpbmF0aW9uIGNhbWluZyBmcm9tIGJvZHkgZXZlbnRzIGxpa2Ugc2Nyb2xsIHdoZW4gdGhlIHRhYmxlXG4gICAgLy8gaGFzIG5vIHZpcnR1YWxpemF0aW9uIGFuZCB0aGUgZXh0ZXJuYWwgcGFnaW5nIGlzIGVuYWJsZS5cbiAgICAvLyBUaGlzIG1lYW5zLCBsZXQncyB0aGUgZGV2ZWxvcGVyIGhhbmRsZSBwYWdpbmF0aW9uIGJ5IG15IGhpbShoZXIpIHNlbGZcbiAgICBpZiAodGhpcy5leHRlcm5hbFBhZ2luZyAmJiAhdGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuXG4gICAgdGhpcy5wYWdlLmVtaXQoe1xuICAgICAgY291bnQ6IHRoaXMuY291bnQsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0LFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBib2R5IHRyaWdnZXJlZCBhIHNjcm9sbCBldmVudC5cbiAgICovXG4gIG9uQm9keVNjcm9sbChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX29mZnNldFgubmV4dChldmVudC5vZmZzZXRYKTtcbiAgICB0aGlzLnNjcm9sbC5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZm9vdGVyIHRyaWdnZXJlZCBhIHBhZ2UgZXZlbnQuXG4gICAqL1xuICBvbkZvb3RlclBhZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMub2Zmc2V0ID0gZXZlbnQucGFnZSAtIDE7XG4gICAgdGhpcy5ib2R5Q29tcG9uZW50LnVwZGF0ZU9mZnNldFkodGhpcy5vZmZzZXQpO1xuXG4gICAgdGhpcy5wYWdlLmVtaXQoe1xuICAgICAgY291bnQ6IHRoaXMuY291bnQsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0LFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsUm93c09uUGFnZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCh7XG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGVzIHRoZSBzaXplcyBvZiB0aGUgcGFnZVxuICAgKi9cbiAgY2FsY1BhZ2VTaXplKHZhbDogYW55W10gPSB0aGlzLnJvd3MpOiBudW1iZXIge1xuICAgIC8vIEtlZXAgdGhlIHBhZ2Ugc2l6ZSBjb25zdGFudCBldmVuIGlmIHRoZSByb3cgaGFzIGJlZW4gZXhwYW5kZWQuXG4gICAgLy8gVGhpcyBpcyBiZWNhdXNlIGFuIGV4cGFuZGVkIHJvdyBpcyBzdGlsbCBjb25zaWRlcmVkIHRvIGJlIGEgY2hpbGQgb2ZcbiAgICAvLyB0aGUgb3JpZ2luYWwgcm93LiAgSGVuY2UgY2FsY3VsYXRpb24gd291bGQgdXNlIHJvd0hlaWdodCBvbmx5LlxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgY29uc3Qgc2l6ZSA9IE1hdGguY2VpbCh0aGlzLmJvZHlIZWlnaHQgLyAodGhpcy5yb3dIZWlnaHQgYXMgbnVtYmVyKSk7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoc2l6ZSwgMCk7XG4gICAgfVxuXG4gICAgLy8gaWYgbGltaXQgaXMgcGFzc2VkLCB3ZSBhcmUgcGFnaW5nXG4gICAgaWYgKHRoaXMubGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMubGltaXQ7XG4gICAgfVxuXG4gICAgLy8gb3RoZXJ3aXNlIHVzZSByb3cgbGVuZ3RoXG4gICAgaWYgKHZhbCkge1xuICAgICAgcmV0dXJuIHZhbC5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gb3RoZXIgZW1wdHkgOihcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSByb3cgY291bnQuXG4gICAqL1xuICBjYWxjUm93Q291bnQodmFsOiBhbnlbXSA9IHRoaXMucm93cyk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLmV4dGVybmFsUGFnaW5nKSB7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuIDA7XG5cbiAgICAgIGlmICh0aGlzLmdyb3VwZWRSb3dzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwZWRSb3dzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cmVlRnJvbVJlbGF0aW9uICE9IG51bGwgJiYgdGhpcy50cmVlVG9SZWxhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcm5hbFJvd3MubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbC5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGhlYWRlciB0cmlnZ2VyZWQgYSBjb250ZXh0bWVudSBldmVudC5cbiAgICovXG4gIG9uQ29sdW1uQ29udGV4dG1lbnUoeyBldmVudCwgY29sdW1uIH06IGFueSk6IHZvaWQge1xuICAgIHRoaXMudGFibGVDb250ZXh0bWVudS5lbWl0KHsgZXZlbnQsIHR5cGU6IENvbnRleHRtZW51VHlwZS5oZWFkZXIsIGNvbnRlbnQ6IGNvbHVtbiB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYm9keSB0cmlnZ2VyZWQgYSBjb250ZXh0bWVudSBldmVudC5cbiAgICovXG4gIG9uUm93Q29udGV4dG1lbnUoeyBldmVudCwgcm93IH06IGFueSk6IHZvaWQge1xuICAgIHRoaXMudGFibGVDb250ZXh0bWVudS5lbWl0KHsgZXZlbnQsIHR5cGU6IENvbnRleHRtZW51VHlwZS5ib2R5LCBjb250ZW50OiByb3cgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGhlYWRlciB0cmlnZ2VyZWQgYSBjb2x1bW4gcmVzaXplIGV2ZW50LlxuICAgKi9cbiAgb25Db2x1bW5SZXNpemUoeyBjb2x1bW4sIG5ld1ZhbHVlIH06IGFueSk6IHZvaWQge1xuICAgIC8qIFNhZmFyaS9pT1MgMTAuMiB3b3JrYXJvdW5kICovXG4gICAgaWYgKGNvbHVtbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGlkeDogbnVtYmVyO1xuICAgIGNvbnN0IGNvbHMgPSB0aGlzLl9pbnRlcm5hbENvbHVtbnMubWFwKChjLCBpKSA9PiB7XG4gICAgICBjID0geyAuLi5jIH07XG5cbiAgICAgIGlmIChjLiQkaWQgPT09IGNvbHVtbi4kJGlkKSB7XG4gICAgICAgIGlkeCA9IGk7XG4gICAgICAgIGMud2lkdGggPSBuZXdWYWx1ZTtcblxuICAgICAgICAvLyBzZXQgdGhpcyBzbyB3ZSBjYW4gZm9yY2UgdGhlIGNvbHVtblxuICAgICAgICAvLyB3aWR0aCBkaXN0cmlidXRpb24gdG8gYmUgdG8gdGhpcyB2YWx1ZVxuICAgICAgICBjLiQkb2xkV2lkdGggPSBuZXdWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucyhjb2xzLCBpZHgpO1xuICAgIHRoaXMuX2ludGVybmFsQ29sdW1ucyA9IGNvbHM7XG5cbiAgICB0aGlzLnJlc2l6ZS5lbWl0KHtcbiAgICAgIGNvbHVtbixcbiAgICAgIG5ld1ZhbHVlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGhlYWRlciB0cmlnZ2VyZWQgYSBjb2x1bW4gcmUtb3JkZXIgZXZlbnQuXG4gICAqL1xuICBvbkNvbHVtblJlb3JkZXIoeyBjb2x1bW4sIG5ld1ZhbHVlLCBwcmV2VmFsdWUgfTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgY29scyA9IHRoaXMuX2ludGVybmFsQ29sdW1ucy5tYXAoYyA9PiB7XG4gICAgICByZXR1cm4geyAuLi5jIH07XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zd2FwQ29sdW1ucykge1xuICAgICAgY29uc3QgcHJldkNvbCA9IGNvbHNbbmV3VmFsdWVdO1xuICAgICAgY29sc1tuZXdWYWx1ZV0gPSBjb2x1bW47XG4gICAgICBjb2xzW3ByZXZWYWx1ZV0gPSBwcmV2Q29sO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmV3VmFsdWUgPiBwcmV2VmFsdWUpIHtcbiAgICAgICAgY29uc3QgbW92ZWRDb2wgPSBjb2xzW3ByZXZWYWx1ZV07XG4gICAgICAgIGZvciAobGV0IGkgPSBwcmV2VmFsdWU7IGkgPCBuZXdWYWx1ZTsgaSsrKSB7XG4gICAgICAgICAgY29sc1tpXSA9IGNvbHNbaSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGNvbHNbbmV3VmFsdWVdID0gbW92ZWRDb2w7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtb3ZlZENvbCA9IGNvbHNbcHJldlZhbHVlXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHByZXZWYWx1ZTsgaSA+IG5ld1ZhbHVlOyBpLS0pIHtcbiAgICAgICAgICBjb2xzW2ldID0gY29sc1tpIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgY29sc1tuZXdWYWx1ZV0gPSBtb3ZlZENvbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbnRlcm5hbENvbHVtbnMgPSBjb2xzO1xuXG4gICAgdGhpcy5yZW9yZGVyLmVtaXQoe1xuICAgICAgY29sdW1uLFxuICAgICAgbmV3VmFsdWUsXG4gICAgICBwcmV2VmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaGVhZGVyIHRyaWdnZXJlZCBhIGNvbHVtbiBzb3J0IGV2ZW50LlxuICAgKi9cbiAgb25Db2x1bW5Tb3J0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAvLyBjbGVhbiBzZWxlY3RlZCByb3dzXG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsUm93c09uUGFnZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCh7XG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNvcnRzID0gZXZlbnQuc29ydHM7XG5cbiAgICAvLyB0aGlzIGNvdWxkIGJlIG9wdGltaXplZCBiZXR0ZXIgc2luY2UgaXQgd2lsbCByZXNvcnRcbiAgICAvLyB0aGUgcm93cyBhZ2FpbiBvbiB0aGUgJ3B1c2gnIGRldGVjdGlvbi4uLlxuICAgIGlmICh0aGlzLmV4dGVybmFsU29ydGluZyA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGRvbid0IHVzZSBub3JtYWwgc2V0dGVyIHNvIHdlIGRvbid0IHJlc29ydFxuICAgICAgdGhpcy5zb3J0SW50ZXJuYWxSb3dzKCk7XG4gICAgfVxuXG4gICAgLy8gYXV0byBncm91cCBieSBwYXJlbnQgb24gbmV3IHVwZGF0ZVxuICAgIHRoaXMuX2ludGVybmFsUm93cyA9IGdyb3VwUm93c0J5UGFyZW50cyhcbiAgICAgIHRoaXMuX2ludGVybmFsUm93cyxcbiAgICAgIG9wdGlvbmFsR2V0dGVyRm9yUHJvcCh0aGlzLnRyZWVGcm9tUmVsYXRpb24pLFxuICAgICAgb3B0aW9uYWxHZXR0ZXJGb3JQcm9wKHRoaXMudHJlZVRvUmVsYXRpb24pXG4gICAgKTtcblxuICAgIC8vIEFsd2F5cyBnbyB0byBmaXJzdCBwYWdlIHdoZW4gc29ydGluZyB0byBzZWUgdGhlIG5ld2x5IHNvcnRlZCBkYXRhXG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIHRoaXMuYm9keUNvbXBvbmVudC51cGRhdGVPZmZzZXRZKHRoaXMub2Zmc2V0KTtcbiAgICB0aGlzLnNvcnQuZW1pdChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGFsbCByb3cgc2VsZWN0aW9uXG4gICAqL1xuICBvbkhlYWRlclNlbGVjdChldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYm9keUNvbXBvbmVudCAmJiB0aGlzLnNlbGVjdEFsbFJvd3NPblBhZ2UpIHtcbiAgICAgIC8vIGJlZm9yZSB3ZSBzcGxpY2UsIGNoayBpZiB3ZSBjdXJyZW50bHkgaGF2ZSBhbGwgc2VsZWN0ZWRcbiAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5ib2R5Q29tcG9uZW50LmluZGV4ZXMuZmlyc3Q7XG4gICAgICBjb25zdCBsYXN0ID0gdGhpcy5ib2R5Q29tcG9uZW50LmluZGV4ZXMubGFzdDtcbiAgICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZC5sZW5ndGggPT09IGxhc3QgLSBmaXJzdDtcblxuICAgICAgLy8gcmVtb3ZlIGFsbCBleGlzdGluZyBlaXRoZXIgd2F5XG4gICAgICB0aGlzLnNlbGVjdGVkID0gW107XG5cbiAgICAgIC8vIGRvIHRoZSBvcHBvc2l0ZSBoZXJlXG4gICAgICBpZiAoIWFsbFNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaCguLi50aGlzLl9pbnRlcm5hbFJvd3Muc2xpY2UoZmlyc3QsIGxhc3QpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYmVmb3JlIHdlIHNwbGljZSwgY2hrIGlmIHdlIGN1cnJlbnRseSBoYXZlIGFsbCBzZWxlY3RlZFxuICAgICAgY29uc3QgYWxsU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5yb3dzLmxlbmd0aDtcbiAgICAgIC8vIHJlbW92ZSBhbGwgZXhpc3RpbmcgZWl0aGVyIHdheVxuICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xuICAgICAgLy8gZG8gdGhlIG9wcG9zaXRlIGhlcmVcbiAgICAgIGlmICghYWxsU2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKC4uLnRoaXMucm93cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3QuZW1pdCh7XG4gICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgcm93IHdhcyBzZWxlY3RlZCBmcm9tIGJvZHlcbiAgICovXG4gIG9uQm9keVNlbGVjdChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQSByb3cgd2FzIGV4cGFuZGVkIG9yIGNvbGxhcHNlZCBmb3IgdHJlZVxuICAgKi9cbiAgb25UcmVlQWN0aW9uKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCByb3cgPSBldmVudC5yb3c7XG4gICAgLy8gVE9ETzogRm9yIGR1cGxpY2F0ZWQgaXRlbXMgdGhpcyB3aWxsIG5vdCB3b3JrXG4gICAgY29uc3Qgcm93SW5kZXggPSB0aGlzLl9yb3dzLmZpbmRJbmRleChyID0+IHJbdGhpcy50cmVlVG9SZWxhdGlvbl0gPT09IGV2ZW50LnJvd1t0aGlzLnRyZWVUb1JlbGF0aW9uXSk7XG4gICAgdGhpcy50cmVlQWN0aW9uLmVtaXQoeyByb3csIHJvd0luZGV4IH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICAvKipcbiAgICogbGlzdGVuIGZvciBjaGFuZ2VzIHRvIGlucHV0IGJpbmRpbmdzIG9mIGFsbCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgYW5kXG4gICAqIHRyaWdnZXIgdGhlIGNvbHVtblRlbXBsYXRlcy5jaGFuZ2VzIG9ic2VydmFibGUgdG8gZW1pdFxuICAgKi9cbiAgcHJpdmF0ZSBsaXN0ZW5Gb3JDb2x1bW5JbnB1dENoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jb2x1bW5DaGFuZ2VzU2VydmljZS5jb2x1bW5JbnB1dENoYW5nZXMkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtblRlbXBsYXRlcykge1xuICAgICAgICAgIHRoaXMuY29sdW1uVGVtcGxhdGVzLm5vdGlmeU9uQ2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRJbnRlcm5hbFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy5faW50ZXJuYWxSb3dzID0gc29ydFJvd3ModGhpcy5faW50ZXJuYWxSb3dzLCB0aGlzLl9pbnRlcm5hbENvbHVtbnMsIHRoaXMuc29ydHMpO1xuICB9XG59XG4iXX0=