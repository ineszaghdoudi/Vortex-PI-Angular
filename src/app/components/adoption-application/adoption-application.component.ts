import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { error } from 'console';
import { AdoptionApplication } from 'src/app/entities/adoption-application';
import { AdoptionApplicationService } from 'src/app/services/adoption-application.service';
import { ActivatedRoute, Router } from '@angular/router'

declare var window: any;

@Component({
  selector: 'app-adoption-application',
  templateUrl: './adoption-application.component.html',
  styleUrls: ['./adoption-application.component.css']
})
export class AdoptionApplicationComponent implements OnInit {

  aapDetail !: FormGroup;
  aapObj : AdoptionApplication = new AdoptionApplication();
  aapList : AdoptionApplication[] = [];
  id !: number ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private aapservice :AdoptionApplicationService) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['idpost'];
   });

   this.aapservice.getAllAAP();

   this.aapDetail=this.formBuilder.group({

    applicantName:[''],

    applicantEmail:[''],

    applicantPhone:[''],

    applicantAddress:[''],

    applicantOccupation:[''],

    applicantHousingType:[''],

    applicantHouseholdSize:[''],

    hasExperience:[false],

    applicantExperience:['none'],

    otherPets:[false],

    otherPetsDescription:['none'],

    vetName:[''],

    vetPhone:[''],

    referenceName:[''],

    referencePhone:[''],

    referenceRelationship:[''],

    motive:['']

  });

  }

  addAAP() {

    console.log(this.aapDetail);
    
    this.aapObj.applicantName = this.aapDetail.value.applicantName;
    this.aapObj.applicantEmail = this.aapDetail.value.applicantEmail;
    this.aapObj.applicantPhone = this.aapDetail.value.applicantPhone;
    this.aapObj.applicantAddress = this.aapDetail.value.applicantAddress;
    this.aapObj.applicantOccupation = this.aapDetail.value.applicantOccupation;
    this.aapObj.applicantHousingType = this.aapDetail.value.applicantHousingType;
    this.aapObj.applicantHouseholdSize = this.aapDetail.value.applicantHouseholdSize;
    this.aapObj.hasExperience = this.aapDetail.value.hasExperience;
    this.aapObj.applicantExperience = this.aapDetail.value.applicantExperience;
    this.aapObj.otherPets = this.aapDetail.value.otherPets;
    this.aapObj.otherPetsDescription = this.aapDetail.value.otherPetsDescription;
    this.aapObj.vetName = this.aapDetail.value.vetName;
    this.aapObj.vetPhone = this.aapDetail.value.vetPhone;
    this.aapObj.referenceName = this.aapDetail.value.referenceName;
    this.aapObj.referencePhone = this.aapDetail.value.referencePhone;
    this.aapObj.referenceRelationship = this.aapDetail.value.referenceRelationship;
    this.aapObj.motive = this.aapDetail.value.motive;

  this.aapservice.addAAP(this.aapObj,this.id).subscribe(res=>{
    console.log(res);
    this.aapservice.getAllAAP();
    alert("Adoption Application was added successfully!");
  },err=>{
    console.log(err);
    alert("Error!");
  });
    }


    gotoADC(){
      this.router.navigate(['adoptioncenter']);
    }
    toggle(){
      const experience = this.aapDetail.get('hasExperience');
      const applicantExperience = document.getElementById('applicantExperience');
  if (applicantExperience != null) {
    if (experience?.value) {
      applicantExperience.style.display = 'block';
    }
    else {
      applicantExperience.style.display = 'none';
      }
    }
  }
  toggle2(){
    const experience = this.aapDetail.get('hasExperience');
    const applicantExperience = document.getElementById('applicantExperience');
if (applicantExperience != null) {
  if (experience?.value) {
    applicantExperience.style.display = 'none';
  }
  else {
    applicantExperience.style.display = 'block';
    }
  }
}
toggle3(){
  const otherPets = this.aapDetail.get('otherPets');
  const otherPetsDescription = document.getElementById('otherPetsDescription');
if (otherPetsDescription != null) {
if (otherPets?.value) {
  otherPetsDescription.style.display = 'block';
}
else {
  otherPetsDescription.style.display = 'none';
  }
}
}
toggle4(){
  const otherPets = this.aapDetail.get('otherPets');
  const otherPetsDescription = document.getElementById('otherPetsDescription');
if (otherPetsDescription != null) {
if (otherPets?.value) {
  otherPetsDescription.style.display = 'none';
}
else {
  otherPetsDescription.style.display = 'block';
  }
}
}

}
