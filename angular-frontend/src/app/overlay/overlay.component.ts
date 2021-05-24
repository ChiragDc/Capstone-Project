import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { HomeComponent } from '../home/home.component';
import { NgDialogAnimationService } from "ng-dialog-animation";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  
})
export class OverlayComponent implements OnInit {

  

  constructor( public dialogRef: MatDialogRef<OverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      dialogRef.afterOpened().subscribe(_=>{
        setTimeout(()=>{
          dialogRef.close();
        },3000)
      })
     }
  
  ngOnInit(): void {
  }
  goHome(): void {
    
  }
  
  onNoClick(){
    this.dialogRef.close();
  }
}
