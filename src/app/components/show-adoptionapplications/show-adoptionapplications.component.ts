import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AdoptionApplication } from 'src/app/entities/adoption-application';
import { AdoptionApplicationService } from 'src/app/services/adoption-application.service';
import { ActivatedRoute, Router } from '@angular/router'

declare var window: any;


@Component({
  selector: 'app-show-adoptionapplications',
  templateUrl: './show-adoptionapplications.component.html',
  styleUrls: ['./show-adoptionapplications.component.css']
})
export class ShowAdoptionapplicationsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private aapservice :AdoptionApplicationService) 
   { }
    ModalShow:any;
    appObj : AdoptionApplication = new AdoptionApplication();
    aapDetail !: FormGroup;
    aapObj : AdoptionApplication = new AdoptionApplication();
    aapList : AdoptionApplication[] = [];
    id !: number ;

  ngOnInit(): void {
    this.getAllAAP();

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
    this.ModalShow=new  window.bootstrap.Modal(
      document.getElementById('showw')
    );
  }

  getAllAAP()
    { 
      
      this.aapservice.getAllAAP().subscribe(res=>{
        this.aapList = res;
      }, err=>{
        console.log("Error retreiving all Adoption Profiles!")
      });
    }

  editAAP(aap: AdoptionApplication){
    
    
    this.aapDetail.controls['applicantName'].setValue(aap.applicantName);
    this.aapDetail.controls['applicantEmail'].setValue(aap.applicantEmail);
    this.aapDetail.controls['applicantPhone'].setValue(aap.applicantPhone);
    this.aapDetail.controls['applicantAddress'].setValue(aap.applicantAddress);
    this.aapDetail.controls['applicantOccupation'].setValue(aap.applicantOccupation);
    this.aapDetail.controls['applicantHousingType'].setValue(aap.applicantHousingType);
    this.aapDetail.controls['applicantHouseholdSize'].setValue(aap.applicantHouseholdSize);
    this.aapDetail.controls['hasExperience'].setValue(aap.hasExperience);
    this.aapDetail.controls['applicantExperience'].setValue(aap.applicantExperience);
    this.aapDetail.controls['otherPets'].setValue(aap.otherPets);
    this.aapDetail.controls['otherPetsDescription'].setValue(aap.otherPetsDescription);
    this.aapDetail.controls['vetName'].setValue(aap.vetName);
    this.aapDetail.controls['vetPhone'].setValue(aap.vetPhone);
    this.aapDetail.controls['referenceName'].setValue(aap.referenceName);
    this.aapDetail.controls['referencePhone'].setValue(aap.referencePhone);
    this.aapDetail.controls['referenceRelationship'].setValue(aap.referenceRelationship);
    this.aapDetail.controls['motive'].setValue(aap.motive);
    
    this.aapObj=aap;
   

    
   
  }

  updateAAP() {

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

  this.aapservice.updateAAP(this.aapObj).subscribe(res=>{
    console.log(res);
    this.getAllAAP();
    alert("Adoption Application was updated successfully!");
  },err=>{
    console.log(err);
    alert("Error!");
  });
    }

    deleteAAP(aap: AdoptionApplication){
      this.aapservice.deleteAAP(aap).subscribe(res=>{
        console.log(res);
       alert("Adoption Application was deleted succesfully");
        this.getAllAAP();
      }, err =>{
        console.log(err);
        alert("Sorry unable to delete Adoption Application");
      })
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
switching(){
  const foorm = document.getElementById('foorm');
  const myapps = document.getElementById('myapps');
  if (foorm != null && myapps!=null) {
  if (foorm.style.display === "none") {
    foorm.style.display = "block";
    myapps.style.display = "none";
  } else {
    foorm.style.display = "none";
    myapps.style.display = "block";
  }
}
}
openModalShow(app:AdoptionApplication) {
  this.ModalShow.show();
  this.appObj=app;
}

}
