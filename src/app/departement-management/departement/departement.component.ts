import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Departement } from '../../model/Departement';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  @Input() departement : Departement;
  @Output() deleteNotifEvent = new EventEmitter<Departement>();
  @Output() updateNotifEvent = new EventEmitter<Departement>();

  constructor() { }

  ngOnInit(): void {

  }

  deleteNotif(){
    this.deleteNotifEvent.emit(this.departement)
  }
  updateNotif(){
    this.updateNotifEvent.emit(this.departement)
  }
}
