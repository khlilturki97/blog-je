import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(users => {
        console.log(users);
        this.users = users;
      });
  }

}
