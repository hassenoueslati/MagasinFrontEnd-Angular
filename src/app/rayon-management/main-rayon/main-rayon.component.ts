import { Component, OnInit } from '@angular/core';
import {RayonService} from "../../services/rayon.service";
import {Rayon} from "../../model/Rayon";

@Component({
  selector: 'app-main-rayon',
  templateUrl: './main-rayon.component.html',
  styleUrls: ['./main-rayon.component.css']
})
export class MainRayonComponent implements OnInit {
  listRayon: Rayon[];
  rayon: Rayon;
  showFormTemplate: boolean;
  buttonValue: string;
  inputRayon: Rayon;
  constructor(public RayonService : RayonService) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.buttonValue="add new Rayon";
    this.RayonService.getListRayon().subscribe(
      (data)=>this.listRayon = data
    )

  }
  save(rayon: Rayon): void {
    let i = this.listRayon.indexOf(rayon);
    if(i!= -1){
      this.RayonService.updateRayon(rayon).subscribe(
        ()=>{this.listRayon[i]= rayon;
          this.showFormTemplate = false}
      )
    }
    else {
      this.showFormTemplate = false
      this.RayonService.addRayon(rayon).subscribe(
        ()=>this.listRayon.push(rayon)
      )
    }
  }
  showForm(){
    if (!this.showFormTemplate){
      this.showFormTemplate = true
      this.buttonValue= "go Back to the List";
      this.inputRayon = new Rayon();
    }
    else {
      this.buttonValue="add new Rayon";
      this.showFormTemplate = false
    }
  }
  delete(rayon:Rayon): void{
    let i = this.listRayon.indexOf(rayon);
    this.RayonService.deleteRayon(rayon.idRayon).subscribe(
      ()=>this.listRayon.splice(i,1)
    )
  }
  update(rayon: Rayon): void{
    this.inputRayon = rayon;
    this.showFormTemplate = true;

  }

}
