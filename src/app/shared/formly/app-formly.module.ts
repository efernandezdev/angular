import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldButton } from './formlyTypes/button/button.component';
import { GridTypeComponent } from './formlyTypes/grid/grid-type-component/grid-type-component.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconActionsRenderComponent } from './formlyTypes/grid/cellRenders/icon-actions-render/icon-actions-render.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    FormlyFieldButton,
    GridTypeComponent,
    IconActionsRenderComponent,
  ],
  exports: [FormlyModule, ReactiveFormsModule],
  imports: [
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    AgGridModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      extras: {
        // lazyRender: false,
        checkExpressionOn: 'changeDetectionCheck',
        resetFieldOnHide: false,
      },
      types: [
        {
          name: 'formly-group',
          defaultOptions: {
            defaultValue: {},
          },
        },
        {
          name: 'button',
          component: FormlyFieldButton,
          wrappers: ['form-field'],
          defaultOptions: {
            props: {
              btnType: 'default',
              type: 'button',
            },
          },
        },
        {
          name: 'grid',
          component: GridTypeComponent,
          defaultOptions: {
            props: {
              width: '100%',
              height: '309px',
            },
          },
        },
      ],
    }),
  ],
})
export class AppFormlyModule {}
