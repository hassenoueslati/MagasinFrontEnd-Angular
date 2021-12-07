import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Facture } from '../model/Facture';
import { User } from '../model/User';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  factureForm!: FormGroup;
  listfacture: Facture[];
  listUser: User[];
  constructor( private factureService: FactureService,private fb: FormBuilder) { }
  show = false;
 


  ngOnInit(): void {
   //ajout
   this.factureForm = this.fb.group({
    raison:[''],
    
    montantRemise :[''],
    montantFacture : [''],
    dateFacture : [''],
    active :[''],
   
    
    
      
    });
   
    
    //affichage facture
    this.factureService.AllFacture().subscribe(facture => 
      
      
    //datatable  
      {this.listfacture = facture;
        setTimeout(()=>{   
          $('#datatableexample').DataTable( {
            "pagingType": "full_numbers",
        search:true,
          "ordering": true,
         
          retrieve: true,
      paging: true,
            pageLength: 5,
            processing: true,
            lengthMenu : [5, 10, 25],
            
        } );
        }, 1);
              }, error => console.error(error));




      }


       //delete
  delete(id: number) {
    this.factureService.delete(id).subscribe();
    this.ngOnInit();
  }
    //ajout
    handelSubmit() {
      this.factureService.addFacture(this.factureForm.value).subscribe();
      this.ngOnInit();
      window.location.reload();
    }
     //show form ajout
  showAddFacture() {
    this.show = !this.show;
  }
    

}
