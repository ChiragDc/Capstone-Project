import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Bank, BANKS, ProductOrders, User } from 'src/app/Model';
import { OrderService } from 'src/app/service/order.service';
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

  constructor(private orderService: OrderService, private userService: UserService, private dialog: MatDialog) {
    this.orders = this.orderService.ProductOrders;
  }

  ngOnInit() {
    this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;

    })
    this.sub = this.orderService.OrdersChanged.subscribe(() => {
      this.orders = this.orderService.ProductOrders;
    });
    this.loadTotal();
    this.newDate = new Date();
  }

  pay() {
    console.log(this.selectedOption);

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
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')

        this.paid = true;
        this.hideDiv = false;
        this.orderService.saveOrder(this.orders).subscribe();
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