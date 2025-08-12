import { FormlyFieldConfig } from '@ngx-formly/core';

export const commentsGrid = (): FormlyFieldConfig[] => [
  {
    key: 'comments',
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
          { field: 'id', hide: true },
          {
            headerName: 'Title',
            field: 'title',
          },
        ],
      },
    },
    expressions: {
      value: (field: any) => field?.parent?.model.comments,
    },
  },
];
