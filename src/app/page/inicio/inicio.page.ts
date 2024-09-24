import { Component, OnInit } from '@angular/core';
import { SessionManager } from 'src/managers/SessionManager';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private sessionManager : SessionManager) { }

  ngOnInit() {
  }

  username: string = this.sessionManager.getUser()?.username || 'Usuario';
  
}
