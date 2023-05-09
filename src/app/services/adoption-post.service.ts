import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AdoptionPost } from '../entities/adoption-post';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdoptionPostService {

  private addADPurl = 'http://localhost:8075/addAdoptionPostWithAnimalProfil'
  private getAllADPUrl = 'http://localhost:8075/retriveAllAdoptionPost';
  private getADPByIDurl = 'http://localhost:8075/retriveAdoptionPost';
  private deleteADPUrl = 'http://localhost:8075/removeAdoptionPost';
  private editADPUrl = 'http://localhost:8075/updateAdoptionPost'

  constructor(private http : HttpClient) { }

  addADP(adp : AdoptionPost,id_anim:number):Observable<Object> {
    console.log(adp);
    const url = `${this.addADPurl}/${id_anim}`
    return this.http.post(url, adp);
  }

  updateADP(adp : AdoptionPost):Observable<Object> {
    
    return this.http.put(`${this.editADPUrl}`, adp);
  }

  getAllADP():Observable<AdoptionPost[]>
  {
    return this.http.get<AdoptionPost[]>(`${this.getAllADPUrl}`);
  }
  deleteADP(adp :AdoptionPost): Observable<AdoptionPost>{
    return this.http.delete<AdoptionPost>(`${this.deleteADPUrl}`+'/'+`${adp.id_adoptionpost}`);
  }
  getADPByID(adp :AdoptionPost):Observable<AdoptionPost>{
    const url = `${this.getADPByIDurl}/${adp.id_adoptionpost}`;
    return this.http.get<AdoptionPost>(url);
  }
}
