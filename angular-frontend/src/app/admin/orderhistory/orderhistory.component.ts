import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderHistory } from 'src/app/Model';
import { OrderhistoryService } from 'src/app/service/orderhistory.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

  orderHistory!:OrderHistory[];
  totalOrder!:number;
  bankName!:string;
  uname!:string;
  dateCreated!:string;
  constructor(private orderHistoryService:OrderhistoryService,public dialogRef: MatDialogRef<OrderhistoryComponent>) { }

  ngOnInit(): void {
    this.getDetais();
  }
  private getDetais(){
    this.orderHistoryService.findAllOrderHistory().subscribe(
      data=>{
        this.orderHistory=data;
      }
    )
  }
  close(){
    this.dialogRef.close();
  }
  headElements = ['Name', 'Total', 'Bank', 'Date'];
}
