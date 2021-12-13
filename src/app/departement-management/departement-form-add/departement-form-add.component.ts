import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Departement } from '../../model/Departement';

@Component({
  selector: 'app-departement-form-add',
  templateUrl: './departement-form-add.component.html',
  styleUrls: ['./departement-form-add.component.css']
})
export class DepartementFormAddComponent implements OnInit {

  @Input() departement : Departement;
  @Output() addEvent= new EventEmitter<Departement>();
  constructor(private toastr :ToastrService,) { }

  ngOnInit(): void {
  }
  save(){
    this.addEvent.emit(this.departement);
    this.departement = new Departement();
   
  }
}
