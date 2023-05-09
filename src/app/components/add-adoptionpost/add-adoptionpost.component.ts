import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AdoptionPost } from 'src/app/entities/adoption-post';
import { AdoptionPostService } from 'src/app/services/adoption-post.service';
import { AnimalProfile } from 'src/app/entities/animal-profile';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalProfileService } from 'src/app/services/animal-profile.service';

declare var window: any;

@Component({
  selector: 'app-add-adoptionpost',
  templateUrl: './add-adoptionpost.component.html',
  styleUrls: ['./add-adoptionpost.component.css']
})
export class AddAdoptionpostComponent implements OnInit {


  adpDetail !: FormGroup;
  adpObj : AdoptionPost= new AdoptionPost();
  adpList : AdoptionPost[] = [];
  apid !: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adpservice :AdoptionPostService,
    private apservice: AnimalProfileService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.apid = params['idanim'];
   });
   this.adpDetail = this.formBuilder.group({


    description_adoptionpost: [''],


    });
  }
  addADP() {
    console.log(this.adpDetail);
     this.adpObj.description_adoptionpost = this.adpDetail.value.description_adoptionpost;
    
    this.adpservice.addADP(this.adpObj,this.apid).subscribe(res=>{
      console.log(res);
      alert("Adoption Post was added successfully!");
      window.location.href="adoptionpost";
    },err=>{
      console.log(err);
      alert("Error!");
    });
  }
  cancel(){
    this.router.navigate(['adoptionpost'])
  }

}
