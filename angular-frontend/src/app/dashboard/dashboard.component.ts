import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef} from '@angular/material/dialog';
import { User } from '../Model';
import { OverlayComponent } from '../overlay/overlay.component';
import { UserService } from '../service/user.service';
import { NgDialogAnimationService } from 'ng-dialog-animation';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  user: User = new User();
  flag = true;
  constructor(public dialog:NgDialogAnimationService, private userServiece: UserService,) {

  }


  ngOnInit(): void {
    console.log(this.userServiece.getItem('visit'))
    if(this.userServiece.getItem('visit')==''){
    let dialogRef = this.dialog.open(OverlayComponent, {
      width: window.innerWidth + 'px',
      height: window.innerHeight + 'px',
      maxWidth: window.innerWidth + 'px',
      maxHeight: window.innerHeight + 'px',
      hasBackdrop: true,
      animation:{to:"bottom"}
      

    });}
    this.userServiece.setItem('visit','notfirst')
  }



}
