import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Bank, BANKS, OrderHistory, ProductOrders, User } from 'src/app/Model';
import { OrderService } from 'src/app/service/order.service';
import { OrderhistoryService } from 'src/app/service/orderhistory.service';
import { UserService } from 'src/app/service/user.service';
import { UpdateProfileComponent } from 'src/app/update-profile/update-profile.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: ProductOrders;
  total!: number;
  paid = false;
  sub!: Subscription;
  user: User = new User();
  // orderHistory:OrderHistory=new OrderHistory();
  hideUpdateMessage = true;
  id!: number;
  name!: string
  username!: string;
  email!: string;
  password!: string;
  errorMessage!: string;
  hideDiv = true;
  newDate!: Date;
  hideItem!: boolean;
  bankList: Bank[] = BANKS;

  bname!: string;
  burl!: string;
  selectedOption!: string;
  printedOption!: string;


  bankName!: string;
  dateCreated!: Date;
  uname!: string;
  orderTotal!: number;
  
  constructor(private orderService: OrderService, private userService: UserService, private dialog: MatDialog
    , private orderHistoryService: OrderhistoryService,
    ) {
    this.orders = this.orderService.ProductOrders;
    
  }

  ngOnInit() {
    this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;
     
    })
    // this.sub = this.orderService.OrdersChanged.subscribe(() => {
    //   this.orders = this.orderService.ProductOrders;
    // });
    this.loadTotal();
    this.newDate = new Date();

  }
 
  orderHistory: OrderHistory = {
    uname: this.user.username,
    bankName: this.bname,
    dateCreated:"",
    orderTotal: this.total
  };

  pay() {
    console.log(this.bname, 'here name');

    let timerInterval: NodeJS.Timeout
    Swal.fire({
      title: 'Placing Order...!',
      html: 'Please Wait',
      timer: 2500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer()

        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      Swal.fire({
        title: 'Done',
        html: '<p>Thank you for Shopping With us</p>',
        imageUrl: this.selectedOption,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
     
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')

        this.paid = true;
        this.hideDiv = false;
        
        console.log('check start')
        
        this.orderHistory.uname=this.user.username;
        this.orderHistory.dateCreated=""+this.newDate.toString();
        this.orderHistory.orderTotal=this.total;
        this.orderHistory.bankName=this.selectedOption;

        console.log(this.orderHistory, this.orderTotal)
        this.orderHistoryService.addOrderHistory(this.orderHistory).subscribe(
          orderHistory => {
            this.orderHistory = this.orderHistory
          }
        )

        console.log(this.total, this.newDate, this.user.username)
      }
    })


  }



  loadTotal() {
    this.sub = this.orderService.TotalChanged.subscribe(() => {
      this.total = this.orderService.Total;
    });
  }

  goToHome() {
    window.location.reload();
  }

  goToUpdateProfile(idUser: any) {
    this.hideUpdateMessage = false;
    this.dialog.open(UpdateProfileComponent, {
      data: { idUser }
    })
  }

}