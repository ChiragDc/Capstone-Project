import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../Model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  progressBar = false;
  user: User = {} as User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;
    })
  }

  updateUser(idUser: number) {
    this.userService.editUser(this.user, idUser).subscribe(user => {
      this.user = user;
      Swal.fire('Updated Profile')
      setTimeout(function () {
        location.reload();
      }, 3000);

    })
  }
}
