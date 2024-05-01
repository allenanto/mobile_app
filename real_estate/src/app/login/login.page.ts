import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  loginuser(){
    if (this.username === "slash" && this.password === "slash123") {
      console.log("Login Successul")
      this.router.navigate(['folder/Home']);
    } else {
      console.log("Invalid Credentials")
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
  
  // async loginuser() {
  //   await this.databaseService.addUser("slash","slash123")
  //   const isValidUser = await this.databaseService.validateUser(this.username, this.password);
  //   if (isValidUser) {
  //     console.log("Login Successful");
  //     this.router.navigate(['folder/Home']);
  //   } else {
  //     console.log("Invalid Credentials");
  //     this.errorMessage = 'Invalid credentials. Please try again.';
  //   }
  // }
}
