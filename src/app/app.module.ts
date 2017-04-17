import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';
import { RouterModule, Route } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap';
import { AppTrxModule } from './app-trx/app-trx.module';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { ProgressIndicatorService } from './progress-indicator.service';
import { AboutComponent } from './about/about.component';
import { ThemeHeaderComponent } from './theme-header/theme-header.component';
import { ThemeFooterComponent } from './theme-footer/theme-footer.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CustomerComponent } from './app-trx/customer/customer.component';

const appRouting: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },

  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HomeComponent,
    TopBarComponent,
    AboutComponent,
    ThemeHeaderComponent,
    ThemeFooterComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    DropdownModule.forRoot(),
    RouterModule.forRoot(appRouting),
    AppTrxModule
  ],
  providers: [ProgressIndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
