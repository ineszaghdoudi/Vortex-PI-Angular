import { AnimalProfile } from "./animal-profile";

export class AdoptionPost {

    id_adoptionpost!:number;

    description_adoptionpost!:string;

    photoUrl_adoptionpost!:string;

    
    status_adoptionpost!:string;

    adopter_id!:number;

    adoptionDate!: Date;

    creationdate_adoptionpost!: Date;

    animalProfile !: AnimalProfile;
}
