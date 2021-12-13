import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reclamation } from '../../model/Reclamation';
import { ReclamationService } from '../../services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  tab:any=[];
  reclamation:Reclamation;
  myForm:FormGroup;
  constructor(private reclamationService:ReclamationService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.reclamation=new Reclamation();
    this.myForm=this.formBuilder.group({
      'Subject':['',[Validators.required]],
      'description':['',[Validators.required]]
    })

  }

  addReclamation(){
    if(this.myForm.invalid){
      return;
    }
    let data={
      "subject":this.myForm.controls['Subject'].value,
      "description":this.myForm.controls['description'].value
    }
    console.log(data)
    this.reclamationService.addReclamation(data).subscribe(
    ()=>alert("Reclamation added !!")
    ,()=>alert("Error please try again !!"))
  
    
}
}
