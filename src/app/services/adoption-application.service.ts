import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AdoptionApplication } from '../entities/adoption-application';

@Injectable({
  providedIn: 'root'
})
export class AdoptionApplicationService {
  private addAAPurl = 'http://localhost:8075/addAdoptionApplicationWithAdoptionPostAndUser'
  private getAllAAPUrl = 'http://localhost:8075/retriveAllAdoptionApplication';
  private getAAPByIDurl = 'http://localhost:8075/retriveAdoptionApplication';
  private deleteAAPUrl = 'http://localhost:8075/removeAdoptionApplication';
  private editAAPUrl = 'http://localhost:8075/updateAdoptionApplication'
  private statsAAPUrl = 'http://localhost:8075/adoptionapplication-animaltype-stats'
  private aproveAAPUrl = 'http://localhost:8075/aproveadoptionapp'
  private denyAAPUrl = 'http://localhost:8075/denyadoptionapp'
  private bestAAPUrl = 'http://localhost:8075/bestadoptionapps'
  private getAAPByPosturl = 'http://localhost:8075/retriveByAdoptionPost'
  
  constructor(private http : HttpClient) { }

  addAAP(aap : AdoptionApplication,id_post:number):Observable<Object> {
    console.log(aap);
    const url = `${this.addAAPurl}/${id_post}`+"/1";
    return this.http.post(url, aap);
  }

  updateAAP(aap : AdoptionApplication):Observable<Object> {
    
    return this.http.put(`${this.editAAPUrl}`, aap);
  }

  getAllAAP():Observable<AdoptionApplication[]>
  {
    return this.http.get<AdoptionApplication[]>(`${this.getAllAAPUrl}`);
  }
  deleteAAP(aap :AdoptionApplication): Observable<AdoptionApplication>{
    return this.http.delete<AdoptionApplication>(`${this.deleteAAPUrl}/${aap.id_adoptionapp}`);
  }
  getAAPByPost(adpid :number):Observable<AdoptionApplication[]>{
    const url = `${this.getAAPByPosturl}/${adpid}`;
    return this.http.get<AdoptionApplication[]>(url);
  }
  getAAPByID(aapid :number):Observable<AdoptionApplication>{
    const url = `${this.getAAPByIDurl}/${aapid}`;
    return this.http.get<AdoptionApplication>(url);
  }
  stats():Observable<any[]>{
    return this.http.get<any[]>(`${this.statsAAPUrl}`);
  }
  aprove(aapid : number):Observable<number>  {
    
    return this.http.get<number>(`${this.aproveAAPUrl}/${aapid}`);
  }
  deny(aapid : number):Observable<number> {
    
    return this.http.get<number>(`${this.denyAAPUrl}/${aapid}`);
  }
  best(adpid:number):Observable<AdoptionApplication[]>
  {
    return this.http.get<AdoptionApplication[]>(`${this.bestAAPUrl}/${adpid}`);
  }
}
