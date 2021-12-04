import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  @Input() user: User;
  @Output() deleteEvent = new EventEmitter<User>()

  constructor() { }

  ngOnInit(): void {
  }
  deleteNotif(){
    this.deleteEvent.emit(this.user)
  }
}
