import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

interface Action {
  icon: string;
  onClick: (data: any) => any;
  tooltip: string;
}

@Component({
  selector: 'app-icon-actions-render',
  template: `
    <span class="d-flex mt-2 justify-content-center">
      <ng-container *ngFor="let action of actions">
        <mat-icon
          class="material-symbols-outlined mx-1"
          [matTooltip]="action?.tooltip || ''"
          style="cursor: pointer"
          (click)="onActionClick(action)"
          >{{ action.icon }}</mat-icon
        >
      </ng-container>
    </span>
  `,
})
export class IconActionsRenderComponent implements ICellRendererAngularComp {
  public params!: ICellRendererParams;
  public actions: Action[] = [];

  agInit(params: ICellRendererParams & { actions: Action[] }): void {
    this.params = params;
    this.actions = params.actions || [];
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  public onActionClick(action: Action): void {
    if (action.onClick) {
      const returnValue = action.onClick(this.params.data);
    }
  }
}
