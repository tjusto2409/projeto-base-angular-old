import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { Ng2MaskModule } from 'ng2-mask';

@NgModule({
  imports: [
    CommonModule,
    Ng2MaskModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    Ng2MaskModule
  ],
  declarations: []
})
export class SharedModule { }
