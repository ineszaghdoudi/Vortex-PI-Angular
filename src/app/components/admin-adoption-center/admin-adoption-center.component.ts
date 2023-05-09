import { Component, OnInit } from '@angular/core';

import { AdoptionPost } from 'src/app/entities/adoption-post';
import { AdoptionApplication } from 'src/app/entities/adoption-application';
import { AdoptionApplicationService } from 'src/app/services/adoption-application.service';
import { AdoptionPostService } from 'src/app/services/adoption-post.service';
import { AnimalProfile } from 'src/app/entities/animal-profile';
import { AnimalProfileService } from 'src/app/services/animal-profile.service';
import { Chart} from 'chart.js';

declare var window : any;


@Component({
  selector: 'app-admin-adoption-center',
  templateUrl: './admin-adoption-center.component.html',
  styleUrls: ['./admin-adoption-center.component.css']
})
export class AdminAdoptionCenterComponent implements OnInit {


  aplist: AnimalProfile[]= [];
  adplist: AdoptionPost[]= [];
  applist: AdoptionApplication[]=[];
  constructor(
    private apservice:AnimalProfileService,
    private adpservice:AdoptionPostService,
    private appservice:AdoptionApplicationService) { }

    ctx : any;
  config : any;

  chartDataType : number[] = [];
  chartDatalabelsType : any[] = [];

  ngOnInit(): void {
    this.getallanimals();
    this.getallposts();
    this.getallapplications();

    this.appservice.stats().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.chartDataType.push(data[i].data);
        this.chartDatalabelsType.push(data[i].label);
      }
    
      // initialize chart
      this.ctx = document.getElementById('myChart');
      this.config = {
        type: 'bar',
        options: {},
        data: {
          labels: this.chartDatalabelsType,
          datasets: [
            {
              label: 'Chart Data',
              data: this.chartDataType,
              borderWidth: 5,
              borderColor: 'white',
              backgroundColor: ['pink', 'yellow', 'lightblue', 'grey', 'red', 'violet', 'brown', 'blue'],
            },
          ],
        },
      };
      const myNewChart = new Chart(this.ctx, this.config);
    });
  }
  getallanimals()
    {
      this.apservice.getAllAP().subscribe(res=>{
        this.aplist = res;
      }, err=>{
        console.log("Error retreiving all posts!")
      });
    }
  getallposts()
    {
      this.adpservice.getAllADP().subscribe(res=>{
        this.adplist = res;
      }, err=>{
        console.log("Error retreiving all posts!")
      });
    }
    getallapplications()
    {
      this.appservice.getAllAAP().subscribe(res=>{
        this.applist = res;
      }, err=>{
        console.log("Error retreiving all posts!")
      });
    }
    deleteanimal(animal: AnimalProfile){
      this.apservice.deleteAP(animal).subscribe(res=>{
        console.log(res);
        alert("Animal Profile was deleted succesfully");
        this.getallanimals();
      }, err =>{
        console.log(err);
        alert("Sorry unable to delete Animal Profile");
      })
    }
    deletepost(post: AdoptionPost){
      this.adpservice.deleteADP(post).subscribe(res=>{
        console.log(res);
        alert("Adoption Post was deleted succesfully");
        this.getallposts();
      }, err =>{
        console.log(err);
        alert("Sorry unable to delete Adoption Post");
      })
    }
    deleteapplication(application: AdoptionApplication){
      this.appservice.deleteAAP(application).subscribe(res=>{
        console.log(res);
        alert("Adoption Application was deleted succesfully");
        this.getallapplications();
      }, err =>{
        console.log(err);
        alert("Sorry unable to delete Adoption Application");
      })
    }

}
