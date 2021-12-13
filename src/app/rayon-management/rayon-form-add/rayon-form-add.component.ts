import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rayon} from "../../model/Rayon";

@Component({
  selector: 'app-rayon-form-add',
  templateUrl: './rayon-form-add.component.html',
  styleUrls: ['./rayon-form-add.component.css']
})
export class RayonFormAddComponent implements OnInit {
  @Input() rayon : Rayon;
  @Output() addEvent=new EventEmitter<Rayon>();
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    this.addEvent.emit(this.rayon);
    this.rayon = new Rayon();
  }
}
