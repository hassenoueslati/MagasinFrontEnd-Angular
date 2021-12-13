import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { ToastrService } from 'ngx-toastr';
import { Facture } from 'src/app/model/Facture';
import { User } from 'src/app/model/User';
import { FactureService } from 'src/app/services/facture.service';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  factureForm!: FormGroup;
  listfacture: Facture[];
  listUser: User[];
  constructor(private toastr :ToastrService, private factureService: FactureService,private fb: FormBuilder, private router: Router) { }
  show = false;
  dtOptions: any = {};


  ngOnInit(): void {
   //ajout
   this.factureForm = this.fb.group({
    raison:[''],
    
    montantRemise :[''],
    montantFacture : [''],
    dateFacture : [''],
    active :[''],
   
    
    
      
    });
   //datatable
   this.dtOptions = {
      
     
    
  
    
 
    
    search:true,
      "ordering": true,
      "info":     true,
      retrieve: true,
  paging: true,
 
  
  
      dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
      ]
  };
 
    
    //affichage facture
    this.factureService.AllFacture().subscribe(facture => this.listfacture = facture);
      
      
    

      }

      //affichage par id
      factureDetails(id: number){
        this.router.navigate(['FactureManagement/detailFacture', id]);
      }
       //delete
  delete(id: number) {
    this.factureService.delete(id).subscribe();
    this.ngOnInit();
    this.toastr.error("votre Facture a été supprimé avec succès !!", "Facture")
  }
    //ajout
    handelSubmit() {
      this.factureService.addFacture(this.factureForm.value).subscribe();
      this.toastr.success("votre Facture a été enregistrée avec succès !!", "Facture");
      this.ngOnInit();
      window.location.reload();
      
 
    }
     //show form ajout
  showAddFacture() {
    this.show = !this.show;
  }
    
  showSuccess(){
    this.toastr.success("votre Facture a été enregistrée avec succès !!", "Facture")
}
list(){
  this.router.navigate(['FactureManagement/facture']);
}
//update
 // update 
 updateFacture(id: number){
  this.router.navigate(['update-facture/', id]);
}


}
