import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../../model/Facture';
import { FactureService } from '../../services/facture.service';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.css']
})
export class DetailFactureComponent implements OnInit {
  id: number;
  facture: Facture;
  constructor(private route: ActivatedRoute,private router: Router,private factureService: FactureService) { }

  ngOnInit(): void {
    this.facture = new Facture();

    this.id = this.route.snapshot.params['idFacture'];
    
    this.factureService.findById(this.id)
      .subscribe(data => {
        console.log(data)
        this.facture = data;
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
  }
  list(){
    this.router.navigate(['FactureManagement/facture']);
  }

}
