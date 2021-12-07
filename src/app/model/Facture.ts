import { User } from "./User";

export class Facture {
  idFacture : number ;
  montantRemise : number ;
  montantFacture : number ;
  dateFacture : Date ;
  active :Boolean ;
  user : User;

}
