import { Component, OnInit } from '@angular/core';
import { AdoptionApplication } from 'src/app/entities/adoption-application';
import { AdoptionApplicationService } from 'src/app/services/adoption-application.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-check-adoptionapplication',
  templateUrl: './check-adoptionapplication.component.html',
  styleUrls: ['./check-adoptionapplication.component.css']
})
export class CheckAdoptionapplicationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private aapservice :AdoptionApplicationService) { }

  aapList : AdoptionApplication[] = [];
  bestList : AdoptionApplication[] = [];
  id !: number ;
  num!:number;
  
  num2!:number;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['idpost'];
   });

    this.getAllAAP();
  }
  getAllAAP()
    { 
      
      this.aapservice.getAAPByPost(this.id).subscribe(res=>{
        this.aapList = res;
      }, err=>{
        console.log("Error retreiving all Adoption Applications!")
      });
    }
  best(){
    this.aapservice.best(this.id).subscribe(res=>{
      this.bestList = res
  },err=>{
    console.log("Error retreiving best Adoption Applications!")
  });
  }
  aprove(id:number){
    this.aapservice.aprove(id).subscribe(res=>{
      this.num2 = res
    
    });
    alert("Adoption Applications approved")
  }
  deny(id:number){
    this.aapservice.deny(id).subscribe(res=>{
      this.num = res
    
    });
    alert("Adoption Applications denied")
  }
  switching1(){
    const myapps1 = document.getElementById('myapps1');
    const myapps2 = document.getElementById('myapps2');
    if (myapps2 != null && myapps1!=null) {
    if (myapps2.style.display === "none") {
      myapps2.style.display = "block";
      myapps1.style.display = "none";
    }
  }
  }
  switching2(){
    const myapps1 = document.getElementById('myapps1');
    const myapps2 = document.getElementById('myapps2');
    if (myapps2 != null && myapps1!=null) {
    if (myapps1.style.display === "none") {
      myapps1.style.display = "block";
      myapps2.style.display = "none";
  }
  }
}
}
