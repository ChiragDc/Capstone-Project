import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  progressBar = false;
  user: User = {} as User;
  username!: string;
  password!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.progressBar = true;
    console.log(this.username)
    this.userService.addUser(this.user).subscribe(user => {
      this.user = user;
      this.userService.saveUsername(user.username);
      window.location.replace("/")
    });
  }

}
