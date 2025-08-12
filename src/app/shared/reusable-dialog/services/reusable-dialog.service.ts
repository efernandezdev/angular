import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ReusableDialogComponent } from '../components/reusable-dialog.component';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(data: {
    title: string;
    width?: string;
    height?: string;
    message?: string;
    disableClose?: boolean;
    fields?: FormlyFieldConfig[];
    model?: any;
    confirmText?: string;
    cancelText?: string;
  }): Observable<boolean> {
    const dialogRef = this.dialog.open(ReusableDialogComponent, {
      disableClose: data?.disableClose ?? false,
      width: data?.width ?? '100vw',
      height: data?.height ?? '100vh',
      maxWidth: '100vw', // Defaults to 80vw
      data: {
        title: data.title,
        message: data?.message,
        fields: data?.fields,
        model: data?.model,
        confirmText: data.confirmText || 'Confirmar',
        cancelText: data.cancelText || 'Cancelar',
      },
    });

    return dialogRef.afterClosed();
  }
}
