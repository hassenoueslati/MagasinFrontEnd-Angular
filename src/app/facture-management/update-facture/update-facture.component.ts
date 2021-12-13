import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../../model/Facture';
import { FactureService } from '../../services/facture.service';

@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.css']
})
export class UpdateFactureComponent implements OnInit {

 
  factureToBeUpdated: Facture;

  updatedForm: FormGroup;
id:number;
  show: boolean = false;

  constructor(private httpService: FactureService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   
    this.httpService.findById(this.id).subscribe(facture => this.factureToBeUpdated = facture);


    this.updatedForm = this.fb.group({
       
  
    
      montantRemise :[''],
      montantFacture : [''],
      dateFacture : [''],
      active :[''],
    });
  }



  handelSubmitUpdate() {
    this.httpService.updateFacturee(this.factureToBeUpdated.idFacture, this.updatedForm.value).subscribe(data =>{
      this.goToFactureList()
    });
    
  }
  goToFactureList(){
    this.router.navigate(['FactureManagement/facture']);
  }



  update() {
    this.updatedForm.setValue({
      montantRemise: this.factureToBeUpdated.montantRemise,
      montantFacture: this.factureToBeUpdated.montantFacture,
      dateFacture: this.factureToBeUpdated.dateFacture,
      active: this.factureToBeUpdated.active,
     



    
    });

    this.show = !this.show;

  }

}
