import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message?:string;
  login(){
    this.authService.login();
    this.setMessage();
    this.authService.isAuthenticated()
    .then(isAuthenticated=>{
      if(isAuthenticated){
        let redirectUrl = this.authService.redirectUrl ?  this.router.parseUrl(this.authService.redirectUrl): '/admin';
        this.router.navigateByUrl(redirectUrl);
      }
    })
  }

  logout(){
    this.authService.logout();
    this.setMessage();
  }

  setMessage(){
    this.message = 'logged ';
    this.authService.isAuthenticated()
      .then((isAuthenticated:any)=>{
        if(isAuthenticated){
          this.message+="id";
        }else{
          this.message+="out";
        }
      })
  }

  constructor(
    public authService:AuthService,
    public router:Router
  ) {
    this.setMessage();
   }

  ngOnInit(): void {
  }




}



