import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { GridApi } from 'ag-grid-community';
import { UserService } from '../services/user.service';

import { DialogService } from 'src/app/shared/reusable-dialog/services/reusable-dialog.service';

import { userGrid } from '../grid-configs/user-grid.config';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(
    private userService: UserService,
    private dialogService: DialogService
  ) {}

  form = new FormGroup({});
  model = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'email',
          type: 'input',
          className: 'col-6',
          props: {
            label: 'Email address',
            placeholder: 'Enter email',
            required: true,
          },
        },
        {
          key: 'nombre',
          type: 'input',
          className: 'col-6',
          props: {
            type: 'text',
            label: 'Resultado',
          },
        },
      ],
    },
    // {
    //   key: 'hideField',
    //   type: 'checkbox',
    //   defaultValue: false,
    //   props: {
    //     label: 'hide Field',
    //   },
    // },
    {
      type: 'button',
      props: {
        text: 'Users',
        btnType: 'info',
        onClick: (field: any) => {
          this.userService.getUsers().subscribe((resp) => {
            // Only poblate grid no affect model
            (field.options.formState['users'] as GridApi).setRowData(resp);
          });
        },
      },
      expressions: {
        hide: (field) => field?.parent?.model.hideField,
      },
    },
    {
      fieldGroup: [
        {
          fieldGroup: [
            ...userGrid({
              userService: this.userService,
              dialogService: this.dialogService,
            }),
          ],
        },
      ],
    },
    { template: `<hr/>` },
    {
      fieldGroupClassName:
        'mt-2 col-4 d-flex justify-content-between float-end',
      fieldGroup: [
        {
          type: 'button',
          props: {
            text: 'Reset',
            btnType: 'warning',
            onClick: (field: FormlyFieldConfig) => {
              this.reset(field);
            },
          },
        },
        {
          type: 'button',
          props: {
            text: 'Submit',
            btnType: 'info',
            onClick: () => {
              this.submit();
            },
          },
        },
      ],
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }

  reset(field: any) {
    field.options.resetModel();
  }
}
