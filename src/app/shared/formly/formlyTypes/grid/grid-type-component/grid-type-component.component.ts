import { Component, HostListener, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import {
  FirstDataRenderedEvent,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';

@Component({
  selector: 'formly-field-grid',
  template: `
    <div [ngStyle]="style">
      <!-- <pre>GridTypeComponent {{ model | json }}</pre> -->
      <ag-grid-angular
        style="width: 100%; height: 100%"
        class="ag-theme-alpine"
        [gridOptions]="gridOptions"
        [rowData]="model || []"
        (firstDataRendered)="onFirstDataRendered($event)"
        [suppressDragLeaveHidesColumns]="true"
        (gridReady)="onGridReady($event)"
      >
      </ag-grid-angular>
    </div>
  `,
})
export class GridTypeComponent extends FieldArrayType implements OnInit {
  @HostListener('window:resize')
  onResize() {
    this.gridOptions.api?.sizeColumnsToFit();
  }

  gridOptions: GridOptions = {};
  style: { [key: string]: string } = {};

  ngOnInit() {
    this.style = { width: this.props['width'], height: this.props['height'] };

    const gridOptions: GridOptions = this.props['gridOptions'] || {};

    this.gridOptions = gridOptions;
  }

  onGridReady(params: GridReadyEvent) {
    if (this.formState && this.field?.key) {
      this.formState[this.field.key as string] = params.api;
    }
  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }
}
