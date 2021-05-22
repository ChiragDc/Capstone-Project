import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { LoginComponent } from '../login/login/login.component';
import { User } from '../Model';
import { UserService } from '../service/user.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  progressBar = false;
  user: User = {} as User;
  username!: string;
  password!: string;
  email!:string;
  errors: any;

  constructor(public dialog: MatDialog,private userService: UserService) { }

  ngOnInit(): void {
  }

  // addUser() {
    
  //   console.log(this.username)
    
  //   Swal.fire('Registration Complete')
  //   this.userService.addUser(this.user).subscribe(user => {
  //     this.user = user;
  //     this.userService.saveUsername(user.username);
      
     
  //   });
  // }
  addUser(){
    this.userService.addUser(this.user).subscribe(
      result => {
        // Handle result
        console.log('hi')
      },
      error => {
        console.log('hello')
      },
      ()=>{
        this.user = this.user;
      this.userService.saveUsername(this.user.username);
      Swal.fire('Registration Complete')
      }
    )
  }
  

}
