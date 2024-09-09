import { Injectable } from "@angular/core";

export interface User {
    email: string;
    username: string;
    password: string;  
}

@Injectable({
    providedIn: 'root'
})

export class SessionManager{
    
    private users: User[] = [];
    private currentUser: User | null = null;
  
    constructor() {
      this.loadUsers();
    }
  
    private loadUsers(): void {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      }
    }
  
    // REGISTRO 

    register(email: string, username: string, password: string): boolean {
      if (this.users.some(user => user.email === email)) {
        console.log('Email ya existe');
        return false;
      }
      if (this.users.some(user => user.username === username)) {
        console.log('Nombre de usuario ya existe');
        return false;
      }
      
      const newUser: User = { email, username, password };
      this.users.push(newUser);
      this.saveUsers();
      return true;
    }
  
    // LOGIN

    login(identifier: string, password: string): boolean {
        if (!identifier || !password) {
          console.log('Login fallido: Identificador o contraseña vacíos');
          return false;
        }
    
        const user = this.users.find(u => 
          (u.username === identifier || u.email === identifier) && u.password === password
        );
        
        if (user) {
          this.currentUser = user;
          console.log('Login exitoso para:', identifier);
          return true;
        }
    
        console.log('Login fallido: Credenciales incorrectas para:', identifier);
        return false;
    }
  
    logout(): void {
      this.currentUser = null;
    }
  
    getCurrentUser(): User | null {
      return this.currentUser;
    }
  
    public saveUsers(): void {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    
}