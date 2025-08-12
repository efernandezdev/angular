import { FormlyFieldConfig } from '@ngx-formly/core';
import { commentsGrid } from './comments-grid.config';
import { IconActionsRenderComponent } from 'src/app/shared/formly/formlyTypes/grid/cellRenders/icon-actions-render/icon-actions-render.component';
import { GridOptions } from 'ag-grid-community';
import { UserService } from '../services/user.service';
import { DialogService } from 'src/app/shared/reusable-dialog/services/reusable-dialog.service';

export const userGrid = ({
  userService,
  dialogService,
}: {
  userService: UserService;
  dialogService: DialogService;
}): FormlyFieldConfig[] => [
  {
    key: 'users',
    type: 'grid',
    props: {
      gridOptions: {
        defaultColDef: {
          sortable: true,
          flex: 1,
          resizable: true,
        },
        pagination: true,
        paginationPageSize: 5,
        rowHeight: 42,
        columnDefs: [
          { headerName: 'ID', field: 'id' },
          { headerName: 'Nombre', field: 'name' },
          { headerName: 'Email', field: 'email' },
          {
            headerClass: 'd-flex justify-content-center',
            headerName: 'Acciones',
            flex: 0.8,
            pinned: 'right',
            cellRenderer: IconActionsRenderComponent,
            cellRendererParams: {
              actions: [
                {
                  icon: 'comment',
                  tooltip: 'Post',
                  onClick: (data: any) => {
                    userService.getPostsByUserID(data.id).subscribe((resp) => {
                      dialogService.openConfirmDialog({
                        height: 'auto',
                        width: '800px',
                        disableClose: true,
                        title: `${data.name}-Comments`,
                        model: { comments: resp },
                        fields: [...commentsGrid()],
                        confirmText: 'Sí, eliminar',
                        cancelText: 'No',
                      });
                    });
                  },
                },
                {
                  icon: 'image',
                  tooltip: 'Albums',
                  onClick: (data: any) => {
                    console.log(data);
                  },
                },
              ],
            },
          },
        ],
      } as GridOptions,
    },
    expressions: {
      hide: (field) => field?.parent?.model.hideField,
      'props.value': (field) => field?.parent?.model.users,
    },
  },
];
