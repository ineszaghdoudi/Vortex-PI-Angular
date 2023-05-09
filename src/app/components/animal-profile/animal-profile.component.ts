import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnimalProfile } from 'src/app/entities/animal-profile';
import { AnimalProfileService } from 'src/app/services/animal-profile.service';
import { Router } from '@angular/router';

declare var window: any;


@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.component.html',
  styleUrls: ['./animal-profile.component.css']
})

export class AnimalProfileComponent implements OnInit {
  
  base64Image = "";
  isEditForm = false;
  url2= "";
  url ="https://img.icons8.com/ios/100/000000/contract-job.png";
  
  onSelect(event:any){
    if(event.target.files[0])
    {
      const reader= new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any)=>{
        if (this.isEditForm==false){
        this.url = event.target.result;
        this.base64Image = this.url.split(',')[1];
        }
        if (this.isEditForm==true){
          this.url2 = event.target.result;
          this.base64Image = this.url2.split(',')[1];
          this.url2=  this.url2.split(',')[1]
        }
      };
    } 
  }

  ModalShow:any;
  apDetail !: FormGroup;
  apObj : AnimalProfile = new AnimalProfile();
  appObj : AnimalProfile = new AnimalProfile();
  apList : AnimalProfile[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apservice: AnimalProfileService
  ) { }
  
  
  ngOnInit(): void {

      this.getAllAP();

      

      this.apDetail = this.formBuilder.group({

        id_animal: [''],

        name_animal: [''],

        type_animal: [''],
        
        age_animal: [''],

        breed_animal: [''],

        gender_animal: [''],
        
        size_animal: [''],

        weight_animal: [''],

        color_animal: [''],

        temperament_animal: [''],

        isVaccinated: [false],

        isTrained: [false],

        medicalNeeds_animal: [false],

        medicalNeeds_description: ['none'],

        behavioralNeeds_animal: [false],

        behavioralNeeds_description: ['none'],

        history_animal: [''],

        photoUrl_animal: [''],
      });

      
      this.ModalShow=new  window.bootstrap.Modal(
        document.getElementById('showw')
      );
      
  }

      addAP() {
        console.log(this.apDetail);
        this.apObj.id_animal = this.apDetail.value.id_animal;
        this.apObj.name_animal = this.apDetail.value.name_animal;
        this.apObj.type_animal = this.apDetail.value.type_animal;
        this.apObj.age_animal = this.apDetail.value.age_animal;
        this.apObj.breed_animal = this.apDetail.value.breed_animal;
        this.apObj.gender_animal = this.apDetail.value.gender_animal;
        this.apObj.size_animal = this.apDetail.value.size_animal;
        this.apObj.weight_animal = this.apDetail.value.weight_animal;
        this.apObj.color_animal = this.apDetail.value.color_animal;
        this.apObj.isVaccinated = this.apDetail.value.isVaccinated;
        this.apObj.isTrained = this.apDetail.value.isTrained;
        this.apObj.medicalNeeds_animal = this.apDetail.value.medicalNeeds_animal;
        this.apObj.temperament_animal = this.apDetail.value.temperament_animal;
        this.apObj.medicalNeeds_description = this.apDetail.value.medicalNeeds_description;
        this.apObj.behavioralNeeds_animal = this.apDetail.value.behavioralNeeds_animal;
        this.apObj.behavioralNeeds_description = this.apDetail.value.behavioralNeeds_description;
        this.apObj.history_animal = this.apDetail.value.history_animal;
        this.apObj.photoUrl_animal = this.base64Image;
        
        
  
        this.apservice.addAP(this.apObj).subscribe(res=>{
          console.log(res);
          this.getAllAP();
          alert("Animal Profile was added successfully!");
        },err=>{
          console.log(err);
          alert("Error!");
        });
      }


      editAp(ap : AnimalProfile){

        this.isEditForm = true;
        
        this.apDetail.controls['id_animal'].setValue(ap.id_animal);
        this.apDetail.controls['name_animal'].setValue(ap.name_animal);
        this.apDetail.controls['type_animal'].setValue(ap.type_animal);
        this.apDetail.controls['age_animal'].setValue(ap.age_animal);
        this.apDetail.controls['breed_animal'].setValue(ap.breed_animal);
        this.apDetail.controls['gender_animal'].setValue(ap.gender_animal);
        this.apDetail.controls['size_animal'].setValue(ap.size_animal);
        this.apDetail.controls['weight_animal'].setValue(ap.weight_animal);
        this.apDetail.controls['color_animal'].setValue(ap.color_animal);
        this.apDetail.controls['isVaccinated'].setValue(ap.isVaccinated);
        this.apDetail.controls['isTrained'].setValue(ap.isTrained);
        this.apDetail.controls['medicalNeeds_animal'].setValue(ap.medicalNeeds_animal);
        this.apDetail.controls['temperament_animal'].setValue(ap.temperament_animal);
        this.apDetail.controls['medicalNeeds_description'].setValue(ap.medicalNeeds_description);
        this.apDetail.controls['behavioralNeeds_animal'].setValue(ap.behavioralNeeds_animal);
        this.apDetail.controls['behavioralNeeds_description'].setValue(ap.behavioralNeeds_description);
        this.apDetail.controls['history_animal'].setValue(ap.history_animal);
        this.apDetail.controls['photoUrl_animal'].setValue(this.url2);
        this.url2=ap.photoUrl_animal ;

        

        
       
      }
  
      updateAP(){
        this.apObj.id_animal = this.apDetail.value.id_animal;
        this.apObj.name_animal = this.apDetail.value.name_animal;
        this.apObj.type_animal = this.apDetail.value.type_animal;
        this.apObj.age_animal = this.apDetail.value.age_animal;
        this.apObj.breed_animal = this.apDetail.value.breed_animal;
        this.apObj.gender_animal = this.apDetail.value.gender_animal;
        this.apObj.size_animal = this.apDetail.value.size_animal;
        this.apObj.weight_animal = this.apDetail.value.weight_animal;
        this.apObj.color_animal = this.apDetail.value.color_animal;
        this.apObj.isVaccinated = this.apDetail.value.isVaccinated;
        this.apObj.isTrained = this.apDetail.value.isTrained;
        this.apObj.medicalNeeds_animal = this.apDetail.value.medicalNeeds_animal;
        this.apObj.temperament_animal = this.apDetail.value.temperament_animal;
        this.apObj.medicalNeeds_description = this.apDetail.value.medicalNeeds_description;
        this.apObj.behavioralNeeds_animal = this.apDetail.value.behavioralNeeds_animal;
        this.apObj.behavioralNeeds_description = this.apDetail.value.behavioralNeeds_description;
        this.apObj.history_animal = this.apDetail.value.history_animal;
        this.apObj.photoUrl_animal = this.url2;
    
        this.apservice.updateAP(this.apObj).subscribe(res=>{
          console.log(res);
          this.getAllAP();
          
          alert("Animal Profile successfully edited");
        }, err =>{
          console.log(err);
          alert("Sorry Animal Profile wasn't edited");
        })
      }
  
      deleteAP(ap: AnimalProfile){
        this.apservice.deleteAP(ap).subscribe(res=>{
          console.log(res);
         alert("Animal Profile was deleted succesfully");
          this.getAllAP();
        }, err =>{
          console.log(err);
          alert("Sorry unable to delete Animal Profile");
        })
      }

      getAllAP()
    { 
      
      this.apservice.getAllAP().subscribe(res=>{
        this.apList = res;
      }, err=>{
        console.log("Error retreiving all Animal Profiles!")
      });
    }

      

      
      gotoAC()
      {
        this.router.navigate(['/adoptioncenter']);
      }
      gotoAP()
      {
        this.router.navigate(['/animalprofile']);
      }
      cancel()
      {
        this.isEditForm=false;
        this.url ="https://img.icons8.com/ios/100/000000/contract-job.png";
        this.apDetail.controls['id_animal'].setValue(null);
        this.apDetail.controls['name_animal'].setValue(null);
        this.apDetail.controls['type_animal'].setValue(null);
        this.apDetail.controls['age_animal'].setValue(null);
        this.apDetail.controls['breed_animal'].setValue(null);
        this.apDetail.controls['gender_animal'].setValue(null);
        this.apDetail.controls['size_animal'].setValue(null);
        this.apDetail.controls['weight_animal'].setValue(null);
        this.apDetail.controls['color_animal'].setValue(null);
        this.apDetail.controls['isVaccinated'].setValue(null);
        this.apDetail.controls['isTrained'].setValue(null);
        this.apDetail.controls['medicalNeeds_animal'].setValue(null);
        this.apDetail.controls['temperament_animal'].setValue(null);
        this.apDetail.controls['medicalNeeds_description'].setValue("none");
        this.apDetail.controls['behavioralNeeds_animal'].setValue(null);
        this.apDetail.controls['behavioralNeeds_description'].setValue("none");
        this.apDetail.controls['history_animal'].setValue(null);
        this.apDetail.controls['photoUrl_animal'].setValue(null);
           
      }
      toggle(){
        const medicalNeedsCheckbox = this.apDetail.get('medicalNeeds_animal');
        const medicalDescription = document.getElementById('medicalDescription');
    if (medicalDescription != null) {
      if (medicalNeedsCheckbox?.value) {
      medicalDescription.style.display = 'block';
      }
      else {
        medicalDescription.style.display = 'none';
        }
    }
      }
      toggle2(){
        const behavioralNeedsCheckbox = this.apDetail.get('behavioralNeeds_animal');
        const behavioralDescription = document.getElementById('behavioralDescription');
    if (behavioralDescription != null) {
      if (behavioralNeedsCheckbox?.value) {
        behavioralDescription.style.display = 'block';
      }
      else {
        behavioralDescription.style.display = 'none';
        }
    }
      }
      openModalShow(ap:AnimalProfile) {
        this.ModalShow.show();
        this.appObj=ap;
      }
     
}