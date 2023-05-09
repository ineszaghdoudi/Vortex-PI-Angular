import { Component, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-chart',
  template: '<canvas #myChart width="10px" height="10px"></canvas>'
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('myChart')
  myChart!: ElementRef;
@Input() userpercentage : number[]=[];
constructor(private authservice: AuthService) { }


  ngAfterViewInit() {
    const ctx = this.myChart.nativeElement.getContext('2d');
    const chartConfig: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['User 1', 'User 2', 'User 3'],
        datasets: [{
          label: 'Adoption Percentage',
          data: [0, 0, 0],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          borderWidth: 1
        }]
      },
      options:  {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 10
            }
          }
        
      }
    }
    };
    const chart = new Chart(ctx, chartConfig);
    this.updatechart(chart);
  }

  updatechart(chart : Chart){
    this.authservice.getusersstats().subscribe({
      next: (data:any) => {
        chart.data.labels = Object.keys(data); // update chart labels with user names

        chart.data.datasets[0].data=Object.values(data);
       chart.update();
      },
      error: (err: any) => {
        console.log(err);
      }
     
    });
  }
  // updatechartsize(){
  //   const canvas = this.myChart.nativeElement;
  //   canvas.style.width='100px';
  //   canvas.style.height='100px';
  //   canvas.width=100;
  //   canvas.height=100;
  //   this.chart.resize();

  // }
}