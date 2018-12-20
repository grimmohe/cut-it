import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatCheckboxModule, MatIconRegistry } from '@angular/material';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { PartsComponent } from './parts/parts.component';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { MaterialsComponent } from './materials/materials.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    PartsComponent,
    ResultsComponent,
    MaterialsComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
