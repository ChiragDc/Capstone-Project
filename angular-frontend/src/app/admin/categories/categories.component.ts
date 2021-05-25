import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Category, Product, Tag, User } from 'src/app/Model';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { TagService } from 'src/app/service/tag.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { AddTagToProductComponent } from '../add-tag-to-product/add-tag-to-product.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  idCategory!: number;
  products!: Product[];
  category: Category = {} as Category;
  user: User = {} as User;
  panelOpenState!: boolean;
  tags!: Tag[];


  constructor(private productService: ProductService, private categoryService: CategoryService,
    private route: ActivatedRoute, private dialog: MatDialog, private userService: UserService,
    private tagService: TagService) {
    this.route.params.subscribe(
      params => {
        this.idCategory = this.route.snapshot.params.idCategory;
        this.categoryService.findCategoryById(this.idCategory).subscribe(category => {
          this.category = category;
          this.productService.findProductsForCategory(this.idCategory).subscribe(products => {
            this.products = products;
          });
        })
        this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
          this.user = user;
        })

      }
    )
  }

  ngOnInit(): void {
  }

  addTag(idProduct: any) {
    this.dialog.open(AddTagToProductComponent, {
      data: { idProduct }
    })
  }
  deleteTag(idProduct: any) {

  }
  showTags(idProduct: number) {
    this.tagService.findTagsForProduct(idProduct).subscribe(tags => {
      this.tags = tags;
    })
  }
  deleteCategory(idCategory: number, idUser: any) {

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
        this.categoryService.deleteCategory(idCategory).subscribe(() => {
          setTimeout(function () {
            window.location.replace(`/profile/${idUser}`)
          }, 3000);


        })
        Swal.fire(
          'Deleted!',
          'Category has been Removed',
          'success'
        )
      }
    })

    // this.categoryService.deleteCategory(idCategory).subscribe(() => {
    //   window.location.replace(`/profile/${idUser}`)
    // })

  }
  editCategory(idCategory: any) {
    this.dialog.open(AddCategoryComponent, {
      data: { idCategory }
    })
  }
  deleteProduct(idProduct: number, idUser: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(idProduct).subscribe(() => {
          setTimeout(function () {
            window.location.replace(`/profile/${idUser}`);
          }, 3000);


        })
        Swal.fire(
          'Deleted!',
          'Product has been Removed',
          'success'
        )
      }
    })




  }


  editProduct(idProduct: any) {
    this.dialog.open(AddProductComponent, {
      data: { idProduct }
    })
  }

}
