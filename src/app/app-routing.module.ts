import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

import { AdoptionCenterComponent } from './components/adoption-center/adoption-center.component';
import { AnimalProfileComponent } from './components/animal-profile/animal-profile.component';
import { AdoptionPostComponent } from './components/adoption-post/adoption-post.component';
import { compileClassMetadata } from '@angular/compiler';
import { AddAdoptionpostComponent } from './components/add-adoptionpost/add-adoptionpost.component';
import { AdoptionApplication } from './entities/adoption-application';
import { AdoptionApplicationComponent } from './components/adoption-application/adoption-application.component';
import { CheckAdoptionapplicationComponent } from './components/check-adoptionapplication/check-adoptionapplication.component';
import { ShowAdoptionapplicationsComponent } from './components/show-adoptionapplications/show-adoptionapplications.component';
import { AdminAdoptionCenterComponent } from './components/admin-adoption-center/admin-adoption-center.component';


import { LearningResourceComponent } from './components/learning-resource/learning-resource.component';
import { AdminLearningResourceComponent } from './components/admin-learning-resource/admin-learning-resource.component';
import { AllLearningResourcesComponent } from './components/all-learning-resources/all-learning-resources.component';
import { ChatbotAiComponent } from './components/chatbot-ai/chatbot-ai.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { CrowdFundingComponent } from './components/crowd-funding/crowd-funding.component';
import { DonationComponent } from './components/donation/donation.component';
import { AdminCrowdFundingComponent } from './components/admin-crowd-funding/admin-crowd-funding.component';
import { AdminDonationComponent } from './components/admin-donation/admin-donation.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'crowd-funding',
    component: CrowdFundingComponent
  },
  {
    path: 'donation/:idcomp',
    component: DonationComponent
  },
  {
    path: 'admin-crowd-funding',
    component: AdminCrowdFundingComponent
  },
  {
    path: 'admin-donation',
    component: AdminDonationComponent
    },
    {
      path: 'admin-adoption-center',
      component: AdminAdoptionCenterComponent
      },
 {
    path:'learning-resource/:id',
    component: LearningResourceComponent,
  },
  {
    path:'admin-learning-resource',
    component: AdminLearningResourceComponent
  },
  {
    path:'all-learning-resources',
    component: AllLearningResourcesComponent
  },
  {
    path:'pet-bot',
    component: ChatbotAiComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
   },
    {
    path:'adoptioncenter',
    component: AdoptionCenterComponent
  },
  {
    path:'animalprofile',
    component: AnimalProfileComponent
  },
  {
    path:'adoptionpost',
    component: AdoptionPostComponent
  },
  {
    path:'addadoptionpost/:idanim',
    component: AddAdoptionpostComponent
  },
  {
    path:'adoptionapplication/:idpost',
    component: AdoptionApplicationComponent
  },
  {
    path:'checkapplication/:idpost',
    component: CheckAdoptionapplicationComponent
  },
  {
    path:'showapplications',
    component: ShowAdoptionapplicationsComponent
  },
  {
    path:'adminadoption',
    component: AdminAdoptionCenterComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
