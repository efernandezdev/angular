import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormlyModule } from 'src/app/shared/formly/app-formly.module';
import { UserComponent } from './components/user.component';
import { UserRoutingModule } from './user-routing.module';
import { ReusableDialogModule } from 'src/app/shared/reusable-dialog/reusable-dialog.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    AppFormlyModule,
    UserRoutingModule,
    ReusableDialogModule,
  ],
})
export class UserModule {}
