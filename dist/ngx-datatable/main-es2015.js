(self["webpackChunkngx_datatable"] = self["webpackChunkngx_datatable"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 57572:
/*!****************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/body/body-cell.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableBodyCellComponent": function() { return /* binding */ DataTableBodyCellComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/sort-direction.type */ 25126);
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/keys */ 70140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);





const _c0 = ["cellTemplate"];
function DataTableBodyCellComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.isSelected);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 11);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 12);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 13);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
} }
function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0) { return { cellContext: a0 }; };
function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r7.cellContext));
} }
function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
} }
function DataTableBodyCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 15);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableBodyCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
class DataTableBodyCellComponent {
    constructor(element, cd) {
        this.cd = cd;
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
    }
    set group(group) {
        this._group = group;
        this.cellContext.group = group;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get group() {
        return this._group;
    }
    set rowHeight(val) {
        this._rowHeight = val;
        this.cellContext.rowHeight = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowHeight() {
        return this._rowHeight;
    }
    set isSelected(val) {
        this._isSelected = val;
        this.cellContext.isSelected = val;
        this.cd.markForCheck();
    }
    get isSelected() {
        return this._isSelected;
    }
    set expanded(val) {
        this._expanded = val;
        this.cellContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.cellContext.rowIndex = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set row(row) {
        this._row = row;
        this.cellContext.row = row;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get row() {
        return this._row;
    }
    set sorts(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
    }
    get sorts() {
        return this._sorts;
    }
    set treeStatus(status) {
        if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
            this._treeStatus = 'collapsed';
        }
        else {
            this._treeStatus = status;
        }
        this.cellContext.treeStatus = this._treeStatus;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get treeStatus() {
        return this._treeStatus;
    }
    get columnCssClasses() {
        let cls = 'datatable-body-cell';
        if (this.column.cellClass) {
            if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
            }
            else if (typeof this.column.cellClass === 'function') {
                const res = this.column.cellClass({
                    row: this.row,
                    group: this.group,
                    column: this.column,
                    value: this.value,
                    rowHeight: this.rowHeight
                });
                if (typeof res === 'string') {
                    cls += ' ' + res;
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
        }
        if (!this.sortDir) {
            cls += ' sort-active';
        }
        if (this.isFocused) {
            cls += ' active';
        }
        if (this.sortDir === _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_0__.SortDirection.asc) {
            cls += ' sort-asc';
        }
        if (this.sortDir === _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_0__.SortDirection.desc) {
            cls += ' sort-desc';
        }
        return cls;
    }
    get width() {
        return this.column.width;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get height() {
        const height = this.rowHeight;
        if (isNaN(height)) {
            return height;
        }
        return height + 'px';
    }
    ngDoCheck() {
        this.checkValueUpdates();
    }
    ngOnDestroy() {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    }
    checkValueUpdates() {
        let value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            const val = this.column.$$valueGetter(this.row, this.column.prop);
            const userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
    }
    onClick(event) {
        this.activate.emit({
            type: 'click',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onDblClick(event) {
        this.activate.emit({
            type: 'dblclick',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetCell = event.target === this._element;
        const isAction = keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_1__.Keys.return ||
            keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_1__.Keys.down ||
            keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_1__.Keys.up ||
            keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_1__.Keys.left ||
            keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_1__.Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    }
    onCheckboxChange(event) {
        this.activate.emit({
            type: 'checkbox',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    }
    calcSortDir(sorts) {
        if (!sorts) {
            return;
        }
        const sort = sorts.find((s) => {
            return s.prop === this.column.prop;
        });
        if (sort) {
            return sort.dir;
        }
    }
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    onTreeAction() {
        this.treeAction.emit(this.row);
    }
    calcLeftMargin(column, row) {
        const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    }
}
DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) { return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
DataTableBodyCellComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DataTableBodyCellComponent, selectors: [["datatable-body-cell"]], viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
    } }, hostVars: 10, hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) { return ctx.onDblClick($event); })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    } }, inputs: { displayCheck: "displayCheck", group: "group", rowHeight: "rowHeight", isSelected: "isSelected", expanded: "expanded", rowIndex: "rowIndex", column: "column", row: "row", sorts: "sorts", treeStatus: "treeStatus" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 5, vars: 6, consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]], template: function DataTableBodyCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 65479:
/*!*********************************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/body/body-group-header-template.directive.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatableGroupHeaderTemplateDirective": function() { return /* binding */ DatatableGroupHeaderTemplateDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DatatableGroupHeaderTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) { return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DatatableGroupHeaderTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableGroupHeaderTemplateDirective, selectors: [["", "ngx-datatable-group-header-template", ""]] });


/***/ }),

/***/ 86439:
/*!************************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/body/body-group-header.directive.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatableGroupHeaderDirective": function() { return /* binding */ DatatableGroupHeaderDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _body_group_header_template_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body-group-header-template.directive */ 65479);



class DatatableGroupHeaderDirective {
    constructor() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of a group
     */
    toggleExpandGroup(group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    }
    /**
     * Expand all groups
     */
    expandAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Collapse all groups
     */
    collapseAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) { return new (t || DatatableGroupHeaderDirective)(); };
DatatableGroupHeaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DatatableGroupHeaderDirective, selectors: [["ngx-datatable-group-header"]], contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _body_group_header_template_directive__WEBPACK_IMPORTED_MODULE_0__.DatatableGroupHeaderTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });


/***/ }),

/***/ 4747:
/*!***********************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/body/body-row-wrapper.component.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableRowWrapperComponent": function() { return /* binding */ DataTableRowWrapperComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);



function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
} }
function DataTableRowWrapperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
} }
function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
} }
function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
} }
function DataTableRowWrapperComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
} }
const _c0 = ["*"];
class DataTableRowWrapperComponent {
    constructor(cd, differs) {
        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
        this._expanded = false;
        this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowDiffer = differs.find({}).create();
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.rowContext.rowIndex = val;
        this.groupContext.rowIndex = val;
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set expanded(val) {
        this._expanded = val;
        this.groupContext.expanded = val;
        this.rowContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    ngDoCheck() {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    }
    onContextmenu($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    }
    getGroupHeaderStyle() {
        const styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    }
}
DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) { return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers)); };
DataTableRowWrapperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableRowWrapperComponent, selectors: [["datatable-row-wrapper"]], hostAttrs: [1, "datatable-row-wrapper"], hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } }, inputs: { innerWidth: "innerWidth", rowDetail: "rowDetail", groupHeader: "groupHeader", offsetX: "offsetX", detailRowHeight: "detailRowHeight", row: "row", groupedRows: "groupedRows", rowIndex: "rowIndex", expanded: "expanded" }, outputs: { rowContextmenu: "rowContextmenu" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]], template: function DataTableRowWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 47736:
/*!***************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/body/body-row.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableBodyRowComponent": function() { return /* binding */ DataTableBodyRowComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/column */ 80492);
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/keys */ 70140);
/* harmony import */ var _utils_translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/translate */ 62317);
/* harmony import */ var _services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/scrollbar-helper.service */ 83624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _body_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body-cell.component */ 57572);








function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datatable-body-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ii_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.onActivate($event, ii_r5); })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
} }
function DataTableBodyRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
class DataTableBodyRowComponent {
    constructor(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
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
            const colByPin = (0,_utils_column__WEBPACK_IMPORTED_MODULE_0__.columnsByPin)(this._columns);
            this._columnGroupWidths = (0,_utils_column__WEBPACK_IMPORTED_MODULE_0__.columnGroupWidths)(colByPin, this._columns);
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
            (0,_utils_translate__WEBPACK_IMPORTED_MODULE_2__.translateXY)(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            (0,_utils_translate__WEBPACK_IMPORTED_MODULE_2__.translateXY)(styles, offset, 0);
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
        const isAction = keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_1__.Keys.return ||
            keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_1__.Keys.down ||
            keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_1__.Keys.up ||
            keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_1__.Keys.left ||
            keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_1__.Keys.right;
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
        const colsByPin = (0,_utils_column__WEBPACK_IMPORTED_MODULE_0__.columnsByPin)(this._columns);
        this._columnsByPin = (0,_utils_column__WEBPACK_IMPORTED_MODULE_0__.columnsByPinArr)(this._columns);
        this._columnGroupWidths = (0,_utils_column__WEBPACK_IMPORTED_MODULE_0__.columnGroupWidths)(colsByPin, this._columns);
    }
    onTreeAction() {
        this.treeAction.emit();
    }
}
DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) { return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_3__.ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef)); };
DataTableBodyRowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DataTableBodyRowComponent, selectors: [["datatable-body-row"]], hostVars: 6, hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseenter($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.cssClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", ctx.rowHeight, "px")("width", ctx.columnsTotalWidths, "px");
    } }, inputs: { columns: "columns", innerWidth: "innerWidth", expanded: "expanded", rowClass: "rowClass", row: "row", group: "group", isSelected: "isSelected", rowIndex: "rowIndex", displayCheck: "displayCheck", treeStatus: "treeStatus", offsetX: "offsetX", rowHeight: "rowHeight" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 1, vars: 2, consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]], template: function DataTableBodyRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _body_cell_component__WEBPACK_IMPORTED_MODULE_4__.DataTableBodyCellComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 6675:
/*!***********************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/body/body.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableBodyComponent": function() { return /* binding */ DataTableBodyComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _scroller_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroller.component */ 19094);
/* harmony import */ var _utils_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/column */ 80492);
/* harmony import */ var _utils_row_height_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/row-height-cache */ 6457);
/* harmony import */ var _utils_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/translate */ 62317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _selection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selection.component */ 55248);
/* harmony import */ var _progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress-bar.component */ 96170);
/* harmony import */ var _summary_summary_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary/summary-row.component */ 83262);
/* harmony import */ var _body_row_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body-row-wrapper.component */ 4747);
/* harmony import */ var _body_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./body-row.component */ 47736);













function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "datatable-progress");
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "datatable-summary-row", 9);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "datatable-body-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r12.onTreeAction(group_r7); })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2); return _r1.onActivate($event, ctx_r15.indexes.first + i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "datatable-body-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const i_r20 = restoredCtx.index; _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2); return _r1.onActivate($event, i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
} if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r25.rowContextmenu.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "datatable-summary-row", 16);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "datatable-scroller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r27.onBodyScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
} }
function DataTableBodyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
class DataTableBodyComponent {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    constructor(cd) {
        this.cd = cd;
        this.selected = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter(false);
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.rowHeightsCache = new _utils_row_height_cache__WEBPACK_IMPORTED_MODULE_2__.RowHeightCache();
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
        const colsByPin = (0,_utils_column__WEBPACK_IMPORTED_MODULE_1__.columnsByPin)(val);
        this.columnGroupWidths = (0,_utils_column__WEBPACK_IMPORTED_MODULE_1__.columnGroupWidths)(colsByPin, val);
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
            (0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__.translateXY)(styles, 0, pos);
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
        (0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__.translateXY)(styles, 0, pos);
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
            (0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__.translateXY)(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = offsetDiff * -1;
            (0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__.translateXY)(styles, offset, 0);
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
DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) { return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef)); };
DataTableBodyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: DataTableBodyComponent, selectors: [["datatable-body"]], viewQuery: function DataTableBodyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_scroller_component__WEBPACK_IMPORTED_MODULE_0__.ScrollerComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    } }, hostAttrs: [1, "datatable-body"], hostVars: 4, hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    } }, inputs: { scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", loadingIndicator: "loadingIndicator", externalPaging: "externalPaging", rowHeight: "rowHeight", offsetX: "offsetX", emptyMessage: "emptyMessage", selectionType: "selectionType", selected: "selected", rowIdentity: "rowIdentity", rowDetail: "rowDetail", groupHeader: "groupHeader", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", rowClass: "rowClass", groupedRows: "groupedRows", groupExpansionDefault: "groupExpansionDefault", innerWidth: "innerWidth", groupRowsBy: "groupRowsBy", virtualization: "virtualization", summaryRow: "summaryRow", summaryPosition: "summaryPosition", summaryHeight: "summaryHeight", pageSize: "pageSize", rows: "rows", columns: "columns", offset: "offset", rowCount: "rowCount", bodyHeight: "bodyHeight" }, outputs: { scroll: "scroll", page: "page", activate: "activate", select: "select", detailToggle: "detailToggle", rowContextmenu: "rowContextmenu", treeAction: "treeAction" }, decls: 5, vars: 9, consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]], template: function DataTableBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "datatable-selection", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) { return ctx.select.emit($event); })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) { return ctx.activate.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _selection_component__WEBPACK_IMPORTED_MODULE_4__.DataTableSelectionComponent, _progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent, _scroller_component__WEBPACK_IMPORTED_MODULE_0__.ScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _summary_summary_row_component__WEBPACK_IMPORTED_MODULE_6__.DataTableSummaryRowComponent, _body_row_wrapper_component__WEBPACK_IMPORTED_MODULE_7__.DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _body_row_component__WEBPACK_IMPORTED_MODULE_8__.DataTableBodyRowComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 96170:
/*!*******************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/body/progress-bar.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": function() { return /* binding */ ProgressBarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ProgressBarComponent {
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["datatable-progress"]], decls: 3, vars: 0, consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 19094:
/*!***************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/body/scroller.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollerComponent": function() { return /* binding */ ScrollerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


const _c0 = ["*"];
class ScrollerComponent {
    constructor(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            const renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    }
    ngOnDestroy() {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    }
    setOffset(offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    }
    onScrolled(event) {
        const dom = event.currentTarget;
        requestAnimationFrame(() => {
            this.scrollYPos = dom.scrollTop;
            this.scrollXPos = dom.scrollLeft;
            this.updateOffset();
        });
    }
    updateOffset() {
        let direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    }
}
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) { return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ScrollerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollerComponent, selectors: [["datatable-scroller"]], hostAttrs: [1, "datatable-scroll"], hostVars: 4, hostBindings: function ScrollerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    } }, inputs: { scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", scrollHeight: "scrollHeight", scrollWidth: "scrollWidth" }, outputs: { scroll: "scroll" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ScrollerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 55248:
/*!****************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/body/selection.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableSelectionComponent": function() { return /* binding */ DataTableSelectionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _types_selection_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/selection.type */ 20553);
/* harmony import */ var _utils_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/selection */ 63119);
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/keys */ 70140);





const _c0 = ["*"];
class DataTableSelectionComponent {
    constructor() {
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    selectRow(event, index, row) {
        if (!this.selectEnabled)
            return;
        const chkbox = this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_0__.SelectionType.checkbox;
        const multi = this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_0__.SelectionType.multi;
        const multiClick = this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_0__.SelectionType.multiClick;
        let selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = (0,_utils_selection__WEBPACK_IMPORTED_MODULE_1__.selectRowsBetween)([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = (0,_utils_selection__WEBPACK_IMPORTED_MODULE_1__.selectRows)([...this.selected], row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = (0,_utils_selection__WEBPACK_IMPORTED_MODULE_1__.selectRows)([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = (0,_utils_selection__WEBPACK_IMPORTED_MODULE_1__.selectRows)([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
        this.prevIndex = index;
        this.select.emit({
            selected
        });
    }
    onActivate(model, index) {
        const { type, event, row } = model;
        const chkbox = this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_0__.SelectionType.checkbox;
        const select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (event.keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    }
    onKeyboardFocus(model) {
        const { keyCode } = model.event;
        const shouldFocus = keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.up || keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.down || keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.right || keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.left;
        if (shouldFocus) {
            const isCellSelection = this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_0__.SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    }
    focusRow(rowElement, keyCode) {
        const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    }
    getPrevNextRow(rowElement, keyCode) {
        const parentElement = rowElement.parentElement;
        if (parentElement) {
            let focusElement;
            if (keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    }
    focusCell(cellElement, rowElement, keyCode, cellIndex) {
        let nextCellElement;
        if (keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.up || keyCode === _utils_keys__WEBPACK_IMPORTED_MODULE_2__.Keys.down) {
            const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                const children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    }
    getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    getRowSelectedIdx(row, selected) {
        if (!selected || !selected.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return selected.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
}
DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) { return new (t || DataTableSelectionComponent)(); };
DataTableSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DataTableSelectionComponent, selectors: [["datatable-selection"]], inputs: { rows: "rows", selected: "selected", selectEnabled: "selectEnabled", selectionType: "selectionType", rowIdentity: "rowIdentity", selectCheck: "selectCheck" }, outputs: { activate: "activate", select: "select" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function DataTableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 83262:
/*!**************************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/body/summary/summary-row.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableSummaryRowComponent": function() { return /* binding */ DataTableSummaryRowComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _body_row_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../body-row.component */ 47736);



function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-body-row", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
} }
function defaultSumFunc(cells) {
    const cellsWithValues = cells.filter(cell => !!cell);
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some(cell => typeof cell !== 'number')) {
        return null;
    }
    return cellsWithValues.reduce((res, cell) => res + cell);
}
function noopSumFunc(cells) {
    return null;
}
class DataTableSummaryRowComponent {
    constructor() {
        this.summaryRow = {};
    }
    ngOnChanges() {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    }
    updateInternalColumns() {
        this._internalColumns = this.columns.map(col => (Object.assign(Object.assign({}, col), { cellTemplate: col.summaryTemplate })));
    }
    updateValues() {
        this.summaryRow = {};
        this.columns
            .filter(col => !col.summaryTemplate)
            .forEach(col => {
            const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
            const sumFunc = this.getSummaryFunction(col);
            this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        });
    }
    getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    }
}
DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) { return new (t || DataTableSummaryRowComponent)(); };
DataTableSummaryRowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableSummaryRowComponent, selectors: [["datatable-summary-row"]], hostAttrs: [1, "datatable-summary-row"], inputs: { rows: "rows", columns: "columns", rowHeight: "rowHeight", offsetX: "offsetX", innerWidth: "innerWidth" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]], template: function DataTableSummaryRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _body_row_component__WEBPACK_IMPORTED_MODULE_0__.DataTableBodyRowComponent], encapsulation: 2 });


/***/ }),

/***/ 55466:
/*!*********************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableColumnCellDirective": function() { return /* binding */ DataTableColumnCellDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DataTableColumnCellDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) { return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DataTableColumnCellDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnCellDirective, selectors: [["", "ngx-datatable-cell-template", ""]] });


/***/ }),

/***/ 2794:
/*!***********************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/columns/column-header.directive.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableColumnHeaderDirective": function() { return /* binding */ DataTableColumnHeaderDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DataTableColumnHeaderDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) { return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DataTableColumnHeaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnHeaderDirective, selectors: [["", "ngx-datatable-header-template", ""]] });


/***/ }),

/***/ 42410:
/*!****************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableColumnDirective": function() { return /* binding */ DataTableColumnDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _column_header_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-header.directive */ 2794);
/* harmony import */ var _column_cell_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-cell.directive */ 55466);
/* harmony import */ var _tree_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree.directive */ 56281);
/* harmony import */ var _services_column_changes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/column-changes.service */ 15769);






class DataTableColumnDirective {
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
}
DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_column_changes_service__WEBPACK_IMPORTED_MODULE_3__.ColumnChangesService)); };
DataTableColumnDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: DataTableColumnDirective, selectors: [["ngx-datatable-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _column_cell_directive__WEBPACK_IMPORTED_MODULE_1__.DataTableColumnCellDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _column_header_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableColumnHeaderDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _tree_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnCellTreeToggle, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
    } }, inputs: { name: "name", prop: "prop", frozenLeft: "frozenLeft", frozenRight: "frozenRight", flexGrow: "flexGrow", resizeable: "resizeable", comparator: "comparator", pipe: "pipe", sortable: "sortable", draggable: "draggable", canAutoResize: "canAutoResize", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", checkboxable: "checkboxable", headerCheckboxable: "headerCheckboxable", headerClass: "headerClass", cellClass: "cellClass", isTreeColumn: "isTreeColumn", treeLevelIndent: "treeLevelIndent", summaryFunc: "summaryFunc", summaryTemplate: "summaryTemplate", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"], _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 56281:
/*!**************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/columns/tree.directive.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableColumnCellTreeToggle": function() { return /* binding */ DataTableColumnCellTreeToggle; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DataTableColumnCellTreeToggle {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) { return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DataTableColumnCellTreeToggle.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnCellTreeToggle, selectors: [["", "ngx-datatable-tree-toggle", ""]] });


/***/ }),

/***/ 77073:
/*!***********************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/datatable.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatableComponent": function() { return /* binding */ DatatableComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _body_body_group_header_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body/body-group-header.directive */ 86439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _utils_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/tree */ 16820);
/* harmony import */ var _utils_column_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/column-helper */ 61307);
/* harmony import */ var _types_column_mode_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/column-mode.type */ 78475);
/* harmony import */ var _types_selection_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/selection.type */ 20553);
/* harmony import */ var _types_sort_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/sort.type */ 11688);
/* harmony import */ var _types_contextmenu_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/contextmenu.type */ 61734);
/* harmony import */ var _columns_column_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./columns/column.directive */ 42410);
/* harmony import */ var _row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./row-detail/row-detail.directive */ 47663);
/* harmony import */ var _footer_footer_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.directive */ 95377);
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./body/body.component */ 6675);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ 669);
/* harmony import */ var _utils_throttle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/throttle */ 6938);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math */ 73510);
/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/sort */ 63648);
/* harmony import */ var _services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/scrollbar-helper.service */ 83624);
/* harmony import */ var _services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/dimensions-helper.service */ 20681);
/* harmony import */ var _services_column_changes_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/column-changes.service */ 15769);
/* harmony import */ var _directives_visibility_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../directives/visibility.directive */ 11693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ 8495);



























function DatatableComponent_datatable_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "datatable-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return ctx_r2.onColumnSort($event); })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return ctx_r4.onColumnResize($event); })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return ctx_r5.onColumnReorder($event); })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return ctx_r6.onHeaderSelect($event); })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return ctx_r7.onColumnContextmenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
} }
function DatatableComponent_datatable_footer_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "datatable-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return ctx_r8.onFooterPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
} }
class DatatableComponent {
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
        this.columnMode = _types_column_mode_type__WEBPACK_IMPORTED_MODULE_3__.ColumnMode.standard;
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
        this.sortType = _types_sort_type__WEBPACK_IMPORTED_MODULE_5__.SortType.single;
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
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_20__.EventEmitter();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_20__.EventEmitter();
        /**
         * A cell or row was selected.
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_20__.EventEmitter();
        /**
         * Column sort was invoked.
         */
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_20__.EventEmitter();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_20__.EventEmitter();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_20__.EventEmitter();
        /**
         * Column was resized.
         */
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_20__.EventEmitter();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_20__.EventEmitter(false);
        /**
         * A row was expanded ot collapsed for tree
         */
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_20__.EventEmitter();
        this.rowCount = 0;
        this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject(0);
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
        this._internalRows = (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.groupRowsByParents)(this._internalRows, (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.optionalGetterForProp)(this.treeFromRelation), (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.optionalGetterForProp)(this.treeToRelation));
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
            (0,_utils_column_helper__WEBPACK_IMPORTED_MODULE_2__.setColumnDefaults)(this._internalColumns);
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
        return this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_4__.SelectionType.checkbox;
    }
    /**
     * CSS class applied to root if cell selection.
     */
    get isCellSelection() {
        return this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_4__.SelectionType.cell;
    }
    /**
     * CSS class applied to root if single select.
     */
    get isSingleSelection() {
        return this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_4__.SelectionType.single;
    }
    /**
     * CSS class added to root element if mulit select
     */
    get isMultiSelection() {
        return this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_4__.SelectionType.multi;
    }
    /**
     * CSS class added to root element if mulit click select
     */
    get isMultiClickSelection() {
        return this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_4__.SelectionType.multiClick;
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
                this._internalColumns = (0,_utils_column_helper__WEBPACK_IMPORTED_MODULE_2__.translateTemplates)(arr);
                (0,_utils_column_helper__WEBPACK_IMPORTED_MODULE_2__.setColumnDefaults)(this._internalColumns);
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
            this._internalRows = (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.groupRowsByParents)(this._internalRows, (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.optionalGetterForProp)(this.treeFromRelation), (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.optionalGetterForProp)(this.treeToRelation));
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
        if (this.columnMode === _types_column_mode_type__WEBPACK_IMPORTED_MODULE_3__.ColumnMode.force) {
            (0,_utils_math__WEBPACK_IMPORTED_MODULE_13__.forceFillColumnWidths)(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === _types_column_mode_type__WEBPACK_IMPORTED_MODULE_3__.ColumnMode.flex) {
            (0,_utils_math__WEBPACK_IMPORTED_MODULE_13__.adjustColumnWidths)(columns, width);
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
        this.tableContextmenu.emit({ event, type: _types_contextmenu_type__WEBPACK_IMPORTED_MODULE_6__.ContextmenuType.header, content: column });
    }
    /**
     * The body triggered a contextmenu event.
     */
    onRowContextmenu({ event, row }) {
        this.tableContextmenu.emit({ event, type: _types_contextmenu_type__WEBPACK_IMPORTED_MODULE_6__.ContextmenuType.body, content: row });
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
        this._internalRows = (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.groupRowsByParents)(this._internalRows, (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.optionalGetterForProp)(this.treeFromRelation), (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.optionalGetterForProp)(this.treeToRelation));
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
        this._internalRows = (0,_utils_sort__WEBPACK_IMPORTED_MODULE_14__.sortRows)(this._internalRows, this._internalColumns, this.sorts);
    }
}
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) { return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_15__.ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_16__.DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_column_changes_service__WEBPACK_IMPORTED_MODULE_17__.ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"]('configuration', 8)); };
DatatableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({ type: DatatableComponent, selectors: [["ngx-datatable"]], contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵcontentQuery"](dirIndex, _row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_8__.DatatableRowDetailDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵcontentQuery"](dirIndex, _body_body_group_header_directive__WEBPACK_IMPORTED_MODULE_0__.DatatableGroupHeaderDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵcontentQuery"](dirIndex, _footer_footer_directive__WEBPACK_IMPORTED_MODULE_9__.DatatableFooterDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵcontentQuery"](dirIndex, _columns_column_directive__WEBPACK_IMPORTED_MODULE_7__.DataTableColumnDirective, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
    } }, viewQuery: function DatatableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵviewQuery"](_body_body_component__WEBPACK_IMPORTED_MODULE_10__.DataTableBodyComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵviewQuery"](_header_header_component__WEBPACK_IMPORTED_MODULE_11__.DataTableHeaderComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    } }, hostAttrs: [1, "ngx-datatable"], hostVars: 22, hostBindings: function DatatableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    } }, inputs: { targetMarkerTemplate: "targetMarkerTemplate", rows: "rows", groupRowsBy: "groupRowsBy", groupedRows: "groupedRows", columns: "columns", selected: "selected", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", rowHeight: "rowHeight", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", externalPaging: "externalPaging", externalSorting: "externalSorting", limit: "limit", count: "count", offset: "offset", loadingIndicator: "loadingIndicator", selectionType: "selectionType", reorderable: "reorderable", swapColumns: "swapColumns", sortType: "sortType", sorts: "sorts", cssClasses: "cssClasses", messages: "messages", rowClass: "rowClass", selectCheck: "selectCheck", displayCheck: "displayCheck", groupExpansionDefault: "groupExpansionDefault", trackByProp: "trackByProp", selectAllRowsOnPage: "selectAllRowsOnPage", virtualization: "virtualization", treeFromRelation: "treeFromRelation", treeToRelation: "treeToRelation", summaryRow: "summaryRow", summaryHeight: "summaryHeight", summaryPosition: "summaryPosition", rowIdentity: "rowIdentity" }, outputs: { scroll: "scroll", activate: "activate", select: "select", sort: "sort", page: "page", reorder: "reorder", resize: "resize", tableContextmenu: "tableContextmenu", treeAction: "treeAction" }, decls: 5, vars: 34, consts: [["role", "table", "visibilityObserver", "", 3, "visible"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], ["role", "rowgroup", 3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]], template: function DatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() { return ctx.recalculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "datatable-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) { return ctx.onBodyPage($event); })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) { return ctx.activate.emit($event); })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) { return ctx.onRowContextmenu($event); })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) { return ctx.onBodySelect($event); })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) { return ctx.onBodyScroll($event); })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) { return ctx.onTreeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.headerHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.footerHeight);
    } }, directives: [_directives_visibility_directive__WEBPACK_IMPORTED_MODULE_18__.VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _body_body_component__WEBPACK_IMPORTED_MODULE_10__.DataTableBodyComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_11__.DataTableHeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__.DataTableFooterComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe], styles: [".ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */\n}\n\n.ngx-datatable [hidden] {\n  display: none !important;\n}\n\n.ngx-datatable *,\n.ngx-datatable *:before,\n.ngx-datatable *:after {\n  box-sizing: border-box;\n}\n\n.ngx-datatable.scroll-vertical .datatable-body {\n  overflow-y: auto;\n}\n\n.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n  position: absolute;\n}\n\n.ngx-datatable.scroll-horz .datatable-body {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n  white-space: nowrap;\n}\n\n.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ngx-datatable.fixed-row .datatable-scroll {\n  white-space: nowrap;\n}\n\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n  white-space: nowrap;\n}\n\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.ngx-datatable .datatable-body-row,\n.ngx-datatable .datatable-row-center,\n.ngx-datatable .datatable-header-inner {\n  display: flex;\n  flex-direction: row;\n  -o-flex-flow: row;\n  flex-flow: row;\n}\n\n.ngx-datatable .datatable-body-cell,\n.ngx-datatable .datatable-header-cell {\n  overflow-x: hidden;\n  vertical-align: top;\n  display: inline-block;\n  line-height: 1.625;\n}\n\n.ngx-datatable .datatable-body-cell:focus,\n.ngx-datatable .datatable-header-cell:focus {\n  outline: none;\n}\n\n.ngx-datatable .datatable-row-left,\n.ngx-datatable .datatable-row-right {\n  z-index: 9;\n}\n\n.ngx-datatable .datatable-row-left,\n.ngx-datatable .datatable-row-center,\n.ngx-datatable .datatable-row-group,\n.ngx-datatable .datatable-row-right {\n  position: relative;\n}\n\n.ngx-datatable .datatable-header {\n  display: block;\n  overflow: hidden;\n}\n\n.ngx-datatable .datatable-header .datatable-header-inner {\n  align-items: stretch;\n  -webkit-align-items: stretch;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell {\n  position: relative;\n  display: inline-block;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n  cursor: pointer;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n  cursor: move;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n  line-height: 100%;\n  vertical-align: middle;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 5px;\n  padding: 0 4px;\n  visibility: hidden;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n  cursor: ew-resize;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n  visibility: visible;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n  visibility: visible;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n  right: 0;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n  left: 0;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n  height: inherit;\n}\n\n.ngx-datatable .datatable-body {\n  position: relative;\n  z-index: 10;\n  display: block;\n}\n\n.ngx-datatable .datatable-body .datatable-scroll {\n  display: inline-block;\n}\n\n.ngx-datatable .datatable-body .datatable-row-detail {\n  overflow-y: hidden;\n}\n\n.ngx-datatable .datatable-body .datatable-row-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.ngx-datatable .datatable-body .datatable-body-row {\n  outline: none;\n}\n\n.ngx-datatable .datatable-body .datatable-body-row > div {\n  display: flex;\n}\n\n.ngx-datatable .datatable-footer {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n\n.ngx-datatable .datatable-footer .datatable-footer-inner {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.ngx-datatable .datatable-footer .selected-count .page-count {\n  flex: 1 1 40%;\n}\n\n.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n  flex: 1 1 60%;\n}\n\n.ngx-datatable .datatable-footer .page-count {\n  flex: 1 1 20%;\n}\n\n.ngx-datatable .datatable-footer .datatable-pager {\n  flex: 1 1 80%;\n  text-align: right;\n}\n\n.ngx-datatable .datatable-footer .datatable-pager .pager,\n.ngx-datatable .datatable-footer .datatable-pager .pager li {\n  padding: 0;\n  margin: 0;\n  display: inline-block;\n  list-style: none;\n}\n\n.ngx-datatable .datatable-footer .datatable-pager .pager li,\n.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n  outline: none;\n}\n\n.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n  cursor: pointer;\n  display: inline-block;\n}\n\n.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n  cursor: not-allowed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGF0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFjL0I7O0lBWEU7RUEyQkY7O0lBeEJFO0VBa0NGOztJQS9CRTtFQStDRjs7SUE1Q0U7RUFxRUY7O0lBbEVFO0VBOEdGOztJQTNHRTtFQTRMRjs7SUF6TEU7RUFzT0Y7O0lBbk9FO0FBQ0o7O0FBOUJBO0VBUUksd0JBQXdCO0FBMEI1Qjs7QUFsQ0E7OztFQWdCSSxzQkFBc0I7QUEwQjFCOztBQTFDQTtFQXdCTSxnQkFBZ0I7QUFzQnRCOztBQTlDQTtFQTZCVSxrQkFBa0I7QUFxQjVCOztBQWxEQTtFQXdDTSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBY3ZDOztBQXZEQTtFQW1EUSxtQkFBbUI7QUFRM0I7O0FBM0RBO0VBcURVLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBVWpDOztBQWpFQTtFQWtFTSxtQkFBbUI7QUFHekI7O0FBckVBO0VBcUVRLG1CQUFtQjtBQUkzQjs7QUF6RUE7RUF3RVUsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFLakM7O0FBL0VBO0VBOEVVLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBS2pDOztBQXJGQTs7O0VBZ0dJLGFBQWE7RUFFYixtQkFBbUI7RUFJbkIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFGbEI7O0FBckdBOztFQTRHSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFGdEI7O0FBN0dBOztFQWtITSxhQUFhO0FBQW5COztBQWxIQTs7RUF3SEksVUFBVTtBQURkOztBQXZIQTs7OztFQStISSxrQkFBa0I7QUFEdEI7O0FBOUhBO0VBc0lJLGNBQWM7RUFDZCxnQkFBZ0I7QUFKcEI7O0FBbklBO0VBMElNLG9CQUFvQjtFQUNwQiw0QkFBNEI7QUFIbEM7O0FBeElBO0VBK0lNLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFIM0I7O0FBN0lBO0VBb0pVLGVBQWU7QUFIekI7O0FBakpBO0VBeUpRLFlBQVk7QUFKcEI7O0FBckpBO0VBNkpRLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFKdkI7O0FBNUpBOztFQXFLUSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0FBSjFCOztBQXhLQTtFQWdMUSxpQkFBaUI7QUFKekI7O0FBNUtBO0VBcUxVLG1CQUFtQjtBQUw3Qjs7QUFoTEE7RUEyTFUsbUJBQW1CO0FBUDdCOztBQXBMQTtFQWdNUSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7QUFSakI7O0FBMUxBO0VBcU1VLFFBQVE7QUFQbEI7O0FBOUxBO0VBeU1VLE9BQU87QUFQakI7O0FBbE1BO0VBOE1RLGVBQWU7QUFSdkI7O0FBdE1BO0VBdU5JLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQWJsQjs7QUE1TUE7RUE0Tk0scUJBQXFCO0FBWjNCOztBQWhOQTtFQWdPTSxrQkFBa0I7QUFaeEI7O0FBcE5BO0VBd09NLGFBQWE7RUFRYixzQkFBc0I7QUFiNUI7O0FBbk9BO0VBb1BNLGFBQWE7QUFibkI7O0FBdk9BO0VBMlBRLGFBQWE7QUFackI7O0FBL09BO0VBb1FJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztBQWpCbEI7O0FBclBBO0VBeVFNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQWhCakI7O0FBM1BBO0VBZ1JRLGFBQWE7QUFqQnJCOztBQS9QQTtFQW1SUSxhQUFhO0FBaEJyQjs7QUFuUUE7RUF3Uk0sYUFBYTtBQWpCbkI7O0FBdlFBO0VBNFJNLGFBQWE7RUFDYixpQkFBaUI7QUFqQnZCOztBQTVRQTs7RUFpU1EsVUFBVTtFQUNWLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBaEJ4Qjs7QUFwUkE7O0VBMFNVLGFBQWE7QUFqQnZCOztBQXpSQTtFQStTWSxlQUFlO0VBQ2YscUJBQXFCO0FBbEJqQzs7QUE5UkE7RUFvVFksbUJBQW1CO0FBbEIvQiIsImZpbGUiOiJkYXRhdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuXG4gIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcnRpY2FsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgJi5zY3JvbGwtdmVydGljYWwge1xuICAgIC5kYXRhdGFibGUtYm9keSB7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbiAgICAmLnZpcnR1YWxpemVkIHtcbiAgICAgIC5kYXRhdGFibGUtYm9keSB7XG4gICAgICAgIC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgJi5zY3JvbGwtaG9yeiB7XG4gICAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpeGVkIEhlYWRlciBIZWlnaHQgQWRqdXN0bWVudHNcbiAgICovXG4gICYuZml4ZWQtaGVhZGVyIHtcbiAgICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgICAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXhlZCByb3cgaGVpZ2h0IGFkanVzdG1lbnRzXG4gICAqL1xuICAmLmZpeGVkLXJvdyB7XG4gICAgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVkIFN0eWxlc1xuICAgKi9cbiAgLmRhdGF0YWJsZS1ib2R5LXJvdyxcbiAgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3c7XG4gICAgLW1vei1mbGV4LWZsb3c6IHJvdztcbiAgICAtbXMtZmxleC1mbG93OiByb3c7XG4gICAgLW8tZmxleC1mbG93OiByb3c7XG4gICAgZmxleC1mbG93OiByb3c7XG4gIH1cblxuICAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTtcbiAgfVxuXG4gIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsXG4gIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAvKipcbiAgICogSGVhZGVyIFN0eWxlc1xuICAgKi9cbiAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICYuc29ydGFibGUge1xuICAgICAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICB9XG5cbiAgICAgIC5zb3J0LWJ0biB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnJlc2l6ZS1oYW5kbGUsXG4gICAgICAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7XG4gICAgICB9XG5cbiAgICAgICYucmVzaXplYWJsZTpob3ZlciB7XG4gICAgICAgIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGFyZ2V0TWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcblxuICAgICAgICAmLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCb2R5IFN0eWxlc1xuICAgKi9cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqL1xuICAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAuZGF0YXRhYmxlLWZvb3Rlci1pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5zZWxlY3RlZC1jb3VudCB7XG4gICAgICAucGFnZS1jb3VudCB7XG4gICAgICAgIGZsZXg6IDEgMSA0MCU7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgICAgZmxleDogMSAxIDYwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDgwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAucGFnZXIsXG4gICAgICAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnBhZ2VyIHtcbiAgICAgICAgbGksXG4gICAgICAgIGxpIGEge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5kaXNhYmxlZCBhIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([
    (0,_utils_throttle__WEBPACK_IMPORTED_MODULE_12__.throttleable)(5)
], DatatableComponent.prototype, "onWindowResize", null);


/***/ }),

/***/ 85432:
/*!************************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/footer/footer-template.directive.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableFooterTemplateDirective": function() { return /* binding */ DataTableFooterTemplateDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DataTableFooterTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) { return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DataTableFooterTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableFooterTemplateDirective, selectors: [["", "ngx-datatable-footer-template", ""]] });


/***/ }),

/***/ 8495:
/*!***************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/footer/footer.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableFooterComponent": function() { return /* binding */ DataTableFooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _pager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager.component */ 89061);




function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2, a3, a4) { return { rowCount: a0, pageSize: a1, selectedCount: a2, curPage: a3, offset: a4 }; };
function DataTableFooterComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c0, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
} }
function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
} }
function DataTableFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
} }
function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.page.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
} }
const _c1 = function (a0) { return { "selected-count": a0 }; };
class DataTableFooterComponent {
    constructor() {
        this.selectedCount = 0;
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    get isVisible() {
        return this.rowCount / this.pageSize > 1;
    }
    get curPage() {
        return this.offset + 1;
    }
}
DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) { return new (t || DataTableFooterComponent)(); };
DataTableFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableFooterComponent, selectors: [["datatable-footer"]], hostAttrs: [1, "datatable-footer"], inputs: { footerHeight: "footerHeight", rowCount: "rowCount", pageSize: "pageSize", offset: "offset", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", totalMessage: "totalMessage", footerTemplate: "footerTemplate", selectedCount: "selectedCount", selectedMessage: "selectedMessage" }, outputs: { page: "page" }, decls: 4, vars: 8, consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]], template: function DataTableFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx.selectedMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _pager_component__WEBPACK_IMPORTED_MODULE_0__.DataTablePagerComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 95377:
/*!***************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/footer/footer.directive.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatableFooterDirective": function() { return /* binding */ DatatableFooterDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _footer_template_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-template.directive */ 85432);



class DatatableFooterDirective {
    get template() {
        return this._templateInput || this._templateQuery;
    }
}
DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) { return new (t || DatatableFooterDirective)(); };
DatatableFooterDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DatatableFooterDirective, selectors: [["ngx-datatable-footer"]], contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _footer_template_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { footerHeight: "footerHeight", totalMessage: "totalMessage", selectedMessage: "selectedMessage", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", _templateInput: ["template", "_templateInput"] } });


/***/ }),

/***/ 89061:
/*!**************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/footer/pager.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTablePagerComponent": function() { return /* binding */ DataTablePagerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);



function DataTablePagerComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const pg_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectPage(pg_r1.number); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pg_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
} }
class DataTablePagerComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    set size(val) {
        this._size = val;
        this.pages = this.calcPages();
    }
    get size() {
        return this._size;
    }
    set count(val) {
        this._count = val;
        this.pages = this.calcPages();
    }
    get count() {
        return this._count;
    }
    set page(val) {
        this._page = val;
        this.pages = this.calcPages();
    }
    get page() {
        return this._page;
    }
    get totalPages() {
        const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
        return Math.max(count || 0, 1);
    }
    canPrevious() {
        return this.page > 1;
    }
    canNext() {
        return this.page < this.totalPages;
    }
    prevPage() {
        this.selectPage(this.page - 1);
    }
    nextPage() {
        this.selectPage(this.page + 1);
    }
    selectPage(page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page
            });
        }
    }
    calcPages(page) {
        const pages = [];
        let startPage = 1;
        let endPage = this.totalPages;
        const maxSize = 5;
        const isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            }
            else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
            }
        }
        for (let num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    }
}
DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) { return new (t || DataTablePagerComponent)(); };
DataTablePagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTablePagerComponent, selectors: [["datatable-pager"]], hostAttrs: [1, "datatable-pager"], inputs: { pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", size: "size", count: "count", page: "page" }, outputs: { change: "change" }, decls: 14, vars: 21, consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]], template: function DataTablePagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() { return ctx.selectPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() { return ctx.prevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() { return ctx.selectPage(ctx.totalPages); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerPreviousIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerNextIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 41075:
/*!********************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/header/header-cell.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableHeaderCellComponent": function() { return /* binding */ DataTableHeaderCellComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _types_selection_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/selection.type */ 20553);
/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/sort */ 63648);
/* harmony import */ var _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/sort-direction.type */ 25126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);






function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
} }
function DataTableHeaderCellComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.select.emit(!ctx_r5.allRowsSelected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
} }
function DataTableHeaderCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.onSort(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
class DataTableHeaderCellComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
        };
    }
    set allRowsSelected(value) {
        this._allRowsSelected = value;
        this.cellContext.allRowsSelected = value;
    }
    get allRowsSelected() {
        return this._allRowsSelected;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set sorts(val) {
        this._sorts = val;
        this.sortDir = this.calcSortDir(val);
        this.cellContext.sortDir = this.sortDir;
        this.sortClass = this.calcSortClass(this.sortDir);
        this.cd.markForCheck();
    }
    get sorts() {
        return this._sorts;
    }
    get columnCssClasses() {
        let cls = 'datatable-header-cell';
        if (this.column.sortable)
            cls += ' sortable';
        if (this.column.resizeable)
            cls += ' resizeable';
        if (this.column.headerClass) {
            if (typeof this.column.headerClass === 'string') {
                cls += ' ' + this.column.headerClass;
            }
            else if (typeof this.column.headerClass === 'function') {
                const res = this.column.headerClass({
                    column: this.column
                });
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true)
                            cls += ` ${k}`;
                    }
                }
            }
        }
        const sortDir = this.sortDir;
        if (sortDir) {
            cls += ` sort-active sort-${sortDir}`;
        }
        return cls;
    }
    get name() {
        // guaranteed to have a value by setColumnDefaults() in column-helper.ts
        return this.column.headerTemplate === undefined ? this.column.name : undefined;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get width() {
        return this.column.width;
    }
    get isCheckboxable() {
        return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === _types_selection_type__WEBPACK_IMPORTED_MODULE_0__.SelectionType.checkbox;
    }
    onContextmenu($event) {
        this.columnContextmenu.emit({ event: $event, column: this.column });
    }
    ngOnInit() {
        this.sortClass = this.calcSortClass(this.sortDir);
    }
    calcSortDir(sorts) {
        if (sorts && this.column) {
            const sort = sorts.find((s) => {
                return s.prop === this.column.prop;
            });
            if (sort)
                return sort.dir;
        }
    }
    onSort() {
        if (!this.column.sortable)
            return;
        const newValue = (0,_utils_sort__WEBPACK_IMPORTED_MODULE_1__.nextSortDir)(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue
        });
    }
    calcSortClass(sortDir) {
        if (!this.cellContext.column.sortable)
            return;
        if (sortDir === _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__.SortDirection.asc) {
            return `sort-btn sort-asc ${this.sortAscendingIcon}`;
        }
        else if (sortDir === _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__.SortDirection.desc) {
            return `sort-btn sort-desc ${this.sortDescendingIcon}`;
        }
        else {
            return `sort-btn ${this.sortUnsetIcon}`;
        }
    }
}
DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) { return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
DataTableHeaderCellComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DataTableHeaderCellComponent, selectors: [["datatable-header-cell"]], hostAttrs: [1, "datatable-header-cell"], hostVars: 11, hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("title", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx.headerHeight, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px");
    } }, inputs: { sortType: "sortType", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", sortUnsetIcon: "sortUnsetIcon", isTarget: "isTarget", targetMarkerTemplate: "targetMarkerTemplate", targetMarkerContext: "targetMarkerContext", allRowsSelected: "allRowsSelected", selectionType: "selectionType", column: "column", headerHeight: "headerHeight", sorts: "sorts" }, outputs: { sort: "sort", select: "select", columnContextmenu: "columnContextmenu" }, decls: 6, vars: 6, consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]], template: function DataTableHeaderCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() { return ctx.onSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isTarget);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.sortClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 669:
/*!***************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/header/header.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableHeaderComponent": function() { return /* binding */ DataTableHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/column */ 80492);
/* harmony import */ var _types_sort_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/sort.type */ 11688);
/* harmony import */ var _utils_translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/translate */ 62317);
/* harmony import */ var _directives_orderable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/orderable.directive */ 52341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _header_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-cell.component */ 41075);
/* harmony import */ var _directives_resizeable_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/resizeable.directive */ 82515);
/* harmony import */ var _directives_long_press_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/long-press.directive */ 18971);
/* harmony import */ var _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/draggable.directive */ 5966);











function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "datatable-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const column_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r4.onColumnResized($event, column_r3); })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r6.onLongPressStart($event); })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r7.onLongPressEnd($event); })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r8.onSort($event); })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r9.select.emit($event); })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r10.columnContextmenu.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
} }
function DataTableHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
class DataTableHeaderComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter(false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
        this.destroyed = false;
    }
    set innerWidth(val) {
        this._innerWidth = val;
        setTimeout(() => {
            if (this._columns) {
                const colByPin = (0,_utils_column__WEBPACK_IMPORTED_MODULE_0__.columnsByPin)(this._columns);
                this._columnGroupWidths = (0,_utils_column__WEBPACK_IMPORTED_MODULE_0__.columnGroupWidths)(colByPin, this._columns);
                this.setStylesByGroup();
            }
        });
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    get headerHeight() {
        return this._headerHeight;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = (0,_utils_column__WEBPACK_IMPORTED_MODULE_0__.columnsByPin)(val);
        this._columnsByPin = (0,_utils_column__WEBPACK_IMPORTED_MODULE_0__.columnsByPinArr)(val);
        setTimeout(() => {
            this._columnGroupWidths = (0,_utils_column__WEBPACK_IMPORTED_MODULE_0__.columnGroupWidths)(colsByPin, val);
            this.setStylesByGroup();
        });
    }
    get columns() {
        return this._columns;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.setStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    ngOnDestroy() {
        this.destroyed = true;
    }
    onLongPressStart({ event, model }) {
        model.dragging = true;
        this.dragEventTarget = event;
    }
    onLongPressEnd({ event, model }) {
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout(() => {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            const column = this._columns.find(c => c.$$id === model.$$id);
            if (column) {
                column.dragging = false;
            }
        }, 5);
    }
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    onColumnResized(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column,
            prevValue: column.width,
            newValue: width
        });
    }
    onColumnReordered({ prevIndex, newIndex, model }) {
        const column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    onTargetChanged({ prevIndex, newIndex, initialIndex }) {
        if (prevIndex || prevIndex === 0) {
            const oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            const newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    }
    getColumn(index) {
        const leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        const centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    onSort({ column, prevValue, newValue }) {
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    calcNewSorts(column, prevValue, newValue) {
        let idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        const sorts = this.sorts.map((s, i) => {
            s = Object.assign({}, s);
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        });
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === _types_sort_type__WEBPACK_IMPORTED_MODULE_1__.SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    }
    setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        if (!this.destroyed) {
            this.cd.detectChanges();
        }
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            (0,_utils_translate__WEBPACK_IMPORTED_MODULE_2__.translateXY)(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            const totalDiff = widths.total - this.innerWidth;
            const offset = totalDiff * -1;
            (0,_utils_translate__WEBPACK_IMPORTED_MODULE_2__.translateXY)(styles, offset, 0);
        }
        return styles;
    }
}
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef)); };
DataTableHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DataTableHeaderComponent, selectors: [["datatable-header"]], hostAttrs: [1, "datatable-header"], hostVars: 4, hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
    } }, inputs: { sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", sortUnsetIcon: "sortUnsetIcon", scrollbarH: "scrollbarH", dealsWithGroup: "dealsWithGroup", targetMarkerTemplate: "targetMarkerTemplate", innerWidth: "innerWidth", sorts: "sorts", sortType: "sortType", allRowsSelected: "allRowsSelected", selectionType: "selectionType", reorderable: "reorderable", headerHeight: "headerHeight", columns: "columns", offsetX: "offsetX" }, outputs: { sort: "sort", reorder: "reorder", resize: "resize", select: "select", columnContextmenu: "columnContextmenu" }, decls: 2, vars: 4, consts: [["role", "row", "orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) { return ctx.onColumnReordered($event); })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) { return ctx.onTargetChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: [_directives_orderable_directive__WEBPACK_IMPORTED_MODULE_3__.OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _header_cell_component__WEBPACK_IMPORTED_MODULE_4__.DataTableHeaderCellComponent, _directives_resizeable_directive__WEBPACK_IMPORTED_MODULE_5__.ResizeableDirective, _directives_long_press_directive__WEBPACK_IMPORTED_MODULE_6__.LongPressDirective, _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_7__.DraggableDirective], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 73888:
/*!********************************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/row-detail/row-detail-template.directive.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatableRowDetailTemplateDirective": function() { return /* binding */ DatatableRowDetailTemplateDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DatatableRowDetailTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) { return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DatatableRowDetailTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableRowDetailTemplateDirective, selectors: [["", "ngx-datatable-row-detail-template", ""]] });


/***/ }),

/***/ 47663:
/*!***********************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/components/row-detail/row-detail.directive.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatableRowDetailDirective": function() { return /* binding */ DatatableRowDetailDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _row_detail_template_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row-detail-template.directive */ 73888);



class DatatableRowDetailDirective {
    constructor() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of the row
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * API method to expand all the rows.
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * API method to collapse all the rows.
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) { return new (t || DatatableRowDetailDirective)(); };
DatatableRowDetailDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DatatableRowDetailDirective, selectors: [["ngx-datatable-row-detail"]], contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _row_detail_template_directive__WEBPACK_IMPORTED_MODULE_0__.DatatableRowDetailTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });


/***/ }),

/***/ 5966:
/*!***********************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/directives/draggable.directive.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DraggableDirective": function() { return /* binding */ DraggableDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 46782);




/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
class DraggableDirective {
    constructor(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    onMouseup(event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    onMousedown(event) {
        // we only want to drag the inner header text
        const isDragElm = event.target.classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup(ev));
            const mouseMoveSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, 'mousemove')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(mouseup))
                .subscribe((ev) => this.move(ev, mouseDownPos));
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    move(event, mouseDownPos) {
        if (!this.isDragging)
            return;
        const x = event.clientX - mouseDownPos.x;
        const y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = `${x}px`;
        if (this.dragY)
            this.element.style.top = `${y}px`;
        this.element.classList.add('dragging');
        this.dragging.emit({
            event,
            element: this.element,
            model: this.dragModel
        });
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
DraggableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DraggableDirective, selectors: [["", "draggable", ""]], inputs: { dragEventTarget: "dragEventTarget", dragModel: "dragModel", dragX: "dragX", dragY: "dragY" }, outputs: { dragStart: "dragStart", dragging: "dragging", dragEnd: "dragEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 18971:
/*!************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/directives/long-press.directive.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LongPressDirective": function() { return /* binding */ LongPressDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 46782);




class LongPressDirective {
    constructor() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    get press() {
        return this.pressing;
    }
    get isLongPress() {
        return this.isLongPressing;
    }
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        const target = event.target;
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, 'mouseup');
        this.subscription = mouseup.subscribe((ev) => this.onMouseup());
        this.timeout = setTimeout(() => {
            this.isLongPressing = true;
            this.longPressStart.emit({
                event,
                model: this.pressModel
            });
            this.subscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, 'mousemove')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(mouseup))
                .subscribe((mouseEvent) => this.onMouseMove(mouseEvent)));
            this.loop(event);
        }, this.duration);
        this.loop(event);
    }
    onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
            const xThres = Math.abs(event.clientX - this.mouseX) > 10;
            const yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    loop(event) {
        if (this.isLongPressing) {
            this.timeout = setTimeout(() => {
                this.longPressing.emit({
                    event,
                    model: this.pressModel
                });
                this.loop(event);
            }, 50);
        }
    }
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    }
    onMouseup() {
        this.endPress();
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
LongPressDirective.ɵfac = function LongPressDirective_Factory(t) { return new (t || LongPressDirective)(); };
LongPressDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LongPressDirective, selectors: [["", "long-press", ""]], hostVars: 4, hostBindings: function LongPressDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
    } }, inputs: { pressEnabled: "pressEnabled", pressModel: "pressModel", duration: "duration" }, outputs: { longPressStart: "longPressStart", longPressing: "longPressing", longPressEnd: "longPressEnd" } });


/***/ }),

/***/ 52341:
/*!***********************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/directives/orderable.directive.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderableDirective": function() { return /* binding */ OrderableDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _draggable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draggable.directive */ 5966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);




class OrderableDirective {
    constructor(differs, document) {
        this.document = document;
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.differ = differs.find({}).create();
    }
    ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    ngOnDestroy() {
        this.draggables.forEach(d => {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        });
    }
    updateSubscriptions() {
        const diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            const subscribe = ({ currentValue, previousValue }) => {
                unsubscribe({ previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(this.onDragStart.bind(this));
                    currentValue.dragging.subscribe(this.onDragging.bind(this));
                    currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
                }
            };
            const unsubscribe = ({ previousValue }) => {
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            };
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe);
        }
    }
    onDragStart() {
        this.positions = {};
        let i = 0;
        for (const dragger of this.draggables.toArray()) {
            const elm = dragger.element;
            const left = parseInt(elm.offsetLeft.toString(), 0);
            this.positions[dragger.dragModel.prop] = {
                left,
                right: left + parseInt(elm.offsetWidth.toString(), 0),
                index: i++,
                element: elm
            };
        }
    }
    onDragging({ element, model, event }) {
        const prevPos = this.positions[model.prop];
        const target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    }
    onDragEnd({ element, model, event }) {
        const prevPos = this.positions[model.prop];
        const target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    }
    isTarget(model, event) {
        let i = 0;
        const x = event.x || event.clientX;
        const y = event.y || event.clientY;
        const targets = this.document.elementsFromPoint(x, y);
        for (const prop in this.positions) {
            // current column position which throws event.
            const pos = this.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find((el) => el === pos.element)) {
                return {
                    pos,
                    i
                };
            }
            i++;
        }
    }
    createMapDiffs() {
        return this.draggables.toArray().reduce((acc, curr) => {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }, {});
    }
}
OrderableDirective.ɵfac = function OrderableDirective_Factory(t) { return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
OrderableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: OrderableDirective, selectors: [["", "orderable", ""]], contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _draggable_directive__WEBPACK_IMPORTED_MODULE_0__.DraggableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
    } }, outputs: { reorder: "reorder", targetChanged: "targetChanged" } });


/***/ }),

/***/ 82515:
/*!************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/directives/resizeable.directive.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeableDirective": function() { return /* binding */ ResizeableDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 46782);




class ResizeableDirective {
    constructor(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    ngAfterViewInit() {
        const renderer2 = this.renderer;
        this.resizeHandle = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(this.resizeHandle, 'resize-handle');
        }
        else {
            renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, this.resizeHandle);
    }
    ngOnDestroy() {
        this._destroySubscription();
        if (this.renderer.destroyNode) {
            this.renderer.destroyNode(this.resizeHandle);
        }
        else if (this.resizeHandle) {
            this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
        }
    }
    onMouseup() {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    }
    onMousedown(event) {
        const isHandle = event.target.classList.contains('resize-handle');
        const initialWidth = this.element.clientWidth;
        const mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup());
            const mouseMoveSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, 'mousemove')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(mouseup))
                .subscribe((e) => this.move(e, initialWidth, mouseDownScreenX));
            this.subscription.add(mouseMoveSub);
        }
    }
    move(event, initialWidth, mouseDownScreenX) {
        const movementX = event.screenX - mouseDownScreenX;
        const newWidth = initialWidth + movementX;
        const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = `${newWidth}px`;
        }
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) { return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ResizeableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResizeableDirective, selectors: [["", "resizeable", ""]], hostVars: 2, hostBindings: function ResizeableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
    } }, inputs: { resizeEnabled: "resizeEnabled", minWidth: "minWidth", maxWidth: "maxWidth" }, outputs: { resize: "resize" } });


/***/ }),

/***/ 11693:
/*!************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/directives/visibility.directive.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisibilityDirective": function() { return /* binding */ VisibilityDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
class VisibilityDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.runCheck();
    }
    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run(() => {
            this.isVisible = true;
            this.visible.emit(true);
        });
    }
    runCheck() {
        const check = () => {
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular(() => {
                    this.timeout = setTimeout(() => check(), 50);
                });
            }
        };
        this.timeout = setTimeout(() => check());
    }
}
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) { return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
VisibilityDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VisibilityDirective, selectors: [["", "visibilityObserver", ""]], hostVars: 2, hostBindings: function VisibilityDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
    } }, outputs: { visible: "visible" } });


/***/ }),

/***/ 23836:
/*!*************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/ngx-datatable.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxDatatableModule": function() { return /* binding */ NgxDatatableModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/scrollbar-helper.service */ 83624);
/* harmony import */ var _services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/dimensions-helper.service */ 20681);
/* harmony import */ var _services_column_changes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/column-changes.service */ 15769);
/* harmony import */ var _components_footer_footer_template_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer-template.directive */ 85432);
/* harmony import */ var _directives_visibility_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/visibility.directive */ 11693);
/* harmony import */ var _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/draggable.directive */ 5966);
/* harmony import */ var _directives_resizeable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/resizeable.directive */ 82515);
/* harmony import */ var _directives_orderable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/orderable.directive */ 52341);
/* harmony import */ var _directives_long_press_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/long-press.directive */ 18971);
/* harmony import */ var _components_body_scroller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/body/scroller.component */ 19094);
/* harmony import */ var _components_datatable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/datatable.component */ 77073);
/* harmony import */ var _components_columns_column_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/columns/column.directive */ 42410);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ 669);
/* harmony import */ var _components_header_header_cell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header-cell.component */ 41075);
/* harmony import */ var _components_body_body_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/body/body.component */ 6675);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ 8495);
/* harmony import */ var _components_footer_pager_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/pager.component */ 89061);
/* harmony import */ var _components_body_progress_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/body/progress-bar.component */ 96170);
/* harmony import */ var _components_body_body_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/body/body-row.component */ 47736);
/* harmony import */ var _components_body_body_row_wrapper_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/body/body-row-wrapper.component */ 4747);
/* harmony import */ var _components_row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/row-detail/row-detail.directive */ 47663);
/* harmony import */ var _components_body_body_group_header_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/body/body-group-header.directive */ 86439);
/* harmony import */ var _components_row_detail_row_detail_template_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/row-detail/row-detail-template.directive */ 73888);
/* harmony import */ var _components_body_body_cell_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/body/body-cell.component */ 57572);
/* harmony import */ var _components_body_selection_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/body/selection.component */ 55248);
/* harmony import */ var _components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/columns/column-header.directive */ 2794);
/* harmony import */ var _components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/columns/column-cell.directive */ 55466);
/* harmony import */ var _components_columns_tree_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/columns/tree.directive */ 56281);
/* harmony import */ var _components_footer_footer_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/footer/footer.directive */ 95377);
/* harmony import */ var _components_body_body_group_header_template_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/body/body-group-header-template.directive */ 65479);
/* harmony import */ var _components_body_summary_summary_row_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/body/summary/summary-row.component */ 83262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 37716);

































class NgxDatatableModule {
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param configuration
     */
    static forRoot(configuration) {
        return {
            ngModule: NgxDatatableModule,
            providers: [{ provide: 'configuration', useValue: configuration }]
        };
    }
}
NgxDatatableModule.ɵfac = function NgxDatatableModule_Factory(t) { return new (t || NgxDatatableModule)(); };
NgxDatatableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: NgxDatatableModule });
NgxDatatableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ providers: [_services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_0__.ScrollbarHelper, _services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_1__.DimensionsHelper, _services_column_changes_service__WEBPACK_IMPORTED_MODULE_2__.ColumnChangesService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](NgxDatatableModule, { declarations: [_components_footer_footer_template_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableFooterTemplateDirective,
        _directives_visibility_directive__WEBPACK_IMPORTED_MODULE_4__.VisibilityDirective,
        _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_5__.DraggableDirective,
        _directives_resizeable_directive__WEBPACK_IMPORTED_MODULE_6__.ResizeableDirective,
        _directives_orderable_directive__WEBPACK_IMPORTED_MODULE_7__.OrderableDirective,
        _directives_long_press_directive__WEBPACK_IMPORTED_MODULE_8__.LongPressDirective,
        _components_body_scroller_component__WEBPACK_IMPORTED_MODULE_9__.ScrollerComponent,
        _components_datatable_component__WEBPACK_IMPORTED_MODULE_10__.DatatableComponent,
        _components_columns_column_directive__WEBPACK_IMPORTED_MODULE_11__.DataTableColumnDirective,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__.DataTableHeaderComponent,
        _components_header_header_cell_component__WEBPACK_IMPORTED_MODULE_13__.DataTableHeaderCellComponent,
        _components_body_body_component__WEBPACK_IMPORTED_MODULE_14__.DataTableBodyComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__.DataTableFooterComponent,
        _components_footer_pager_component__WEBPACK_IMPORTED_MODULE_16__.DataTablePagerComponent,
        _components_body_progress_bar_component__WEBPACK_IMPORTED_MODULE_17__.ProgressBarComponent,
        _components_body_body_row_component__WEBPACK_IMPORTED_MODULE_18__.DataTableBodyRowComponent,
        _components_body_body_row_wrapper_component__WEBPACK_IMPORTED_MODULE_19__.DataTableRowWrapperComponent,
        _components_row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_20__.DatatableRowDetailDirective,
        _components_body_body_group_header_directive__WEBPACK_IMPORTED_MODULE_21__.DatatableGroupHeaderDirective,
        _components_row_detail_row_detail_template_directive__WEBPACK_IMPORTED_MODULE_22__.DatatableRowDetailTemplateDirective,
        _components_body_body_cell_component__WEBPACK_IMPORTED_MODULE_23__.DataTableBodyCellComponent,
        _components_body_selection_component__WEBPACK_IMPORTED_MODULE_24__.DataTableSelectionComponent,
        _components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_25__.DataTableColumnHeaderDirective,
        _components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_26__.DataTableColumnCellDirective,
        _components_columns_tree_directive__WEBPACK_IMPORTED_MODULE_27__.DataTableColumnCellTreeToggle,
        _components_footer_footer_directive__WEBPACK_IMPORTED_MODULE_28__.DatatableFooterDirective,
        _components_body_body_group_header_template_directive__WEBPACK_IMPORTED_MODULE_29__.DatatableGroupHeaderTemplateDirective,
        _components_body_summary_summary_row_component__WEBPACK_IMPORTED_MODULE_30__.DataTableSummaryRowComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule], exports: [_components_datatable_component__WEBPACK_IMPORTED_MODULE_10__.DatatableComponent,
        _components_row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_20__.DatatableRowDetailDirective,
        _components_body_body_group_header_directive__WEBPACK_IMPORTED_MODULE_21__.DatatableGroupHeaderDirective,
        _components_row_detail_row_detail_template_directive__WEBPACK_IMPORTED_MODULE_22__.DatatableRowDetailTemplateDirective,
        _components_columns_column_directive__WEBPACK_IMPORTED_MODULE_11__.DataTableColumnDirective,
        _components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_25__.DataTableColumnHeaderDirective,
        _components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_26__.DataTableColumnCellDirective,
        _components_columns_tree_directive__WEBPACK_IMPORTED_MODULE_27__.DataTableColumnCellTreeToggle,
        _components_footer_footer_template_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableFooterTemplateDirective,
        _components_footer_footer_directive__WEBPACK_IMPORTED_MODULE_28__.DatatableFooterDirective,
        _components_footer_pager_component__WEBPACK_IMPORTED_MODULE_16__.DataTablePagerComponent,
        _components_body_body_group_header_template_directive__WEBPACK_IMPORTED_MODULE_29__.DatatableGroupHeaderTemplateDirective] }); })();


/***/ }),

/***/ 15769:
/*!************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/services/column-changes.service.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnChangesService": function() { return /* binding */ ColumnChangesService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
class ColumnChangesService {
    constructor() {
        this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    get columnInputChanges$() {
        return this.columnInputChanges.asObservable();
    }
    onInputChange() {
        this.columnInputChanges.next();
    }
}
ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) { return new (t || ColumnChangesService)(); };
ColumnChangesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ColumnChangesService, factory: ColumnChangesService.ɵfac });


/***/ }),

/***/ 20681:
/*!***************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/services/dimensions-helper.service.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DimensionsHelper": function() { return /* binding */ DimensionsHelper; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class DimensionsHelper {
    getDimensions(element) {
        return element.getBoundingClientRect();
    }
}
DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) { return new (t || DimensionsHelper)(); };
DimensionsHelper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DimensionsHelper, factory: DimensionsHelper.ɵfac });


/***/ }),

/***/ 83624:
/*!**************************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/services/scrollbar-helper.service.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollbarHelper": function() { return /* binding */ ScrollbarHelper; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class ScrollbarHelper {
    constructor(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    getWidth() {
        const outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        const inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        const widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    }
}
ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) { return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
ScrollbarHelper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScrollbarHelper, factory: ScrollbarHelper.ɵfac });


/***/ }),

/***/ 71237:
/*!*********************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/types/click.type.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickType": function() { return /* binding */ ClickType; }
/* harmony export */ });
var ClickType;
(function (ClickType) {
    ClickType["single"] = "single";
    ClickType["double"] = "double";
})(ClickType || (ClickType = {}));


/***/ }),

/***/ 78475:
/*!***************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/types/column-mode.type.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnMode": function() { return /* binding */ ColumnMode; }
/* harmony export */ });
var ColumnMode;
(function (ColumnMode) {
    ColumnMode["standard"] = "standard";
    ColumnMode["flex"] = "flex";
    ColumnMode["force"] = "force";
})(ColumnMode || (ColumnMode = {}));


/***/ }),

/***/ 61734:
/*!***************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/types/contextmenu.type.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextmenuType": function() { return /* binding */ ContextmenuType; }
/* harmony export */ });
var ContextmenuType;
(function (ContextmenuType) {
    ContextmenuType["header"] = "header";
    ContextmenuType["body"] = "body";
})(ContextmenuType || (ContextmenuType = {}));


/***/ }),

/***/ 20553:
/*!*************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/types/selection.type.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionType": function() { return /* binding */ SelectionType; }
/* harmony export */ });
var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));


/***/ }),

/***/ 25126:
/*!******************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/types/sort-direction.type.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortDirection": function() { return /* binding */ SortDirection; }
/* harmony export */ });
var SortDirection;
(function (SortDirection) {
    SortDirection["asc"] = "asc";
    SortDirection["desc"] = "desc";
})(SortDirection || (SortDirection = {}));


/***/ }),

/***/ 77996:
/*!*****************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/types/sort-prop-dir.type.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 11688:
/*!********************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/types/sort.type.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortType": function() { return /* binding */ SortType; }
/* harmony export */ });
var SortType;
(function (SortType) {
    SortType["single"] = "single";
    SortType["multi"] = "multi";
})(SortType || (SortType = {}));


/***/ }),

/***/ 66275:
/*!****************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/types/table-column.type.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 48827:
/*!*********************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/camel-case.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelCase": function() { return /* binding */ camelCase; },
/* harmony export */   "deCamelCase": function() { return /* binding */ deCamelCase; }
/* harmony export */ });
/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */
function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str
        .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '')
        .trim()
        .toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
        return b.trim() + c.toUpperCase();
    });
    return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */
function deCamelCase(str) {
    return str.replace(/([A-Z])/g, match => ` ${match}`).replace(/^./, match => match.toUpperCase());
}


/***/ }),

/***/ 61307:
/*!************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/column-helper.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setColumnDefaults": function() { return /* binding */ setColumnDefaults; },
/* harmony export */   "isNullOrUndefined": function() { return /* binding */ isNullOrUndefined; },
/* harmony export */   "translateTemplates": function() { return /* binding */ translateTemplates; }
/* harmony export */ });
/* harmony import */ var _camel_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camel-case */ 48827);
/* harmony import */ var _id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id */ 88516);
/* harmony import */ var _column_prop_getters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column-prop-getters */ 8794);



/**
 * Sets the column defaults
 */
function setColumnDefaults(columns) {
    if (!columns)
        return;
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    let treeColumnFound = false;
    for (const column of columns) {
        if (!column.$$id) {
            column.$$id = (0,_id__WEBPACK_IMPORTED_MODULE_1__.id)();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = (0,_camel_case__WEBPACK_IMPORTED_MODULE_0__.camelCase)(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = (0,_column_prop_getters__WEBPACK_IMPORTED_MODULE_2__.getterForProp)(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = (0,_camel_case__WEBPACK_IMPORTED_MODULE_0__.deCamelCase)(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
        if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
        }
        else {
            if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
            }
            else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
            }
        }
    }
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */
function translateTemplates(templates) {
    const result = [];
    for (const temp of templates) {
        const col = {};
        const props = Object.getOwnPropertyNames(temp);
        for (const prop of props) {
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}


/***/ }),

/***/ 8794:
/*!******************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/column-prop-getters.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyStringGetter": function() { return /* binding */ emptyStringGetter; },
/* harmony export */   "getterForProp": function() { return /* binding */ getterForProp; },
/* harmony export */   "numericIndexGetter": function() { return /* binding */ numericIndexGetter; },
/* harmony export */   "shallowValueGetter": function() { return /* binding */ shallowValueGetter; },
/* harmony export */   "deepValueGetter": function() { return /* binding */ deepValueGetter; }
/* harmony export */ });
/**
 * Always returns the empty string ''
 */
function emptyStringGetter() {
    return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */
function getterForProp(prop) {
    if (prop == null) {
        return emptyStringGetter;
    }
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns any or '' if invalid index
 */
function numericIndexGetter(row, index) {
    if (row == null) {
        return '';
    }
    // mimic behavior of deepValueGetter
    if (!row || index == null) {
        return row;
    }
    const value = row[index];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 */
function shallowValueGetter(obj, fieldName) {
    if (obj == null) {
        return '';
    }
    if (!obj || !fieldName) {
        return obj;
    }
    const value = obj[fieldName];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 */
function deepValueGetter(obj, path) {
    if (obj == null) {
        return '';
    }
    if (!obj || !path) {
        return obj;
    }
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    let current = obj[path];
    if (current !== undefined) {
        return current;
    }
    current = obj;
    const split = path.split('.');
    if (split.length) {
        for (let i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null) {
                return '';
            }
        }
    }
    return current;
}


/***/ }),

/***/ 80492:
/*!*****************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/column.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "columnsByPin": function() { return /* binding */ columnsByPin; },
/* harmony export */   "columnGroupWidths": function() { return /* binding */ columnGroupWidths; },
/* harmony export */   "columnTotalWidth": function() { return /* binding */ columnTotalWidth; },
/* harmony export */   "columnsTotalWidth": function() { return /* binding */ columnsTotalWidth; },
/* harmony export */   "columnsByPinArr": function() { return /* binding */ columnsByPinArr; }
/* harmony export */ });
/**
 * Returns the columns by pin.
 */
function columnsByPin(cols) {
    const ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (const col of cols) {
            if (col.frozenLeft) {
                ret.left.push(col);
            }
            else if (col.frozenRight) {
                ret.right.push(col);
            }
            else {
                ret.center.push(col);
            }
        }
    }
    return ret;
}
/**
 * Returns the widths of all group sets of a column
 */
function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
    };
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnTotalWidth(columns, prop) {
    let totalWidth = 0;
    if (columns) {
        for (const c of columns) {
            const has = prop && c[prop];
            const width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
        }
    }
    return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnsTotalWidth(columns, prop) {
    let totalWidth = 0;
    for (const column of columns) {
        const has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
function columnsByPinArr(val) {
    const colsByPinArr = [];
    const colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}


/***/ }),

/***/ 24172:
/*!*************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/elm-from-point.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementsFromPoint": function() { return /* binding */ elementsFromPoint; }
/* harmony export */ });
if (typeof document !== 'undefined' && !document.elementsFromPoint) {
    document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 */
function elementsFromPoint(x, y) {
    const elements = [];
    const previousPointerEvents = [];
    let current; // TODO: window.getComputedStyle should be used with inferred type (Element)
    let i;
    let d;
    //if (document === undefined) return elements;
    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });
        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }
    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; (d = previousPointerEvents[--i]);) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }
    // return our results
    return elements;
}
/*tslint:enable*/


/***/ }),

/***/ 88516:
/*!*************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/id.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": function() { return /* binding */ id; }
/* harmony export */ });
/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */
function id() {
    return ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
}


/***/ }),

/***/ 70140:
/*!***************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/keys.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keys": function() { return /* binding */ Keys; }
/* harmony export */ });
var Keys;
(function (Keys) {
    Keys[Keys["up"] = 38] = "up";
    Keys[Keys["down"] = 40] = "down";
    Keys[Keys["return"] = 13] = "return";
    Keys[Keys["escape"] = 27] = "escape";
    Keys[Keys["left"] = 37] = "left";
    Keys[Keys["right"] = 39] = "right";
})(Keys || (Keys = {}));


/***/ }),

/***/ 73510:
/*!***************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/math.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTotalFlexGrow": function() { return /* binding */ getTotalFlexGrow; },
/* harmony export */   "adjustColumnWidths": function() { return /* binding */ adjustColumnWidths; },
/* harmony export */   "forceFillColumnWidths": function() { return /* binding */ forceFillColumnWidths; }
/* harmony export */ });
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ 80492);

/**
 * Calculates the Total Flex Grow
 */
function getTotalFlexGrow(columns) {
    let totalFlexGrow = 0;
    for (const c of columns) {
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */
function adjustColumnWidths(allColumns, expectedWidth) {
    const columnsWidth = (0,_column__WEBPACK_IMPORTED_MODULE_0__.columnsTotalWidth)(allColumns);
    const totalFlexGrow = getTotalFlexGrow(allColumns);
    const colsByGroup = (0,_column__WEBPACK_IMPORTED_MODULE_0__.columnsByPin)(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (const attr in colsByGroup) {
        for (const column of colsByGroup[attr]) {
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            }
            else {
                column.width = 0;
            }
        }
    }
    const hasMinWidth = {};
    let remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        const widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (const attr in colsByGroup) {
            for (const column of colsByGroup[attr]) {
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
                        remainingWidth += newWidth - column.minWidth;
                        column.width = column.minWidth;
                        hasMinWidth[column.prop] = true;
                    }
                    else {
                        column.width = newWidth;
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
    const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(c => {
        return c.canAutoResize !== false;
    });
    for (const column of columnsToResize) {
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    let additionWidthPerColumn = 0;
    let exceedsWindow = false;
    let contentWidth = getContentWidth(allColumns, defaultColWidth);
    let remainingWidth = expectedWidth - contentWidth;
    const columnsProcessed = [];
    const remainingWidthLimit = 1; // when to stop
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (const column of columnsToResize) {
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (const column of columnsProcessed) {
        const index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
    let contentWidth = 0;
    for (const column of allColumns) {
        contentWidth += column.width || defaultColWidth;
    }
    return contentWidth;
}


/***/ }),

/***/ 30393:
/*!*******************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/prefixes.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVendorPrefixedName": function() { return /* binding */ getVendorPrefixedName; }
/* harmony export */ });
/* harmony import */ var _camel_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camel-case */ 48827);

const cache = {};
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const prefix = (function () {
    const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    const match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    const pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom,
            lowercase: pre,
            css: `-${pre}-`,
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
})();
function getVendorPrefixedName(property) {
    const name = (0,_camel_case__WEBPACK_IMPORTED_MODULE_0__.camelCase)(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}


/***/ }),

/***/ 6457:
/*!***************************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/row-height-cache.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RowHeightCache": function() { return /* binding */ RowHeightCache; }
/* harmony export */ });
/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
class RowHeightCache {
    constructor() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     */
    clearCache() {
        this.treeArray = [];
    }
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */
    initCache(details) {
        const { rows, rowHeight, detailRowHeight, externalVirtual, rowCount, rowIndexes, rowExpansions } = details;
        const isFn = typeof rowHeight === 'function';
        const isDetailFn = typeof detailRowHeight === 'function';
        if (!isFn && isNaN(rowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
        }
        const n = externalVirtual ? rowCount : rows.length;
        this.treeArray = new Array(n);
        for (let i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (let i = 0; i < n; ++i) {
            const row = rows[i];
            let currentRowHeight = rowHeight;
            if (isFn) {
                currentRowHeight = rowHeight(row);
            }
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            const expanded = rowExpansions.has(row);
            if (row && expanded) {
                if (isDetailFn) {
                    const index = rowIndexes.get(row);
                    currentRowHeight += detailRowHeight(row, index);
                }
                else {
                    currentRowHeight += detailRowHeight;
                }
            }
            this.update(i, currentRowHeight);
        }
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     */
    getRowIndex(scrollY) {
        if (scrollY === 0)
            return 0;
        return this.calcRowIndex(scrollY);
    }
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     */
    update(atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
        }
        const n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= atRowIndex + 1;
        }
    }
    /**
     * Range Sum query from 1 to the rowIndex
     */
    query(atIndex) {
        if (!this.treeArray.length) {
            throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
        }
        let sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    }
    /**
     * Find the total height between 2 row indexes
     */
    queryBetween(atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     */
    calcRowIndex(sum) {
        if (!this.treeArray.length)
            return 0;
        let pos = -1;
        const dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            const nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    }
}


/***/ }),

/***/ 63119:
/*!********************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/selection.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectRows": function() { return /* binding */ selectRows; },
/* harmony export */   "selectRowsBetween": function() { return /* binding */ selectRowsBetween; }
/* harmony export */ });
function selectRows(selected, row, comparefn) {
    const selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    const reverse = index < prevIndex;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const greater = i >= prevIndex && i <= index;
        const lesser = i <= prevIndex && i >= index;
        let range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}


/***/ }),

/***/ 63648:
/*!***************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/sort.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextSortDir": function() { return /* binding */ nextSortDir; },
/* harmony export */   "orderByComparator": function() { return /* binding */ orderByComparator; },
/* harmony export */   "sortRows": function() { return /* binding */ sortRows; }
/* harmony export */ });
/* harmony import */ var _column_prop_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-prop-getters */ 8794);
/* harmony import */ var _types_sort_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/sort.type */ 11688);
/* harmony import */ var _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/sort-direction.type */ 25126);



/**
 * Gets the next sort direction
 */
function nextSortDir(sortType, current) {
    if (sortType === _types_sort_type__WEBPACK_IMPORTED_MODULE_1__.SortType.single) {
        if (current === _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__.SortDirection.asc) {
            return _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__.SortDirection.desc;
        }
        else {
            return _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__.SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__.SortDirection.asc;
        }
        else if (current === _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__.SortDirection.asc) {
            return _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__.SortDirection.desc;
        }
        else if (current === _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__.SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */
function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */
function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return [...rows];
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     */
    const rowToIndexMap = new Map();
    rows.forEach((row, index) => rowToIndexMap.set(row, index));
    const temp = [...rows];
    const cols = columns.reduce((obj, col) => {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }, {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    const cachedDirs = dirs.map(dir => {
        const prop = dir.prop;
        return {
            prop,
            dir: dir.dir,
            valueGetter: (0,_column_prop_getters__WEBPACK_IMPORTED_MODULE_0__.getterForProp)(prop),
            compareFn: cols[prop] || orderByComparator
        };
    });
    return temp.sort(function (rowA, rowB) {
        for (const cachedDir of cachedDirs) {
            // Get property and valuegetters for column to be sorted
            const { prop, valueGetter } = cachedDir;
            // Get A and B cell values from rows based on properties of the columns
            const propA = valueGetter(rowA, prop);
            const propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            const comparison = cachedDir.dir !== _types_sort_direction_type__WEBPACK_IMPORTED_MODULE_2__.SortDirection.desc
                ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    });
}


/***/ }),

/***/ 6938:
/*!*******************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/throttle.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throttle": function() { return /* binding */ throttle; },
/* harmony export */   "throttleable": function() { return /* binding */ throttleable; }
/* harmony export */ });
/**
 * Throttle a function
 */
function throttle(func, wait, options) {
    options = options || {};
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}


/***/ }),

/***/ 62317:
/*!********************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/translate.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translateXY": function() { return /* binding */ translateXY; }
/* harmony export */ });
/* harmony import */ var _prefixes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefixes */ 30393);
/* harmony import */ var _camel_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case */ 48827);


// browser detection and prefixing tools
const transform = typeof window !== 'undefined' ? (0,_prefixes__WEBPACK_IMPORTED_MODULE_0__.getVendorPrefixedName)('transform') : undefined;
const backfaceVisibility = typeof window !== 'undefined' ? (0,_prefixes__WEBPACK_IMPORTED_MODULE_0__.getVendorPrefixedName)('backfaceVisibility') : undefined;
const hasCSSTransforms = typeof window !== 'undefined' ? !!(0,_prefixes__WEBPACK_IMPORTED_MODULE_0__.getVendorPrefixedName)('transform') : undefined;
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!(0,_prefixes__WEBPACK_IMPORTED_MODULE_0__.getVendorPrefixedName)('perspective') : undefined;
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[(0,_camel_case__WEBPACK_IMPORTED_MODULE_1__.camelCase)(transform)] = `translate(${x}px, ${y}px)`;
        }
    }
    else {
        styles.top = `${y}px`;
        styles.left = `${x}px`;
    }
}


/***/ }),

/***/ 16820:
/*!***************************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/lib/utils/tree.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionalGetterForProp": function() { return /* binding */ optionalGetterForProp; },
/* harmony export */   "groupRowsByParents": function() { return /* binding */ groupRowsByParents; }
/* harmony export */ });
/* harmony import */ var _column_prop_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-prop-getters */ 8794);

function optionalGetterForProp(prop) {
    return prop && (row => (0,_column_prop_getters__WEBPACK_IMPORTED_MODULE_0__.getterForProp)(prop)(row, prop));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param rows
 *
 */
function groupRowsByParents(rows, from, to) {
    if (from && to) {
        const nodeById = {};
        const l = rows.length;
        let node = null;
        nodeById[0] = new TreeNode(); // that's the root node
        const uniqIDs = rows.reduce((arr, item) => {
            const toValue = to(item);
            if (arr.indexOf(toValue) === -1) {
                arr.push(toValue);
            }
            return arr;
        }, []);
        for (let i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }
        for (let i = 0; i < l; i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[i])];
            let parent = 0;
            const fromValue = from(node.row);
            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
                parent = fromValue;
            }
            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
        }
        let resolvedRows = [];
        nodeById[0].flatten(function () {
            resolvedRows = [...resolvedRows, this.row];
        }, true);
        return resolvedRows;
    }
    else {
        return rows;
    }
}
class TreeNode {
    constructor(row = null) {
        if (!row) {
            row = {
                level: -1,
                treeStatus: 'expanded'
            };
        }
        this.row = row;
        this.parent = null;
        this.children = [];
    }
    flatten(f, recursive) {
        if (this.row['treeStatus'] === 'expanded') {
            for (let i = 0, l = this.children.length; i < l; i++) {
                const child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive)
                    child.flatten.apply(child, arguments);
            }
        }
    }
}


/***/ }),

/***/ 85671:
/*!***********************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/src/public-api.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxDatatableModule": function() { return /* reexport safe */ _lib_ngx_datatable_module__WEBPACK_IMPORTED_MODULE_0__.NgxDatatableModule; },
/* harmony export */   "DatatableComponent": function() { return /* reexport safe */ _lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent; },
/* harmony export */   "DataTableHeaderComponent": function() { return /* reexport safe */ _lib_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.DataTableHeaderComponent; },
/* harmony export */   "DataTableHeaderCellComponent": function() { return /* reexport safe */ _lib_components_header_header_cell_component__WEBPACK_IMPORTED_MODULE_3__.DataTableHeaderCellComponent; },
/* harmony export */   "DataTableBodyComponent": function() { return /* reexport safe */ _lib_components_body_body_component__WEBPACK_IMPORTED_MODULE_4__.DataTableBodyComponent; },
/* harmony export */   "DataTableBodyCellComponent": function() { return /* reexport safe */ _lib_components_body_body_cell_component__WEBPACK_IMPORTED_MODULE_5__.DataTableBodyCellComponent; },
/* harmony export */   "DataTableBodyRowComponent": function() { return /* reexport safe */ _lib_components_body_body_row_component__WEBPACK_IMPORTED_MODULE_6__.DataTableBodyRowComponent; },
/* harmony export */   "ProgressBarComponent": function() { return /* reexport safe */ _lib_components_body_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__.ProgressBarComponent; },
/* harmony export */   "ScrollerComponent": function() { return /* reexport safe */ _lib_components_body_scroller_component__WEBPACK_IMPORTED_MODULE_8__.ScrollerComponent; },
/* harmony export */   "DataTableRowWrapperComponent": function() { return /* reexport safe */ _lib_components_body_body_row_wrapper_component__WEBPACK_IMPORTED_MODULE_9__.DataTableRowWrapperComponent; },
/* harmony export */   "DataTableSelectionComponent": function() { return /* reexport safe */ _lib_components_body_selection_component__WEBPACK_IMPORTED_MODULE_10__.DataTableSelectionComponent; },
/* harmony export */   "DatatableGroupHeaderDirective": function() { return /* reexport safe */ _lib_components_body_body_group_header_directive__WEBPACK_IMPORTED_MODULE_11__.DatatableGroupHeaderDirective; },
/* harmony export */   "DatatableGroupHeaderTemplateDirective": function() { return /* reexport safe */ _lib_components_body_body_group_header_template_directive__WEBPACK_IMPORTED_MODULE_12__.DatatableGroupHeaderTemplateDirective; },
/* harmony export */   "DataTableSummaryRowComponent": function() { return /* reexport safe */ _lib_components_body_summary_summary_row_component__WEBPACK_IMPORTED_MODULE_13__.DataTableSummaryRowComponent; },
/* harmony export */   "DataTableFooterComponent": function() { return /* reexport safe */ _lib_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__.DataTableFooterComponent; },
/* harmony export */   "DataTablePagerComponent": function() { return /* reexport safe */ _lib_components_footer_pager_component__WEBPACK_IMPORTED_MODULE_15__.DataTablePagerComponent; },
/* harmony export */   "DatatableFooterDirective": function() { return /* reexport safe */ _lib_components_footer_footer_directive__WEBPACK_IMPORTED_MODULE_16__.DatatableFooterDirective; },
/* harmony export */   "DataTableFooterTemplateDirective": function() { return /* reexport safe */ _lib_components_footer_footer_template_directive__WEBPACK_IMPORTED_MODULE_17__.DataTableFooterTemplateDirective; },
/* harmony export */   "DataTableColumnDirective": function() { return /* reexport safe */ _lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_18__.DataTableColumnDirective; },
/* harmony export */   "DataTableColumnHeaderDirective": function() { return /* reexport safe */ _lib_components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_19__.DataTableColumnHeaderDirective; },
/* harmony export */   "DataTableColumnCellDirective": function() { return /* reexport safe */ _lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_20__.DataTableColumnCellDirective; },
/* harmony export */   "DataTableColumnCellTreeToggle": function() { return /* reexport safe */ _lib_components_columns_tree_directive__WEBPACK_IMPORTED_MODULE_21__.DataTableColumnCellTreeToggle; },
/* harmony export */   "DatatableRowDetailDirective": function() { return /* reexport safe */ _lib_components_row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_22__.DatatableRowDetailDirective; },
/* harmony export */   "DatatableRowDetailTemplateDirective": function() { return /* reexport safe */ _lib_components_row_detail_row_detail_template_directive__WEBPACK_IMPORTED_MODULE_23__.DatatableRowDetailTemplateDirective; },
/* harmony export */   "DraggableDirective": function() { return /* reexport safe */ _lib_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_24__.DraggableDirective; },
/* harmony export */   "LongPressDirective": function() { return /* reexport safe */ _lib_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_25__.LongPressDirective; },
/* harmony export */   "OrderableDirective": function() { return /* reexport safe */ _lib_directives_orderable_directive__WEBPACK_IMPORTED_MODULE_26__.OrderableDirective; },
/* harmony export */   "ResizeableDirective": function() { return /* reexport safe */ _lib_directives_resizeable_directive__WEBPACK_IMPORTED_MODULE_27__.ResizeableDirective; },
/* harmony export */   "VisibilityDirective": function() { return /* reexport safe */ _lib_directives_visibility_directive__WEBPACK_IMPORTED_MODULE_28__.VisibilityDirective; },
/* harmony export */   "ScrollbarHelper": function() { return /* reexport safe */ _lib_services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_29__.ScrollbarHelper; },
/* harmony export */   "DimensionsHelper": function() { return /* reexport safe */ _lib_services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_30__.DimensionsHelper; },
/* harmony export */   "ColumnChangesService": function() { return /* reexport safe */ _lib_services_column_changes_service__WEBPACK_IMPORTED_MODULE_31__.ColumnChangesService; },
/* harmony export */   "ColumnMode": function() { return /* reexport safe */ _lib_types_column_mode_type__WEBPACK_IMPORTED_MODULE_32__.ColumnMode; },
/* harmony export */   "SortType": function() { return /* reexport safe */ _lib_types_sort_type__WEBPACK_IMPORTED_MODULE_33__.SortType; },
/* harmony export */   "SortDirection": function() { return /* reexport safe */ _lib_types_sort_direction_type__WEBPACK_IMPORTED_MODULE_34__.SortDirection; },
/* harmony export */   "SelectionType": function() { return /* reexport safe */ _lib_types_selection_type__WEBPACK_IMPORTED_MODULE_35__.SelectionType; },
/* harmony export */   "ClickType": function() { return /* reexport safe */ _lib_types_click_type__WEBPACK_IMPORTED_MODULE_36__.ClickType; },
/* harmony export */   "ContextmenuType": function() { return /* reexport safe */ _lib_types_contextmenu_type__WEBPACK_IMPORTED_MODULE_39__.ContextmenuType; },
/* harmony export */   "id": function() { return /* reexport safe */ _lib_utils_id__WEBPACK_IMPORTED_MODULE_40__.id; },
/* harmony export */   "columnGroupWidths": function() { return /* reexport safe */ _lib_utils_column__WEBPACK_IMPORTED_MODULE_41__.columnGroupWidths; },
/* harmony export */   "columnTotalWidth": function() { return /* reexport safe */ _lib_utils_column__WEBPACK_IMPORTED_MODULE_41__.columnTotalWidth; },
/* harmony export */   "columnsByPin": function() { return /* reexport safe */ _lib_utils_column__WEBPACK_IMPORTED_MODULE_41__.columnsByPin; },
/* harmony export */   "columnsByPinArr": function() { return /* reexport safe */ _lib_utils_column__WEBPACK_IMPORTED_MODULE_41__.columnsByPinArr; },
/* harmony export */   "columnsTotalWidth": function() { return /* reexport safe */ _lib_utils_column__WEBPACK_IMPORTED_MODULE_41__.columnsTotalWidth; },
/* harmony export */   "deepValueGetter": function() { return /* reexport safe */ _lib_utils_column_prop_getters__WEBPACK_IMPORTED_MODULE_42__.deepValueGetter; },
/* harmony export */   "emptyStringGetter": function() { return /* reexport safe */ _lib_utils_column_prop_getters__WEBPACK_IMPORTED_MODULE_42__.emptyStringGetter; },
/* harmony export */   "getterForProp": function() { return /* reexport safe */ _lib_utils_column_prop_getters__WEBPACK_IMPORTED_MODULE_42__.getterForProp; },
/* harmony export */   "numericIndexGetter": function() { return /* reexport safe */ _lib_utils_column_prop_getters__WEBPACK_IMPORTED_MODULE_42__.numericIndexGetter; },
/* harmony export */   "shallowValueGetter": function() { return /* reexport safe */ _lib_utils_column_prop_getters__WEBPACK_IMPORTED_MODULE_42__.shallowValueGetter; },
/* harmony export */   "camelCase": function() { return /* reexport safe */ _lib_utils_camel_case__WEBPACK_IMPORTED_MODULE_43__.camelCase; },
/* harmony export */   "deCamelCase": function() { return /* reexport safe */ _lib_utils_camel_case__WEBPACK_IMPORTED_MODULE_43__.deCamelCase; },
/* harmony export */   "Keys": function() { return /* reexport safe */ _lib_utils_keys__WEBPACK_IMPORTED_MODULE_44__.Keys; },
/* harmony export */   "adjustColumnWidths": function() { return /* reexport safe */ _lib_utils_math__WEBPACK_IMPORTED_MODULE_45__.adjustColumnWidths; },
/* harmony export */   "forceFillColumnWidths": function() { return /* reexport safe */ _lib_utils_math__WEBPACK_IMPORTED_MODULE_45__.forceFillColumnWidths; },
/* harmony export */   "getTotalFlexGrow": function() { return /* reexport safe */ _lib_utils_math__WEBPACK_IMPORTED_MODULE_45__.getTotalFlexGrow; },
/* harmony export */   "getVendorPrefixedName": function() { return /* reexport safe */ _lib_utils_prefixes__WEBPACK_IMPORTED_MODULE_46__.getVendorPrefixedName; },
/* harmony export */   "selectRows": function() { return /* reexport safe */ _lib_utils_selection__WEBPACK_IMPORTED_MODULE_47__.selectRows; },
/* harmony export */   "selectRowsBetween": function() { return /* reexport safe */ _lib_utils_selection__WEBPACK_IMPORTED_MODULE_47__.selectRowsBetween; },
/* harmony export */   "translateXY": function() { return /* reexport safe */ _lib_utils_translate__WEBPACK_IMPORTED_MODULE_48__.translateXY; },
/* harmony export */   "throttle": function() { return /* reexport safe */ _lib_utils_throttle__WEBPACK_IMPORTED_MODULE_49__.throttle; },
/* harmony export */   "throttleable": function() { return /* reexport safe */ _lib_utils_throttle__WEBPACK_IMPORTED_MODULE_49__.throttleable; },
/* harmony export */   "nextSortDir": function() { return /* reexport safe */ _lib_utils_sort__WEBPACK_IMPORTED_MODULE_50__.nextSortDir; },
/* harmony export */   "orderByComparator": function() { return /* reexport safe */ _lib_utils_sort__WEBPACK_IMPORTED_MODULE_50__.orderByComparator; },
/* harmony export */   "sortRows": function() { return /* reexport safe */ _lib_utils_sort__WEBPACK_IMPORTED_MODULE_50__.sortRows; },
/* harmony export */   "RowHeightCache": function() { return /* reexport safe */ _lib_utils_row_height_cache__WEBPACK_IMPORTED_MODULE_51__.RowHeightCache; },
/* harmony export */   "isNullOrUndefined": function() { return /* reexport safe */ _lib_utils_column_helper__WEBPACK_IMPORTED_MODULE_52__.isNullOrUndefined; },
/* harmony export */   "setColumnDefaults": function() { return /* reexport safe */ _lib_utils_column_helper__WEBPACK_IMPORTED_MODULE_52__.setColumnDefaults; },
/* harmony export */   "translateTemplates": function() { return /* reexport safe */ _lib_utils_column_helper__WEBPACK_IMPORTED_MODULE_52__.translateTemplates; },
/* harmony export */   "elementsFromPoint": function() { return /* reexport safe */ _lib_utils_elm_from_point__WEBPACK_IMPORTED_MODULE_53__.elementsFromPoint; },
/* harmony export */   "groupRowsByParents": function() { return /* reexport safe */ _lib_utils_tree__WEBPACK_IMPORTED_MODULE_54__.groupRowsByParents; },
/* harmony export */   "optionalGetterForProp": function() { return /* reexport safe */ _lib_utils_tree__WEBPACK_IMPORTED_MODULE_54__.optionalGetterForProp; }
/* harmony export */ });
/* harmony import */ var _lib_ngx_datatable_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-datatable.module */ 23836);
/* harmony import */ var _lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/datatable.component */ 77073);
/* harmony import */ var _lib_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/header/header.component */ 669);
/* harmony import */ var _lib_components_header_header_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/header/header-cell.component */ 41075);
/* harmony import */ var _lib_components_body_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/components/body/body.component */ 6675);
/* harmony import */ var _lib_components_body_body_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/body/body-cell.component */ 57572);
/* harmony import */ var _lib_components_body_body_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/body/body-row.component */ 47736);
/* harmony import */ var _lib_components_body_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/components/body/progress-bar.component */ 96170);
/* harmony import */ var _lib_components_body_scroller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/components/body/scroller.component */ 19094);
/* harmony import */ var _lib_components_body_body_row_wrapper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/components/body/body-row-wrapper.component */ 4747);
/* harmony import */ var _lib_components_body_selection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/components/body/selection.component */ 55248);
/* harmony import */ var _lib_components_body_body_group_header_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/components/body/body-group-header.directive */ 86439);
/* harmony import */ var _lib_components_body_body_group_header_template_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/components/body/body-group-header-template.directive */ 65479);
/* harmony import */ var _lib_components_body_summary_summary_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/components/body/summary/summary-row.component */ 83262);
/* harmony import */ var _lib_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/components/footer/footer.component */ 8495);
/* harmony import */ var _lib_components_footer_pager_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/components/footer/pager.component */ 89061);
/* harmony import */ var _lib_components_footer_footer_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/components/footer/footer.directive */ 95377);
/* harmony import */ var _lib_components_footer_footer_template_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/components/footer/footer-template.directive */ 85432);
/* harmony import */ var _lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/components/columns/column.directive */ 42410);
/* harmony import */ var _lib_components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/components/columns/column-header.directive */ 2794);
/* harmony import */ var _lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/components/columns/column-cell.directive */ 55466);
/* harmony import */ var _lib_components_columns_tree_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/components/columns/tree.directive */ 56281);
/* harmony import */ var _lib_components_row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/components/row-detail/row-detail.directive */ 47663);
/* harmony import */ var _lib_components_row_detail_row_detail_template_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/components/row-detail/row-detail-template.directive */ 73888);
/* harmony import */ var _lib_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/directives/draggable.directive */ 5966);
/* harmony import */ var _lib_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/directives/long-press.directive */ 18971);
/* harmony import */ var _lib_directives_orderable_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/directives/orderable.directive */ 52341);
/* harmony import */ var _lib_directives_resizeable_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/directives/resizeable.directive */ 82515);
/* harmony import */ var _lib_directives_visibility_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lib/directives/visibility.directive */ 11693);
/* harmony import */ var _lib_services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lib/services/scrollbar-helper.service */ 83624);
/* harmony import */ var _lib_services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lib/services/dimensions-helper.service */ 20681);
/* harmony import */ var _lib_services_column_changes_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./lib/services/column-changes.service */ 15769);
/* harmony import */ var _lib_types_column_mode_type__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lib/types/column-mode.type */ 78475);
/* harmony import */ var _lib_types_sort_type__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lib/types/sort.type */ 11688);
/* harmony import */ var _lib_types_sort_direction_type__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./lib/types/sort-direction.type */ 25126);
/* harmony import */ var _lib_types_selection_type__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./lib/types/selection.type */ 20553);
/* harmony import */ var _lib_types_click_type__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./lib/types/click.type */ 71237);
/* harmony import */ var _lib_types_table_column_type__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./lib/types/table-column.type */ 66275);
/* harmony import */ var _lib_types_sort_prop_dir_type__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./lib/types/sort-prop-dir.type */ 77996);
/* harmony import */ var _lib_types_contextmenu_type__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./lib/types/contextmenu.type */ 61734);
/* harmony import */ var _lib_utils_id__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./lib/utils/id */ 88516);
/* harmony import */ var _lib_utils_column__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./lib/utils/column */ 80492);
/* harmony import */ var _lib_utils_column_prop_getters__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./lib/utils/column-prop-getters */ 8794);
/* harmony import */ var _lib_utils_camel_case__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./lib/utils/camel-case */ 48827);
/* harmony import */ var _lib_utils_keys__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./lib/utils/keys */ 70140);
/* harmony import */ var _lib_utils_math__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./lib/utils/math */ 73510);
/* harmony import */ var _lib_utils_prefixes__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./lib/utils/prefixes */ 30393);
/* harmony import */ var _lib_utils_selection__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./lib/utils/selection */ 63119);
/* harmony import */ var _lib_utils_translate__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./lib/utils/translate */ 62317);
/* harmony import */ var _lib_utils_throttle__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./lib/utils/throttle */ 6938);
/* harmony import */ var _lib_utils_sort__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./lib/utils/sort */ 63648);
/* harmony import */ var _lib_utils_row_height_cache__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./lib/utils/row-height-cache */ 6457);
/* harmony import */ var _lib_utils_column_helper__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./lib/utils/column-helper */ 61307);
/* harmony import */ var _lib_utils_elm_from_point__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./lib/utils/elm-from-point */ 24172);
/* harmony import */ var _lib_utils_tree__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./lib/utils/tree */ 16820);
/*
 * Public API Surface of ngx-datatable
 */
// components
























// directives





// services



// types








// utils

















/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var projects_swimlane_ngx_datatable_package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/package.json */ 13025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _basic_basic_auto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/basic-auto.component */ 86537);
/* harmony import */ var _basic_basic_fixed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic-fixed.component */ 73253);
/* harmony import */ var _basic_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/fullscreen.component */ 41851);
/* harmony import */ var _basic_inline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic/inline.component */ 62791);
/* harmony import */ var _basic_virtual_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic/virtual.component */ 96901);
/* harmony import */ var _basic_scrolling_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic/scrolling.component */ 59119);
/* harmony import */ var _basic_multiple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic/multiple.component */ 82261);
/* harmony import */ var _basic_row_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic/row-detail.component */ 85063);
/* harmony import */ var _basic_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic/responsive.component */ 56450);
/* harmony import */ var _basic_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basic/filter.component */ 65386);
/* harmony import */ var _basic_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basic/tabs.component */ 10889);
/* harmony import */ var _basic_live_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basic/live.component */ 43924);
/* harmony import */ var _basic_rx_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./basic/rx.component */ 45287);
/* harmony import */ var _basic_contextmenu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./basic/contextmenu.component */ 70296);
/* harmony import */ var _basic_css_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./basic/css.component */ 30684);
/* harmony import */ var _basic_dynamic_height_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./basic/dynamic-height.component */ 65313);
/* harmony import */ var _basic_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./basic/footer.component */ 18378);
/* harmony import */ var _basic_dark_theme_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./basic/dark-theme.component */ 38415);
/* harmony import */ var _basic_bootstrap_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./basic/bootstrap.component */ 50477);
/* harmony import */ var _tree_fullscreen_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tree/fullscreen.component */ 55301);
/* harmony import */ var _tree_client_tree_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tree/client-tree.component */ 41840);
/* harmony import */ var _basic_row_grouping_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./basic/row-grouping.component */ 95570);
/* harmony import */ var _paging_paging_client_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./paging/paging-client.component */ 34914);
/* harmony import */ var _paging_paging_server_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./paging/paging-server.component */ 60907);
/* harmony import */ var _paging_paging_scrolling_novirtualization_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./paging/paging-scrolling-novirtualization.component */ 92886);
/* harmony import */ var _paging_scrolling_server_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./paging/scrolling-server.component */ 97806);
/* harmony import */ var _paging_paging_virtual_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./paging/paging-virtual.component */ 12873);
/* harmony import */ var _sorting_sorting_client_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sorting/sorting-client.component */ 70623);
/* harmony import */ var _sorting_sorting_default_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sorting/sorting-default.component */ 46411);
/* harmony import */ var _sorting_sorting_server_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sorting/sorting-server.component */ 39958);
/* harmony import */ var _sorting_sorting_comparator_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./sorting/sorting-comparator.component */ 14845);
/* harmony import */ var _selection_selection_cell_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./selection/selection-cell.component */ 54516);
/* harmony import */ var _selection_selection_single_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./selection/selection-single.component */ 65556);
/* harmony import */ var _selection_selection_multi_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./selection/selection-multi.component */ 28947);
/* harmony import */ var _selection_selection_disabled_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./selection/selection-disabled.component */ 37495);
/* harmony import */ var _selection_selection_chkbox_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./selection/selection-chkbox.component */ 79125);
/* harmony import */ var _selection_selection_chkbox_template_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./selection/selection-chkbox-template.component */ 23291);
/* harmony import */ var _selection_selection_multi_click_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./selection/selection-multi-click.component */ 34463);
/* harmony import */ var _templates_template_obj_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./templates/template-obj.component */ 98845);
/* harmony import */ var _templates_template_dom_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./templates/template-dom.component */ 65605);
/* harmony import */ var _columns_column_flex_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./columns/column-flex.component */ 96626);
/* harmony import */ var _columns_column_toggle_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./columns/column-toggle.component */ 30455);
/* harmony import */ var _columns_column_standard_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./columns/column-standard.component */ 99361);
/* harmony import */ var _columns_column_force_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./columns/column-force.component */ 37712);
/* harmony import */ var _columns_pinning_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./columns/pinning.component */ 8961);
/* harmony import */ var _columns_column_reorder_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./columns/column-reorder.component */ 14696);
/* harmony import */ var _summary_summary_row_simple_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./summary/summary-row-simple.component */ 79711);
/* harmony import */ var _summary_summary_row_custom_template_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./summary/summary-row-custom-template.component */ 30391);
/* harmony import */ var _summary_summary_row_server_paging_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./summary/summary-row-server-paging.component */ 80160);
/* harmony import */ var _summary_summary_row_inline_html_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./summary/summary-row-inline-html.component */ 86380);






















































function AppComponent_basic_auto_demo_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "basic-auto-demo");
} }
function AppComponent_basic_fixed_demo_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "basic-fixed-demo");
} }
function AppComponent_full_screen_demo_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "full-screen-demo");
} }
function AppComponent_inline_edit_demo_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "inline-edit-demo");
} }
function AppComponent_virtual_scroll_demo_212_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "virtual-scroll-demo");
} }
function AppComponent_horz_vert_scrolling_demo_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "horz-vert-scrolling-demo");
} }
function AppComponent_multiple_tables_demo_214_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "multiple-tables-demo");
} }
function AppComponent_row_details_demo_215_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "row-details-demo");
} }
function AppComponent_responsive_demo_216_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "responsive-demo");
} }
function AppComponent_filter_demo_217_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "filter-demo");
} }
function AppComponent_tabs_demo_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "tabs-demo");
} }
function AppComponent_live_data_demo_219_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "live-data-demo");
} }
function AppComponent_rx_demo_220_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "rx-demo");
} }
function AppComponent_contextmenu_demo_221_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "contextmenu-demo");
} }
function AppComponent_row_css_demo_222_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "row-css-demo");
} }
function AppComponent_dynamic_height_demo_223_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "dynamic-height-demo");
} }
function AppComponent_footer_demo_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "footer-demo");
} }
function AppComponent_basic_dark_theme_demo_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "basic-dark-theme-demo");
} }
function AppComponent_basic_bootstrap_theme_demo_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "basic-bootstrap-theme-demo");
} }
function AppComponent_full_screen_tree_demo_227_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "full-screen-tree-demo");
} }
function AppComponent_client_side_tree_demo_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "client-side-tree-demo");
} }
function AppComponent_row_grouping_demo_229_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "row-grouping-demo");
} }
function AppComponent_client_paging_demo_230_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "client-paging-demo");
} }
function AppComponent_server_paging_demo_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "server-paging-demo");
} }
function AppComponent_paging_scrolling_novirtualization_demo_232_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "paging-scrolling-novirtualization-demo");
} }
function AppComponent_server_scrolling_demo_233_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "server-scrolling-demo");
} }
function AppComponent_virtual_paging_demo_234_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "virtual-paging-demo");
} }
function AppComponent_client_sorting_demo_235_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "client-sorting-demo");
} }
function AppComponent_default_sorting_demo_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "default-sorting-demo");
} }
function AppComponent_server_sorting_demo_237_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "server-sorting-demo");
} }
function AppComponent_comparator_sorting_demo_238_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "comparator-sorting-demo");
} }
function AppComponent_cell_selection_demo_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "cell-selection-demo");
} }
function AppComponent_single_selection_demo_240_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "single-selection-demo");
} }
function AppComponent_multi_selection_demo_241_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "multi-selection-demo");
} }
function AppComponent_multidisable_selection_demo_242_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "multidisable-selection-demo");
} }
function AppComponent_chkbox_selection_demo_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "chkbox-selection-demo");
} }
function AppComponent_chkbox_selection_template_demo_244_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "chkbox-selection-template-demo");
} }
function AppComponent_multi_click_selection_demo_245_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "multi-click-selection-demo");
} }
function AppComponent_template_ref_demo_246_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "template-ref-demo");
} }
function AppComponent_inline_templates_demo_247_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "inline-templates-demo");
} }
function AppComponent_column_flex_demo_248_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "column-flex-demo");
} }
function AppComponent_column_toggle_demo_249_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "column-toggle-demo");
} }
function AppComponent_column_standard_demo_250_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "column-standard-demo");
} }
function AppComponent_column_force_demo_251_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "column-force-demo");
} }
function AppComponent_column_pinning_demo_252_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "column-pinning-demo");
} }
function AppComponent_column_reorder_demo_253_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "column-reorder-demo");
} }
function AppComponent_summary_row_simple_demo_254_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "summary-row-simple-demo");
} }
function AppComponent_summary_row_custom_template_demo_255_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "summary-row-custom-template-demo");
} }
function AppComponent_summary_row_server_paging_demo_256_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "summary-row-server-paging-demo");
} }
function AppComponent_summary_row_inline_html_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelement"](0, "summary-row-inline-html");
} }
class AppComponent {
    constructor(location) {
        this.version = projects_swimlane_ngx_datatable_package_json__WEBPACK_IMPORTED_MODULE_0__.version;
        this.state = location.path(true);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_52__.Location)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵProvidersFeature"]([
            _angular_common__WEBPACK_IMPORTED_MODULE_52__.Location,
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_52__.LocationStrategy,
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_52__.HashLocationStrategy
            }
        ])], decls: 258, vars: 53, consts: [[1, "main-ul"], ["href", "https://swimlane.gitbooks.io/ngx-datatable/content/", "target", "_black"], ["href", "https://www.gitbook.com/download/pdf/book/swimlane/ngx-datatable", "target", "_black"], ["href", "#virtual-scroll", 3, "click"], ["href", "#full-screen", 3, "click"], ["href", "#inline-edit", 3, "click"], ["href", "#horz-vert-scrolling", 3, "click"], ["href", "#multiple-tables", 3, "click"], ["href", "#filter", 3, "click"], ["href", "#hidden", 3, "click"], ["href", "#live", 3, "click"], ["href", "#rx", 3, "click"], ["href", "#contextmenu", 3, "click"], ["href", "#css", 3, "click"], ["href", "#footer", 3, "click"], ["href", "#dark", 3, "click"], ["href", "#bootstrap", 3, "click"], ["href", "#fullscreen-tree", 3, "click"], ["href", "#client-tree", 3, "click"], ["href", "#row-grouping", 3, "click"], ["href", "#", 3, "click"], ["href", "#basic-fixed", 3, "click"], ["href", "#dynamic", 3, "click"], ["href", "#row-details", 3, "click"], ["href", "#responsive", 3, "click"], ["href", "#client-paging", 3, "click"], ["href", "#server-paging", 3, "click"], ["href", "#paging-scrolling-novirtualization", 3, "click"], ["href", "#server-scrolling", 3, "click"], ["href", "#virtual-paging", 3, "click"], ["href", "#client-sorting", 3, "click"], ["href", "#default-sorting", 3, "click"], ["href", "#server-sorting", 3, "click"], ["href", "#comparator-sorting", 3, "click"], ["href", "#cell-selection", 3, "click"], ["href", "#single-selection", 3, "click"], ["href", "#multi-selection", 3, "click"], ["href", "#multi-click-selection", 3, "click"], ["href", "#multidisable-selection", 3, "click"], ["href", "#chkbox-selection", 3, "click"], ["href", "#chkbox-selection-template", 3, "click"], ["href", "#inline", 3, "click"], ["href", "#templateref", 3, "click"], ["href", "#flex", 3, "click"], ["href", "#toggle", 3, "click"], ["href", "#fixed", 3, "click"], ["href", "#force", 3, "click"], ["href", "#pinning", 3, "click"], ["href", "#reorder", 3, "click"], ["href", "#simple-summary", 3, "click"], ["href", "#custom-template-summary", 3, "click"], ["href", "#paging-summary", 3, "click"], ["href", "#inline-html-summary", 3, "click"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](3, " ngx-datatable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](4, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](6, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](9, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](13, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](16, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](19, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](22, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_22_listener() { return ctx.state = "virtual-scroll"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](23, "10k Rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](25, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_25_listener() { return ctx.state = "full-screen"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](26, "Full Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](28, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_28_listener() { return ctx.state = "inline-edit"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](29, "Inline Editing");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](31, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_31_listener() { return ctx.state = "horz-vert-scrolling"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](32, "Horz/Vert Scrolling");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](34, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_34_listener() { return ctx.state = "multiple-tables"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](35, "Multiple Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](37, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_37_listener() { return ctx.state = "filter"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](38, "Filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](40, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_40_listener() { return ctx.state = "hidden"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](41, "Hidden On Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](43, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_43_listener() { return ctx.state = "live"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](44, "Live Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](46, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_46_listener() { return ctx.state = "rx"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](47, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](49, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_49_listener() { return ctx.state = "contextmenu"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](50, "Context Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](52, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_52_listener() { return ctx.state = "css"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](53, "CSS Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](55, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_55_listener() { return ctx.state = "footer"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](56, "Footer Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](58, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](59, "Themes");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](60, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](62, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_62_listener() { return ctx.state = "dark"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](63, "Dark theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](65, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_65_listener() { return ctx.state = "bootstrap"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](66, "Bootstrap theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](68, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](69, "Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](70, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](72, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_72_listener() { return ctx.state = "fullscreen-tree"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](73, "Full screen Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](75, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_75_listener() { return ctx.state = "client-tree"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](76, "Client Side Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](78, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](79, "Rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](80, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](82, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_82_listener() { return ctx.state = "row-grouping"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](83, "Row Grouping");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](85, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_85_listener() { return ctx.state = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](86, "Fluid Row Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](88, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_88_listener() { return ctx.state = "basic-fixed"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](89, "Fixed Row Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](91, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_91_listener() { return ctx.state = "dynamic"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](92, "Dynamic Row Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](94, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_94_listener() { return ctx.state = "row-details"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](95, "Row Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](97, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_97_listener() { return ctx.state = "responsive"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](98, "Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](101, "Paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](102, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](104, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_104_listener() { return ctx.state = "client-paging"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](105, "Client-side");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](107, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_107_listener() { return ctx.state = "server-paging"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](108, "Server-side");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](110, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_110_listener() { return ctx.state = "paging-scrolling-novirtualization"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](111, "Scrolling no virtual");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](113, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_113_listener() { return ctx.state = "server-scrolling"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](114, "Scrolling server-side");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](116, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_116_listener() { return ctx.state = "virtual-paging"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](117, "Virtual server-side");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](119, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](120, "Sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](121, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](123, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_123_listener() { return ctx.state = "client-sorting"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](124, "Client-side");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](126, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_126_listener() { return ctx.state = "default-sorting"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](127, "Default sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](129, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_129_listener() { return ctx.state = "server-sorting"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](130, "Server-side");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](132, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_132_listener() { return ctx.state = "comparator-sorting"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](133, "Comparator");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](135, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](136, "Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](137, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](139, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_139_listener() { return ctx.state = "cell-selection"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](140, "Cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](142, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_142_listener() { return ctx.state = "single-selection"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](143, "Single Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](145, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_145_listener() { return ctx.state = "multi-selection"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](146, "Multi Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](148, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_148_listener() { return ctx.state = "multi-click-selection"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](149, "Multi Click Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](151, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_151_listener() { return ctx.state = "multidisable-selection"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](152, "Disable Callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](154, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_154_listener() { return ctx.state = "chkbox-selection"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](155, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](157, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_157_listener() { return ctx.state = "chkbox-selection-template"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](158, "Custom Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](160, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](161, "Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](162, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](164, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_164_listener() { return ctx.state = "inline"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](165, "Inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](167, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_167_listener() { return ctx.state = "templateref"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](168, "TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](170, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](171, "Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](172, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](174, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_174_listener() { return ctx.state = "flex"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](175, "Flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](177, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_177_listener() { return ctx.state = "toggle"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](178, "Toggling");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](179, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](180, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_180_listener() { return ctx.state = "fixed"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](181, "Fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](183, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_183_listener() { return ctx.state = "force"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](184, "Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](185, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](186, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_186_listener() { return ctx.state = "pinning"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](187, "Pinning");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](189, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_189_listener() { return ctx.state = "reorder"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](190, "Reorder");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](192, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](193, "Summary Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](194, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](196, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_196_listener() { return ctx.state = "simple-summary"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](197, "Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](199, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_199_listener() { return ctx.state = "custom-template-summary"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](200, "Custom Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](201, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](202, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_202_listener() { return ctx.state = "paging-summary"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](203, "Server-side paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](205, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵlistener"]("click", function AppComponent_Template_a_click_205_listener() { return ctx.state = "inline-html-summary"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtext"](206, "Inline HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementStart"](207, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](208, AppComponent_basic_auto_demo_208_Template, 1, 0, "basic-auto-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](209, AppComponent_basic_fixed_demo_209_Template, 1, 0, "basic-fixed-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](210, AppComponent_full_screen_demo_210_Template, 1, 0, "full-screen-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](211, AppComponent_inline_edit_demo_211_Template, 1, 0, "inline-edit-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](212, AppComponent_virtual_scroll_demo_212_Template, 1, 0, "virtual-scroll-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](213, AppComponent_horz_vert_scrolling_demo_213_Template, 1, 0, "horz-vert-scrolling-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](214, AppComponent_multiple_tables_demo_214_Template, 1, 0, "multiple-tables-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](215, AppComponent_row_details_demo_215_Template, 1, 0, "row-details-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](216, AppComponent_responsive_demo_216_Template, 1, 0, "responsive-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](217, AppComponent_filter_demo_217_Template, 1, 0, "filter-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](218, AppComponent_tabs_demo_218_Template, 1, 0, "tabs-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](219, AppComponent_live_data_demo_219_Template, 1, 0, "live-data-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](220, AppComponent_rx_demo_220_Template, 1, 0, "rx-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](221, AppComponent_contextmenu_demo_221_Template, 1, 0, "contextmenu-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](222, AppComponent_row_css_demo_222_Template, 1, 0, "row-css-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](223, AppComponent_dynamic_height_demo_223_Template, 1, 0, "dynamic-height-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](224, AppComponent_footer_demo_224_Template, 1, 0, "footer-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](225, AppComponent_basic_dark_theme_demo_225_Template, 1, 0, "basic-dark-theme-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](226, AppComponent_basic_bootstrap_theme_demo_226_Template, 1, 0, "basic-bootstrap-theme-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](227, AppComponent_full_screen_tree_demo_227_Template, 1, 0, "full-screen-tree-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](228, AppComponent_client_side_tree_demo_228_Template, 1, 0, "client-side-tree-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](229, AppComponent_row_grouping_demo_229_Template, 1, 0, "row-grouping-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](230, AppComponent_client_paging_demo_230_Template, 1, 0, "client-paging-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](231, AppComponent_server_paging_demo_231_Template, 1, 0, "server-paging-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](232, AppComponent_paging_scrolling_novirtualization_demo_232_Template, 1, 0, "paging-scrolling-novirtualization-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](233, AppComponent_server_scrolling_demo_233_Template, 1, 0, "server-scrolling-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](234, AppComponent_virtual_paging_demo_234_Template, 1, 0, "virtual-paging-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](235, AppComponent_client_sorting_demo_235_Template, 1, 0, "client-sorting-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](236, AppComponent_default_sorting_demo_236_Template, 1, 0, "default-sorting-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](237, AppComponent_server_sorting_demo_237_Template, 1, 0, "server-sorting-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](238, AppComponent_comparator_sorting_demo_238_Template, 1, 0, "comparator-sorting-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](239, AppComponent_cell_selection_demo_239_Template, 1, 0, "cell-selection-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](240, AppComponent_single_selection_demo_240_Template, 1, 0, "single-selection-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](241, AppComponent_multi_selection_demo_241_Template, 1, 0, "multi-selection-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](242, AppComponent_multidisable_selection_demo_242_Template, 1, 0, "multidisable-selection-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](243, AppComponent_chkbox_selection_demo_243_Template, 1, 0, "chkbox-selection-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](244, AppComponent_chkbox_selection_template_demo_244_Template, 1, 0, "chkbox-selection-template-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](245, AppComponent_multi_click_selection_demo_245_Template, 1, 0, "multi-click-selection-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](246, AppComponent_template_ref_demo_246_Template, 1, 0, "template-ref-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](247, AppComponent_inline_templates_demo_247_Template, 1, 0, "inline-templates-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](248, AppComponent_column_flex_demo_248_Template, 1, 0, "column-flex-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](249, AppComponent_column_toggle_demo_249_Template, 1, 0, "column-toggle-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](250, AppComponent_column_standard_demo_250_Template, 1, 0, "column-standard-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](251, AppComponent_column_force_demo_251_Template, 1, 0, "column-force-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](252, AppComponent_column_pinning_demo_252_Template, 1, 0, "column-pinning-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](253, AppComponent_column_reorder_demo_253_Template, 1, 0, "column-reorder-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](254, AppComponent_summary_row_simple_demo_254_Template, 1, 0, "summary-row-simple-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](255, AppComponent_summary_row_custom_template_demo_255_Template, 1, 0, "summary-row-custom-template-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](256, AppComponent_summary_row_server_paging_demo_256_Template, 1, 0, "summary-row-server-paging-demo", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtemplate"](257, AppComponent_summary_row_inline_html_257_Template, 1, 0, "summary-row-inline-html", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵclassProp"]("dark", ctx.state === "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵtextInterpolate1"]("(", ctx.version, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", !ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "basic-fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "full-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "inline-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "virtual-scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "horz-vert-scrolling");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "multiple-tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "row-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "live");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "rx");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "contextmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "css");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "fullscreen-tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "client-tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "row-grouping");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "client-paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "server-paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "paging-scrolling-novirtualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "server-scrolling");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "virtual-paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "client-sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "default-sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "server-sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "comparator-sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "cell-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "single-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "multi-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "multidisable-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "chkbox-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "chkbox-selection-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "multi-click-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "templateref");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "force");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "pinning");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "reorder");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "simple-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "custom-template-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "paging-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵproperty"]("ngIf", ctx.state === "inline-html-summary");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_52__.NgIf, _basic_basic_auto_component__WEBPACK_IMPORTED_MODULE_1__.BasicAutoComponent, _basic_basic_fixed_component__WEBPACK_IMPORTED_MODULE_2__.BasicFixedComponent, _basic_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__.FullScreenComponent, _basic_inline_component__WEBPACK_IMPORTED_MODULE_4__.InlineEditComponent, _basic_virtual_component__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollComponent, _basic_scrolling_component__WEBPACK_IMPORTED_MODULE_6__.HorzVertScrolling, _basic_multiple_component__WEBPACK_IMPORTED_MODULE_7__.MultipleTablesComponent, _basic_row_detail_component__WEBPACK_IMPORTED_MODULE_8__.RowDetailsComponent, _basic_responsive_component__WEBPACK_IMPORTED_MODULE_9__.ResponsiveComponent, _basic_filter_component__WEBPACK_IMPORTED_MODULE_10__.FilterBarComponent, _basic_tabs_component__WEBPACK_IMPORTED_MODULE_11__.TabsDemoComponent, _basic_live_component__WEBPACK_IMPORTED_MODULE_12__.LiveDataComponent, _basic_rx_component__WEBPACK_IMPORTED_MODULE_13__.RxDemoComponent, _basic_contextmenu_component__WEBPACK_IMPORTED_MODULE_14__.ContextMenuDemoComponent, _basic_css_component__WEBPACK_IMPORTED_MODULE_15__.RowCssComponent, _basic_dynamic_height_component__WEBPACK_IMPORTED_MODULE_16__.DynamicHeightComponent, _basic_footer_component__WEBPACK_IMPORTED_MODULE_17__.FooterDemoComponent, _basic_dark_theme_component__WEBPACK_IMPORTED_MODULE_18__.DarkThemeComponent, _basic_bootstrap_component__WEBPACK_IMPORTED_MODULE_19__.BootstrapThemeComponent, _tree_fullscreen_component__WEBPACK_IMPORTED_MODULE_20__.FullScreenTreeComponent, _tree_client_tree_component__WEBPACK_IMPORTED_MODULE_21__.ClientTreeComponent, _basic_row_grouping_component__WEBPACK_IMPORTED_MODULE_22__.RowGroupingComponent, _paging_paging_client_component__WEBPACK_IMPORTED_MODULE_23__.ClientPagingComponent, _paging_paging_server_component__WEBPACK_IMPORTED_MODULE_24__.ServerPagingComponent, _paging_paging_scrolling_novirtualization_component__WEBPACK_IMPORTED_MODULE_25__.PagingScrollingNoVirtualizationComponent, _paging_scrolling_server_component__WEBPACK_IMPORTED_MODULE_26__.ServerScrollingComponent, _paging_paging_virtual_component__WEBPACK_IMPORTED_MODULE_27__.VirtualPagingComponent, _sorting_sorting_client_component__WEBPACK_IMPORTED_MODULE_28__.ClientSortingComponent, _sorting_sorting_default_component__WEBPACK_IMPORTED_MODULE_29__.DefaultSortingComponent, _sorting_sorting_server_component__WEBPACK_IMPORTED_MODULE_30__.ServerSortingComponent, _sorting_sorting_comparator_component__WEBPACK_IMPORTED_MODULE_31__.SortingComparatorComponent, _selection_selection_cell_component__WEBPACK_IMPORTED_MODULE_32__.CellSelectionComponent, _selection_selection_single_component__WEBPACK_IMPORTED_MODULE_33__.SingleSelectionComponent, _selection_selection_multi_component__WEBPACK_IMPORTED_MODULE_34__.MultiSelectionComponent, _selection_selection_disabled_component__WEBPACK_IMPORTED_MODULE_35__.MultiDisableSelectionComponent, _selection_selection_chkbox_component__WEBPACK_IMPORTED_MODULE_36__.CheckboxSelectionComponent, _selection_selection_chkbox_template_component__WEBPACK_IMPORTED_MODULE_37__.CustomCheckboxSelectionComponent, _selection_selection_multi_click_component__WEBPACK_IMPORTED_MODULE_38__.MultiClickSelectionComponent, _templates_template_obj_component__WEBPACK_IMPORTED_MODULE_39__.TemplateRefTemplatesComponent, _templates_template_dom_component__WEBPACK_IMPORTED_MODULE_40__.InlineTemplatesComponent, _columns_column_flex_component__WEBPACK_IMPORTED_MODULE_41__.ColumnFlexComponent, _columns_column_toggle_component__WEBPACK_IMPORTED_MODULE_42__.ColumnToggleComponent, _columns_column_standard_component__WEBPACK_IMPORTED_MODULE_43__.ColumnStandardComponent, _columns_column_force_component__WEBPACK_IMPORTED_MODULE_44__.ColumnForceComponent, _columns_pinning_component__WEBPACK_IMPORTED_MODULE_45__.ColumnPinningComponent, _columns_column_reorder_component__WEBPACK_IMPORTED_MODULE_46__.ColumnReorderComponent, _summary_summary_row_simple_component__WEBPACK_IMPORTED_MODULE_47__.SummaryRowSimpleComponent, _summary_summary_row_custom_template_component__WEBPACK_IMPORTED_MODULE_48__.SummaryRowCustomTemplateComponent, _summary_summary_row_server_paging_component__WEBPACK_IMPORTED_MODULE_49__.SummaryRowServerPagingComponent, _summary_summary_row_inline_html_component__WEBPACK_IMPORTED_MODULE_50__.SummaryRowInlineHtmlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */", "/*\n  This stylesheet uses scss valiables for most of the colors / background-colors of the table\n  to enable the customization of the displayed table without cloning the stylesheet into the\n  own application.\n\n  To modify table colors, add the following lines to the scss file of your application\n  (this example modifies the color of the selected row - selectionType = single, multi or multiClick):\n\n  $ngx-datatable-selected-active-background: yellow;\n  $ngx-datatable-selected-active-background-hover: rgba(yellow, 0.2);\n\n  @import '~@swimlane/ngx-datatable/index.css';\n  @import '~@swimlane/ngx-datatable/themes/material.scss';\n  @import '~@swimlane/ngx-datatable/assets/icons.css';\n\nThat's all.\n*/\n.ngx-datatable.material {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /**\n\t * Shared Styles\n\t */\n  /**\n\t * Global Row Styles\n\t */\n  /**\n\t * Header Styles\n\t */\n  /**\n\t * Body Styles\n\t */\n  /**\n\t * Footer Styles\n\t */\n}\n.ngx-datatable.material.striped .datatable-row-odd {\n  background: #eee;\n}\n.ngx-datatable.material.single-selection .datatable-body-row.active,\n.ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active,\n.ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active,\n.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}\n.ngx-datatable.material.single-selection .datatable-body-row.active:hover,\n.ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover,\n.ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,\n.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}\n.ngx-datatable.material.single-selection .datatable-body-row.active:focus,\n.ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus,\n.ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,\n.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}\n.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,\n.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}\n.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,\n.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\n  background-color: #ddd;\n}\n.ngx-datatable.material.cell-selection .datatable-body-cell:hover,\n.ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}\n.ngx-datatable.material.cell-selection .datatable-body-cell:focus,\n.ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\n  background-color: #ddd;\n}\n.ngx-datatable.material.cell-selection .datatable-body-cell.active,\n.ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}\n.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,\n.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}\n.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,\n.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}\n.ngx-datatable.material .empty-row {\n  height: 50px;\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}\n.ngx-datatable.material .loading-row {\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}\n.ngx-datatable.material .datatable-header .datatable-row-left,\n.ngx-datatable.material .datatable-body .datatable-row-left {\n  background-color: #fff;\n  background-position: 100% 0;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==);\n}\n.ngx-datatable.material .datatable-header .datatable-row-right,\n.ngx-datatable.material .datatable-body .datatable-row-right {\n  background-position: 0 0;\n  background-color: #fff;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==);\n}\n.ngx-datatable.material .datatable-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.ngx-datatable.material .datatable-header .datatable-header-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  font-weight: 400;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  vertical-align: bottom;\n  font-size: 12px;\n  font-weight: 500;\n}\n.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\n  position: relative;\n}\n.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\n  transition: transform 400ms ease, opacity 400ms ease;\n  opacity: 0.5;\n  transform: scale(1);\n}\n.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\n  content: ' ';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -30px 0 0 -30px;\n  height: 60px;\n  width: 60px;\n  background: #eee;\n  border-radius: 100%;\n  opacity: 1;\n  filter: none;\n  transform: scale(0);\n  z-index: 9999;\n  pointer-events: none;\n}\n.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\n  border-right: none;\n}\n.ngx-datatable.material .datatable-header .resize-handle {\n  border-right: solid 1px #eee;\n}\n.ngx-datatable.material .datatable-body {\n  position: relative;\n}\n.ngx-datatable.material .datatable-body .datatable-row-detail {\n  background: #f5f5f5;\n  padding: 10px;\n}\n.ngx-datatable.material .datatable-body .datatable-group-header {\n  background: #f5f5f5;\n  border-bottom: solid 1px #d9d8d9;\n  border-top: solid 1px #d9d8d9;\n}\n.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}\n.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}\n.ngx-datatable.material .datatable-body .progress-linear {\n  display: block;\n  position: sticky;\n  width: 100%;\n  height: 5px;\n  padding: 0;\n  margin: 0;\n  top: 0;\n}\n.ngx-datatable.material .datatable-body .progress-linear .container {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 5px;\n  transform: translate(0, 0) scale(1, 1);\n  background-color: #aad1f9;\n}\n.ngx-datatable.material .datatable-body .progress-linear .container .bar {\n  transition: all 0.2s linear;\n  -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 0.2s linear;\n  background-color: #106cc8;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n}\n.ngx-datatable.material .datatable-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n}\n.ngx-datatable.material .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager {\n  margin: 0 10px;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager li {\n  vertical-align: middle;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\n  color: rgba(0, 0, 0, 0.26) !important;\n  background-color: transparent !important;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager li.active a {\n  background-color: rgba(158, 158, 158, 0.2);\n  font-weight: bold;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0 6px;\n  border-radius: 3px;\n  margin: 6px 3px;\n  text-align: center;\n  vertical-align: top;\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none;\n  vertical-align: bottom;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager a:hover {\n  color: rgba(0, 0, 0, 0.75);\n  background-color: rgba(158, 158, 158, 0.2);\n}\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 20px;\n  line-height: 20px;\n  padding: 0 3px;\n}\n.ngx-datatable.material .datatable-summary-row .datatable-body-row {\n  background-color: #ddd;\n}\n.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover {\n  background-color: #ddd;\n}\n.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}\n/**\n * Checkboxes\n**/\n.datatable-checkbox {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0;\n}\n.datatable-checkbox input[type='checkbox'] {\n  position: relative;\n  margin: 0 1rem 0 0;\n  cursor: pointer;\n  outline: none;\n}\n.datatable-checkbox input[type='checkbox']:before {\n  transition: all 0.3s ease-in-out;\n  content: '';\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #f2f2f2;\n}\n.datatable-checkbox input[type='checkbox']:checked:before {\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: #009688;\n  border-top-style: none;\n  border-right-style: none;\n}\n.datatable-checkbox input[type='checkbox']:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  cursor: pointer;\n}\n/**\n * Progress bar animations\n */\n@-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}\n@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnQkM7QUFvREQ7RUFDRSxnQkFsRDZCO0VBbUQ3QixxSEFqRGtDO0VBcUlsQzs7R0FwSUM7RUFzSkQ7O0dBbkpDO0VBdUtEOztHQXBLQztFQTZORDs7R0ExTkM7RUE4U0Q7O0dBM1NDO0FBQ0g7QUFpQ0E7RUFNTSxnQkFwRGlDO0FBaUJ2QztBQTZCQTs7OztFQWdCUSx5QkFsRDBDO0VBbUQxQyxXQWxEa0M7QUFZMUM7QUFxQkE7Ozs7RUFzQlEseUJBdERnRDtFQXVEaEQsV0F0RHdDO0FBa0JoRDtBQWFBOzs7O0VBNEJRLHlCQTFEZ0Q7RUEyRGhELFdBMUR3QztBQXdCaEQ7QUFLQTs7RUFzQ1Esc0JBaEZxQztFQWlGckMsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixrQ0FBa0M7QUF0QzFDO0FBSEE7O0VBOENRLHNCQXZGcUM7QUFpRDdDO0FBUkE7O0VBdURRLHNCQTdGMkM7RUE4RjNDLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsa0NBQWtDO0FBMUMxQztBQWhCQTs7RUErRFEsc0JBcEcyQztBQTBEbkQ7QUFyQkE7O0VBb0VRLHlCQXRHMEM7RUF1RzFDLFdBdEdrQztBQTREMUM7QUEzQkE7O0VBMEVRLHlCQTFHZ0Q7RUEyR2hELFdBMUd3QztBQWdFaEQ7QUFqQ0E7O0VBZ0ZRLHlCQTlHZ0Q7RUErR2hELFdBOUd3QztBQW9FaEQ7QUF2Q0E7RUEwRkksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7QUEvQ2pCO0FBL0NBO0VBa0dJLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7QUEvQ2pCO0FBdERBOztFQThHTSxzQkEvSnlCO0VBZ0t6QiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHlKQUF5SjtBQW5EL0o7QUE5REE7O0VBcUhNLHdCQUF3QjtFQUN4QixzQkF2S3lCO0VBd0t6QiwyQkFBMkI7RUFDM0IseUpBQXlKO0FBbEQvSjtBQXRFQTtFQWdJSSw0Q0F4SnNEO0FBa0cxRDtBQTFFQTtFQW1JTSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQkFoS2lDO0VBaUtqQywwQkFoSzJDO0VBaUszQyxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtBQXJEdEI7QUFyRkE7RUE2SVEsa0JBQWtCO0FBcEQxQjtBQXpGQTtFQWtKVSxvREFBb0Q7RUFDcEQsWUFBWTtFQUNaLG1CQUFtQjtBQXJEN0I7QUEvRkE7RUF5SlEsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9CQUFvQjtBQXRENUI7QUFoSEE7RUEyS1Usa0JBQWtCO0FBdkQ1QjtBQXBIQTtFQWlMTSw0QkF4TXFDO0FBK0kzQztBQXhIQTtFQXlMSSxrQkFBa0I7QUE3RHRCO0FBNUhBO0VBNExNLG1CQWhObUM7RUFpTm5DLGFBQWE7QUE1RG5CO0FBaklBO0VBaU1NLG1CQW5OcUM7RUFvTnJDLGdDQWxOOEM7RUFtTjlDLDZCQXBOMkM7QUF3SmpEO0FBdklBO0VBd01RLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwwQkEvTnVDO0VBZ092QywyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtBQTdEeEI7QUFsSkE7RUF1TlEsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDBCQTlPdUM7RUErT3ZDLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0FBakV4QjtBQTdKQTtFQW1PTSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxNQUFNO0FBbEVaO0FBdktBO0VBNE9RLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBRVgsc0NBQXNDO0VBQ3RDLHlCQUFvQztBQWpFNUM7QUFsTEE7RUFzUFUsMkJBQTJCO0VBQzNCLDBFQUEwRTtFQUMxRSxrRUFBa0U7RUFHbEUsaUNBQWlDO0VBQ2pDLHlCQUFtQztFQUVuQyxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7QUFsRXJCO0FBak1BO0VBNlFJLHlDQXpSbUQ7RUEwUm5ELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBN1I2QztBQXFOakQ7QUF4TUE7RUFtUk0saUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7QUF2RXZCO0FBOU1BO0VBeVJNLGNBQWM7QUF2RXBCO0FBbE5BO0VBNFJRLHNCQUFzQjtBQXRFOUI7QUF0TkE7RUErUlUscUNBQWlEO0VBQ2pELHdDQUFpRTtBQXJFM0U7QUEzTkE7RUFvU1UsMENBMVNrRDtFQTJTbEQsaUJBQWlCO0FBckUzQjtBQWhPQTtFQTBTUSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDBCQTdUbUM7RUE4VG5DLHFCQUFxQjtFQUNyQixzQkFBc0I7QUF0RTlCO0FBOU9BO0VBdVRVLDBCQWpVdUM7RUFrVXZDLDBDQWpVaUQ7QUE0UDNEO0FBblBBOzs7O0VBZ1VRLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQXRFdEI7QUE1UEE7RUEwVU0sc0JBN1VpQztBQW1RdkM7QUFoUUE7RUE2VVEsc0JBL1VxQztBQXNRN0M7QUFwUUE7RUFpVlEsaUJBQWlCO0FBekV6QjtBQStFQTs7RUEzRUU7QUE4RUY7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7RUFDZixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixVQUFVO0FBNUVaO0FBcUVBO0VBVUksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtBQTNFakI7QUE4REE7RUFrQk0sZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQTFFL0I7QUFpREE7RUFnQ00seUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQTFFOUI7QUFzQ0E7RUF3Q00sV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUExRXJCO0FBK0VBOztFQTNFRTtBQThFRjtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQTVFMUM7RUErRUE7SUFDRSxVQUFVO0lBQ1YsdUNBQXVDO0VBN0V6QztBQUNGO0FBb0VBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysd0NBQXdDO0VBNUUxQztFQStFQTtJQUNFLFVBQVU7SUFDVix1Q0FBdUM7RUE3RXpDO0FBQ0YiLCJmaWxlIjoibWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFRoaXMgc3R5bGVzaGVldCB1c2VzIHNjc3MgdmFsaWFibGVzIGZvciBtb3N0IG9mIHRoZSBjb2xvcnMgLyBiYWNrZ3JvdW5kLWNvbG9ycyBvZiB0aGUgdGFibGVcbiAgdG8gZW5hYmxlIHRoZSBjdXN0b21pemF0aW9uIG9mIHRoZSBkaXNwbGF5ZWQgdGFibGUgd2l0aG91dCBjbG9uaW5nIHRoZSBzdHlsZXNoZWV0IGludG8gdGhlXG4gIG93biBhcHBsaWNhdGlvbi5cblxuICBUbyBtb2RpZnkgdGFibGUgY29sb3JzLCBhZGQgdGhlIGZvbGxvd2luZyBsaW5lcyB0byB0aGUgc2NzcyBmaWxlIG9mIHlvdXIgYXBwbGljYXRpb25cbiAgKHRoaXMgZXhhbXBsZSBtb2RpZmllcyB0aGUgY29sb3Igb2YgdGhlIHNlbGVjdGVkIHJvdyAtIHNlbGVjdGlvblR5cGUgPSBzaW5nbGUsIG11bHRpIG9yIG11bHRpQ2xpY2spOlxuXG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKHllbGxvdywgMC4yKTtcblxuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9tYXRlcmlhbC5zY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xuXG5UaGF0J3MgYWxsLlxuKi9cblxuLy8gY29tbW9uIGRhdGF0YWJsZSBjb2xvcnNcbiRuZ3gtZGF0YXRhYmxlLWJhY2tncm91bmQ6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1ib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMikgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQ6ICNlZWUgIWRlZmF1bHQ7XG5cbi8vIGRlZmF1bHQgcm93IGFuZCBjZWxsIGJhY2tncm91bmQgY29sb3JzXG4kbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQ6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtaG92ZXI6ICNlZWUgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtZm9jdXM6ICNkZGQgIWRlZmF1bHQ7XG5cbi8vIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvcnMgZm9yIGNlbGwgc2VsZWN0aW9uIHN0eWxlXG4kbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtaG92ZXI6ICNlZWUgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtZm9jdXM6ICNkZGQgIWRlZmF1bHQ7XG5cbi8vIGJhY2tncm91bmQgYW5kIHRleHQgY29sb3JzIGZvciBzZWxlY3RlZCBjZWxsIC8gcm93XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDogIzMwNGZmZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvcjogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyOiAjMTkzYWU0ICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWhvdmVyOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtZm9jdXM6ICMyMDQxZWYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItZm9jdXM6ICNmZmYgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3IgaGVhZGVyIGVsZW1lbnRzXG4kZGF0YXRhYmxlLWhlYWRlci1jZWxsLWJhY2tncm91bmQ6ICNmZmYgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWhlYWRlci1jZWxsLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtaGVhZGVyLXJlc2l6ZS1oYW5kbGUtY29sb3I6ICNlZWUgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3IgdGFibGUgYm9keSBlbGVtZW50c1xuJGRhdGF0YWJsZS1yb3ctZGV0YWlsLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWJvZHktY2VsbC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItdG9wLWNvbG9yOiAjZDlkOGQ5ICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Q5ZDhkOSAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciBmb290ZXIgZWxlbWVudHNcbiRkYXRhdGFibGUtZm9vdGVyLWNlbGwtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWZvb3Rlci1ib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItY29sb3ItaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC43NSkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1hY3RpdmUtYmFja2dyb3VuZDogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIHN1bW1hcnkgcm93IGVsZW1lbnRzXG4kZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQ6ICNkZGQgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQtaG92ZXI6ICNkZGQgIWRlZmF1bHQ7XG5cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIHtcbiAgYmFja2dyb3VuZDogJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogJG5neC1kYXRhdGFibGUtYm94LXNoYWRvdztcblxuICAmLnN0cmlwZWQge1xuICAgIC5kYXRhdGFibGUtcm93LW9kZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbmd4LWRhdGF0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQ7XG4gICAgfVxuICB9XG5cbiAgJi5zaW5nbGUtc2VsZWN0aW9uLFxuICAmLm11bHRpLXNlbGVjdGlvbixcbiAgJi5tdWx0aS1jbGljay1zZWxlY3Rpb24ge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgJi5hY3RpdmUsXG4gICAgICAmLmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpob3ZlcixcbiAgICAgICYuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmZvY3VzLFxuICAgICAgJi5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1cztcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm5vdCguY2VsbC1zZWxlY3Rpb24pIHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1mb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmNlbGwtc2VsZWN0aW9uIHtcbiAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlLFxuICAgICAgJi5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6aG92ZXIsXG4gICAgICAmLmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWhvdmVyO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpmb2N1cyxcbiAgICAgICYuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtZm9jdXM7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItZm9jdXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG5cdCAqIFNoYXJlZCBTdHlsZXNcblx0ICovXG4gIC5lbXB0eS1yb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG5cbiAgLmxvYWRpbmctcm93IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG5cbiAgLyoqXG5cdCAqIEdsb2JhbCBSb3cgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWhlYWRlcixcbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICAuZGF0YXRhYmxlLXJvdy1sZWZ0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWJhY2tncm91bmQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQ0FZQUFBRDVQQS9OQUFBQUZrbEVRVlFJSFdQU2tOZVNCbUpoVFFWdGJpRE5DZ0FTYWdJSXVKWDhPZ0FBQUFCSlJVNUVya0pnZ2c9PSk7XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUkxMlBRa05kaTFWVFE1Z2JTd2tBc0RRQVJMQUlHdE9TRlVBQUFBQUJKUlU1RXJrSmdnZz09KTtcbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogSGVhZGVyIFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGF0YXRhYmxlLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yO1xuXG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLWhlYWRlci1jZWxsLWJhY2tncm91bmQ7XG4gICAgICBjb2xvcjogJGRhdGF0YWJsZS1oZWFkZXItY2VsbC1jb2xvcjtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICYubG9uZ3ByZXNzIHtcbiAgICAgICAgLmRyYWdnYWJsZTo6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyYWdnYWJsZTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAtMzBweCAwIDAgLTMwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYuZHJhZ2dpbmcge1xuICAgICAgICAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRhdGF0YWJsZS1oZWFkZXItcmVzaXplLWhhbmRsZS1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogQm9keSBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkYXRhdGFibGUtcm93LWRldGFpbC1iYWNrZ3JvdW5kO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLWdyb3VwLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1iYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLXRvcC1jb2xvcjtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtYm9keS1jZWxsLWNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAvLyBjZWxsIGFjdGl2ZSBjbGFzc1xuICAgICAgICAvLyAmLmFjdGl2ZSB7XG4gICAgICAgIC8vICBiYWNrZ3JvdW5kOiAjMDgyOWUwXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtYm9keS1jZWxsLWNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtbGluZWFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdG9wOiAwO1xuXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMjA5LCAyNDkpO1xuXG4gICAgICAgIC5iYXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcXVlcnkgMC44cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgICAgICAgICBhbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2LCAxMDgsIDIwMCk7XG5cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG5cdCAqIEZvb3RlciBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGRhdGF0YWJsZS1mb290ZXItYm9yZGVyLXRvcC1jb2xvcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogJGRhdGF0YWJsZS1mb290ZXItY2VsbC1jb2xvcjtcblxuICAgIC5wYWdlLWNvdW50IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcGFkZGluZzogMCAxLjJyZW07XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcblxuICAgICAgbGkge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICYuZGlzYWJsZWQgYSB7XG4gICAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIGEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtcGFnZXItYWN0aXZlLWJhY2tncm91bmQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWFyZ2luOiA2cHggM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWNvbG9yO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtcGFnZXItY29sb3ItaG92ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1wYWdlci1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN1bW1hcnkgcm93IHN0eWxlc1xuICAuZGF0YXRhYmxlLXN1bW1hcnktcm93IHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja2JveGVzXG4qKi9cbi5kYXRhdGFibGUtY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG5cbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjJmMmYyO1xuICAgIH1cblxuICAgICY6Y2hlY2tlZDpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgaGVpZ2h0OiAwLjVyZW07XG4gICAgICBib3JkZXItY29sb3I6ICMwMDk2ODg7XG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFByb2dyZXNzIGJhciBhbmltYXRpb25zXG4gKi9cbkBrZXlmcmFtZXMgcXVlcnkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzUlKSBzY2FsZSgwLjMsIDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMCwgMSk7XG4gIH1cbn1cbiJdfQ== */", ".ngx-datatable.dark {\n  box-shadow: none;\n  background: #1b1e27;\n  border: 1px solid #2f3646;\n  color: #fff;\n  font-size: 13px;\n}\n\n.ngx-datatable.dark .datatable-header {\n  background: #181b24;\n  color: #72809b;\n}\n\n.ngx-datatable.dark .datatable-header .datatable-header-cell {\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  font-weight: bold;\n}\n\n.ngx-datatable.dark .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}\n\n.ngx-datatable.dark .datatable-body {\n  background: #1a1e28;\n}\n\n.ngx-datatable.dark .datatable-body .datatable-body-row {\n  border-top: 1px solid #2f3646;\n}\n\n.ngx-datatable.dark .datatable-body .datatable-body-row .datatable-body-cell {\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n}\n\n.ngx-datatable.dark .datatable-body .datatable-body-row:hover {\n  background: #171b24;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}\n\n.ngx-datatable.dark .datatable-body .datatable-body-row:focus {\n  background-color: #232837;\n}\n\n.ngx-datatable.dark .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}\n\n.ngx-datatable.dark .datatable-footer {\n  background: #232837;\n  color: #72809b;\n  margin-top: -1px;\n}\n\n.ngx-datatable.dark .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}\n\n.ngx-datatable.dark .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}\n\n.ngx-datatable.dark .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}\n\n.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled).active a,\n.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #455066;\n  font-weight: bold;\n}\n\n.ngx-datatable.dark .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #72809b;\n}\n\n.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}\n\n.ngx-datatable.dark .datatable-summary-row .datatable-body-row {\n  background-color: #14171f;\n}\n\n.ngx-datatable.dark .datatable-summary-row .datatable-body-row:hover {\n  background-color: #14171f;\n}\n\n.ngx-datatable.dark .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhcmsuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQU5BO0VBUUksbUJBQW1CO0VBQ25CLGNBQWM7QUFFbEI7O0FBWEE7RUFZTSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUd2Qjs7QUFqQkE7RUFpQlEsaUJBQWlCO0FBSXpCOztBQXJCQTtFQXVCSSxtQkFBbUI7QUFFdkI7O0FBekJBO0VBMEJNLDZCQUE2QjtBQUduQzs7QUE3QkE7RUE2QlEsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFJM0I7O0FBbkNBO0VBbUNRLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUkxQzs7QUExQ0E7RUEwQ1EseUJBQXlCO0FBSWpDOztBQTlDQTtFQThDUSx5QkFBeUI7RUFDekIsV0FBVztBQUluQjs7QUFuREE7RUFxREksbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7QUFFcEI7O0FBekRBO0VBMERNLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0FBR3ZCOztBQS9EQTtFQWdFTSxjQUFjO0VBQ2QsbUJBQW1CO0FBR3pCOztBQXBFQTtFQXFFVSxnQkFBZ0I7QUFHMUI7O0FBeEVBOztFQTBFYyx5QkFBeUI7RUFDekIsaUJBQWlCO0FBRy9COztBQTlFQTtFQWtGUSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsY0FBYztBQUF0Qjs7QUE1RkE7Ozs7RUFtR1EsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQXRCOztBQXJHQTtFQTRHTSx5QkFBeUI7QUFIL0I7O0FBekdBO0VBK0dRLHlCQUF5QjtBQUZqQzs7QUE3R0E7RUFtSFEsaUJBQWlCO0FBRnpCIiwiZmlsZSI6ImRhcmsuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtZGF0YXRhYmxlLmRhcmsge1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMWIxZTI3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmYzNjQ2O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuXG4gIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTgxYjI0O1xuICAgIGNvbG9yOiAjNzI4MDliO1xuXG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLWxhYmVsIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWExZTI4O1xuXG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzJmMzY0NjtcblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzE3MWIyNDtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI4Mzc7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0ODNmZjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyMzI4Mzc7XG4gICAgY29sb3I6ICM3MjgwOWI7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcblxuICAgIC5wYWdlLWNvdW50IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcGFkZGluZzogMCAxLjJyZW07XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG5cbiAgICAgICAgICAmOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICYuYWN0aXZlIGEsXG4gICAgICAgICAgICAmOmhvdmVyIGEge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU1MDY2O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgY29sb3I6ICM3MjgwOWI7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTcxZjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE3MWY7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */", "/*\nbootstrap table theme\n*/\n.ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}\n.ngx-datatable.bootstrap .datatable-header {\n  height: unset !important;\n}\n.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}\n.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}\n.ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}\n.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}\n.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}\n.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUFqQjtBQUZBO0VBSUksd0JBQXdCO0FBRTVCO0FBTkE7RUFNTSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUl0QztBQVpBO0VBVVEsaUJBQWlCO0FBTXpCO0FBaEJBO0VBZ0JNLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFJbkM7QUFyQkE7RUFtQlEscUNBQXFDO0FBTTdDO0FBekJBO0VBc0JRLHlCQUF5QjtFQUN6QixXQUFXO0FBT25CO0FBOUJBO0VBMEJRLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBUTNCO0FBcENBO0VBa0NNLGtCQUFrQjtFQUNsQix3QkFGeUI7RUFHekIsZ0JBQWdCO0FBTXRCO0FBMUNBO0VBd0NJLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0FBTXBCO0FBaERBO0VBNENNLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0FBUXZCO0FBdERBO0VBaURNLGNBQWM7RUFDZCxtQkFBbUI7QUFTekI7QUEzREE7RUFxRFUsZ0JBQWdCO0FBVTFCO0FBL0RBO0VBMERnQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBU2pDO0FBcEVBO0VBa0VRLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixjQUFjO0FBTXRCO0FBbEZBOzs7O0VBa0ZRLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQU90QjtBQTNGQTtFQTRGUSxpQkFBaUI7QUFHekIiLCJmaWxlIjoiYm9vdHN0cmFwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuYm9vdHN0cmFwIHRhYmxlIHRoZW1lXG4qL1xuXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC1sYWJlbCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgJi5kYXRhdGFibGUtcm93LWV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4M2ZmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmVtcHR5LXJvdyB7XG4gICAgICAkYWxlcnQtcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xuICAgICAgJGFsZXJ0LXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6ICRhbGVydC1wYWRkaW5nLXkgJGFsZXJ0LXBhZGRpbmcteDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG4gIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICB9XG4gICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gU3VtbWFyeSByb3cgc3R5bGVzXG4gIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _basic_basic_fixed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic-fixed.component */ 73253);
/* harmony import */ var _basic_basic_auto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/basic-auto.component */ 86537);
/* harmony import */ var _basic_virtual_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic/virtual.component */ 96901);
/* harmony import */ var _basic_inline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic/inline.component */ 62791);
/* harmony import */ var _basic_scrolling_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic/scrolling.component */ 59119);
/* harmony import */ var _basic_multiple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic/multiple.component */ 82261);
/* harmony import */ var _basic_fullscreen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic/fullscreen.component */ 41851);
/* harmony import */ var _basic_row_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic/row-detail.component */ 85063);
/* harmony import */ var _basic_responsive_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basic/responsive.component */ 56450);
/* harmony import */ var _basic_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basic/filter.component */ 65386);
/* harmony import */ var _basic_tabs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basic/tabs.component */ 10889);
/* harmony import */ var _basic_live_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./basic/live.component */ 43924);
/* harmony import */ var _basic_rx_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./basic/rx.component */ 45287);
/* harmony import */ var _basic_contextmenu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./basic/contextmenu.component */ 70296);
/* harmony import */ var _basic_css_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./basic/css.component */ 30684);
/* harmony import */ var _basic_dynamic_height_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./basic/dynamic-height.component */ 65313);
/* harmony import */ var _basic_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./basic/footer.component */ 18378);
/* harmony import */ var _basic_row_grouping_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./basic/row-grouping.component */ 95570);
/* harmony import */ var _basic_bootstrap_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./basic/bootstrap.component */ 50477);
/* harmony import */ var _basic_dark_theme_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./basic/dark-theme.component */ 38415);
/* harmony import */ var _paging_paging_client_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./paging/paging-client.component */ 34914);
/* harmony import */ var _paging_paging_server_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./paging/paging-server.component */ 60907);
/* harmony import */ var _paging_scrolling_server_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./paging/scrolling-server.component */ 97806);
/* harmony import */ var _paging_paging_virtual_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./paging/paging-virtual.component */ 12873);
/* harmony import */ var _paging_paging_scrolling_novirtualization_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./paging/paging-scrolling-novirtualization.component */ 92886);
/* harmony import */ var _sorting_sorting_comparator_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sorting/sorting-comparator.component */ 14845);
/* harmony import */ var _sorting_sorting_default_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sorting/sorting-default.component */ 46411);
/* harmony import */ var _sorting_sorting_server_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sorting/sorting-server.component */ 39958);
/* harmony import */ var _sorting_sorting_client_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sorting/sorting-client.component */ 70623);
/* harmony import */ var _templates_template_dom_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./templates/template-dom.component */ 65605);
/* harmony import */ var _templates_template_obj_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./templates/template-obj.component */ 98845);
/* harmony import */ var _tree_fullscreen_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./tree/fullscreen.component */ 55301);
/* harmony import */ var _tree_client_tree_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./tree/client-tree.component */ 41840);
/* harmony import */ var _selection_selection_cell_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./selection/selection-cell.component */ 54516);
/* harmony import */ var _selection_selection_multi_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./selection/selection-multi.component */ 28947);
/* harmony import */ var _selection_selection_single_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./selection/selection-single.component */ 65556);
/* harmony import */ var _selection_selection_disabled_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./selection/selection-disabled.component */ 37495);
/* harmony import */ var _selection_selection_chkbox_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./selection/selection-chkbox.component */ 79125);
/* harmony import */ var _selection_selection_multi_click_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./selection/selection-multi-click.component */ 34463);
/* harmony import */ var _selection_selection_chkbox_template_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./selection/selection-chkbox-template.component */ 23291);
/* harmony import */ var _columns_column_toggle_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./columns/column-toggle.component */ 30455);
/* harmony import */ var _columns_column_standard_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./columns/column-standard.component */ 99361);
/* harmony import */ var _columns_column_force_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./columns/column-force.component */ 37712);
/* harmony import */ var _columns_column_flex_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./columns/column-flex.component */ 96626);
/* harmony import */ var _columns_pinning_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./columns/pinning.component */ 8961);
/* harmony import */ var _columns_column_reorder_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./columns/column-reorder.component */ 14696);
/* harmony import */ var _summary_summary_row_simple_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./summary/summary-row-simple.component */ 79711);
/* harmony import */ var _summary_summary_row_custom_template_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./summary/summary-row-custom-template.component */ 30391);
/* harmony import */ var _summary_summary_row_server_paging_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./summary/summary-row-server-paging.component */ 80160);
/* harmony import */ var _summary_summary_row_inline_html_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./summary/summary-row-inline-html.component */ 86380);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_ngx_datatable_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../projects/swimlane/ngx-datatable/src/lib/ngx-datatable.module */ 23836);



// -- Basic


















// -- Themes


// -- Paging





// -- Sorting




// -- Templates


// -- Tree


// -- Selection







// -- Columns






// -- Summary row








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_54__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_54__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_55__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_56__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_52__.AppRoutingModule,
            _projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgxDatatableModule.forRoot({
                messages: {
                    emptyMessage: 'No data to display',
                    totalMessage: 'total',
                    selectedMessage: 'selected' // Footer selected message
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_54__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _basic_basic_auto_component__WEBPACK_IMPORTED_MODULE_3__.BasicAutoComponent,
        _basic_basic_fixed_component__WEBPACK_IMPORTED_MODULE_2__.BasicFixedComponent,
        _basic_fullscreen_component__WEBPACK_IMPORTED_MODULE_8__.FullScreenComponent,
        _tree_fullscreen_component__WEBPACK_IMPORTED_MODULE_33__.FullScreenTreeComponent,
        _basic_inline_component__WEBPACK_IMPORTED_MODULE_5__.InlineEditComponent,
        _basic_virtual_component__WEBPACK_IMPORTED_MODULE_4__.VirtualScrollComponent,
        _basic_scrolling_component__WEBPACK_IMPORTED_MODULE_6__.HorzVertScrolling,
        _basic_multiple_component__WEBPACK_IMPORTED_MODULE_7__.MultipleTablesComponent,
        _basic_row_detail_component__WEBPACK_IMPORTED_MODULE_9__.RowDetailsComponent,
        _basic_responsive_component__WEBPACK_IMPORTED_MODULE_10__.ResponsiveComponent,
        _paging_paging_client_component__WEBPACK_IMPORTED_MODULE_22__.ClientPagingComponent,
        _paging_paging_server_component__WEBPACK_IMPORTED_MODULE_23__.ServerPagingComponent,
        _paging_paging_scrolling_novirtualization_component__WEBPACK_IMPORTED_MODULE_26__.PagingScrollingNoVirtualizationComponent,
        _paging_scrolling_server_component__WEBPACK_IMPORTED_MODULE_24__.ServerScrollingComponent,
        _sorting_sorting_client_component__WEBPACK_IMPORTED_MODULE_30__.ClientSortingComponent,
        _sorting_sorting_default_component__WEBPACK_IMPORTED_MODULE_28__.DefaultSortingComponent,
        _sorting_sorting_server_component__WEBPACK_IMPORTED_MODULE_29__.ServerSortingComponent,
        _sorting_sorting_comparator_component__WEBPACK_IMPORTED_MODULE_27__.SortingComparatorComponent,
        _selection_selection_cell_component__WEBPACK_IMPORTED_MODULE_35__.CellSelectionComponent,
        _selection_selection_multi_component__WEBPACK_IMPORTED_MODULE_36__.MultiSelectionComponent,
        _templates_template_dom_component__WEBPACK_IMPORTED_MODULE_31__.InlineTemplatesComponent,
        _templates_template_obj_component__WEBPACK_IMPORTED_MODULE_32__.TemplateRefTemplatesComponent,
        _columns_column_flex_component__WEBPACK_IMPORTED_MODULE_45__.ColumnFlexComponent,
        _columns_column_toggle_component__WEBPACK_IMPORTED_MODULE_42__.ColumnToggleComponent,
        _columns_column_standard_component__WEBPACK_IMPORTED_MODULE_43__.ColumnStandardComponent,
        _columns_column_force_component__WEBPACK_IMPORTED_MODULE_44__.ColumnForceComponent,
        _columns_pinning_component__WEBPACK_IMPORTED_MODULE_46__.ColumnPinningComponent,
        _columns_column_reorder_component__WEBPACK_IMPORTED_MODULE_47__.ColumnReorderComponent,
        _basic_filter_component__WEBPACK_IMPORTED_MODULE_11__.FilterBarComponent,
        _paging_paging_virtual_component__WEBPACK_IMPORTED_MODULE_25__.VirtualPagingComponent,
        _basic_dark_theme_component__WEBPACK_IMPORTED_MODULE_21__.DarkThemeComponent,
        _basic_tabs_component__WEBPACK_IMPORTED_MODULE_12__.TabsDemoComponent,
        _selection_selection_single_component__WEBPACK_IMPORTED_MODULE_37__.SingleSelectionComponent,
        _basic_live_component__WEBPACK_IMPORTED_MODULE_13__.LiveDataComponent,
        _selection_selection_disabled_component__WEBPACK_IMPORTED_MODULE_38__.MultiDisableSelectionComponent,
        _basic_rx_component__WEBPACK_IMPORTED_MODULE_14__.RxDemoComponent,
        _basic_contextmenu_component__WEBPACK_IMPORTED_MODULE_15__.ContextMenuDemoComponent,
        _selection_selection_chkbox_component__WEBPACK_IMPORTED_MODULE_39__.CheckboxSelectionComponent,
        _selection_selection_chkbox_template_component__WEBPACK_IMPORTED_MODULE_41__.CustomCheckboxSelectionComponent,
        _selection_selection_multi_click_component__WEBPACK_IMPORTED_MODULE_40__.MultiClickSelectionComponent,
        _basic_css_component__WEBPACK_IMPORTED_MODULE_16__.RowCssComponent,
        _basic_dynamic_height_component__WEBPACK_IMPORTED_MODULE_17__.DynamicHeightComponent,
        _basic_footer_component__WEBPACK_IMPORTED_MODULE_18__.FooterDemoComponent,
        _basic_row_grouping_component__WEBPACK_IMPORTED_MODULE_19__.RowGroupingComponent,
        _basic_bootstrap_component__WEBPACK_IMPORTED_MODULE_20__.BootstrapThemeComponent,
        _tree_client_tree_component__WEBPACK_IMPORTED_MODULE_34__.ClientTreeComponent,
        _summary_summary_row_simple_component__WEBPACK_IMPORTED_MODULE_48__.SummaryRowSimpleComponent,
        _summary_summary_row_custom_template_component__WEBPACK_IMPORTED_MODULE_49__.SummaryRowCustomTemplateComponent,
        _summary_summary_row_server_paging_component__WEBPACK_IMPORTED_MODULE_50__.SummaryRowServerPagingComponent,
        _summary_summary_row_inline_html_component__WEBPACK_IMPORTED_MODULE_51__.SummaryRowInlineHtmlComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_55__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_56__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_52__.AppRoutingModule, _projects_swimlane_ngx_datatable_src_lib_ngx_datatable_module__WEBPACK_IMPORTED_MODULE_53__.NgxDatatableModule] }); })();


/***/ }),

/***/ 86537:
/*!***********************************************!*\
  !*** ./src/app/basic/basic-auto.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicAutoComponent": function() { return /* binding */ BasicAutoComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



class BasicAutoComponent {
    constructor() {
        this.rows = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company', sortable: false }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
            setTimeout(() => {
                this.loadingIndicator = false;
            }, 1500);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
BasicAutoComponent.ɵfac = function BasicAutoComponent_Factory(t) { return new (t || BasicAutoComponent)(); };
BasicAutoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BasicAutoComponent, selectors: [["basic-auto-demo"]], decls: 7, vars: 7, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/basic-auto.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "loadingIndicator", "columns", "columnMode", "headerHeight", "footerHeight", "reorderable"]], template: function BasicAutoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Fluid Row Heights ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("reorderable", ctx.reorderable);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 73253:
/*!************************************************!*\
  !*** ./src/app/basic/basic-fixed.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicFixedComponent": function() { return /* binding */ BasicFixedComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



class BasicFixedComponent {
    constructor() {
        this.rows = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
BasicFixedComponent.ɵfac = function BasicFixedComponent_Factory(t) { return new (t || BasicFixedComponent)(); };
BasicFixedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BasicFixedComponent, selectors: [["basic-fixed-demo"]], decls: 7, vars: 6, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/basic-fixed.component.ts", "target", "_blank"], [1, "material", "striped", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight"]], template: function BasicFixedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Fix Row Height ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 50477:
/*!**********************************************!*\
  !*** ./src/app/basic/bootstrap.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapThemeComponent": function() { return /* binding */ BootstrapThemeComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



class BootstrapThemeComponent {
    constructor() {
        this.rows = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'name', summaryFunc: () => null },
            { name: 'Gender', summaryFunc: cells => this.summaryForGender(cells) },
            { name: 'Company', summaryFunc: () => null }
        ];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
            setTimeout(() => {
                this.loadingIndicator = false;
            }, 1500);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    summaryForGender(cells) {
        const males = cells.filter(cell => cell === 'male').length;
        const females = cells.filter(cell => cell === 'female').length;
        return `males: ${males}, females: ${females}`;
    }
}
BootstrapThemeComponent.ɵfac = function BootstrapThemeComponent_Factory(t) { return new (t || BootstrapThemeComponent)(); };
BootstrapThemeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BootstrapThemeComponent, selectors: [["basic-bootstrap-theme-demo"]], decls: 7, vars: 10, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/bootstrap.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "bootstrap", 3, "rows", "loadingIndicator", "columns", "columnMode", "headerHeight", "summaryRow", "summaryPosition", "footerHeight", "limit", "reorderable"]], template: function BootstrapThemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Bootstrap Theme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("summaryRow", true)("summaryPosition", "bottom")("footerHeight", 40)("limit", 10)("reorderable", ctx.reorderable);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 70296:
/*!************************************************!*\
  !*** ./src/app/basic/contextmenu.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextMenuDemoComponent": function() { return /* binding */ ContextMenuDemoComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);




function ContextMenuDemoComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Mouse position:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("(x: ", ctx_r0.rawEvent == null ? null : ctx_r0.rawEvent.x, ", y: ", ctx_r0.rawEvent == null ? null : ctx_r0.rawEvent.y, ")");
} }
function ContextMenuDemoComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Row:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.contextmenuRow == null ? null : ctx_r1.contextmenuRow.name, "");
} }
function ContextMenuDemoComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Header:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" name: ", ctx_r2.contextmenuColumn == null ? null : ctx_r2.contextmenuColumn.name, " prop: ", ctx_r2.contextmenuColumn == null ? null : ctx_r2.contextmenuColumn.prop, " ");
} }
class ContextMenuDemoComponent {
    constructor() {
        this.rows = [];
        this.columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    onTableContextMenu(contextMenuEvent) {
        console.log(contextMenuEvent);
        this.rawEvent = contextMenuEvent.event;
        if (contextMenuEvent.type === 'body') {
            this.contextmenuRow = contextMenuEvent.content;
            this.contextmenuColumn = undefined;
        }
        else {
            this.contextmenuColumn = contextMenuEvent.content;
            this.contextmenuRow = undefined;
        }
        contextMenuEvent.event.preventDefault();
        contextMenuEvent.event.stopPropagation();
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
ContextMenuDemoComponent.ɵfac = function ContextMenuDemoComponent_Factory(t) { return new (t || ContextMenuDemoComponent)(); };
ContextMenuDemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContextMenuDemoComponent, selectors: [["contextmenu-demo"]], decls: 18, vars: 8, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/contextmenu.component.ts", "target", "_blank"], [1, "info"], [4, "ngIf"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "tableContextmenu"]], template: function ContextMenuDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Context Menu Event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " ngx-datatable does not provide a context menu feature. This demonstrates how you would access the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "contextmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " event to display your own custom context menu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ContextMenuDemoComponent_p_14_Template, 5, 2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ContextMenuDemoComponent_p_15_Template, 4, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ContextMenuDemoComponent_p_16_Template, 4, 2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ngx-datatable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tableContextmenu", function ContextMenuDemoComponent_Template_ngx_datatable_tableContextmenu_17_listener($event) { return ctx.onTableContextMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rawEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contextmenuRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contextmenuColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 30684:
/*!****************************************!*\
  !*** ./src/app/basic/css.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RowCssComponent": function() { return /* binding */ RowCssComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);




class RowCssComponent {
    constructor() {
        this.rows = [];
        this.expanded = {};
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            const rows = JSON.parse(req.response);
            cb(rows.splice(0, 50));
        };
        req.send();
    }
    getRowClass(row) {
        return {
            'age-is-ten': row.age % 10 === 0
        };
    }
    getCellClass({ row, column, value }) {
        return {
            'is-female': value === 'female'
        };
    }
}
RowCssComponent.ɵfac = function RowCssComponent_Factory(t) { return new (t || RowCssComponent)(); };
RowCssComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RowCssComponent, selectors: [["row-css-demo"]], decls: 10, vars: 7, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/css.component.ts", "target", "_blank"], [1, "material", 3, "rows", "columnMode", "headerHeight", "rowHeight", "rowClass", "scrollbarV"], ["name", "Name"], ["name", "Gender", "headerClass", "is-gender", 3, "cellClass"], ["name", "Age"]], template: function RowCssComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Row/Header/Cell CSS Class Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ngx-datatable-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("rowHeight", 50)("rowClass", ctx.getRowClass)("scrollbarV", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cellClass", ctx.getCellClass);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective], encapsulation: 2 });


/***/ }),

/***/ 38415:
/*!***********************************************!*\
  !*** ./src/app/basic/dark-theme.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkThemeComponent": function() { return /* binding */ DarkThemeComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



class DarkThemeComponent {
    constructor() {
        this.rows = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'name', summaryFunc: () => null },
            { name: 'Gender', summaryFunc: cells => this.summaryForGender(cells) },
            { name: 'Company', summaryFunc: () => null }
        ];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
            setTimeout(() => {
                this.loadingIndicator = false;
            }, 1500);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    summaryForGender(cells) {
        const males = cells.filter(cell => cell === 'male').length;
        const females = cells.filter(cell => cell === 'female').length;
        return `males: ${males}, females: ${females}`;
    }
}
DarkThemeComponent.ɵfac = function DarkThemeComponent_Factory(t) { return new (t || DarkThemeComponent)(); };
DarkThemeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DarkThemeComponent, selectors: [["basic-dark-theme-demo"]], decls: 7, vars: 9, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/dark-theme.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "dark", 3, "rows", "loadingIndicator", "columns", "columnMode", "headerHeight", "summaryRow", "footerHeight", "limit", "reorderable"]], template: function DarkThemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Dark Theme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("summaryRow", true)("footerHeight", 40)("limit", 10)("reorderable", ctx.reorderable);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 65313:
/*!***************************************************!*\
  !*** ./src/app/basic/dynamic-height.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicHeightComponent": function() { return /* binding */ DynamicHeightComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);




class DynamicHeightComponent {
    constructor() {
        this.rows = [];
        this.expanded = {};
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            const rows = JSON.parse(req.response).splice(0, 100);
            for (const row of rows) {
                row.height = Math.floor(Math.random() * 80) + 50;
            }
            cb(rows);
        };
        req.send();
    }
    getRowHeight(row) {
        console.log('ROW', row);
        if (!row) {
            return 50;
        }
        if (row.height === undefined) {
            return 50;
        }
        return row.height;
    }
}
DynamicHeightComponent.ɵfac = function DynamicHeightComponent_Factory(t) { return new (t || DynamicHeightComponent)(); };
DynamicHeightComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DynamicHeightComponent, selectors: [["dynamic-height-demo"]], decls: 10, vars: 6, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/dynamic-height.component.ts", "target", "_blank"], [1, "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV"], ["name", "Name"], ["name", "Gender"], ["name", "Row Height", "prop", "height"]], template: function DynamicHeightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Dynamic Height w/ Virtual Scrolling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ngx-datatable-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", ctx.getRowHeight)("scrollbarV", true);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective], encapsulation: 2 });


/***/ }),

/***/ 65386:
/*!*******************************************!*\
  !*** ./src/app/basic/filter.component.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterBarComponent": function() { return /* binding */ FilterBarComponent; }
/* harmony export */ });
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class FilterBarComponent {
    constructor() {
        this.rows = [];
        this.temp = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_1__.ColumnMode;
        this.fetch(data => {
            // cache our list
            this.temp = [...data];
            // push our inital complete list
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
}
FilterBarComponent.ɵfac = function FilterBarComponent_Factory(t) { return new (t || FilterBarComponent)(); };
FilterBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FilterBarComponent, selectors: [["filter-demo"]], viewQuery: function FilterBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_0__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 9, vars: 6, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/filter.component.ts", "target", "_blank"], ["type", "text", "placeholder", "Type to filter the name column...", 2, "padding", "8px", "margin", "15px auto", "width", "30%", 3, "keyup"], ["rowHeight", "auto", 1, "material", 3, "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows"], ["table", ""]], template: function FilterBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Client-side Search and Filtering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function FilterBarComponent_Template_input_keyup_6_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ngx-datatable", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", ctx.rows);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_0__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 18378:
/*!*******************************************!*\
  !*** ./src/app/basic/footer.component.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterDemoComponent": function() { return /* binding */ FooterDemoComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_footer_footer_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/footer/footer.directive */ 95377);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_footer_footer_template_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/footer/footer-template.directive */ 85432);






function FooterDemoComponent_ngx_datatable_footer_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, ": Gender: Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "hr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowCount_r2 = ctx.rowCount;
    const pageSize_r3 = ctx.pageSize;
    const curPage_r5 = ctx.curPage;
    const offset_r6 = ctx.offset;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"]("Rows: ", rowCount_r2, " | Size: ", pageSize_r3, " | Current: ", curPage_r5, " | Offset: ", offset_r6, "");
} }
function FooterDemoComponent_ngx_datatable_footer_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-datatable-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FooterDemoComponent_ngx_datatable_footer_7_ng_template_1_Template, 8, 4, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class FooterDemoComponent {
    constructor() {
        this.rows = [];
        this.columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data.splice(0, 5);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
FooterDemoComponent.ɵfac = function FooterDemoComponent_Factory(t) { return new (t || FooterDemoComponent)(); };
FooterDemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FooterDemoComponent, selectors: [["footer-demo"]], decls: 8, vars: 6, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/footer.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "columnMode", "footerHeight", "headerHeight"], [4, "ngIf"], ["ngx-datatable-footer-template", ""], [2, "padding", "5px 10px"], [2, "width", "100%"]], template: function FooterDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Custom Footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FooterDemoComponent_ngx_datatable_footer_7_Template, 2, 0, "ngx-datatable-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("footerHeight", 100)("headerHeight", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _projects_swimlane_ngx_datatable_src_lib_components_footer_footer_directive__WEBPACK_IMPORTED_MODULE_2__.DatatableFooterDirective, _projects_swimlane_ngx_datatable_src_lib_components_footer_footer_template_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableFooterTemplateDirective], encapsulation: 2 });


/***/ }),

/***/ 41851:
/*!***********************************************!*\
  !*** ./src/app/basic/fullscreen.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenComponent": function() { return /* binding */ FullScreenComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);




class FullScreenComponent {
    constructor() {
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
FullScreenComponent.ɵfac = function FullScreenComponent_Factory(t) { return new (t || FullScreenComponent)(); };
FullScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FullScreenComponent, selectors: [["full-screen-demo"]], decls: 13, vars: 11, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/fullscreen.component.ts", "target", "_blank"], [1, "material", "fullscreen", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["name", "Id", 3, "width"], ["name", "Name", 3, "width"], ["name", "Gender"], ["name", "Age"], ["name", "City", "prop", "address.city", 3, "width"], ["name", "State", "prop", "address.state", 3, "width"]], template: function FullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Full Screen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ngx-datatable-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ngx-datatable-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 300);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective], encapsulation: 2 });


/***/ }),

/***/ 62791:
/*!*******************************************!*\
  !*** ./src/app/basic/inline.component.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InlineEditComponent": function() { return /* binding */ InlineEditComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);






function InlineEditComponent_ng_template_9_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function InlineEditComponent_ng_template_9_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const rowIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowIndex; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return (ctx_r9.editing[rowIndex_r4 + "-name"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r5, " ");
} }
function InlineEditComponent_ng_template_9_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function InlineEditComponent_ng_template_9_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const rowIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowIndex; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.updateValue($event, "name", rowIndex_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", value_r5);
} }
function InlineEditComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, InlineEditComponent_ng_template_9_span_0_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InlineEditComponent_ng_template_9_input_1_Template, 1, 1, "input", 8);
} if (rf & 2) {
    const rowIndex_r4 = ctx.rowIndex;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.editing[rowIndex_r4 + "-name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.editing[rowIndex_r4 + "-name"]);
} }
function InlineEditComponent_ng_template_11_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function InlineEditComponent_ng_template_11_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const rowIndex_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowIndex; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return (ctx_r22.editing[rowIndex_r17 + "-gender"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r19, " ");
} }
function InlineEditComponent_ng_template_11_select_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function InlineEditComponent_ng_template_11_select_1_Template_select_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const rowIndex_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowIndex; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return (ctx_r26.editing[rowIndex_r17 + "-gender"] = false); })("change", function InlineEditComponent_ng_template_11_select_1_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const rowIndex_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowIndex; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.updateValue($event, "gender", rowIndex_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", value_r19);
} }
function InlineEditComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, InlineEditComponent_ng_template_11_span_0_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InlineEditComponent_ng_template_11_select_1_Template, 5, 1, "select", 11);
} if (rf & 2) {
    const rowIndex_r17 = ctx.rowIndex;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.editing[rowIndex_r17 + "-gender"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.editing[rowIndex_r17 + "-gender"]);
} }
function InlineEditComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r32 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r32, " ");
} }
class InlineEditComponent {
    constructor() {
        this.editing = {};
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    updateValue(event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    }
}
InlineEditComponent.ɵfac = function InlineEditComponent_Factory(t) { return new (t || InlineEditComponent)(); };
InlineEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InlineEditComponent, selectors: [["inline-edit-demo"]], decls: 14, vars: 5, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/inline.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rows"], ["mydatatable", ""], ["name", "Name"], ["ngx-datatable-cell-template", ""], ["name", "Gender"], ["name", "Age"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], ["autofocus", "", "type", "text", 3, "value", "blur"], [3, "value", "blur", "change", 4, "ngIf"], [3, "value", "blur", "change"], ["value", "male"], ["value", "female"]], template: function InlineEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Inline Editing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ngx-datatable-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InlineEditComponent_ng_template_9_Template, 2, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, InlineEditComponent_ng_template_11_Template, 2, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, InlineEditComponent_ng_template_13_Template, 1, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headerHeight", 50)("limit", 5)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("rows", ctx.rows);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 43924:
/*!*****************************************!*\
  !*** ./src/app/basic/live.component.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveDataComponent": function() { return /* binding */ LiveDataComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);




const _c0 = ["mydatatable"];
class LiveDataComponent {
    constructor(cd) {
        this.cd = cd;
        this.count = 50;
        this.rows = [];
        this.active = true;
        this.temp = [];
        this.cols = ['name', 'gender', 'company'];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data.map(d => {
                d.updated = Date.now().toString();
                return d;
            });
            this.temp = [...this.rows];
        });
        this.start();
    }
    randomNum(start, end) {
        return Math.floor(Math.random() * end) + start;
    }
    start() {
        if (!this.active) {
            return;
        }
        setTimeout(this.updateRandom.bind(this), 50);
    }
    stop() {
        this.active = false;
    }
    add() {
        this.rows.splice(0, 0, this.temp[this.count++]);
    }
    remove() {
        this.rows.splice(0, this.rows.length);
    }
    updateRandom() {
        const rowNum = this.randomNum(0, 5);
        const cellNum = this.randomNum(0, 3);
        const newRow = this.randomNum(0, 100);
        const prop = this.cols[cellNum];
        const rows = this.rows;
        if (rows.length) {
            const row = rows[rowNum];
            row[prop] = rows[newRow][prop];
            row.updated = Date.now().toString();
        }
        this.rows = [...this.rows];
        // this.cd.markForCheck();
        // this.mydatatable.update();
        this.start();
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
LiveDataComponent.ɵfac = function LiveDataComponent_Factory(t) { return new (t || LiveDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
LiveDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LiveDataComponent, selectors: [["live-data-demo"]], viewQuery: function LiveDataComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mydatatable = _t.first);
    } }, decls: 23, vars: 6, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/live.component.ts", "target", "_blank"], ["href", "javascript:void(0)", 3, "click"], ["rowHeight", "auto", 1, "material", 3, "headerHeight", "limit", "columnMode", "footerHeight", "trackByProp", "rows"], ["mydatatable", ""], ["name", "Name"], ["name", "Gender"], ["name", "Company"]], template: function LiveDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Live Data Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LiveDataComponent_Template_a_click_7_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LiveDataComponent_Template_a_click_10_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LiveDataComponent_Template_a_click_13_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LiveDataComponent_Template_a_click_16_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ngx-datatable", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("headerHeight", 50)("limit", 5)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("trackByProp", "updated")("rows", ctx.rows);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective], encapsulation: 2 });


/***/ }),

/***/ 82261:
/*!*********************************************!*\
  !*** ./src/app/basic/multiple.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleTablesComponent": function() { return /* binding */ MultipleTablesComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



class MultipleTablesComponent {
    constructor() {
        this.columns1 = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
        this.columns2 = [{ prop: 'name', name: 'Name' }, { name: 'Gender' }];
        this.rows1 = [
            { name: 'Larry', gender: 'Male', company: 'Cisco' },
            { name: 'Lauren', gender: 'Female', company: 'HP' }
        ];
        this.rows2 = [
            { name: 'Callie', gender: 'Female' },
            { name: 'Maggie', gender: 'Female' }
        ];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
    }
}
MultipleTablesComponent.ɵfac = function MultipleTablesComponent_Factory(t) { return new (t || MultipleTablesComponent)(); };
MultipleTablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MultipleTablesComponent, selectors: [["multiple-tables-demo"]], decls: 9, vars: 10, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/multiple.component.ts", "target", "_blank"], [1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "headerHeight", "footerHeight"]], template: function MultipleTablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Multiple Tables ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ngx-datatable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows1)("columns", ctx.columns1)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 0)("rowHeight", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows2)("columns", ctx.columns2)("headerHeight", 50)("footerHeight", 50);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 56450:
/*!***********************************************!*\
  !*** ./src/app/basic/responsive.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponsiveComponent": function() { return /* binding */ ResponsiveComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/row-detail/row-detail.directive */ 47663);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_row_detail_row_detail_template_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/row-detail/row-detail-template.directive */ 73888);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-header.directive */ 2794);








const _c0 = ["myTable"];
function ResponsiveComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", row_r9.gender, ", ", row_r9.age, "");
} }
function ResponsiveComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ResponsiveComponent_ng_template_12_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const row_r11 = restoredCtx.row; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r13.toggleExpandRow(row_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expanded_r12 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("datatable-icon-right", !expanded_r12)("datatable-icon-down", expanded_r12);
} }
function ResponsiveComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r15 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", value_r15, " ");
} }
function ResponsiveComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r16 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](column_r16.name);
} }
function ResponsiveComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r19 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](value_r19);
} }
function ResponsiveComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r20 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](column_r20.name);
} }
function ResponsiveComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r22 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](value_r22);
} }
class ResponsiveComponent {
    constructor() {
        this.rows = [];
        this.expanded = {};
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
}
ResponsiveComponent.ɵfac = function ResponsiveComponent_Factory(t) { return new (t || ResponsiveComponent)(); };
ResponsiveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ResponsiveComponent, selectors: [["responsive-demo"]], viewQuery: function ResponsiveComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 32, vars: 16, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/responsive.component.ts", "target", "_blank"], [1, "material", "expandable", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "page"], ["myTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "Name", 3, "flexGrow", "minWidth"], ["name", "Gender", 3, "flexGrow"], ["ngx-datatable-header-template", ""], ["name", "Age", 3, "flexGrow"], [2, "margin", "50px"], [2, "padding-left", "60px", "font-size", "14px"], ["href", "#", "title", "Expand/Collapse Row", 1, "desktop-hidden", 3, "click"], [1, "mobile-hidden"]], template: function ResponsiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Responsive Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ngx-datatable", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function ResponsiveComponent_Template_ngx_datatable_page_6_listener($event) { return ctx.onPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ngx-datatable-row-detail", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("toggle", function ResponsiveComponent_Template_ngx_datatable_row_detail_toggle_8_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ResponsiveComponent_ng_template_10_Template, 3, 2, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ResponsiveComponent_ng_template_12_Template, 1, 4, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ngx-datatable-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ResponsiveComponent_ng_template_14_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ngx-datatable-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ResponsiveComponent_ng_template_16_Template, 2, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ResponsiveComponent_ng_template_17_Template, 2, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ngx-datatable-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ResponsiveComponent_ng_template_19_Template, 2, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ResponsiveComponent_ng_template_20_Template, 2, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " This demo combines the features used in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Row Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Rows demo, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Column demo, and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " Templates demo. When your browser is at 800px, the gender and age columns will be hidden and will appear in the row detail view. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowHeight", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("flexGrow", 3)("minWidth", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("flexGrow", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("flexGrow", 1);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_2__.DatatableRowDetailDirective, _projects_swimlane_ngx_datatable_src_lib_components_row_detail_row_detail_template_directive__WEBPACK_IMPORTED_MODULE_3__.DatatableRowDetailTemplateDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnCellDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_6__.DataTableColumnHeaderDirective], styles: ["\n      @media screen and (max-width: 800px) {\n        .desktop-hidden {\n          display: inline;\n          display: initial;\n        }\n        .mobile-hidden {\n          display: none;\n        }\n      }\n      @media screen and (min-width: 800px) {\n        .desktop-hidden {\n          display: none;\n        }\n        .mobile-hidden {\n          display: inline;\n          display: initial;\n        }\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3BvbnNpdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFO1VBQ0UsZUFBZ0I7VUFBaEIsZ0JBQWdCO1FBQ2xCO1FBQ0E7VUFDRSxhQUFhO1FBQ2Y7TUFDRjtNQUNBO1FBQ0U7VUFDRSxhQUFhO1FBQ2Y7UUFDQTtVQUNFLGVBQWdCO1VBQWhCLGdCQUFnQjtRQUNsQjtNQUNGIiwiZmlsZSI6InJlc3BvbnNpdmUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAuZGVza3RvcC1oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICAgICAgLm1vYmlsZS1oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubW9iaWxlLWhpZGRlbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 85063:
/*!***********************************************!*\
  !*** ./src/app/basic/row-detail.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RowDetailsComponent": function() { return /* binding */ RowDetailsComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/row-detail/row-detail.directive */ 47663);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_row_detail_row_detail_template_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/row-detail/row-detail-template.directive */ 73888);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);







const _c0 = ["myTable"];
function RowDetailsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", row_r8.address.city, ", ", row_r8.address.state, "");
} }
function RowDetailsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RowDetailsComponent_ng_template_18_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const row_r10 = restoredCtx.row; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.toggleExpandRow(row_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expanded_r11 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("datatable-icon-right", !expanded_r11)("datatable-icon-down", expanded_r11);
} }
function RowDetailsComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r14 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowIndex_r14);
} }
function RowDetailsComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expanded_r17 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](expanded_r17 === 1);
} }
function RowDetailsComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r18 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](value_r18);
} }
function RowDetailsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.row;
    const value_r20 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", row_r19["name"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](value_r20);
} }
class RowDetailsComponent {
    constructor() {
        this.rows = [];
        this.expanded = {};
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
}
RowDetailsComponent.ɵfac = function RowDetailsComponent_Factory(t) { return new (t || RowDetailsComponent)(); };
RowDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RowDetailsComponent, selectors: [["row-details-demo"]], viewQuery: function RowDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 28, vars: 16, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/row-detail.component.ts", "target", "_blank"], ["href", "javascript:void(0)", 3, "click"], [1, "material", "expandable", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "page"], ["myTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "Index", 3, "width"], ["name", "Expanded", 3, "width"], ["name", "Name", 3, "width"], ["name", "Gender", 3, "width"], ["name", "Age"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]], template: function RowDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Row Detail Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RowDetailsComponent_Template_a_click_7_listener() { return ctx.table.rowDetail.expandAllRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Expand All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RowDetailsComponent_Template_a_click_10_listener() { return ctx.table.rowDetail.collapseAllRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Collapse All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ngx-datatable", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function RowDetailsComponent_Template_ngx_datatable_page_12_listener($event) { return ctx.onPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("toggle", function RowDetailsComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, RowDetailsComponent_ng_template_16_Template, 6, 2, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ngx-datatable-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, RowDetailsComponent_ng_template_18_Template, 1, 4, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ngx-datatable-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, RowDetailsComponent_ng_template_20_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ngx-datatable-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, RowDetailsComponent_ng_template_22_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "ngx-datatable-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, RowDetailsComponent_ng_template_24_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, RowDetailsComponent_ng_template_26_Template, 4, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowHeight", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", 300);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_row_detail_row_detail_directive__WEBPACK_IMPORTED_MODULE_2__.DatatableRowDetailDirective, _projects_swimlane_ngx_datatable_src_lib_components_row_detail_row_detail_template_directive__WEBPACK_IMPORTED_MODULE_3__.DatatableRowDetailTemplateDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnCellDirective], encapsulation: 2 });


/***/ }),

/***/ 95570:
/*!*************************************************!*\
  !*** ./src/app/basic/row-grouping.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RowGroupingComponent": function() { return /* binding */ RowGroupingComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_body_body_group_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/body/body-group-header.directive */ 86439);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_body_body_group_header_template_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/body/body-group-header-template.directive */ 65479);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);







const _c0 = ["myTable"];
function RowGroupingComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RowGroupingComponent_ng_template_10_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const group_r5 = restoredCtx.group; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.toggleExpandGroup(group_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r5 = ctx.group;
    const expanded_r6 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("datatable-icon-right", !expanded_r6)("datatable-icon-down", expanded_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Age: ", group_r5.value[0].age, "");
} }
function RowGroupingComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RowGroupingComponent_ng_template_12_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const row_r11 = restoredCtx.row; const rowIndex_r9 = restoredCtx.rowIndex; const group_r12 = restoredCtx.group; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.checkGroup($event, row_r11, rowIndex_r9, group_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RowGroupingComponent_ng_template_12_Template_input_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const row_r11 = restoredCtx.row; const rowIndex_r9 = restoredCtx.rowIndex; const group_r12 = restoredCtx.group; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.checkGroup($event, row_r11, rowIndex_r9, group_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RowGroupingComponent_ng_template_12_Template_input_change_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const row_r11 = restoredCtx.row; const rowIndex_r9 = restoredCtx.rowIndex; const group_r12 = restoredCtx.group; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r16.checkGroup($event, row_r11, rowIndex_r9, group_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r9 = ctx.rowIndex;
    const row_r11 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("for", "ep1", rowIndex_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "ep1", rowIndex_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", rowIndex_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", row_r11.exppayyes === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("for", "ep2", rowIndex_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "ep2", rowIndex_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", rowIndex_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", row_r11.exppayno === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("for", "ep3", rowIndex_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "ep3", rowIndex_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", rowIndex_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", row_r11.exppaypending === 1);
} }
function RowGroupingComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function RowGroupingComponent_ng_template_18_Template_input_blur_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const rowIndex_r17 = restoredCtx.rowIndex; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.updateValue($event, "comment", rowIndex_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r18 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", value_r18);
} }
class RowGroupingComponent {
    constructor() {
        this.funder = [];
        this.calculated = [];
        this.pending = [];
        this.groups = [];
        this.editing = {};
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/forRowGrouping.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    getGroupRowHeight(group, rowHeight) {
        let style = {};
        style = {
            height: group.length * 40 + 'px',
            width: '100%'
        };
        return style;
    }
    checkGroup(event, row, rowIndex, group) {
        let groupStatus = 'Pending';
        let expectedPaymentDealtWith = true;
        row.exppayyes = 0;
        row.exppayno = 0;
        row.exppaypending = 0;
        if (event.target.checked) {
            if (event.target.value === '0') {
                // expected payment yes selected
                row.exppayyes = 1;
            }
            else if (event.target.value === '1') {
                // expected payment yes selected
                row.exppayno = 1;
            }
            else if (event.target.value === '2') {
                // expected payment yes selected
                row.exppaypending = 1;
            }
        }
        if (group.length === 2) {
            // There are only 2 lines in a group
            // tslint:disable-next-line:max-line-length
            if (['Calculated', 'Funder'].indexOf(group[0].source) > -1 &&
                ['Calculated', 'Funder'].indexOf(group[1].source) > -1) {
                // Sources are funder and calculated
                // tslint:disable-next-line:max-line-length
                if (group[0].startdate === group[1].startdate && group[0].enddate === group[1].enddate) {
                    // Start dates and end dates match
                    for (let index = 0; index < group.length; index++) {
                        if (group[index].source !== row.source) {
                            if (event.target.value === '0') {
                                // expected payment yes selected
                                group[index].exppayyes = 0;
                                group[index].exppaypending = 0;
                                group[index].exppayno = 1;
                            }
                        }
                        if (group[index].exppayyes === 0 && group[index].exppayno === 0 && group[index].exppaypending === 0) {
                            expectedPaymentDealtWith = false;
                        }
                        console.log('expectedPaymentDealtWith', expectedPaymentDealtWith);
                    }
                }
            }
        }
        else {
            for (let index = 0; index < group.length; index++) {
                if (group[index].exppayyes === 0 && group[index].exppayno === 0 && group[index].exppaypending === 0) {
                    expectedPaymentDealtWith = false;
                }
                console.log('expectedPaymentDealtWith', expectedPaymentDealtWith);
            }
        }
        // check if there is a pending selected payment or a row that does not have any expected payment selected
        if (group.filter(rowFilter => rowFilter.exppaypending === 1).length === 0 &&
            group.filter(rowFilter => rowFilter.exppaypending === 0 && rowFilter.exppayyes === 0 && rowFilter.exppayno === 0)
                .length === 0) {
            console.log('expected payment dealt with');
            // check if can set the group status
            const numberOfExpPayYes = group.filter(rowFilter => rowFilter.exppayyes === 1).length;
            const numberOfSourceFunder = group.filter(rowFilter => rowFilter.exppayyes === 1 && rowFilter.source === 'Funder')
                .length;
            const numberOfSourceCalculated = group.filter(rowFilter => rowFilter.exppayyes === 1 && rowFilter.source === 'Calculated').length;
            const numberOfSourceManual = group.filter(rowFilter => rowFilter.exppayyes === 1 && rowFilter.source === 'Manual')
                .length;
            console.log('numberOfExpPayYes', numberOfExpPayYes);
            console.log('numberOfSourceFunder', numberOfSourceFunder);
            console.log('numberOfSourceCalculated', numberOfSourceCalculated);
            console.log('numberOfSourceManual', numberOfSourceManual);
            if (numberOfExpPayYes > 0) {
                if (numberOfExpPayYes === numberOfSourceFunder) {
                    groupStatus = 'Funder Selected';
                }
                else if (numberOfExpPayYes === numberOfSourceCalculated) {
                    groupStatus = 'Calculated Selected';
                }
                else if (numberOfExpPayYes === numberOfSourceManual) {
                    groupStatus = 'Manual Selected';
                }
                else {
                    groupStatus = 'Hybrid Selected';
                }
            }
        }
        group[0].groupstatus = groupStatus;
    }
    updateValue(event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    toggleExpandGroup(group) {
        console.log('Toggled Expand Group!', group);
        this.table.groupHeader.toggleExpandGroup(group);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
}
RowGroupingComponent.ɵfac = function RowGroupingComponent_Factory(t) { return new (t || RowGroupingComponent)(); };
RowGroupingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RowGroupingComponent, selectors: [["row-grouping-demo"]], viewQuery: function RowGroupingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 19, vars: 10, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/row-grouping.component.ts", "target", "_blank"], [1, "material", "expandable", 3, "rows", "groupRowsBy", "columnMode", "scrollbarH", "headerHeight", "footerHeight", "rowHeight", "limit", "groupExpansionDefault"], ["myTable", ""], [3, "rowHeight", "toggle"], ["myGroupHeader", ""], ["ngx-datatable-group-header-template", ""], ["name", "Exp. Pay.", "prop", "", "editable", "true", "frozenLeft", "True"], ["ngx-datatable-cell-template", ""], ["name", "Source", "prop", "source", "editable", "false", "frozenLeft", "True"], ["name", "Name", "prop", "name", "editable", "true"], ["name", "Gender", "prop", "gender"], ["name", "Age", "prop", "age"], ["name", "Comment", "prop", "comment"], [2, "padding-left", "5px"], ["href", "#", "title", "Expand/Collapse Group", 3, "click"], [1, "datatable-checkbox", 3, "for"], ["type", "checkbox", "value", "0", 1, "expectedpayment", 3, "id", "name", "checked", "change"], ["type", "checkbox", "value", "1", 1, "expectedpayment2", 3, "id", "name", "checked", "change"], ["type", "checkbox", "value", "2", 1, "expectedpayment3", 3, "id", "name", "checked", "change"], ["autofocus", "", "type", "text", "name", "comment", 3, "value", "blur"]], template: function RowGroupingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Row Grouping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ngx-datatable", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ngx-datatable-group-header", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("toggle", function RowGroupingComponent_Template_ngx_datatable_group_header_toggle_8_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, RowGroupingComponent_ng_template_10_Template, 4, 5, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RowGroupingComponent_ng_template_12_Template, 6, 12, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ngx-datatable-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "ngx-datatable-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "ngx-datatable-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "ngx-datatable-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, RowGroupingComponent_ng_template_18_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", ctx.rows)("groupRowsBy", "age")("columnMode", ctx.ColumnMode.force)("scrollbarH", true)("headerHeight", 50)("footerHeight", 50)("rowHeight", 40)("limit", 4)("groupExpansionDefault", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowHeight", 50);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_body_body_group_header_directive__WEBPACK_IMPORTED_MODULE_2__.DatatableGroupHeaderDirective, _projects_swimlane_ngx_datatable_src_lib_components_body_body_group_header_template_directive__WEBPACK_IMPORTED_MODULE_3__.DatatableGroupHeaderTemplateDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnCellDirective], encapsulation: 2 });


/***/ }),

/***/ 45287:
/*!***************************************!*\
  !*** ./src/app/basic/rx.component.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RxDemoComponent": function() { return /* binding */ RxDemoComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);





class RxDemoComponent {
    constructor() {
        this.columns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.rows = rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable.create(subscriber => {
            this.fetch(data => {
                subscriber.next(data.splice(0, 15));
                subscriber.next(data.splice(15, 30));
                subscriber.complete();
            });
        });
        // Rx.DOM.ajax({ url: '/products', responseType: 'json'}).subscribe()
        // this.rows = Observable.from(rows);
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
RxDemoComponent.ɵfac = function RxDemoComponent_Factory(t) { return new (t || RxDemoComponent)(); };
RxDemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RxDemoComponent, selectors: [["rx-demo"]], decls: 8, vars: 8, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/rx.component.ts", "target", "_blank"], [1, "material", "striped", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight"]], template: function RxDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " RXjs Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, ctx.rows))("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 59119:
/*!**********************************************!*\
  !*** ./src/app/basic/scrolling.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorzVertScrolling": function() { return /* binding */ HorzVertScrolling; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);



class HorzVertScrolling {
    constructor() {
        this.rows = [];
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
HorzVertScrolling.ɵfac = function HorzVertScrolling_Factory(t) { return new (t || HorzVertScrolling)(); };
HorzVertScrolling.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HorzVertScrolling, selectors: [["horz-vert-scrolling-demo"]], decls: 12, vars: 9, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/scrolling.component.ts", "target", "_blank"], ["columnMode", "force", 1, "material", 3, "rows", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH"], ["name", "Name", 3, "width"], ["name", "Gender"], ["name", "Age"], ["name", "City", "prop", "address.city", 3, "width"], ["name", "State", "prop", "address.state", 3, "width"]], template: function HorzVertScrolling_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Horizontal and Vertical Scrolling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ngx-datatable-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 300);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_0__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_1__.DataTableColumnDirective], encapsulation: 2 });


/***/ }),

/***/ 10889:
/*!*****************************************!*\
  !*** ./src/app/basic/tabs.component.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsDemoComponent": function() { return /* binding */ TabsDemoComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);





function TabsDemoComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ngIf Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ngx-datatable", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngx-datatable-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ngx-datatable-column", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ngx-datatable-column", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx_r0.rows)("columnMode", ctx_r0.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("scrollbarV", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 80);
} }
class TabsDemoComponent {
    constructor() {
        this.rows = [];
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
TabsDemoComponent.ɵfac = function TabsDemoComponent_Factory(t) { return new (t || TabsDemoComponent)(); };
TabsDemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TabsDemoComponent, selectors: [["tabs-demo"]], decls: 25, vars: 12, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/tabs.component.ts", "target", "_blank"], [2, "width", "75%", "margin", "0 auto"], ["type", "button", 3, "click"], [3, "hidden"], [1, "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV"], ["name", "Name", 3, "width"], ["name", "Gender", 3, "width"], ["name", "Age", 3, "width"], [4, "ngIf"]], template: function TabsDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Hidden By Default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TabsDemoComponent_Template_button_click_8_listener() { ctx.tab1 = true; ctx.tab2 = false; return ctx.tab3 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Nothing");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TabsDemoComponent_Template_button_click_10_listener() { ctx.tab2 = true; ctx.tab1 = false; return ctx.tab3 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TabsDemoComponent_Template_button_click_12_listener() { ctx.tab3 = true; ctx.tab1 = false; return ctx.tab2 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "NgIf");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Click a button to toggle table visibilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "hidden Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ngx-datatable", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "ngx-datatable-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, TabsDemoComponent_div_24_Template, 7, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.tab1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.tab2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("scrollbarV", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tab3);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 96901:
/*!********************************************!*\
  !*** ./src/app/basic/virtual.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualScrollComponent": function() { return /* binding */ VirtualScrollComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);





function VirtualScrollComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r2 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](value_r2);
} }
function VirtualScrollComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r3 = ctx.row;
    const value_r4 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", row_r3["name"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](value_r4);
} }
class VirtualScrollComponent {
    constructor() {
        this.expanded = {};
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            const rows = JSON.parse(req.response);
            for (const row of rows) {
                row.height = Math.floor(Math.random() * 80) + 50;
            }
            cb(rows);
        };
        req.send();
    }
    getRowHeight(row) {
        return row.height;
    }
}
VirtualScrollComponent.ɵfac = function VirtualScrollComponent_Factory(t) { return new (t || VirtualScrollComponent)(); };
VirtualScrollComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VirtualScrollComponent, selectors: [["virtual-scroll-demo"]], decls: 12, vars: 9, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/virtual.component.ts", "target", "_blank"], [1, "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "page"], ["name", "Name", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Gender", 3, "width"], ["name", "Row Height", "prop", "height", 3, "width"], [3, "innerHTML"]], template: function VirtualScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Virtual Scrolling with 10k Rows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function VirtualScrollComponent_Template_ngx_datatable_page_6_listener($event) { return ctx.onPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, VirtualScrollComponent_ng_template_8_Template, 2, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, VirtualScrollComponent_ng_template_10_Template, 4, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", ctx.getRowHeight)("scrollbarV", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 80);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective], encapsulation: 2 });


/***/ }),

/***/ 96626:
/*!**************************************************!*\
  !*** ./src/app/columns/column-flex.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnFlexComponent": function() { return /* binding */ ColumnFlexComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);





function ColumnFlexComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r3 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r3, " ");
} }
function ColumnFlexComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r5 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r5, " ");
} }
function ColumnFlexComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r6 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r6, " ");
} }
class ColumnFlexComponent {
    constructor() {
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data.splice(0, 5);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
ColumnFlexComponent.ɵfac = function ColumnFlexComponent_Factory(t) { return new (t || ColumnFlexComponent)(); };
ColumnFlexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ColumnFlexComponent, selectors: [["column-flex-demo"]], decls: 13, vars: 7, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/columns/column-flex.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "columnMode", "headerHeight", "footerHeight", "rows"], ["name", "Name", 3, "flexGrow"], ["ngx-datatable-cell-template", ""], ["name", "Gender", 3, "flexGrow"], ["name", "Age", 3, "flexGrow"]], template: function ColumnFlexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Flex Column Width Distribution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ColumnFlexComponent_ng_template_8_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ColumnFlexComponent_ng_template_10_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ColumnFlexComponent_ng_template_12_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columnMode", ctx.ColumnMode.flex)("headerHeight", 50)("footerHeight", 50)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("flexGrow", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("flexGrow", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("flexGrow", 1);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective], encapsulation: 2 });


/***/ }),

/***/ 37712:
/*!***************************************************!*\
  !*** ./src/app/columns/column-force.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnForceComponent": function() { return /* binding */ ColumnForceComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);





function ColumnForceComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r3 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r3, " ");
} }
function ColumnForceComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r5 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r5, " ");
} }
function ColumnForceComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r6 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r6, " ");
} }
class ColumnForceComponent {
    constructor() {
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data.splice(0, 5);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
ColumnForceComponent.ɵfac = function ColumnForceComponent_Factory(t) { return new (t || ColumnForceComponent)(); };
ColumnForceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ColumnForceComponent, selectors: [["column-force-demo"]], decls: 13, vars: 7, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/columns/column-force.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "columnMode", "headerHeight", "footerHeight", "rows"], ["name", "Name", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Gender", 3, "width"], ["name", "Age", 3, "width"]], template: function ColumnForceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Force Fill Column Width Distribution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ColumnForceComponent_ng_template_8_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ColumnForceComponent_ng_template_10_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ColumnForceComponent_ng_template_12_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 300);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective], encapsulation: 2 });


/***/ }),

/***/ 14696:
/*!*****************************************************!*\
  !*** ./src/app/columns/column-reorder.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnReorderComponent": function() { return /* binding */ ColumnReorderComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);




function ColumnReorderComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r2 = ctx.class;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", class_r2);
} }
class ColumnReorderComponent {
    constructor() {
        this.rows = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.swapColumns = false;
        this.columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company', sortable: false }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
            setTimeout(() => {
                this.loadingIndicator = false;
            }, 1500);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
ColumnReorderComponent.ɵfac = function ColumnReorderComponent_Factory(t) { return new (t || ColumnReorderComponent)(); };
ColumnReorderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ColumnReorderComponent, selectors: [["column-reorder-demo"]], decls: 9, vars: 9, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/columns/column-reorder.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "loadingIndicator", "columns", "columnMode", "headerHeight", "footerHeight", "reorderable", "swapColumns", "targetMarkerTemplate"], ["targetMarkerTemplate", ""], [3, "ngClass"], [1, "icon", "datatable-icon-down"], [1, "icon", "datatable-icon-up"]], template: function ColumnReorderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Reorder Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ColumnReorderComponent_ng_template_7_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("reorderable", ctx.reorderable)("swapColumns", ctx.swapColumns)("targetMarkerTemplate", _r0);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: [".icon[_ngcontent-%COMP%] {\n        position: absolute;\n      }\n      .datatable-icon-down[_ngcontent-%COMP%] {\n        top: 0px;\n      }\n      .datatable-icon-up[_ngcontent-%COMP%] {\n        top: 40px;\n      }\n      .dragFromLeft[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n        left: -13px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbi1yZW9yZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxrQkFBa0I7TUFDcEI7TUFDQTtRQUNFLFFBQVE7TUFDVjtNQUNBO1FBQ0UsU0FBUztNQUNYO01BQ0E7UUFDRSxXQUFXO01BQ2IiLCJmaWxlIjoiY29sdW1uLXJlb3JkZXIuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtaWNvbi1kb3duIHtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWljb24tdXAge1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICB9XG4gICAgICAuZHJhZ0Zyb21MZWZ0IC5pY29uIHtcbiAgICAgICAgbGVmdDogLTEzcHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 99361:
/*!******************************************************!*\
  !*** ./src/app/columns/column-standard.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnStandardComponent": function() { return /* binding */ ColumnStandardComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);





function ColumnStandardComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r3 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r3, " ");
} }
function ColumnStandardComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r5 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r5, " ");
} }
function ColumnStandardComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r6 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r6, " ");
} }
class ColumnStandardComponent {
    constructor() {
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data.splice(0, 5);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
ColumnStandardComponent.ɵfac = function ColumnStandardComponent_Factory(t) { return new (t || ColumnStandardComponent)(); };
ColumnStandardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ColumnStandardComponent, selectors: [["column-standard-demo"]], decls: 13, vars: 7, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/columns/column-standard.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "columnMode", "headerHeight", "footerHeight"], ["name", "Name", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Gender", 3, "width"], ["name", "Age", 3, "width"]], template: function ColumnStandardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Fixed Column Widths ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ColumnStandardComponent_ng_template_8_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ColumnStandardComponent_ng_template_10_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ColumnStandardComponent_ng_template_12_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.standard)("headerHeight", 50)("footerHeight", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 300);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective], encapsulation: 2 });


/***/ }),

/***/ 30455:
/*!****************************************************!*\
  !*** ./src/app/columns/column-toggle.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnToggleComponent": function() { return /* binding */ ColumnToggleComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);





function ColumnToggleComponent_ngx_datatable_column_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-datatable-column", 6);
} if (rf & 2) {
    const col_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", col_r2.name);
} }
function ColumnToggleComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ColumnToggleComponent_li_13_Template_input_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const col_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.toggle(col_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", col_r3.name)("checked", ctx_r1.isChecked(col_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("for", col_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](col_r3.name);
} }
class ColumnToggleComponent {
    constructor() {
        this.rows = [
            {
                name: 'Claudine Neal',
                gender: 'female',
                company: 'Sealoud'
            },
            {
                name: 'Beryl Rice',
                gender: 'female',
                company: 'Velity'
            }
        ];
        this.columns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];
        this.allColumns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
    }
    toggle(col) {
        const isChecked = this.isChecked(col);
        if (isChecked) {
            this.columns = this.columns.filter(c => {
                return c.name !== col.name;
            });
        }
        else {
            this.columns = [...this.columns, col];
        }
    }
    isChecked(col) {
        return (this.columns.find(c => {
            return c.name === col.name;
        }) !== undefined);
    }
}
ColumnToggleComponent.ɵfac = function ColumnToggleComponent_Factory(t) { return new (t || ColumnToggleComponent)(); };
ColumnToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ColumnToggleComponent, selectors: [["column-toggle-demo"]], decls: 14, vars: 6, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/columns/column-toggle.component.ts", "target", "_blank"], [2, "float", "left", "width", "75%"], ["rowHeight", "auto", 1, "material", 3, "rows", "columnMode", "headerHeight", "footerHeight"], [3, "name", 4, "ngFor", "ngForOf"], [1, "selected-column"], [4, "ngFor", "ngForOf"], [3, "name"], ["type", "checkbox", 3, "id", "checked", "click"]], template: function ColumnToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Column Toggling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ngx-datatable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ColumnToggleComponent_ngx_datatable_column_8_Template, 1, 1, "ngx-datatable-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Available Columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ColumnToggleComponent_li_13_Template, 4, 4, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allColumns);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective], encapsulation: 2 });


/***/ }),

/***/ 8961:
/*!**********************************************!*\
  !*** ./src/app/columns/pinning.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnPinningComponent": function() { return /* binding */ ColumnPinningComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);




class ColumnPinningComponent {
    constructor() {
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
ColumnPinningComponent.ɵfac = function ColumnPinningComponent_Factory(t) { return new (t || ColumnPinningComponent)(); };
ColumnPinningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ColumnPinningComponent, selectors: [["column-pinning-demo"]], decls: 12, vars: 12, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/columns/pinning.component.ts", "target", "_blank"], [1, "material", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["name", "Name", 3, "width", "frozenLeft"], ["name", "Gender"], ["name", "Age"], ["name", "City", "prop", "address.city", 3, "width"], ["name", "State", "prop", "address.state", 3, "width", "frozenRight"]], template: function ColumnPinningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Column Pinning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ngx-datatable-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 300)("frozenLeft", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 300)("frozenRight", true);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective], encapsulation: 2 });


/***/ }),

/***/ 23489:
/*!*******************************************************!*\
  !*** ./src/app/paging/mock-server-results-service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockServerResultsService": function() { return /* binding */ MockServerResultsService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 65792);
/* harmony import */ var _model_paged_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/paged-data */ 99676);
/* harmony import */ var _model_corporate_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/corporate-employee */ 11045);
/* harmony import */ var src_assets_data_company_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/data/company.json */ 81839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);






/**
 * A server used to mock a paged data result from a server
 */
class MockServerResultsService {
    /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the employee data
     */
    getResults(page) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(src_assets_data_company_json__WEBPACK_IMPORTED_MODULE_2__)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(d => this.getPagedData(page)))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(1000 * Math.random()));
    }
    /**
     * Package companyData into a PagedData object based on the selected Page
     * @param page The page data used to get the selected data from companyData
     * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
     */
    getPagedData(page) {
        const pagedData = new _model_paged_data__WEBPACK_IMPORTED_MODULE_0__.PagedData();
        page.totalElements = src_assets_data_company_json__WEBPACK_IMPORTED_MODULE_2__.length;
        page.totalPages = page.totalElements / page.size;
        const start = page.pageNumber * page.size;
        const end = Math.min(start + page.size, page.totalElements);
        for (let i = start; i < end; i++) {
            const jsonObj = src_assets_data_company_json__WEBPACK_IMPORTED_MODULE_2__[i];
            const employee = new _model_corporate_employee__WEBPACK_IMPORTED_MODULE_1__.CorporateEmployee(jsonObj.name, jsonObj.gender, jsonObj.company, jsonObj.age);
            pagedData.data.push(employee);
        }
        pagedData.page = page;
        return pagedData;
    }
}
MockServerResultsService.ɵfac = function MockServerResultsService_Factory(t) { return new (t || MockServerResultsService)(); };
MockServerResultsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: MockServerResultsService, factory: MockServerResultsService.ɵfac });


/***/ }),

/***/ 11045:
/*!****************************************************!*\
  !*** ./src/app/paging/model/corporate-employee.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorporateEmployee": function() { return /* binding */ CorporateEmployee; }
/* harmony export */ });
/**
 * A model for an individual corporate employee
 */
class CorporateEmployee {
    constructor(name, gender, company, age) {
        this.name = name;
        this.gender = gender;
        this.company = company;
        this.age = age;
    }
}


/***/ }),

/***/ 35127:
/*!**************************************!*\
  !*** ./src/app/paging/model/page.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": function() { return /* binding */ Page; }
/* harmony export */ });
/**
 * An object used to get page information from the server
 */
class Page {
    constructor() {
        // The number of elements in the page
        this.size = 0;
        // The total number of elements
        this.totalElements = 0;
        // The total number of pages
        this.totalPages = 0;
        // The current page number
        this.pageNumber = 0;
    }
}


/***/ }),

/***/ 99676:
/*!********************************************!*\
  !*** ./src/app/paging/model/paged-data.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagedData": function() { return /* binding */ PagedData; }
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ 35127);

/**
 * An array of data with an associated page object used for paging
 */
class PagedData {
    constructor() {
        this.data = new Array();
        this.page = new _page__WEBPACK_IMPORTED_MODULE_0__.Page();
    }
}


/***/ }),

/***/ 34914:
/*!***************************************************!*\
  !*** ./src/app/paging/paging-client.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPagingComponent": function() { return /* binding */ ClientPagingComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



const _c0 = function () { return { name: "Name" }; };
const _c1 = function () { return { name: "Gender" }; };
const _c2 = function () { return { name: "Company" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class ClientPagingComponent {
    constructor() {
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
ClientPagingComponent.ɵfac = function ClientPagingComponent_Factory(t) { return new (t || ClientPagingComponent)(); };
ClientPagingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientPagingComponent, selectors: [["client-paging-demo"]], decls: 7, vars: 13, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/paging/paging-client.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "limit"]], template: function ClientPagingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Client-side Paging ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](9, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c2)))("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 92886:
/*!***********************************************************************!*\
  !*** ./src/app/paging/paging-scrolling-novirtualization.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagingScrollingNoVirtualizationComponent": function() { return /* binding */ PagingScrollingNoVirtualizationComponent; }
/* harmony export */ });
/* harmony import */ var _mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-server-results-service */ 23489);
/* harmony import */ var _model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/page */ 35127);
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);






const _c0 = function () { return { name: "Name" }; };
const _c1 = function () { return { name: "Gender" }; };
const _c2 = function () { return { name: "Company" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class PagingScrollingNoVirtualizationComponent {
    constructor(serverResultsService) {
        this.serverResultsService = serverResultsService;
        this.page = new _model_page__WEBPACK_IMPORTED_MODULE_1__.Page();
        this.rows = new Array();
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ColumnMode;
        this.page.pageNumber = 0;
        this.page.size = 20;
    }
    ngOnInit() {
        this.setPage({ offset: 0 });
    }
    /**
     * Populate the table with new data based on the page number
     * @param page The page to select
     */
    setPage(pageInfo) {
        this.page.pageNumber = pageInfo.offset;
        this.serverResultsService.getResults(this.page).subscribe(pagedData => {
            this.page = pagedData.page;
            this.rows = pagedData.data;
        });
    }
}
PagingScrollingNoVirtualizationComponent.ɵfac = function PagingScrollingNoVirtualizationComponent_Factory(t) { return new (t || PagingScrollingNoVirtualizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__.MockServerResultsService)); };
PagingScrollingNoVirtualizationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PagingScrollingNoVirtualizationComponent, selectors: [["paging-scrolling-novirtualization-demo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__.MockServerResultsService])], decls: 7, vars: 18, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/paging/paging-scrolling-novirtualization.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "scrollbarV", "virtualization", "externalPaging", "count", "offset", "limit", "page"]], template: function PagingScrollingNoVirtualizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Server-side Paging ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function PagingScrollingNoVirtualizationComponent_Template_ngx_datatable_page_6_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.rows)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](14, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c2)))("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("scrollbarV", true)("virtualization", false)("externalPaging", true)("count", ctx.page.totalElements)("offset", ctx.page.pageNumber)("limit", ctx.page.size);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 60907:
/*!***************************************************!*\
  !*** ./src/app/paging/paging-server.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerPagingComponent": function() { return /* binding */ ServerPagingComponent; }
/* harmony export */ });
/* harmony import */ var _mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-server-results-service */ 23489);
/* harmony import */ var _model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/page */ 35127);
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);






const _c0 = function () { return { name: "Name" }; };
const _c1 = function () { return { name: "Gender" }; };
const _c2 = function () { return { name: "Company" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class ServerPagingComponent {
    constructor(serverResultsService) {
        this.serverResultsService = serverResultsService;
        this.page = new _model_page__WEBPACK_IMPORTED_MODULE_1__.Page();
        this.rows = new Array();
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ColumnMode;
        this.page.pageNumber = 0;
        this.page.size = 20;
    }
    ngOnInit() {
        this.setPage({ offset: 0 });
    }
    /**
     * Populate the table with new data based on the page number
     * @param page The page to select
     */
    setPage(pageInfo) {
        this.page.pageNumber = pageInfo.offset;
        this.serverResultsService.getResults(this.page).subscribe(pagedData => {
            this.page = pagedData.page;
            this.rows = pagedData.data;
        });
    }
}
ServerPagingComponent.ɵfac = function ServerPagingComponent_Factory(t) { return new (t || ServerPagingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__.MockServerResultsService)); };
ServerPagingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ServerPagingComponent, selectors: [["server-paging-demo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__.MockServerResultsService])], decls: 7, vars: 16, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/paging/paging-server.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "externalPaging", "count", "offset", "limit", "page"]], template: function ServerPagingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Server-side Paging ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function ServerPagingComponent_Template_ngx_datatable_page_6_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.rows)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](12, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c2)))("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("externalPaging", true)("count", ctx.page.totalElements)("offset", ctx.page.pageNumber)("limit", ctx.page.size);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 12873:
/*!****************************************************!*\
  !*** ./src/app/paging/paging-virtual.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualPagingComponent": function() { return /* binding */ VirtualPagingComponent; }
/* harmony export */ });
/* harmony import */ var _mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-server-results-service */ 23489);
/* harmony import */ var _model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/page */ 35127);
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);






const _c0 = function () { return { name: "Name", sortable: false }; };
const _c1 = function () { return { name: "Gender", sortable: false }; };
const _c2 = function () { return { name: "Company", sortable: false }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class VirtualPagingComponent {
    constructor(serverResultsService) {
        this.serverResultsService = serverResultsService;
        this.cache = {};
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ColumnMode;
        this.isLoading = 0;
        this.pageNumber = 0;
    }
    setPage(pageInfo) {
        // Current page number is determined by last call to setPage
        // This is the page the UI is currently displaying
        // The current page is based on the UI pagesize and scroll position
        // Pagesize can change depending on browser size
        this.pageNumber = pageInfo.offset;
        // Calculate row offset in the UI using pageInfo
        // This is the scroll position in rows
        const rowOffset = pageInfo.offset * pageInfo.pageSize;
        // When calling the server, we keep page size fixed
        // This should be the max UI pagesize or larger
        // This is not necessary but helps simplify caching since the UI page size can change
        const page = new _model_page__WEBPACK_IMPORTED_MODULE_1__.Page();
        page.size = 20;
        page.pageNumber = Math.floor(rowOffset / page.size);
        // We keep a index of server loaded pages so we don't load same data twice
        // This is based on the server page not the UI
        if (this.cache[page.pageNumber])
            return;
        this.cache[page.pageNumber] = true;
        // Counter of pending API calls
        this.isLoading++;
        this.serverResultsService.getResults(page).subscribe(pagedData => {
            // Update total count
            this.totalElements = pagedData.page.totalElements;
            // Create array to store data if missing
            // The array should have the correct number of with "holes" for missing data
            if (!this.rows) {
                this.rows = new Array(this.totalElements || 0);
            }
            // Calc starting row offset
            // This is the position to insert the new data
            const start = pagedData.page.pageNumber * pagedData.page.size;
            // Copy existing data
            const rows = [...this.rows];
            // Insert new rows into correct position
            rows.splice(start, pagedData.page.size, ...pagedData.data);
            // Set rows to our new rows for display
            this.rows = rows;
            // Decrement the counter of pending API calls
            this.isLoading--;
        });
    }
}
VirtualPagingComponent.ɵfac = function VirtualPagingComponent_Factory(t) { return new (t || VirtualPagingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__.MockServerResultsService)); };
VirtualPagingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VirtualPagingComponent, selectors: [["virtual-paging-demo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__.MockServerResultsService])], decls: 7, vars: 19, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/paging/paging-virtual.component.ts", "target", "_blank"], [1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "loadingIndicator", "scrollbarV", "footerHeight", "rowHeight", "externalPaging", "externalSorting", "count", "offset", "page"]], template: function VirtualPagingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Virtual Server-side Paging ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function VirtualPagingComponent_Template_ngx_datatable_page_6_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.rows)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](15, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c2)))("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("loadingIndicator", ctx.isLoading > 0)("scrollbarV", true)("footerHeight", 50)("rowHeight", 50)("externalPaging", true)("externalSorting", true)("count", ctx.totalElements)("offset", ctx.pageNumber);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 97806:
/*!******************************************************!*\
  !*** ./src/app/paging/scrolling-server.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockServerResultsService": function() { return /* binding */ MockServerResultsService; },
/* harmony export */   "ServerScrollingComponent": function() { return /* binding */ ServerScrollingComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 65792);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_assets_data_company_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/data/company.json */ 81839);
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);






const _c0 = function () { return { name: "Name" }; };
const _c1 = function () { return { name: "Gender" }; };
const _c2 = function () { return { name: "Company" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
const companyData = src_assets_data_company_json__WEBPACK_IMPORTED_MODULE_0__;
class PagedData {
}
/**
 * A server used to mock a paged data result from a server
 */
class MockServerResultsService {
    getResults(offset, limit) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(companyData.slice(offset, offset + limit)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(new Date(Date.now() + 500)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(d => ({ data: d })));
    }
}
MockServerResultsService.ɵfac = function MockServerResultsService_Factory(t) { return new (t || MockServerResultsService)(); };
MockServerResultsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: MockServerResultsService, factory: MockServerResultsService.ɵfac });
class ServerScrollingComponent {
    constructor(serverResultsService, el) {
        this.serverResultsService = serverResultsService;
        this.el = el;
        this.headerHeight = 50;
        this.rowHeight = 50;
        this.pageLimit = 10;
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_1__.ColumnMode;
    }
    ngOnInit() {
        this.onScroll(0);
    }
    onScroll(offsetY) {
        // total height of all rows in the viewport
        const viewHeight = this.el.nativeElement.getBoundingClientRect().height - this.headerHeight;
        // check if we scrolled to the end of the viewport
        if (!this.isLoading && offsetY + viewHeight >= this.rows.length * this.rowHeight) {
            // total number of results to load
            let limit = this.pageLimit;
            // check if we haven't fetched any results yet
            if (this.rows.length === 0) {
                // calculate the number of rows that fit within viewport
                const pageSize = Math.ceil(viewHeight / this.rowHeight);
                // change the limit to pageSize such that we fill the first page entirely
                // (otherwise, we won't be able to scroll past it)
                limit = Math.max(pageSize, this.pageLimit);
            }
            this.loadPage(limit);
        }
    }
    loadPage(limit) {
        // set the loading flag, which serves two purposes:
        // 1) it prevents the same page from being loaded twice
        // 2) it enables display of the loading indicator
        this.isLoading = true;
        this.serverResultsService.getResults(this.rows.length, limit).subscribe(results => {
            const rows = [...this.rows, ...results.data];
            this.rows = rows;
            this.isLoading = false;
        });
    }
}
ServerScrollingComponent.ɵfac = function ServerScrollingComponent_Factory(t) { return new (t || ServerScrollingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MockServerResultsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef)); };
ServerScrollingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ServerScrollingComponent, selectors: [["server-scrolling-demo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([MockServerResultsService])], decls: 7, vars: 14, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/paging/scrolling-server.component.ts", "target", "_blank"], [1, "material", "server-scrolling-demo", 3, "rows", "columns", "columnMode", "headerHeight", "rowHeight", "loadingIndicator", "scrollbarV", "scroll"]], template: function ServerScrollingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Server-side Scrolling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function ServerScrollingComponent_Template_ngx_datatable_scroll_6_listener($event) { return ctx.onScroll($event.offsetY); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", ctx.rows)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](10, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c2)))("columnMode", ctx.ColumnMode.force)("headerHeight", ctx.headerHeight)("rowHeight", ctx.rowHeight)("loadingIndicator", ctx.isLoading)("scrollbarV", true);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_2__.DatatableComponent], styles: [".server-scrolling-demo[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px);\n}\n\n  .progress-linear {\n  position: fixed !important;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbGluZy1zZXJ2ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2IiLCJmaWxlIjoic2Nyb2xsaW5nLXNlcnZlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZlci1zY3JvbGxpbmctZGVtbyB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcbn1cblxuOjpuZy1kZWVwIC5wcm9ncmVzcy1saW5lYXIge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 54516:
/*!*******************************************************!*\
  !*** ./src/app/selection/selection-cell.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CellSelectionComponent": function() { return /* binding */ CellSelectionComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



class CellSelectionComponent {
    constructor() {
        this.rows = [];
        this.selected = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.SelectionType = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SelectionType;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onSelect(event) {
        console.log('Event: select', event, this.selected);
    }
    onActivate(event) {
        console.log('Event: activate', event);
    }
}
CellSelectionComponent.ɵfac = function CellSelectionComponent_Factory(t) { return new (t || CellSelectionComponent)(); };
CellSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CellSelectionComponent, selectors: [["cell-selection-demo"]], decls: 7, vars: 8, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/selection/selection-cell.component.ts", "target", "_blank"], [1, "material", "selection-cell", 3, "rows", "columnMode", "columns", "headerHeight", "footerHeight", "rowHeight", "selected", "selectionType", "select", "activate"]], template: function CellSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Cell Selection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function CellSelectionComponent_Template_ngx_datatable_select_6_listener($event) { return ctx.onSelect($event); })("activate", function CellSelectionComponent_Template_ngx_datatable_activate_6_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("columns", ctx.columns)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("selected", ctx.selected)("selectionType", ctx.SelectionType.cell);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 23291:
/*!******************************************************************!*\
  !*** ./src/app/selection/selection-chkbox-template.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomCheckboxSelectionComponent": function() { return /* binding */ CustomCheckboxSelectionComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-header.directive */ 2794);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);







function CustomCheckboxSelectionComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CustomCheckboxSelectionComponent_ng_template_18_Template_input_change_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const allRowsSelected_r5 = restoredCtx.allRowsSelected; const selectFn_r6 = restoredCtx.selectFn; return selectFn_r6(!allRowsSelected_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allRowsSelected_r5 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", allRowsSelected_r5);
} }
function CustomCheckboxSelectionComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CustomCheckboxSelectionComponent_ng_template_19_Template_input_change_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const onCheckboxChangeFn_r11 = restoredCtx.onCheckboxChangeFn; return onCheckboxChangeFn_r11($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isSelected_r10 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", isSelected_r10);
} }
function CustomCheckboxSelectionComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sel_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", sel_r14.name, " ");
} }
function CustomCheckboxSelectionComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class CustomCheckboxSelectionComponent {
    constructor() {
        this.rows = [];
        this.selected = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.SelectionType = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SelectionType;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    onActivate(event) {
        console.log('Activate Event', event);
    }
    add() {
        this.selected.push(this.rows[1], this.rows[3]);
    }
    update() {
        this.selected = [this.rows[1], this.rows[3]];
    }
    remove() {
        this.selected = [];
    }
}
CustomCheckboxSelectionComponent.ɵfac = function CustomCheckboxSelectionComponent_Factory(t) { return new (t || CustomCheckboxSelectionComponent)(); };
CustomCheckboxSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CustomCheckboxSelectionComponent, selectors: [["chkbox-selection-template-demo"]], decls: 31, vars: 15, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/selection/selection-chkbox-template.component.ts", "target", "_blank"], ["href", "javascript:void(0)", 3, "click"], [2, "float", "left", "width", "75%"], ["rowHeight", "auto", 1, "material", 2, "width", "90%", 3, "rows", "columnMode", "headerHeight", "footerHeight", "limit", "selected", "selectionType", "activate", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Name"], ["name", "Gender"], ["name", "Company"], [1, "selected-column"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "checkbox", 3, "checked", "change"]], template: function CustomCheckboxSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Custom Checkbox Selection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomCheckboxSelectionComponent_Template_a_click_7_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomCheckboxSelectionComponent_Template_a_click_10_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomCheckboxSelectionComponent_Template_a_click_13_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ngx-datatable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function CustomCheckboxSelectionComponent_Template_ngx_datatable_activate_16_listener($event) { return ctx.onActivate($event); })("select", function CustomCheckboxSelectionComponent_Template_ngx_datatable_select_16_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CustomCheckboxSelectionComponent_ng_template_18_Template, 1, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CustomCheckboxSelectionComponent_ng_template_19_Template, 1, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ngx-datatable-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ngx-datatable-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "ngx-datatable-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Selections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CustomCheckboxSelectionComponent_li_29_Template, 2, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, CustomCheckboxSelectionComponent_li_30_Template, 2, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 5)("selected", ctx.selected)("selectionType", ctx.SelectionType.checkbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 30)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", ctx.selected == null ? null : ctx.selected.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.selected == null ? null : ctx.selected.length));
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnHeaderDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 79125:
/*!*********************************************************!*\
  !*** ./src/app/selection/selection-chkbox.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxSelectionComponent": function() { return /* binding */ CheckboxSelectionComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);





function CheckboxSelectionComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sel_r2.name, " ");
} }
function CheckboxSelectionComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CheckboxSelectionComponent {
    constructor() {
        this.rows = [];
        this.selected = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.SelectionType = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SelectionType;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    onActivate(event) {
        console.log('Activate Event', event);
    }
    add() {
        this.selected.push(this.rows[1], this.rows[3]);
    }
    update() {
        this.selected = [this.rows[1], this.rows[3]];
    }
    remove() {
        this.selected = [];
    }
    displayCheck(row) {
        return row.name !== 'Ethel Price';
    }
}
CheckboxSelectionComponent.ɵfac = function CheckboxSelectionComponent_Factory(t) { return new (t || CheckboxSelectionComponent)(); };
CheckboxSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CheckboxSelectionComponent, selectors: [["chkbox-selection-demo"]], decls: 29, vars: 19, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/selection/selection-chkbox.component.ts", "target", "_blank"], ["href", "javascript:void(0)", 3, "click"], [2, "float", "left", "width", "75%"], ["rowHeight", "auto", 1, "material", 2, "width", "90%", 3, "rows", "columnMode", "headerHeight", "footerHeight", "limit", "selected", "selectionType", "selectAllRowsOnPage", "displayCheck", "activate", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable", "headerCheckboxable", "checkboxable"], ["name", "Name"], ["name", "Gender"], ["name", "Company"], [1, "selected-column"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function CheckboxSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Checkbox Selection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CheckboxSelectionComponent_Template_a_click_7_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CheckboxSelectionComponent_Template_a_click_10_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CheckboxSelectionComponent_Template_a_click_13_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ngx-datatable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activate", function CheckboxSelectionComponent_Template_ngx_datatable_activate_16_listener($event) { return ctx.onActivate($event); })("select", function CheckboxSelectionComponent_Template_ngx_datatable_select_16_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ngx-datatable-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Selections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, CheckboxSelectionComponent_li_27_Template, 2, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CheckboxSelectionComponent_li_28_Template, 2, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 5)("selected", ctx.selected)("selectionType", ctx.SelectionType.checkbox)("selectAllRowsOnPage", false)("displayCheck", ctx.displayCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 30)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false)("headerCheckboxable", true)("checkboxable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.selected == null ? null : ctx.selected.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.selected == null ? null : ctx.selected.length));
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 37495:
/*!***********************************************************!*\
  !*** ./src/app/selection/selection-disabled.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiDisableSelectionComponent": function() { return /* binding */ MultiDisableSelectionComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);




function MultiDisableSelectionComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sel_r2.name, " ");
} }
function MultiDisableSelectionComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class MultiDisableSelectionComponent {
    constructor() {
        this.rows = [];
        this.selected = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.SelectionType = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SelectionType;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    onActivate(event) {
        console.log('Activate Event', event);
    }
    checkSelectable(event) {
        console.log('Checking if selectable', event);
        return event.name !== 'Ethel Price';
    }
}
MultiDisableSelectionComponent.ɵfac = function MultiDisableSelectionComponent_Factory(t) { return new (t || MultiDisableSelectionComponent)(); };
MultiDisableSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MultiDisableSelectionComponent, selectors: [["multidisable-selection-demo"]], decls: 14, vars: 11, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/selection/selection-disabled.component.ts", "target", "_blank"], [2, "float", "left", "width", "75%"], ["rowHeight", "auto", 1, "material", 3, "rows", "columnMode", "columns", "headerHeight", "footerHeight", "limit", "selectCheck", "selected", "selectionType", "activate", "select"], [1, "selected-column"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function MultiDisableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Selection Callback to Disable Selections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ngx-datatable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function MultiDisableSelectionComponent_Template_ngx_datatable_activate_7_listener($event) { return ctx.onActivate($event); })("select", function MultiDisableSelectionComponent_Template_ngx_datatable_select_7_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Selections");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MultiDisableSelectionComponent_li_12_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MultiDisableSelectionComponent_li_13_Template, 2, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("columns", ctx.columns)("headerHeight", 50)("footerHeight", 50)("limit", 5)("selectCheck", ctx.checkSelectable)("selected", ctx.selected)("selectionType", ctx.SelectionType.multi);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selected.length);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 34463:
/*!**************************************************************!*\
  !*** ./src/app/selection/selection-multi-click.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiClickSelectionComponent": function() { return /* binding */ MultiClickSelectionComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);




function MultiClickSelectionComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sel_r2.name, " ");
} }
function MultiClickSelectionComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class MultiClickSelectionComponent {
    constructor() {
        this.rows = [];
        this.selected = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.SelectionType = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SelectionType;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    onActivate(event) {
        console.log('Activate Event', event);
    }
}
MultiClickSelectionComponent.ɵfac = function MultiClickSelectionComponent_Factory(t) { return new (t || MultiClickSelectionComponent)(); };
MultiClickSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MultiClickSelectionComponent, selectors: [["multi-click-selection-demo"]], decls: 17, vars: 10, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/selection/selection-multi-click.component.ts", "target", "_blank"], [2, "float", "left", "width", "75%"], [1, "info"], ["rowHeight", "auto", 1, "material", 3, "rows", "columnMode", "columns", "headerHeight", "footerHeight", "limit", "selected", "selectionType", "activate", "select"], [1, "selected-column"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function MultiClickSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Multi Click Selection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "This demonstrates multi selection table, where any click event causes a selection.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ngx-datatable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function MultiClickSelectionComponent_Template_ngx_datatable_activate_10_listener($event) { return ctx.onActivate($event); })("select", function MultiClickSelectionComponent_Template_ngx_datatable_select_10_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Selections");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MultiClickSelectionComponent_li_15_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MultiClickSelectionComponent_li_16_Template, 2, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("columns", ctx.columns)("headerHeight", 50)("footerHeight", 50)("limit", 5)("selected", ctx.selected)("selectionType", ctx.SelectionType.multiClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selected.length);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 28947:
/*!********************************************************!*\
  !*** ./src/app/selection/selection-multi.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiSelectionComponent": function() { return /* binding */ MultiSelectionComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);




function MultiSelectionComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sel_r2.name, " ");
} }
function MultiSelectionComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class MultiSelectionComponent {
    constructor() {
        this.rows = [];
        this.selected = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.SelectionType = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SelectionType;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    onActivate(event) {
        console.log('Activate Event', event);
    }
}
MultiSelectionComponent.ɵfac = function MultiSelectionComponent_Factory(t) { return new (t || MultiSelectionComponent)(); };
MultiSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MultiSelectionComponent, selectors: [["multi-selection-demo"]], decls: 17, vars: 10, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/selection/selection-multi.component.ts", "target", "_blank"], [2, "float", "left", "width", "75%"], [1, "info"], ["rowHeight", "auto", 1, "material", 3, "rows", "columnMode", "columns", "headerHeight", "footerHeight", "limit", "selected", "selectionType", "activate", "select"], [1, "selected-column"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function MultiSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Multi Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "This demonstrates multi selection table, use CTRL or SHIFT click to select multiple items.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ngx-datatable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function MultiSelectionComponent_Template_ngx_datatable_activate_10_listener($event) { return ctx.onActivate($event); })("select", function MultiSelectionComponent_Template_ngx_datatable_select_10_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Selections");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MultiSelectionComponent_li_15_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MultiSelectionComponent_li_16_Template, 2, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("columns", ctx.columns)("headerHeight", 50)("footerHeight", 50)("limit", 5)("selected", ctx.selected)("selectionType", ctx.SelectionType.multi);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selected.length);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 65556:
/*!*********************************************************!*\
  !*** ./src/app/selection/selection-single.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleSelectionComponent": function() { return /* binding */ SingleSelectionComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);




function SingleSelectionComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sel_r2.name, " ");
} }
function SingleSelectionComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SingleSelectionComponent {
    constructor() {
        this.rows = [];
        this.selected = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.SelectionType = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SelectionType;
        this.fetch(data => {
            this.selected = [data[2]];
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
    }
    onActivate(event) {
        console.log('Activate Event', event);
    }
}
SingleSelectionComponent.ɵfac = function SingleSelectionComponent_Factory(t) { return new (t || SingleSelectionComponent)(); };
SingleSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SingleSelectionComponent, selectors: [["single-selection-demo"]], decls: 17, vars: 10, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/selection/selection-single.component.ts", "target", "_blank"], [2, "float", "left", "width", "75%"], [1, "info"], ["rowHeight", "auto", 1, "material", 3, "rows", "columnMode", "columns", "headerHeight", "footerHeight", "limit", "selected", "selectionType", "activate", "select"], [1, "selected-column"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function SingleSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Single Row Selection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "This demonstrates a simple single selection table with the 3rd row selected by default.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ngx-datatable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function SingleSelectionComponent_Template_ngx_datatable_activate_10_listener($event) { return ctx.onActivate($event); })("select", function SingleSelectionComponent_Template_ngx_datatable_select_10_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Selections");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SingleSelectionComponent_li_15_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SingleSelectionComponent_li_16_Template, 2, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("columns", ctx.columns)("headerHeight", 50)("footerHeight", 50)("limit", 5)("selected", ctx.selected)("selectionType", ctx.SelectionType.single);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selected.length);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 70623:
/*!*****************************************************!*\
  !*** ./src/app/sorting/sorting-client.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientSortingComponent": function() { return /* binding */ ClientSortingComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



class ClientSortingComponent {
    constructor() {
        this.rows = [];
        this.columns = [{ name: 'Company' }, { name: 'Name' }, { name: 'Gender' }];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.SortType = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SortType;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
}
ClientSortingComponent.ɵfac = function ClientSortingComponent_Factory(t) { return new (t || ClientSortingComponent)(); };
ClientSortingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientSortingComponent, selectors: [["client-sorting-demo"]], decls: 7, vars: 8, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/sorting/sorting-client.component.ts", "target", "_blank"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV"]], template: function ClientSortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Client-side Sorting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("sortType", ctx.SortType.multi)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("scrollbarV", true);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 14845:
/*!*********************************************************!*\
  !*** ./src/app/sorting/sorting-comparator.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortingComparatorComponent": function() { return /* binding */ SortingComparatorComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



class SortingComparatorComponent {
    constructor() {
        this.rows = [];
        this.columns = [
            { name: 'Company', comparator: this.companyComparator.bind(this) },
            { name: 'Name', sortable: false },
            { name: 'Gender', sortable: false }
        ];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data.splice(0, 20));
        };
        req.send();
    }
    companyComparator(propA, propB) {
        console.log('Sorting Comparator', propA, propB);
        // Just a simple sort function comparisoins
        if (propA.toLowerCase() < propB.toLowerCase()) {
            return -1;
        }
        if (propA.toLowerCase() > propB.toLowerCase()) {
            return 1;
        }
    }
}
SortingComparatorComponent.ɵfac = function SortingComparatorComponent_Factory(t) { return new (t || SortingComparatorComponent)(); };
SortingComparatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SortingComparatorComponent, selectors: [["comparator-sorting-demo"]], decls: 7, vars: 5, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/sorting/sorting-comparator.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight"]], template: function SortingComparatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Custom Sorting Comparator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 46411:
/*!******************************************************!*\
  !*** ./src/app/sorting/sorting-default.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultSortingComponent": function() { return /* binding */ DefaultSortingComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);





function DefaultSortingComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r2 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r2.company, " ");
} }
function DefaultSortingComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r3 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r3.name, " ");
} }
const _c0 = function () { return { prop: "name", dir: "desc" }; };
const _c1 = function (a0) { return [a0]; };
class DefaultSortingComponent {
    constructor() {
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
    }
    ngOnInit() {
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
}
DefaultSortingComponent.ɵfac = function DefaultSortingComponent_Factory(t) { return new (t || DefaultSortingComponent)(); };
DefaultSortingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DefaultSortingComponent, selectors: [["default-sorting-demo"]], decls: 12, vars: 10, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/sorting/sorting-default.component.ts", "target", "_blank"], [1, "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "sorts"], ["name", "Company"], ["ngx-datatable-cell-template", ""], ["name", "Name"], ["name", "Gender"]], template: function DefaultSortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Client-side Sorting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DefaultSortingComponent_ng_template_8_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DefaultSortingComponent_ng_template_10_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("scrollbarV", true)("sorts", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0)));
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective], encapsulation: 2 });


/***/ }),

/***/ 39958:
/*!*****************************************************!*\
  !*** ./src/app/sorting/sorting-server.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerSortingComponent": function() { return /* binding */ ServerSortingComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



class ServerSortingComponent {
    constructor() {
        this.loading = false;
        this.rows = [];
        this.columns = [
            { name: 'Company', sortable: true },
            { name: 'Name', sortable: true },
            { name: 'Gender', sortable: true }
        ];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data.splice(0, 20));
        };
        req.send();
    }
    onSort(event) {
        // event was triggered, start sort sequence
        console.log('Sort Event', event);
        this.loading = true;
        // emulate a server request with a timeout
        setTimeout(() => {
            const rows = [...this.rows];
            // this is only for demo purposes, normally
            // your server would return the result for
            // you and you would just set the rows prop
            const sort = event.sorts[0];
            rows.sort((a, b) => {
                return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
            });
            this.rows = rows;
            this.loading = false;
        }, 1000);
    }
}
ServerSortingComponent.ɵfac = function ServerSortingComponent_Factory(t) { return new (t || ServerSortingComponent)(); };
ServerSortingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ServerSortingComponent, selectors: [["server-sorting-demo"]], decls: 7, vars: 7, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/sorting/sorting-server.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "externalSorting", "loadingIndicator", "sort"]], template: function ServerSortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Server-side Sorting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sort", function ServerSortingComponent_Template_ngx_datatable_sort_6_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("externalSorting", true)("loadingIndicator", ctx.loading);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 30391:
/*!******************************************************************!*\
  !*** ./src/app/summary/summary-row-custom-template.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryRowCustomTemplateComponent": function() { return /* binding */ SummaryRowCustomTemplateComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);




const _c0 = ["nameSummaryCell"];
function SummaryRowCustomTemplateComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](name_r5);
} }
function SummaryRowCustomTemplateComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SummaryRowCustomTemplateComponent_ng_template_7_div_1_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.getNames());
} }
class SummaryRowCustomTemplateComponent {
    constructor() {
        this.rows = [];
        this.columns = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data.splice(0, 5);
        });
    }
    ngOnInit() {
        this.columns = [
            {
                prop: 'name',
                summaryFunc: () => null,
                summaryTemplate: this.nameSummaryCell
            },
            { name: 'Gender', summaryFunc: cells => this.summaryForGender(cells) },
            { prop: 'age', summaryFunc: cells => this.avgAge(cells) }
        ];
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    getNames() {
        return this.rows.map(row => row.name).map(fullName => fullName.split(' ')[1]);
    }
    summaryForGender(cells) {
        const males = cells.filter(cell => cell === 'male').length;
        const females = cells.filter(cell => cell === 'female').length;
        return `males: ${males}, females: ${females}`;
    }
    avgAge(cells) {
        const filteredCells = cells.filter(cell => !!cell);
        return filteredCells.reduce((sum, cell) => (sum += cell), 0) / filteredCells.length;
    }
}
SummaryRowCustomTemplateComponent.ɵfac = function SummaryRowCustomTemplateComponent_Factory(t) { return new (t || SummaryRowCustomTemplateComponent)(); };
SummaryRowCustomTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SummaryRowCustomTemplateComponent, selectors: [["summary-row-custom-template-demo"]], viewQuery: function SummaryRowCustomTemplateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nameSummaryCell = _t.first);
    } }, decls: 9, vars: 7, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/summary/summary-row-custom-template.component.ts"], [1, "material", 3, "summaryRow", "columns", "columnMode", "headerHeight", "rowHeight", "summaryHeight", "rows"], ["nameSummaryCell", ""], [1, "name-container"], ["class", "chip", 4, "ngFor", "ngForOf"], [1, "chip"], [1, "chip-content"]], template: function SummaryRowCustomTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Summary Row with Custom Template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SummaryRowCustomTemplateComponent_ng_template_7_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("summaryRow", true)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("rowHeight", "auto")("summaryHeight", 55)("rows", ctx.rows);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".name-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.name-container[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  background-color: #555;\n  border-radius: 20px;\n  text-align: center;\n  margin: 3px 1px;\n  width: 100px;\n  padding: 2px 0px;\n}\n\n.name-container[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]   .chip-content[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnktcm93LWN1c3RvbS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUpBO0VBTUksc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFFcEI7O0FBYkE7RUFjTSxXQUFXO0FBR2pCIiwiZmlsZSI6InN1bW1hcnktcm93LWN1c3RvbS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLmNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAzcHggMXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOiAycHggMHB4O1xuXG4gICAgLmNoaXAtY29udGVudCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 86380:
/*!**************************************************************!*\
  !*** ./src/app/summary/summary-row-inline-html.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryRowInlineHtmlComponent": function() { return /* binding */ SummaryRowInlineHtmlComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);





function SummaryRowInlineHtmlComponent_ng_template_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](name_r3);
} }
function SummaryRowInlineHtmlComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SummaryRowInlineHtmlComponent_ng_template_10_div_1_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.getNames());
} }
class SummaryRowInlineHtmlComponent {
    constructor() {
        this.rows = [];
        this.enableSummary = true;
        this.summaryPosition = 'top';
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data.splice(0, 5);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    getNames() {
        return this.rows.map(row => row.name).map(fullName => fullName.split(' ')[1]);
    }
    summaryForGender(cells) {
        const males = cells.filter(cell => cell === 'male').length;
        const females = cells.filter(cell => cell === 'female').length;
        return `males: ${males}, females: ${females}`;
    }
    avgAge(cells) {
        const filteredCells = cells.filter(cell => !!cell);
        return filteredCells.reduce((sum, cell) => (sum += cell), 0) / filteredCells.length;
    }
}
SummaryRowInlineHtmlComponent.ɵfac = function SummaryRowInlineHtmlComponent_Factory(t) { return new (t || SummaryRowInlineHtmlComponent)(); };
SummaryRowInlineHtmlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SummaryRowInlineHtmlComponent, selectors: [["summary-row-inline-html"]], decls: 12, vars: 9, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/summary/summary-row-inline-html.component.ts"], ["rowHeight", "auto", 1, "material", 3, "summaryRow", "summaryPosition", "summaryHeight", "columnMode", "headerHeight", "rows"], ["prop", "name", 3, "summaryTemplate"], ["name", "Gender", 3, "summaryFunc"], ["prop", "age", 3, "summaryFunc"], ["nameSummaryCell", ""], [1, "name-container"], ["class", "chip", 4, "ngFor", "ngForOf"], [1, "chip"], [1, "chip-content"]], template: function SummaryRowInlineHtmlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Inline HTML template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ngx-datatable-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SummaryRowInlineHtmlComponent_ng_template_10_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("summaryRow", ctx.enableSummary)("summaryPosition", ctx.summaryPosition)("summaryHeight", 100)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("summaryTemplate", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("summaryFunc", ctx.summaryForGender);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("summaryFunc", ctx.avgAge);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 80160:
/*!****************************************************************!*\
  !*** ./src/app/summary/summary-row-server-paging.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryRowServerPagingComponent": function() { return /* binding */ SummaryRowServerPagingComponent; }
/* harmony export */ });
/* harmony import */ var _paging_mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paging/mock-server-results-service */ 23489);
/* harmony import */ var _paging_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../paging/model/page */ 35127);
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);






class SummaryRowServerPagingComponent {
    constructor(serverResultsService) {
        this.serverResultsService = serverResultsService;
        this.page = new _paging_model_page__WEBPACK_IMPORTED_MODULE_1__.Page();
        this.rows = new Array();
        this.columns = [
            // NOTE: cells for current page only !
            { name: 'Name', summaryFunc: cells => `${cells.length} total` },
            { name: 'Gender', summaryFunc: () => this.getGenderSummary() },
            { name: 'Company', summaryFunc: () => null }
        ];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ColumnMode;
        this.page.pageNumber = 0;
        this.page.size = 20;
    }
    ngOnInit() {
        this.setPage({ offset: 0 });
    }
    /**
     * Populate the table with new data based on the page number
     * @param page The page to select
     */
    setPage(pageInfo) {
        this.page.pageNumber = pageInfo.offset;
        this.serverResultsService.getResults(this.page).subscribe(pagedData => {
            this.page = pagedData.page;
            this.rows = pagedData.data;
        });
    }
    getGenderSummary() {
        // NOTE: there should be logic to get required informations from server
        return '10 males, 10 females';
    }
}
SummaryRowServerPagingComponent.ɵfac = function SummaryRowServerPagingComponent_Factory(t) { return new (t || SummaryRowServerPagingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_paging_mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__.MockServerResultsService)); };
SummaryRowServerPagingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SummaryRowServerPagingComponent, selectors: [["summary-row-server-paging-demo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_paging_mock_server_results_service__WEBPACK_IMPORTED_MODULE_0__.MockServerResultsService])], decls: 7, vars: 11, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/summary/summary-row-server-paging.component.ts"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "summaryRow", "summaryHeight", "footerHeight", "externalPaging", "count", "offset", "limit", "page"]], template: function SummaryRowServerPagingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Server-side paging ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function SummaryRowServerPagingComponent_Template_ngx_datatable_page_6_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("summaryRow", true)("summaryHeight", 55)("footerHeight", 50)("externalPaging", true)("count", ctx.page.totalElements)("offset", ctx.page.pageNumber)("limit", ctx.page.size);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent], encapsulation: 2 });


/***/ }),

/***/ 79711:
/*!*********************************************************!*\
  !*** ./src/app/summary/summary-row-simple.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryRowSimpleComponent": function() { return /* binding */ SummaryRowSimpleComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);



class SummaryRowSimpleComponent {
    constructor() {
        this.rows = [];
        this.columns = [
            { prop: 'name', summaryFunc: null },
            { name: 'Gender', summaryFunc: cells => this.summaryForGender(cells) },
            { prop: 'age', summaryFunc: cells => this.avgAge(cells) }
        ];
        this.enableSummary = true;
        this.summaryPosition = 'top';
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data.splice(0, 5);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onPositionSelectChange($event) {
        const target = $event.target;
        this.summaryPosition = target.value;
    }
    summaryForGender(cells) {
        const males = cells.filter(cell => cell === 'male').length;
        const females = cells.filter(cell => cell === 'female').length;
        return `males: ${males}, females: ${females}`;
    }
    avgAge(cells) {
        const filteredCells = cells.filter(cell => !!cell);
        return filteredCells.reduce((sum, cell) => (sum += cell), 0) / filteredCells.length;
    }
}
SummaryRowSimpleComponent.ɵfac = function SummaryRowSimpleComponent_Factory(t) { return new (t || SummaryRowSimpleComponent)(); };
SummaryRowSimpleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SummaryRowSimpleComponent, selectors: [["summary-row-simple-demo"]], decls: 20, vars: 10, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/summary/summary-row-simple.component.ts"], [1, "controls"], ["id", "enable-summary", "type", "checkbox", 3, "checked", "change"], ["for", "enable-summary"], ["for", "position-select"], ["id", "position-select", 3, "change"], [3, "value"], ["rowHeight", "auto", 1, "material", 3, "summaryRow", "summaryPosition", "columns", "columnMode", "headerHeight", "summaryHeight", "rows"]], template: function SummaryRowSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Simple Summary Row ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SummaryRowSimpleComponent_Template_input_change_8_listener() { return ctx.enableSummary = !ctx.enableSummary; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Enable Summary Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SummaryRowSimpleComponent_Template_select_change_14_listener($event) { return ctx.onPositionSelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ngx-datatable", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.enableSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("summaryRow", ctx.enableSummary)("summaryPosition", ctx.summaryPosition)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("summaryHeight", 55)("rows", ctx.rows);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent], styles: [".controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnktcm93LXNpbXBsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzdW1tYXJ5LXJvdy1zaW1wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 65605:
/*!*****************************************************!*\
  !*** ./src/app/templates/template-dom.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InlineTemplatesComponent": function() { return /* binding */ InlineTemplatesComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-header.directive */ 2794);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);






function InlineTemplatesComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
} if (rf & 2) {
    const column_r5 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Holla! ", column_r5.name, " ");
} }
function InlineTemplatesComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, " Hi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r6 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](value_r6);
} }
function InlineTemplatesComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InlineTemplatesComponent_ng_template_11_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const sort_r8 = restoredCtx.sortFn; return sort_r8(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r7 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](column_r7.name);
} }
function InlineTemplatesComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, " My name is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.row;
    const value_r12 = ctx.value;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", row_r11["name"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](value_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.joke);
} }
function InlineTemplatesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r13 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", value_r13 + "%");
} }
class InlineTemplatesComponent {
    constructor() {
        this.rows = [];
        this.joke = 'knock knock';
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data.splice(0, 5);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
InlineTemplatesComponent.ɵfac = function InlineTemplatesComponent_Factory(t) { return new (t || InlineTemplatesComponent)(); };
InlineTemplatesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InlineTemplatesComponent, selectors: [["inline-templates-demo"]], decls: 15, vars: 4, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/templates/template-dom.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "columnMode", "headerHeight", "footerHeight"], ["name", "Name"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Gender"], ["name", "Age"], [3, "click"], [3, "innerHTML"], [2, "border", "solid 1px #ddd", "margin", "5px", "padding", "3px"], [2, "background", "#999", "height", "10px"]], template: function InlineTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Expressive Templates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, InlineTemplatesComponent_ng_template_8_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, InlineTemplatesComponent_ng_template_9_Template, 3, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, InlineTemplatesComponent_ng_template_11_Template, 2, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, InlineTemplatesComponent_ng_template_12_Template, 7, 3, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, InlineTemplatesComponent_ng_template_14_Template, 2, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_header_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnHeaderDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnCellDirective], encapsulation: 2 });


/***/ }),

/***/ 98845:
/*!*****************************************************!*\
  !*** ./src/app/templates/template-obj.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateRefTemplatesComponent": function() { return /* binding */ TemplateRefTemplatesComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);




const _c0 = ["editTmpl"];
const _c1 = ["hdrTpl"];
function TemplateRefTemplatesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Fancy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
} if (rf & 2) {
    const column_r4 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", column_r4.name, " !! ");
} }
function TemplateRefTemplatesComponent_ng_template_9_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 6);
} }
function TemplateRefTemplatesComponent_ng_template_9_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 7);
} }
function TemplateRefTemplatesComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TemplateRefTemplatesComponent_ng_template_9_img_0_Template, 1, 0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TemplateRefTemplatesComponent_ng_template_9_img_1_Template, 1, 0, "img", 5);
} if (rf & 2) {
    const value_r6 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", value_r6 === "male");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", value_r6 === "female");
} }
class TemplateRefTemplatesComponent {
    constructor() {
        this.rows = [];
        this.columns = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data.splice(0, 5);
        });
    }
    ngOnInit() {
        this.columns = [
            {
                cellTemplate: this.editTmpl,
                headerTemplate: this.hdrTpl,
                name: 'Gender'
            }
        ];
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
}
TemplateRefTemplatesComponent.ɵfac = function TemplateRefTemplatesComponent_Factory(t) { return new (t || TemplateRefTemplatesComponent)(); };
TemplateRefTemplatesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TemplateRefTemplatesComponent, selectors: [["template-ref-demo"]], viewQuery: function TemplateRefTemplatesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.editTmpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.hdrTpl = _t.first);
    } }, decls: 11, vars: 5, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/templates/template-obj.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight"], ["hdrTpl", ""], ["editTmpl", ""], ["width", "150", "src", "https://media.giphy.com/media/I8nepxWwlEuqI/giphy.gif", 4, "ngIf"], ["width", "150", "src", "https://media.giphy.com/media/sxSVG3XHf7yww/giphy.gif", 4, "ngIf"], ["width", "150", "src", "https://media.giphy.com/media/I8nepxWwlEuqI/giphy.gif"], ["width", "150", "src", "https://media.giphy.com/media/sxSVG3XHf7yww/giphy.gif"]], template: function TemplateRefTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " TemplateRef via Column Property ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TemplateRefTemplatesComponent_ng_template_7_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TemplateRefTemplatesComponent_ng_template_9_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 41840:
/*!***********************************************!*\
  !*** ./src/app/tree/client-tree.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientTreeComponent": function() { return /* binding */ ClientTreeComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column-cell.directive */ 55466);





function ClientTreeComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r3 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r3, " ");
} }
function ClientTreeComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r5 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r5, " ");
} }
function ClientTreeComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r6 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r6, " ");
} }
class ClientTreeComponent {
    constructor() {
        this.rows = [];
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company_tree.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onTreeAction(event) {
        const index = event.rowIndex;
        const row = event.row;
        if (row.treeStatus === 'collapsed') {
            row.treeStatus = 'expanded';
        }
        else {
            row.treeStatus = 'collapsed';
        }
        this.rows = [...this.rows];
    }
}
ClientTreeComponent.ɵfac = function ClientTreeComponent_Factory(t) { return new (t || ClientTreeComponent)(); };
ClientTreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ClientTreeComponent, selectors: [["client-side-tree-demo"]], decls: 13, vars: 10, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/tree/client-tree.component.ts", "target", "_blank"], ["rowHeight", "auto", 1, "material", 3, "columnMode", "headerHeight", "footerHeight", "treeFromRelation", "treeToRelation", "rows", "treeAction"], ["name", "Name", 3, "flexGrow", "isTreeColumn"], ["ngx-datatable-cell-template", ""], ["name", "Gender", 3, "flexGrow"], ["name", "Age", 3, "flexGrow"]], template: function ClientTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Flex Column Width Distribution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("treeAction", function ClientTreeComponent_Template_ngx_datatable_treeAction_6_listener($event) { return ctx.onTreeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ClientTreeComponent_ng_template_8_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ngx-datatable-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ClientTreeComponent_ng_template_10_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ClientTreeComponent_ng_template_12_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columnMode", ctx.ColumnMode.flex)("headerHeight", 50)("footerHeight", 50)("treeFromRelation", "manager")("treeToRelation", "name")("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("flexGrow", 3)("isTreeColumn", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("flexGrow", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("flexGrow", 1);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_cell_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective], styles: [".icon[_ngcontent-%COMP%] {height: 10px; width: 10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksRUFBRSxXQUFXLEVBQUUiLCJmaWxlIjoiY2xpZW50LXRyZWUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge2hlaWdodDogMTBweDsgd2lkdGg6IDEwcHg7IH0iXX0= */", ".disabled[_ngcontent-%COMP%] {opacity: 0.5; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLFlBQVksRUFBRSIsImZpbGUiOiJjbGllbnQtdHJlZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQge29wYWNpdHk6IDAuNTsgfSJdfQ== */"] });


/***/ }),

/***/ 55301:
/*!**********************************************!*\
  !*** ./src/app/tree/fullscreen.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenTreeComponent": function() { return /* binding */ FullScreenTreeComponent; }
/* harmony export */ });
/* harmony import */ var projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/swimlane/ngx-datatable/src/public-api */ 85671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component */ 77073);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/column.directive */ 42410);
/* harmony import */ var _projects_swimlane_ngx_datatable_src_lib_components_columns_tree_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/swimlane/ngx-datatable/src/lib/components/columns/tree.directive */ 56281);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);






function FullScreenTreeComponent_ng_template_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FullScreenTreeComponent_ng_template_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u2191 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FullScreenTreeComponent_ng_template_9_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u2193 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FullScreenTreeComponent_ng_template_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u20E0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FullScreenTreeComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullScreenTreeComponent_ng_template_9_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const tree_r1 = restoredCtx.cellContext; return tree_r1.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FullScreenTreeComponent_ng_template_9_span_1_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FullScreenTreeComponent_ng_template_9_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FullScreenTreeComponent_ng_template_9_span_3_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FullScreenTreeComponent_ng_template_9_span_4_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tree_r1 = ctx.cellContext;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", tree_r1.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tree_r1.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tree_r1.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tree_r1.treeStatus === "expanded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tree_r1.treeStatus === "disabled");
} }
class FullScreenTreeComponent {
    constructor(cd) {
        this.cd = cd;
        this.rows = [];
        this.lastIndex = 15;
        this.ColumnMode = projects_swimlane_ngx_datatable_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ColumnMode;
        this.fetch(data => {
            data = data.slice(1, this.lastIndex);
            this.rows = data.map(d => {
                d.treeStatus = 'collapsed';
                d.parentId = null;
                return d;
            });
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            setTimeout(() => {
                cb(JSON.parse(req.response));
            }, 500);
        };
        req.send();
    }
    onTreeAction(event) {
        const index = event.rowIndex;
        const row = event.row;
        if (row.treeStatus === 'collapsed') {
            row.treeStatus = 'loading';
            this.fetch(data => {
                data = data.slice(this.lastIndex, this.lastIndex + 3).map(d => {
                    d.treeStatus = 'collapsed';
                    d.parentId = row.id;
                    return d;
                });
                this.lastIndex = this.lastIndex + 3;
                row.treeStatus = 'expanded';
                this.rows = [...this.rows, ...data];
                this.cd.detectChanges();
            });
        }
        else {
            row.treeStatus = 'collapsed';
            this.rows = [...this.rows];
            this.cd.detectChanges();
        }
    }
}
FullScreenTreeComponent.ɵfac = function FullScreenTreeComponent_Factory(t) { return new (t || FullScreenTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
FullScreenTreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FullScreenTreeComponent, selectors: [["full-screen-tree-demo"]], decls: 14, vars: 15, consts: [["href", "https://github.com/swimlane/ngx-datatable/blob/master/src/app/tree/fullscreen.component.ts", "target", "_blank"], [1, "material", "fullscreen", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows", "treeFromRelation", "treeToRelation", "treeAction"], ["name", "Id", 3, "width"], ["name", "Name", 3, "isTreeColumn", "width", "treeLevelIndent"], ["ngx-datatable-tree-toggle", ""], ["name", "Gender"], ["name", "Age"], ["name", "City", "prop", "address.city", 3, "width"], ["name", "State", "prop", "address.state", 3, "width"], [3, "disabled", "click"], [4, "ngIf"]], template: function FullScreenTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Full Screen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngx-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("treeAction", function FullScreenTreeComponent_Template_ngx_datatable_treeAction_6_listener($event) { return ctx.onTreeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ngx-datatable-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ngx-datatable-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FullScreenTreeComponent_ng_template_9_Template, 5, 5, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ngx-datatable-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ngx-datatable-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "ngx-datatable-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows)("treeFromRelation", "parentId")("treeToRelation", "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isTreeColumn", true)("width", 300)("treeLevelIndent", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 300);
    } }, directives: [_projects_swimlane_ngx_datatable_src_lib_components_datatable_component__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, _projects_swimlane_ngx_datatable_src_lib_components_columns_column_directive__WEBPACK_IMPORTED_MODULE_2__.DataTableColumnDirective, _projects_swimlane_ngx_datatable_src_lib_components_columns_tree_directive__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellTreeToggle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".icon[_ngcontent-%COMP%] {height: 10px; width: 10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sWUFBWSxFQUFFLFdBQVcsRUFBRSIsImZpbGUiOiJmdWxsc2NyZWVuLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtoZWlnaHQ6IDEwcHg7IHdpZHRoOiAxMHB4OyB9Il19 */", ".disabled[_ngcontent-%COMP%] {opacity: 0.5; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsWUFBWSxFQUFFIiwiZmlsZSI6ImZ1bGxzY3JlZW4uY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkIHtvcGFjaXR5OiAwLjU7IH0iXX0= */"] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 13025:
/*!******************************************************!*\
  !*** ./projects/swimlane/ngx-datatable/package.json ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"@swimlane/ngx-datatable","version":"20.0.0","description":"ngx-datatable is an Angular table grid component for presenting large and complex data.","peerDependencies":{"@angular/common":">=11.0.2","@angular/core":">=11.0.2","@angular/platform-browser":">=11.0.2","rxjs":"^6.6.3"},"dependencies":{"tslib":"^2.0.0"},"repository":{"type":"git","url":"git+https://github.com/swimlane/ngx-datatable.git"},"keywords":["angularjs","angular","javascript","datatable","grid","table"],"author":"Swimlane","license":"MIT","bugs":{"url":"https://github.com/swimlane/ngx-datatable/issues"},"homepage":"https://github.com/swimlane/ngx-datatable#readme"}');

/***/ }),

/***/ 81839:
/*!**************************************!*\
  !*** ./src/assets/data/company.json ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"name":"Ethel Price","gender":"female","company":"Johnson, Johnson and Partners, LLC CMP DDC","age":22},{"name":"Claudine Neal","gender":"female","company":"Sealoud","age":55},{"name":"Beryl Rice","gender":"female","company":"Velity","age":67},{"name":"Wilder Gonzales","gender":"male","company":"Geekko"},{"name":"Georgina Schultz","gender":"female","company":"Suretech"},{"name":"Carroll Buchanan","gender":"male","company":"Ecosys"},{"name":"Valarie Atkinson","gender":"female","company":"Hopeli"},{"name":"Schroeder Mathews","gender":"male","company":"Polarium"},{"name":"Lynda Mendoza","gender":"female","company":"Dogspa"},{"name":"Sarah Massey","gender":"female","company":"Bisba"},{"name":"Robles Boyle","gender":"male","company":"Comtract"},{"name":"Evans Hickman","gender":"male","company":"Parleynet"},{"name":"Dawson Barber","gender":"male","company":"Dymi"},{"name":"Bruce Strong","gender":"male","company":"Xyqag"},{"name":"Nellie Whitfield","gender":"female","company":"Exospace"},{"name":"Jackson Macias","gender":"male","company":"Aquamate"},{"name":"Pena Pena","gender":"male","company":"Quarx"},{"name":"Lelia Gates","gender":"female","company":"Proxsoft"},{"name":"Letitia Vasquez","gender":"female","company":"Slumberia"},{"name":"Trevino Moreno","gender":"male","company":"Conjurica"},{"name":"Barr Page","gender":"male","company":"Apex"},{"name":"Kirkland Merrill","gender":"male","company":"Utara"},{"name":"Blanche Conley","gender":"female","company":"Imkan"},{"name":"Atkins Dunlap","gender":"male","company":"Comveyor"},{"name":"Everett Foreman","gender":"male","company":"Maineland"},{"name":"Gould Randolph","gender":"male","company":"Intergeek"},{"name":"Kelli Leon","gender":"female","company":"Verbus"},{"name":"Freda Mason","gender":"female","company":"Accidency"},{"name":"Tucker Maxwell","gender":"male","company":"Lumbrex"},{"name":"Yvonne Parsons","gender":"female","company":"Zolar"},{"name":"Woods Key","gender":"male","company":"Bedder"},{"name":"Stephens Reilly","gender":"male","company":"Acusage"},{"name":"Mcfarland Sparks","gender":"male","company":"Comvey"},{"name":"Jocelyn Sawyer","gender":"female","company":"Fortean"},{"name":"Renee Barr","gender":"female","company":"Kiggle"},{"name":"Gaines Beck","gender":"male","company":"Sequitur"},{"name":"Luisa Farrell","gender":"female","company":"Cinesanct"},{"name":"Robyn Strickland","gender":"female","company":"Obones"},{"name":"Roseann Jarvis","gender":"female","company":"Aquazure"},{"name":"Johnston Park","gender":"male","company":"Netur"},{"name":"Wong Craft","gender":"male","company":"Opticall"},{"name":"Merritt Cole","gender":"male","company":"Techtrix"},{"name":"Dale Byrd","gender":"female","company":"Kneedles"},{"name":"Sara Delgado","gender":"female","company":"Netagy"},{"name":"Alisha Myers","gender":"female","company":"Intradisk"},{"name":"Felecia Smith","gender":"female","company":"Futurity"},{"name":"Neal Harvey","gender":"male","company":"Pyramax"},{"name":"Nola Miles","gender":"female","company":"Sonique"},{"name":"Herring Pierce","gender":"male","company":"Geeketron"},{"name":"Shelley Rodriquez","gender":"female","company":"Bostonic"},{"name":"Cora Chase","gender":"female","company":"Isonus"},{"name":"Mckay Santos","gender":"male","company":"Amtas"},{"name":"Hilda Crane","gender":"female","company":"Jumpstack"},{"name":"Jeanne Lindsay","gender":"female","company":"Genesynk"},{"name":"Frye Sharpe","gender":"male","company":"Eplode"},{"name":"Velma Fry","gender":"female","company":"Ronelon"},{"name":"Reyna Espinoza","gender":"female","company":"Prismatic"},{"name":"Spencer Sloan","gender":"male","company":"Comverges"},{"name":"Graham Marsh","gender":"male","company":"Medifax"},{"name":"Hale Boone","gender":"male","company":"Digial"},{"name":"Wiley Hubbard","gender":"male","company":"Zensus"},{"name":"Blackburn Drake","gender":"male","company":"Frenex"},{"name":"Franco Hunter","gender":"male","company":"Rockabye"},{"name":"Barnett Case","gender":"male","company":"Norali"},{"name":"Alexander Foley","gender":"male","company":"Geekosis"},{"name":"Lynette Stein","gender":"female","company":"Macronaut"},{"name":"Anthony Joyner","gender":"male","company":"Senmei"},{"name":"Garrett Brennan","gender":"male","company":"Bluegrain"},{"name":"Betsy Horton","gender":"female","company":"Zilla"},{"name":"Patton Small","gender":"male","company":"Genmex"},{"name":"Lakisha Huber","gender":"female","company":"Insource"},{"name":"Lindsay Avery","gender":"female","company":"Unq"},{"name":"Ayers Hood","gender":"male","company":"Accuprint"},{"name":"Torres Durham","gender":"male","company":"Uplinx"},{"name":"Vincent Hernandez","gender":"male","company":"Talendula"},{"name":"Baird Ryan","gender":"male","company":"Aquasseur"},{"name":"Georgia Mercer","gender":"female","company":"Skyplex"},{"name":"Francesca Elliott","gender":"female","company":"Nspire"},{"name":"Lyons Peters","gender":"male","company":"Quinex"},{"name":"Kristi Brewer","gender":"female","company":"Oronoko"},{"name":"Tonya Bray","gender":"female","company":"Insuron"},{"name":"Valenzuela Huff","gender":"male","company":"Applideck"},{"name":"Tiffany Anderson","gender":"female","company":"Zanymax"},{"name":"Jerri King","gender":"female","company":"Eventex"},{"name":"Rocha Meadows","gender":"male","company":"Goko"},{"name":"Marcy Green","gender":"female","company":"Pharmex"},{"name":"Kirk Cross","gender":"male","company":"Portico"},{"name":"Hattie Mullen","gender":"female","company":"Zilencio"},{"name":"Deann Bridges","gender":"female","company":"Equitox"},{"name":"Chaney Roach","gender":"male","company":"Qualitern"},{"name":"Consuelo Dickson","gender":"female","company":"Poshome"},{"name":"Billie Rowe","gender":"female","company":"Cemention"},{"name":"Bean Donovan","gender":"male","company":"Mantro"},{"name":"Lancaster Patel","gender":"male","company":"Krog"},{"name":"Rosa Dyer","gender":"female","company":"Netility"},{"name":"Christine Compton","gender":"female","company":"Bleeko"},{"name":"Milagros Finch","gender":"female","company":"Handshake"},{"name":"Ericka Alvarado","gender":"female","company":"Lyrichord"},{"name":"Sylvia Sosa","gender":"female","company":"Circum"},{"name":"Humphrey Curtis","gender":"male","company":"Corepan"}]');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map