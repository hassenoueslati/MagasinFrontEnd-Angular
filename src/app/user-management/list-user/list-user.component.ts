import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from 'src/app/model/User';
import {AuthService} from "../../services/auth.service";
import {Fournisseur} from "../../model/Fournisseur";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  @Input() user: User;
  @Output() deleteEvent = new EventEmitter<User>()
  @Output() updateEvent = new EventEmitter<User>();

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  deleteNotif() {
    this.deleteEvent.emit(this.user)
  }
  updateNotif(){
    this.updateEvent.emit(this.user)
  }


}
