import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AnimalProfile } from '../entities/animal-profile';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalProfileService {

  private addAPurl = 'http://localhost:8075/addAnimalProfile'
  private getAllAPUrl = 'http://localhost:8075/retriveAllAnimalProfile';
  private getAPByIDurl = 'http://localhost:8075/retrieveAnimalProfile';
  private deleteAPUrl = 'http://localhost:8075/removeAnimalProfile';
  private editAPUrl = 'http://localhost:8075/updateAnimalProfile'
  
  constructor(private http : HttpClient) { 
  }

  addAP(ap : AnimalProfile):Observable<Object> {
    console.log(ap);
    return this.http.post(`${this.addAPurl}`, ap);
  }

  updateAP(ap : AnimalProfile):Observable<Object> {
    
    return this.http.put(`${this.editAPUrl}`, ap);
  }

  getAllAP():Observable<AnimalProfile[]>
  {
    return this.http.get<AnimalProfile[]>(`${this.getAllAPUrl}`);
  }
  deleteAP(ap :AnimalProfile): Observable<AnimalProfile>{
    return this.http.delete<AnimalProfile>(`${this.deleteAPUrl}`+'/'+`${ap.id_animal}`);
  }
  getAPByID(apid :number):Observable<AnimalProfile>{
    const url = `${this.getAPByIDurl}/${apid}`;
    return this.http.get<AnimalProfile>(url);
  }
  
}


