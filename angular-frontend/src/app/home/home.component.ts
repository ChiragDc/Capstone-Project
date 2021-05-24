import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login/login.component';
import { User, Category } from '../Model';
import { RegisterComponent } from '../register/register.component';
import { CategoryService } from '../service/category.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = {} as User;
  categories!: Category[];

  constructor(public dialog: MatDialog, private userService: UserService, private categoryService: CategoryService) {
    this.userService.findByUsername(userService.getUsername()).subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  login() {
    this.dialog.open(LoginComponent);
  }
  register() {
    this.dialog.open(RegisterComponent);
  }
}
