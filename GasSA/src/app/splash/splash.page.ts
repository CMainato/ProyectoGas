import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  //redirigir el splash
  constructor(public router: Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('register');
    },2000);
  }
  ngOnInit() {
  }

}
