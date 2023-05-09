import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { SimpleSnackbarComponent } from '../simple-snackbar/simple-snackbar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  

  constructor(private authService: AuthService,private snackbar: SimpleSnackbarComponent) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { username, email, password } = this.form;
    
    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.snackbar.show('Signup successful',3000);

      //  this.snackBar.open('Success message', 'Dismiss', config);

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.snackbar.show('Signup failed',3000);

      }
    });
  }
}
