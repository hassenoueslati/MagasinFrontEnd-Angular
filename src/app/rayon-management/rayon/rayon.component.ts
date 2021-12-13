import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rayon} from "../../model/Rayon";
import {Produit} from "../../model/Produit";

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.css']
})
export class RayonComponent implements OnInit {
  @Input() rayon : Rayon
  @Output() notification = new EventEmitter<Rayon>();
  @Output() deleteNotifEvent = new EventEmitter<Rayon>();
  @Output() updateNotifEvent = new EventEmitter<Rayon>();
  constructor( public produit : Produit) { }

  ngOnInit(): void {
  }
  deleteNotif(){
    this.deleteNotifEvent.emit(this.rayon)
  }
  updateNotif(){
    this.updateNotifEvent.emit(this.rayon)
  }

}
