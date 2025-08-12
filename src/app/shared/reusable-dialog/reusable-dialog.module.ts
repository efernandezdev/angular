import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableDialogComponent } from './components/reusable-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from './services/reusable-dialog.service';
import { AppFormlyModule } from '../formly/app-formly.module';

@NgModule({
  declarations: [ReusableDialogComponent],
  exports: [ReusableDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, AppFormlyModule],
  providers: [DialogService],
})
export class ReusableDialogModule {}
