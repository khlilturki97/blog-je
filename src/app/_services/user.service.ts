import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    {
      id: 1,
      name: 'khaaaaasalil turki',
      username: 'kt',
      email: 'kt@gmail.com'
    },
    {
      id: 2,
      name: 'khalil turki',
      username: 'kt',
      email: 'kt@gmail.com'
    }, {
      id: 3,
      name: 'khlil turkiiiiiii',
      username: 'kt',
      email: 'kt@gmail.com'
    }
  ];

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  getUserById(id) {
    for (const user of this.users) {
      if (user.id === id) {
        return user;
      }
    }
    return null;
  }

  getUsers() {
    return this.users;
  }
}
