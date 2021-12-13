import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Departement } from '../../model/Departement';
import { DepartementService } from '../../services/departement.service';

@Component({
  selector: 'app-departement-main',
  templateUrl: './departement-main.component.html',
  styleUrls: ['./departement-main.component.css']
})
export class DepartementMainComponent implements OnInit {
//recherche+paginaton
totallength :any;
page:number=1;
///
  listDepartement: Departement[];
  showFormTemplate: boolean;
  buttonValue: string;
  inputDepartement: Departement;
  constructor(private toastr :ToastrService,private departementService : DepartementService) { }

  ngOnInit(): void {
  

    //
    this.showFormTemplate = false;
    this.buttonValue="add new Departement";
    this.departementService.getListDepartementService().subscribe(
      (data)=>{ 
        this.listDepartement = data;
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
      }, error => console.log(error));
        //longeur pour la pagination
    this.totallength=this.listDepartement.length;
    
  }
  save(departement: Departement): void {
    let i = this.listDepartement.indexOf(departement);
    if(i!= -1){
      this.departementService.updateDepartement(departement).subscribe(
        ()=>{this.listDepartement[i]= departement;
          this.showFormTemplate = false}
      )
      this.toastr.info("votre departement a été modifié avec succès !!", "Departement");
    }
    else {
      this.showFormTemplate = false
      this.departementService.addDepartement(departement).subscribe(
        ()=>this.listDepartement.push(departement)
      )
      this.toastr.success("votre departement a été ajouté avec succès !!", "Departement");
     
    }
  }
  showForm(){
    if (this.showFormTemplate ===false){
      this.showFormTemplate = true
      this.buttonValue= "go Back to the List";
      this.inputDepartement = new Departement();
    }
    else {
      this.buttonValue="add new Departement";
      this.showFormTemplate = false
    }
  }
  delete(departement:Departement): void{
    let i = this.listDepartement.indexOf(departement);
    this.departementService.deleteDepartement(departement.idDepartement).subscribe(
      ()=>this.listDepartement.splice(i,1)
    );
    this.toastr.error("votre departement a été supprimé avec succès !!", "Departement");
  }
  update(departement: Departement): void{
    //in order to update a product, the parent component will change the input value
    //and send it to the child component
    this.inputDepartement = departement;
    this.showFormTemplate = true;
 

  }
//recherche +pagination 
  public searchDepartement(key: string): void {
    console.log(key);
    const results: Departement[] = [];
    
    for (const departement of this.listDepartement) {
      for (const rayon of departement.rayon){
      if (departement.nomDepartement.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || rayon.libelle.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || rayon.code.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(departement);
      }
    }
    this.listDepartement = results;
    if (results.length === 0 || !key) {
      this.toastr.warning("resultat non trouvé on va revenir à la liste !!", "Departement");
      this.getDepartement();
      

    }}
  }
  public getDepartement(): void {
    this.departementService.getListDepartementService().subscribe(
      (response: Departement[]) => {
        this.listDepartement = response;
        console.log(this.listDepartement);
      },
      (error: HttpErrorResponse) => {
        
        alert(error.message);
      }
    );
  }

}
