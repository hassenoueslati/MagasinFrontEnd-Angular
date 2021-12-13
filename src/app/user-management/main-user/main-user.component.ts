import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {Fournisseur} from "../../model/Fournisseur";


@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})

export class MainUserComponent implements OnInit {
  listUser : User[]
  showFormTemplate: boolean;
  //roles:CategorieClient.Fidele;
  inputUser : User




constructor(private UserService : UserService) { }

  ngOnInit(): void {
    this.UserService.getAll().subscribe(
      (data:User[])=> this.listUser=data
    )

  }
  save(user: User): void {
    let i = this.listUser.indexOf(user);
    if (i != -1) {
      this.UserService.update(user).subscribe(
        () => {
          this.listUser[i] = user;
          this.showFormTemplate = false
        }
      )
    }
  }
  delete(u : User){
    let i = this.listUser.indexOf(u);
    this.UserService.delete(u.idUser).subscribe(
      ()=>this.listUser.splice(i,1)
    )
  }
  showForm(){
    if (this.showFormTemplate ===false){
      this.showFormTemplate = true
      this.inputUser = new User();
    }
    else {
      this.showFormTemplate = false
    }
  }

  Show(critere:String){
    enum CategorieClient {
      Fidele="Fidele",
      Ordinaire="Ordinaire",
      Premuim="Premuim"
    }
    if (critere==="Fidele")

     this.UserService.findByCategory(CategorieClient.Fidele).subscribe((data)=>this.listUser=data);
    else if (critere=="Ordinaire")
      this.UserService.findByCategory(CategorieClient.Ordinaire).subscribe((data)=>this.listUser=data);
    else this.UserService.findByCategory(CategorieClient.Premuim).subscribe((data)=>this.listUser=data);
    console.log(CategorieClient.Fidele);
  }
  update (user : User){
  this.inputUser = user
    this.showFormTemplate = true

  }
}
