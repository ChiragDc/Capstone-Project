import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCategoryComponent } from '../admin/add-category/add-category.component';
import { AddProductComponent } from '../admin/add-product/add-product.component';
import { AddTagComponent } from '../admin/add-tag/add-tag.component';
import { LocalStorageService } from '../local-storage';
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
  id!:User;
  cartLength = 0;

  constructor(private userService: UserService, private route: ActivatedRoute, private dialog: MatDialog,
    private categoryService: CategoryService, private cartService: CartService, private router: Router,
    private localStorageService: LocalStorageService) {

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
    this.localStorageService.setItem('visit','')
  }
  addCategory(idUser: number) {
    this.dialog.open(AddCategoryComponent, {
      data: { idUser }
    })
  }

  addProduct(idCategory:any) {
    this.dialog.open(AddProductComponent, {
      data: { idCategory }
    })
  }

  addTag() {
    this.dialog.open(AddTagComponent);
  }
  updateProfile(id:number) {
    this.dialog.open(UpdateProfileComponent);
  }
  deleteCart(idPro:any, idUser:any) {
    if (confirm('Are you sure')) {
      this.cartService.removeFromCart(idPro, idUser).subscribe(() => {
        window.location.reload();
      })
    }
  }
  sampleProduct(name: string) {
    this.router.navigate(['/buy/product/', name]);
  }

}
