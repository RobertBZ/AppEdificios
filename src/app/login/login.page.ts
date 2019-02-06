import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Events, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from "firebase";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authen : AngularFireAuth, public afAuth: AngularFireAuth,private router: Router,public loadingController: LoadingController,
    public events: Events) { }

  ngOnInit() { }
  
}
