import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class forgotpasswordComponent implements OnInit {
  form: any = {
   
    email: null,
   
  };
 
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const {email} = this.form;

    this.authService.sendResetPasswordEmail(email).subscribe({
      next: data => {
        console.log(data);
       
      },
      error: err => {
        this.errorMessage = err.error.message;
       
      }
    });
  }
}
