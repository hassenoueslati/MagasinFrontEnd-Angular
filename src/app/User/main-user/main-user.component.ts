import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})

export class MainUserComponent implements OnInit {
  listUser : User[]
  roles:CategorieClient.Fidele;
  //category = CategorieClient.Premuim



constructor(private UserService : UserService) { }

  ngOnInit(): void {
    this.UserService.getAll().subscribe(
      (data:User[])=> this.listUser=data
    )

  }

  delete(u : User){
    let i = this.listUser.indexOf(u);
    this.UserService.delete(u.idUser).subscribe(
      ()=>this.listUser.splice(i,1)
    )
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
  //getByCategory(): void {

    //this.UserService.findByCategory(this.category)
      //.subscribe(
        //data => {
          //this.listUser = data;
          //console.log(data);
        //},
        //error => {
          //console.log(error);
        //});
  //}
}
