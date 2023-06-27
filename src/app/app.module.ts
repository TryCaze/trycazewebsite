import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef  } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { IconGridComponentComponent } from './icon-grid-component/icon-grid-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogContentComponent,
    SearchComponent,
    IconGridComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
