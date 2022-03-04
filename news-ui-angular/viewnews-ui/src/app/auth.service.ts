import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  role: any;
  userId: any;
  language: any;
  userData: any;


  constructor() { }



  getUserId() {
    return this.userId;
  }

  setUserId(userId: any) {
    this.userId = userId;
  }




  login(authenticationData: any) {
    console.log('"Inside auth service login()"');
    sessionStorage.clear();
    this.loggedIn = true;
    sessionStorage.setItem('currentUser', JSON.stringify(authenticationData));

  }

  logout() {
    console.log("Inside auth service logout()");
    this.loggedIn = false;
    this.role = null;
    this.userId = null;
  }

  getRole() {
    return this.role;
  }

  setRole(role: string) {
    this.role = role;

  }


  getLanguage() {
    return this.language;
  }

  setLanguage(language: string) {
    this.language = language;
  }
}
