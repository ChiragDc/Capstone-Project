import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model';
import { UserService } from 'src/app/service/user.service';
import { filter } from 'rxjs/operators'
import Swal from 'sweetalert2';


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

  // addUser() {
  //   this.progressBar = true;
  //   console.log(this.username)
  //   this.userService.addUser(this.user).subscribe(user => {
  //     this.user = user;
  //     this.userService.saveUsername(user.username);
  //     window.location.replace("/")
  //   });
  // }
  checkUser() {
    this.userService.checkUser(this.user)
    
    .subscribe(
        result => {
            // console.log(result);
            
            if(result){
              Swal.fire('Succesfully Logged In');
              this.userService.saveUsername(this.user.username);
              
                  window.location.replace("/")
            }
            else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Username or Password',
                footer: '<a href>Please Login Again with valid Credentials</a>'
              })
            }
        },
        error => {
            console.log("EE:",error);
        }
);
  }

}
