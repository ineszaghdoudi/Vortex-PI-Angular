import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalProfile } from 'src/app/entities/animal-profile';
import { AnimalProfileService } from 'src/app/services/animal-profile.service';
import { AdoptionPost } from 'src/app/entities/adoption-post';
import { AdoptionPostService } from 'src/app/services/adoption-post.service';

declare var window: any;


@Component({
  selector: 'app-adoption-post',
  templateUrl: './adoption-post.component.html',
  styleUrls: ['./adoption-post.component.css']
})
export class AdoptionPostComponent implements OnInit {

  ModalShow:any
  num : number = 12;
  adpList : AdoptionPost[] = [];
  apList: AnimalProfile[] = [];
  adpobj: AdoptionPost= new AdoptionPost;

  constructor(
    private router: Router,
    private adpservice: AdoptionPostService,
    private apservice: AnimalProfileService,
  ) {}

  ngOnInit(): void {
    
    this.getAllAP();

    this.getAllADP();

    this.ModalShow=new  window.bootstrap.Modal(
      document.getElementById('showw')
    );
  }

  // addADP() {
  //   console.log(this.adpDetail);
  //   // //this.apObj.id_user = this.apDetail.value.id_user;
  //   // this.adpObj.id_adoptionpost = this.adpDetail.value.id_adoptionpost;
  //   this.adpObj.description_adoptionpost = this.adpDetail.value.description_adoptionpost;
  //   // this.adpObj.photoUrl_adoptionpost = this.selectedAnimalProfile.photoUrl_animal;
  //   // this.adpObj.status_adoptionpost = this.adpDetail.value.status_adoptionpost;
  //   // this.adpObj.adopter_id = this.adpDetail.value.adopter_id;
  //   // this.adpObj.adoptionDate = this.adpDetail.value.adoptionDate;
  //   // this.adpObj.animal_profile = this.selectedAnimalProfile;

    
    
    

  //   this.adpservice.addADP(this.adpObj,this.selectedAnimalProfile).subscribe(res=>{
  //     console.log(res);
      
  //     this.adpObj.animal_profile = this.selectedAnimalProfile;
  //     this.getAllADP();
  //     alert("Adoption Post was added successfully!");
  //   },err=>{
  //     console.log(err);
  //     alert("Error!");
  //   });
  // }
  getAllADP()
    { 
      
      this.adpservice.getAllADP().subscribe(res=>{
        this.adpList = res;
        console.log(res);
      });
    }
    getAllAP()
    { 
      
      this.apservice.getAllAP().subscribe(res=>{
        this.apList = res;
      });
    }
  //   select(animalProfile:AnimalProfile) {
  //     this.selectedAnimalProfile = animalProfile;
  //     const formSection = document.getElementById('adoption-post-form');
  //     const animalSection = document.getElementById('select_animal');
  //     if (animalSection != null) {
  //       animalSection.style.display = animalSection.style.display === 'none' ? 'block' : 'none';
  //     }
  //     if (formSection != null) {
  //     formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
  //   }
  // }
  select(id_anim:number){
    this.router.navigate(['addadoptionpost',id_anim]);
  }
  deleteADP(adp: AdoptionPost){
    this.adpservice.deleteADP(adp).subscribe(res=>{
      console.log(res);
     alert("Adoption Post was deleted succesfully");
      this.getAllADP();
    }, err =>{
      console.log(err);
      alert("Sorry unable to delete Adoption Post");
    })
  }
  // cancel(){
    
  //   const formSection = document.getElementById('adoption-post-form');
  //   const animalSection = document.getElementById('select_animal');
  //   if (animalSection != null) {
  //     animalSection.style.display = animalSection.style.display === 'none' ? 'block' : 'none';
  //   }
  //     if (formSection != null) {
  //     formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
  //   }
  // }
  openModalShow(adp:AdoptionPost) {
    this.ModalShow.show();
    this.adpobj=adp;
  }
}



