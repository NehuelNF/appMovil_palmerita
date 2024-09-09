import { Component, OnInit } from '@angular/core';
import { SessionManager } from 'src/managers/SessionManager';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = '';
  username: string = '';
  password: string = '';

  constructor(private sessionManager: SessionManager, private router: Router) { }

  ngOnInit() {
  }

  onRegisterButtonPressed() {
    if (this.sessionManager.register(this.email, this.username, this.password)) {
      // Registro exitoso, redirigir al login
      this.router.navigate(['/login']);
    } else {
      // Mostrar mensaje de error
      alert('Error en el registro. El email o nombre de usuario ya existe.');
    }
  }

}
