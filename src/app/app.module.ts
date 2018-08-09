import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { UiSwitchModule } from 'ngx-toggle-switch';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {PersonService} from './person.service';
import { ClientindexComponent } from './clientindex/clientindex.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  { path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: 'index',
    component: IndexComponent
  },
  {
    path: 'clientindex',
    component: ClientindexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    ClientindexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    UiSwitchModule,
    NgxPaginationModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
