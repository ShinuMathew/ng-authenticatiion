import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivateHeaderComponent } from './components/private-header/private-header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { PrivateHomeComponent } from './components/private-home/private-home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneNumberFormatterDirective } from './directives/phone-number-formatter.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrivateHeaderComponent,
    LoginFormComponent,
    HomeComponent,
    PrivateHomeComponent,
    NotFoundComponent,
    AboutComponent,
    RegisterUserComponent,
    PhoneNumberFormatterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
