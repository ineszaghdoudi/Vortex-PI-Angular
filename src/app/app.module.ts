import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { HomeComponent } from './components/home/home.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';

import { UserListComponent } from './components/user-list/user-list.component';


import { ProfileComponent } from './components/profile/profile.component';
import { forgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { ChartComponent } from './components/chart/chart.component';
import { RegisterComponent } from './components/register/register.component';
import { SimpleSnackbarComponent } from './components/simple-snackbar/simple-snackbar.component';




import { httpInterceptorProviders } from './_helpers/http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    
    HomeComponent,

    CustomModalComponent,

    UserListComponent,

    ProfileComponent,
    forgotpasswordComponent,
    PasswordChangeComponent,
    ChartComponent,
    RegisterComponent,
    SimpleSnackbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    ],
  providers: [httpInterceptorProviders,SimpleSnackbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
