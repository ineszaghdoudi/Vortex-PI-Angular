import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  gotoChatbot(){
    this.router.navigate(['/pet-bot']);
  }

  gotoLRs(){
    this.router.navigate(['/all-learning-resources']);
  }

  gotoContact(){
    this.router.navigate(['/contact-us']);
  }

  gotoCrowdFunding(){
    this.router.navigate(['/crowd-funding']);
  }

  gotoAdoptionCenter(){
    this.router.navigate(['/adoptioncenter']);
  }
  
}