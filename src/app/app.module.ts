import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { NavsideComponent } from './navside/navside.component';
import { CodeComponent } from './code/code.component';
import { CarteComponent } from './carte/carte.component';
import { PharmacienComponent } from './pharmacien/pharmacien.component';
import { FaqComponent } from './faq/faq.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { MedicamentSimpleComponent } from './medicament-simple/medicament-simple.component';
import { MedicamentComplexeComponent } from './medicament-complexe/medicament-complexe.component';
import { InteractionComponent } from './interaction/interaction.component';
import { LegalComponent } from './legal/legal.component';
import { QuestionsComponent } from './questions/questions.component';
import { AksantimedComponent } from './aksantimed/aksantimed.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    NavsideComponent,
    CodeComponent,
    CarteComponent,
    PharmacienComponent,
    FaqComponent,
    MedicamentComponent,
    MedicamentSimpleComponent,
    MedicamentComplexeComponent,
    InteractionComponent,
    LegalComponent,
    QuestionsComponent,
    AksantimedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
