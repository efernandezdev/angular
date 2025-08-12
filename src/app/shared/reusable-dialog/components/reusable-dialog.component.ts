import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-reusable-dialog',
  templateUrl: './reusable-dialog.component.html',
  styleUrls: ['./reusable-dialog.component.scss'],
})
export class ReusableDialogComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor(
    public dialogRef: MatDialogRef<ReusableDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      message?: string;
      fields?: FormlyFieldConfig[];
      model?: any;
      confirmText: string;
      cancelText: string;
    }
  ) {}

  ngOnInit(): void {
    if (this.data.fields) {
      this.fields = this.data.fields;
      this.model = this.data.model || {};
    }
  }

  onConfirm(): void {
    if (this.data.fields) {
      if (this.form.valid) {
        this.dialogRef.close(this.model);
      }
    } else {
      this.dialogRef.close(true);
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
