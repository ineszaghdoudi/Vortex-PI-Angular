import { Component,ElementRef,Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../Entities/User';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Chart } from 'chart.js';
import { ChartComponent } from '../chart/chart.component';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  template: '<app-chart #myChart></app-chart>'
})
export class UserListComponent {
  users: User[] = [];
  @ViewChild('myChart')
  myChart!: ChartComponent;

  constructor(private elementRef: ElementRef,private renderer:Renderer2, private authservice: AuthService) { }

  ngOnInit(): void {
   
   this.getUsers();
   
  }



  getUsers(){
    this.authservice.getUsers().subscribe({
      next: data => {
        this.users=data;
       // this.updateChart();

           
      },
      error: err => {
        console.log(err)
      }
    });
  }
 





  edit(id:number){}
  view(id:number){}

  showStatsDialog(user: User) {
    console.log('user:',user);
    const modal = this.renderer.createElement('div');
    this.renderer.setAttribute(modal, 'id', 'custom-modal');
    
    const title = 'Adoptions Predictions ';
    let message = '';
    this.authservice.getadoptionperentage(user.id).subscribe(pourcentage =>{
      message=`Adoption percentage for user  ${user.username} to make an adoption is : ${pourcentage}% `;
   
  
    const h2 = this.renderer.createElement('h2');
    const h2Text = this.renderer.createText(title);
    this.renderer.appendChild(h2, h2Text);
    
    const p = this.renderer.createElement('p');
    const pText = this.renderer.createText(message);
    console.log('message::',message);
    console.log('pourcentage : ',this.authservice.getadoptionperentage(user.id));

    this.renderer.appendChild(p, pText);
    
    const closeButton = this.renderer.createElement('button');
    this.renderer.addClass(closeButton, 'close');
    const closeText = this.renderer.createText('Close');
    this.renderer.appendChild(closeButton, closeText);
    
    this.renderer.appendChild(modal, h2);
    this.renderer.appendChild(modal, p);
    this.renderer.appendChild(modal, closeButton);
    this.renderer.appendChild(this.elementRef.nativeElement, modal);
    
    closeButton.addEventListener('click', () => {
      this.renderer.removeChild(this.elementRef.nativeElement, modal);
    });
  });
  }
  generateMessage(user:User): string{
    return `adoption percentage for user ${user.id}: loading ...`;
  }
   deleteUser(id:number){
    if(confirm('Are you sure to block this user ?')){
      this.authservice.deleteuserr(id).subscribe(() =>{
        this.getUsers();
      }
      )

    }
   }


  

}

  




