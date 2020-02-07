import { Injectable } from '@angular/core';
// import {} from 
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getItem(key) {
    return localStorage.getItem(key);
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  getObject(key) {
    let item = localStorage.getItem(key);
    return item != null ? JSON.parse(item) : null;
  }

  setObject(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }
}
