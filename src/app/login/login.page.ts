import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManager } from 'src/managers/SessionManager';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private sessionManager : SessionManager) { }

    user: string = '';
    password: string = '';

    ngOnInit() {
    }

    onLoginButtonPressed(){
      if (this.sessionManager.performLogin(this.user, this.password)){
        this.router.navigate(['/tab'])
      } else {
        alert('El usuario o contraseña ingresada son invalidas.')
      }
    }

    onRegisterButtonPressed(){
      this.router.navigate(['/register'])
    }

}
