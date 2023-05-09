import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';


import { CrowdFundingComponent } from './components/crowd-funding/crowd-funding.component';
import { DonationComponent } from './components/donation/donation.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminCrowdFundingComponent } from './components/admin-crowd-funding/admin-crowd-funding.component';
import { AdminDonationComponent } from './components/admin-donation/admin-donation.component';
import { AdvertisementDirective } from './components/advertisement.directive';

import { LearningResourceComponent } from './components/learning-resource/learning-resource.component';
import { AdminLearningResourceComponent } from './components/admin-learning-resource/admin-learning-resource.component';

import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { AllLearningResourcesComponent } from './components/all-learning-resources/all-learning-resources.component';
import { ChatbotAiComponent } from './components/chatbot-ai/chatbot-ai.component';
import { NbChatModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationLRComponent } from './components/notification-lr/notification-lr.component';
import { ToastrModule } from 'ngx-toastr';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminNavBarComponent } from './components/admin-nav-bar/admin-nav-bar.component';
import { AdminAdoptionCenterComponent } from './components/admin-adoption-center/admin-adoption-center.component';

import { AdoptionCenterComponent } from './components/adoption-center/adoption-center.component';
import { AnimalProfileComponent } from './components/animal-profile/animal-profile.component';
import { AdoptionPostComponent } from './components/adoption-post/adoption-post.component';
import { AddAdoptionpostComponent } from './components/add-adoptionpost/add-adoptionpost.component';
import { AdoptionApplicationComponent } from './components/adoption-application/adoption-application.component';
import { ShowAdoptionapplicationsComponent } from './components/show-adoptionapplications/show-adoptionapplications.component';
import { CheckAdoptionapplicationComponent } from './components/check-adoptionapplication/check-adoptionapplication.component';



Chart.register(...registerables);


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdoptionCenterComponent,
    AnimalProfileComponent,
    AdoptionPostComponent,
    AddAdoptionpostComponent,
    AdoptionApplicationComponent,
    ShowAdoptionapplicationsComponent,
    CheckAdoptionapplicationComponent,
    AdminAdoptionCenterComponent,
    CrowdFundingComponent,
    DonationComponent,
    AdminCrowdFundingComponent,
    AdminDonationComponent,
    AdvertisementDirective,
    LearningResourceComponent,
    AdminLearningResourceComponent,
    AllLearningResourcesComponent,
    ChatbotAiComponent,
    NotificationLRComponent,
    NavBarComponent,
    FooterComponent,
    ContactUsComponent,
    AdminNavBarComponent

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  ,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbChatModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
