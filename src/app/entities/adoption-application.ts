import { AdoptionPost } from "./adoption-post";

export class AdoptionApplication {


    id_adoptionapp!:number;

    applicantName!:string;
    
    applicantEmail!:string;

    applicantPhone!:string;

    applicantAddress!:string;

    applicantOccupation!:string;

    applicantHousingType!:string;

    applicantHouseholdSize!:string;

    hasExperience!:boolean;

    applicantExperience!:string;

    otherPets!:boolean;

    otherPetsDescription!:string;

    vetName!:string;

    vetPhone!:string;

    referenceName!:string;

    referencePhone!:string;

    referenceRelationship!:string;

    motive!:string;

    status_adoptionapp!:string;

    createdDate_adoptionapp!:Date;

    adoptionPost!:AdoptionPost;

    user: any;
}
