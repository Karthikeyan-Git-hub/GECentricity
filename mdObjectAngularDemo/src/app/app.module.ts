import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllergyComponent, EnumToArrayPipe } from './allergy/allergy.component';
import { MdObjectServiceService } from './md-object-service.service'

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { TitleCasePipe } from '@angular/common';
import { PatientHeaderComponent } from './patient-header/patient-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AllergyComponent,
    EnumToArrayPipe,
    PatientHeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [TitleCasePipe, MdObjectServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
