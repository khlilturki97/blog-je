import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  @Input() user: { id: number, name: string, username: string, email: string };

  userId;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {


    this.route.params
      .subscribe(data => {
        console.log(data);
        this.userId = parseInt(data.id, 10);
        if (this.userId) {
          this.user = this.userService.getUserById(this.userId);
        }
      });
  }

}
