import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entities/User';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  editing: boolean =false;
  user!: User;

  constructor(private storageService: StorageService,private authservice: AuthService,private router :Router) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
  

 
  
  saveUserInfo(id:number):void {
    this.editing=true;

    const { username, email, password } =this.currentUser;
    console.log('currentuser:',this.currentUser);

    this.authservice.updateuser(id,this.currentUser)
      .subscribe({
        next: () => {
          console.log('User updated successfully');
         
        },
       
      });
     // this.editing = false;
  }
  onchangePassword(){
    this.router.navigateByUrl('/changepassword');
  }

}


