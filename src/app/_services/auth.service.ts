import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Entities/User';

const AUTH_API = 'http://localhost:8075/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }

  sendResetPasswordEmail(email: string): Observable<any> {
    return this.http.post(
       AUTH_API+ 'forgot-password', {email});
  }

  updateuser(id:number,user:User): Observable<any> {
    return this.http.put(
       AUTH_API+ `update/${id}`, 
       {
        
      user,
       
       },
       httpOptions
       );
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(AUTH_API+'getallusers');
  }

  getadoptionperentage(id:number): Observable<number>{
    return this.http.get<number>(AUTH_API+ `users/${id}/adoptionpercentage`);
  }

  getusersstats(){
    return this.http.get<{ [Key:string]:number }>(AUTH_API+'statsusers');
  }

  deleteuserr(id:number):Observable<any>{
     return this.http.delete<any>(AUTH_API+`deleteuser/${id}`)
  }


  changePassword(username:string,oldPassword: string, newPassword: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = { username,oldPassword, newPassword };
    return this.http.post<any>(AUTH_API+'changePassword', body, httpOptions);
  }

  
}
