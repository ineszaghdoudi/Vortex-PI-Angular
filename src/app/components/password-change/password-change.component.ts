import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { SimpleSnackbarComponent } from '../simple-snackbar/simple-snackbar.component';

declare var window: any;

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  username!: string;
 oldPassword!: string;
  newPassword!: string;
  //formModalAdd: any;

  constructor(private authService: AuthService,private snackbar: SimpleSnackbarComponent) { }

  ngOnInit(): void {
  }

  changePassword() {
    this.authService.changePassword(this.username,this.oldPassword, this.newPassword).subscribe(
      (response) => {
        console.log('Password changed successfully');
        this.snackbar.show('Password changed successfully',3000);

      },
      (error) => {
        console.log('An error occurred while changing password');
        this.snackbar.show('cannot update password',3000);

      }
    );
  }

}
