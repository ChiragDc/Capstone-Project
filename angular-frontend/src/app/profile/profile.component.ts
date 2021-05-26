import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import Swal from 'sweetalert2';
import { AddCategoryComponent } from '../admin/add-category/add-category.component';
import { AddProductComponent } from '../admin/add-product/add-product.component';
import { AddTagComponent } from '../admin/add-tag/add-tag.component';
import { OrderhistoryComponent } from '../admin/orderhistory/orderhistory.component';

import { User, Category, Cart } from '../Model';
import { CartService } from '../service/cart.service';
import { CategoryService } from '../service/category.service';
import { UserService } from '../service/user.service';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;
  categories!: Category[];
  carts!: Cart[];
  id!: User;
  cartLength = 0;

  constructor(private userService: UserService, private route: ActivatedRoute, private dialog: MatDialog,
    private categoryService: CategoryService, private cartService: CartService, private router: Router,
    public adialog: NgDialogAnimationService) {

    this.route.params.subscribe(
      params => {
        this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
          this.user = user;
          this.cartService.findCartsForUser(this.user.id).subscribe(carts => {
            this.carts = carts;
            this.cartLength = this.carts.length;
          });
          this.categoryService.findAllCategories().subscribe(categories => {
            this.categories = categories;
          })
        })
      }
    )
  }

  ngOnInit(): void {

  }
  logout(id: number) {
    window.location.replace("/dashboard");
    this.userService.signOut();
    this.userService.setItem('visit', '')
  }
  addCategory(idUser: number) {
    this.dialog.open(AddCategoryComponent, {
      data: { idUser }
    })
  }

  addProduct(idCategory: any) {
    this.dialog.open(AddProductComponent, {
      data: { idCategory }
    })
  }

  addTag() {
    this.dialog.open(AddTagComponent);
  }
  updateProfile(id: number) {
    this.dialog.open(UpdateProfileComponent);
  }
  deleteCart(idPro: any, idUser: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes,Delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.removeFromCart(idPro, idUser).subscribe(() => {
          setTimeout(function () {
            window.location.replace(`/profile/${idUser}`)
          }, 2000);


        })
        Swal.fire(
          'Deleted!',
          'Item has been Removed',
          'success'
        )
      }
    })


    // if (confirm('Are you sure')) {
      
    //   this.cartService.removeFromCart(idPro, idUser).subscribe(() => {
    //     window.location.reload();
    //   })
    // }
  }
  sampleProduct(name: string) {
    this.router.navigate(['/buy/product/', name]);
  }
  openOrders() {

    let dialogRef = this.adialog.open(OrderhistoryComponent, {
      width: window.innerWidth + 'px',
      height: window.innerHeight + 'px',
      maxWidth: window.innerWidth + 'px',
      maxHeight: window.innerHeight + 'px',
      hasBackdrop: true,
      animation: { to: "bottom" }


    });
  }




}
