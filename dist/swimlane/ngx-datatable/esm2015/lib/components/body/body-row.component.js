import { Component, Input, HostBinding, ElementRef, Output, KeyValueDiffers, EventEmitter, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, SkipSelf } from '@angular/core';
import { columnsByPin, columnGroupWidths, columnsByPinArr } from '../../utils/column';
import { Keys } from '../../utils/keys';
import { ScrollbarHelper } from '../../services/scrollbar-helper.service';
import { translateXY } from '../../utils/translate';
export class DataTableBodyRowComponent {
    constructor(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new EventEmitter();
        this.treeAction = new EventEmitter();
        this._groupStyles = {
            left: {},
            center: {},
            right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
    }
    set columns(val) {
        this._columns = val;
        this.recalculateColumns(val);
        this.buildStylesByGroup();
    }
    get columns() {
        return this._columns;
    }
    set innerWidth(val) {
        if (this._columns) {
            const colByPin = columnsByPin(this._columns);
            this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        }
        this._innerWidth = val;
        this.recalculateColumns();
        this.buildStylesByGroup();
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.buildStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    get cssClass() {
        let cls = 'datatable-body-row';
        if (this.isSelected) {
            cls += ' active';
        }
        if (this.rowIndex % 2 !== 0) {
            cls += ' datatable-row-odd';
        }
        if (this.rowIndex % 2 === 0) {
            cls += ' datatable-row-even';
        }
        if (this.rowClass) {
            const res = this.rowClass(this.row);
            if (typeof res === 'string') {
                cls += ` ${res}`;
            }
            else if (typeof res === 'object') {
                const keys = Object.keys(res);
                for (const k of keys) {
                    if (res[k] === true) {
                        cls += ` ${k}`;
                    }
                }
            }
        }
        return cls;
    }
    get columnsTotalWidths() {
        // hack by XIP
        return this._innerWidth.toString();
    }
    ngDoCheck() {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    buildStylesByGroup() {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
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
            const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    onActivate(event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetRow = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                rowElement: this._element
            });
        }
    }
    onMouseenter(event) {
        this.activate.emit({
            type: 'mouseenter',
            event,
            row: this.row,
            rowElement: this._element
        });
    }
    recalculateColumns(val = this.columns) {
        this._columns = val;
        const colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    }
    onTreeAction() {
        this.treeAction.emit();
    }
}
DataTableBodyRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'datatable-body-row',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        role="cell"
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
            },] }
];
DataTableBodyRowComponent.ctorParameters = () => [
    { type: KeyValueDiffers },
    { type: ScrollbarHelper, decorators: [{ type: SkipSelf }] },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
DataTableBodyRowComponent.propDecorators = {
    columns: [{ type: Input }],
    innerWidth: [{ type: Input }],
    expanded: [{ type: Input }],
    rowClass: [{ type: Input }],
    row: [{ type: Input }],
    group: [{ type: Input }],
    isSelected: [{ type: Input }],
    rowIndex: [{ type: Input }],
    displayCheck: [{ type: Input }],
    treeStatus: [{ type: Input }],
    offsetX: [{ type: Input }],
    cssClass: [{ type: HostBinding, args: ['class',] }],
    rowHeight: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
    columnsTotalWidths: [{ type: HostBinding, args: ['style.width.px',] }],
    activate: [{ type: Output }],
    treeAction: [{ type: Output }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onMouseenter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvYm9keS9ib2R5LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFDVixNQUFNLEVBQ04sZUFBZSxFQUVmLFlBQVksRUFDWixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUVqQixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQStCcEQsTUFBTSxPQUFPLHlCQUF5QjtJQXFHcEMsWUFDVSxPQUF3QixFQUNaLGVBQWdDLEVBQzVDLEVBQXFCLEVBQzdCLE9BQW1CO1FBSFgsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDNUMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUF2RXRCLGVBQVUsR0FBZSxXQUFXLENBQUM7UUFtRHBDLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFRN0QsaUJBQVksR0FBMkI7WUFDckMsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztRQVVBLElBQUksQ0FBQyxR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TTt3QkEwRU4sWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkF5QmxDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgRWxlbWVudFJlZixcbiAgT3V0cHV0LFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIEtleVZhbHVlRGlmZmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEb0NoZWNrLFxuICBTa2lwU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJlZVN0YXR1cyB9IGZyb20gJy4vYm9keS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjb2x1bW5zQnlQaW4sIGNvbHVtbkdyb3VwV2lkdGhzLCBjb2x1bW5zQnlQaW5BcnIgfSBmcm9tICcuLi8uLi91dGlscy9jb2x1bW4nO1xuaW1wb3J0IHsgS2V5cyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleXMnO1xuaW1wb3J0IHsgU2Nyb2xsYmFySGVscGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2Nyb2xsYmFyLWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IHRyYW5zbGF0ZVhZIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHJhbnNsYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YXRhYmxlLWJvZHktcm93JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgKm5nRm9yPVwibGV0IGNvbEdyb3VwIG9mIF9jb2x1bW5zQnlQaW47IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlHcm91cHNcIlxuICAgICAgY2xhc3M9XCJkYXRhdGFibGUtcm93LXt7IGNvbEdyb3VwLnR5cGUgfX0gZGF0YXRhYmxlLXJvdy1ncm91cFwiXG4gICAgICBbbmdTdHlsZV09XCJfZ3JvdXBTdHlsZXNbY29sR3JvdXAudHlwZV1cIlxuICAgID5cbiAgICAgIDxkYXRhdGFibGUtYm9keS1jZWxsXG4gICAgICAgIHJvbGU9XCJjZWxsXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2xHcm91cC5jb2x1bW5zOyBsZXQgaWkgPSBpbmRleDsgdHJhY2tCeTogY29sdW1uVHJhY2tpbmdGblwiXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgIFtncm91cF09XCJncm91cFwiXG4gICAgICAgIFtleHBhbmRlZF09XCJleHBhbmRlZFwiXG4gICAgICAgIFtpc1NlbGVjdGVkXT1cImlzU2VsZWN0ZWRcIlxuICAgICAgICBbcm93SW5kZXhdPVwicm93SW5kZXhcIlxuICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgIFtyb3dIZWlnaHRdPVwicm93SGVpZ2h0XCJcbiAgICAgICAgW2Rpc3BsYXlDaGVja109XCJkaXNwbGF5Q2hlY2tcIlxuICAgICAgICBbdHJlZVN0YXR1c109XCJ0cmVlU3RhdHVzXCJcbiAgICAgICAgKGFjdGl2YXRlKT1cIm9uQWN0aXZhdGUoJGV2ZW50LCBpaSlcIlxuICAgICAgICAodHJlZUFjdGlvbik9XCJvblRyZWVBY3Rpb24oKVwiXG4gICAgICA+XG4gICAgICA8L2RhdGF0YWJsZS1ib2R5LWNlbGw+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQm9keVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBASW5wdXQoKSBzZXQgY29sdW1ucyh2YWw6IGFueVtdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHZhbDtcbiAgICB0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucyh2YWwpO1xuICAgIHRoaXMuYnVpbGRTdHlsZXNCeUdyb3VwKCk7XG4gIH1cblxuICBnZXQgY29sdW1ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgaW5uZXJXaWR0aCh2YWw6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9jb2x1bW5zKSB7XG4gICAgICBjb25zdCBjb2xCeVBpbiA9IGNvbHVtbnNCeVBpbih0aGlzLl9jb2x1bW5zKTtcbiAgICAgIHRoaXMuX2NvbHVtbkdyb3VwV2lkdGhzID0gY29sdW1uR3JvdXBXaWR0aHMoY29sQnlQaW4sIHRoaXMuX2NvbHVtbnMpO1xuICAgIH1cblxuICAgIHRoaXMuX2lubmVyV2lkdGggPSB2YWw7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcbiAgICB0aGlzLmJ1aWxkU3R5bGVzQnlHcm91cCgpO1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJXaWR0aDtcbiAgfVxuXG4gIEBJbnB1dCgpIGV4cGFuZGVkOiBib29sZWFuO1xuICBASW5wdXQoKSByb3dDbGFzczogYW55O1xuICBASW5wdXQoKSByb3c6IGFueTtcbiAgQElucHV0KCkgZ3JvdXA6IGFueTtcbiAgQElucHV0KCkgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcm93SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgZGlzcGxheUNoZWNrOiBhbnk7XG4gIEBJbnB1dCgpIHRyZWVTdGF0dXM6IFRyZWVTdGF0dXMgPSAnY29sbGFwc2VkJztcblxuICBASW5wdXQoKVxuICBzZXQgb2Zmc2V0WCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldFggPSB2YWw7XG4gICAgdGhpcy5idWlsZFN0eWxlc0J5R3JvdXAoKTtcbiAgfVxuICBnZXQgb2Zmc2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0WDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY3NzQ2xhc3MoKSB7XG4gICAgbGV0IGNscyA9ICdkYXRhdGFibGUtYm9keS1yb3cnO1xuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgIGNscyArPSAnIGFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnJvd0luZGV4ICUgMiAhPT0gMCkge1xuICAgICAgY2xzICs9ICcgZGF0YXRhYmxlLXJvdy1vZGQnO1xuICAgIH1cbiAgICBpZiAodGhpcy5yb3dJbmRleCAlIDIgPT09IDApIHtcbiAgICAgIGNscyArPSAnIGRhdGF0YWJsZS1yb3ctZXZlbic7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm93Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlcyA9IHRoaXMucm93Q2xhc3ModGhpcy5yb3cpO1xuICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNscyArPSBgICR7cmVzfWA7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXMpO1xuICAgICAgICBmb3IgKGNvbnN0IGsgb2Yga2V5cykge1xuICAgICAgICAgIGlmIChyZXNba10gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscyArPSBgICR7a31gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbHM7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpXG4gIHJvd0hlaWdodDogbnVtYmVyO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxuICBnZXQgY29sdW1uc1RvdGFsV2lkdGhzKCk6IHN0cmluZyB7XG4gICAgLy8gaGFjayBieSBYSVBcbiAgICByZXR1cm4gdGhpcy5faW5uZXJXaWR0aC50b1N0cmluZygpO1xuICB9XG5cbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHRyZWVBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9lbGVtZW50OiBhbnk7XG4gIF9jb2x1bW5Hcm91cFdpZHRoczogYW55O1xuICBfY29sdW1uc0J5UGluOiBhbnk7XG4gIF9vZmZzZXRYOiBudW1iZXI7XG4gIF9jb2x1bW5zOiBhbnlbXTtcbiAgX2lubmVyV2lkdGg6IG51bWJlcjtcbiAgX2dyb3VwU3R5bGVzOiB7IFtwcm9wOiBzdHJpbmddOiB7fSB9ID0ge1xuICAgIGxlZnQ6IHt9LFxuICAgIGNlbnRlcjoge30sXG4gICAgcmlnaHQ6IHt9XG4gIH07XG5cbiAgcHJpdmF0ZSBfcm93RGlmZmVyOiBLZXlWYWx1ZURpZmZlcjx7fSwge30+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgIEBTa2lwU2VsZigpIHByaXZhdGUgc2Nyb2xsYmFySGVscGVyOiBTY3JvbGxiYXJIZWxwZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgZWxlbWVudDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX3Jvd0RpZmZlciA9IGRpZmZlcnMuZmluZCh7fSkuY3JlYXRlKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jvd0RpZmZlci5kaWZmKHRoaXMucm93KSkge1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICB0cmFja0J5R3JvdXBzKGluZGV4OiBudW1iZXIsIGNvbEdyb3VwOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb2xHcm91cC50eXBlO1xuICB9XG5cbiAgY29sdW1uVHJhY2tpbmdGbihpbmRleDogbnVtYmVyLCBjb2x1bW46IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGNvbHVtbi4kJGlkO1xuICB9XG5cbiAgYnVpbGRTdHlsZXNCeUdyb3VwKCkge1xuICAgIHRoaXMuX2dyb3VwU3R5bGVzLmxlZnQgPSB0aGlzLmNhbGNTdHlsZXNCeUdyb3VwKCdsZWZ0Jyk7XG4gICAgdGhpcy5fZ3JvdXBTdHlsZXMuY2VudGVyID0gdGhpcy5jYWxjU3R5bGVzQnlHcm91cCgnY2VudGVyJyk7XG4gICAgdGhpcy5fZ3JvdXBTdHlsZXMucmlnaHQgPSB0aGlzLmNhbGNTdHlsZXNCeUdyb3VwKCdyaWdodCcpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjYWxjU3R5bGVzQnlHcm91cChncm91cDogc3RyaW5nKSB7XG4gICAgY29uc3Qgd2lkdGhzID0gdGhpcy5fY29sdW1uR3JvdXBXaWR0aHM7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHt3aWR0aHNbZ3JvdXBdfXB4YFxuICAgIH07XG5cbiAgICBpZiAoZ3JvdXAgPT09ICdsZWZ0Jykge1xuICAgICAgdHJhbnNsYXRlWFkoc3R5bGVzLCBvZmZzZXRYLCAwKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCBib2R5V2lkdGggPSBwYXJzZUludCh0aGlzLmlubmVyV2lkdGggKyAnJywgMCk7XG4gICAgICBjb25zdCB0b3RhbERpZmYgPSB3aWR0aHMudG90YWwgLSBib2R5V2lkdGg7XG4gICAgICBjb25zdCBvZmZzZXREaWZmID0gdG90YWxEaWZmIC0gb2Zmc2V0WDtcbiAgICAgIGNvbnN0IG9mZnNldCA9IChvZmZzZXREaWZmICsgdGhpcy5zY3JvbGxiYXJIZWxwZXIud2lkdGgpICogLTE7XG4gICAgICB0cmFuc2xhdGVYWShzdHlsZXMsIG9mZnNldCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGV2ZW50LmNlbGxJbmRleCA9IGluZGV4O1xuICAgIGV2ZW50LnJvd0VsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdChldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgY29uc3QgaXNUYXJnZXRSb3cgPSBldmVudC50YXJnZXQgPT09IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICBjb25zdCBpc0FjdGlvbiA9XG4gICAgICBrZXlDb2RlID09PSBLZXlzLnJldHVybiB8fFxuICAgICAga2V5Q29kZSA9PT0gS2V5cy5kb3duIHx8XG4gICAgICBrZXlDb2RlID09PSBLZXlzLnVwIHx8XG4gICAgICBrZXlDb2RlID09PSBLZXlzLmxlZnQgfHxcbiAgICAgIGtleUNvZGUgPT09IEtleXMucmlnaHQ7XG5cbiAgICBpZiAoaXNBY3Rpb24gJiYgaXNUYXJnZXRSb3cpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgICAgdHlwZTogJ2tleWRvd24nLFxuICAgICAgICBldmVudCxcbiAgICAgICAgcm93OiB0aGlzLnJvdyxcbiAgICAgICAgcm93RWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsIFsnJGV2ZW50J10pXG4gIG9uTW91c2VlbnRlcihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdtb3VzZWVudGVyJyxcbiAgICAgIGV2ZW50LFxuICAgICAgcm93OiB0aGlzLnJvdyxcbiAgICAgIHJvd0VsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KTtcbiAgfVxuXG4gIHJlY2FsY3VsYXRlQ29sdW1ucyh2YWw6IGFueVtdID0gdGhpcy5jb2x1bW5zKTogdm9pZCB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHZhbDtcbiAgICBjb25zdCBjb2xzQnlQaW4gPSBjb2x1bW5zQnlQaW4odGhpcy5fY29sdW1ucyk7XG4gICAgdGhpcy5fY29sdW1uc0J5UGluID0gY29sdW1uc0J5UGluQXJyKHRoaXMuX2NvbHVtbnMpO1xuICAgIHRoaXMuX2NvbHVtbkdyb3VwV2lkdGhzID0gY29sdW1uR3JvdXBXaWR0aHMoY29sc0J5UGluLCB0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG9uVHJlZUFjdGlvbigpIHtcbiAgICB0aGlzLnRyZWVBY3Rpb24uZW1pdCgpO1xuICB9XG59XG4iXX0=