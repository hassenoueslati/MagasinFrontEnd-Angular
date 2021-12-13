import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fournisseur} from "../../model/Fournisseur";
import {User} from "../../model/User";

@Component({
  selector: 'app-user-form-update',
  templateUrl: './user-form-update.component.html',
  styleUrls: ['./user-form-update.component.css']
})
export class UserFormUpdateComponent implements OnInit {
  @Input() user : User;
  @Output() addEvent= new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    this.addEvent.emit(this.user);
    this.user = new User();
  }
}
