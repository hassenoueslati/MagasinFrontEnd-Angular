import {Role} from "./Role";

export class User {
   idUser : number ;
   nom : string;
   prenom : string;
   email : string;
   password : string;
   dateNaissance : Date;
   profession : Profession;
   categorieClient : CategorieClient;
   roles : Role[];

}
