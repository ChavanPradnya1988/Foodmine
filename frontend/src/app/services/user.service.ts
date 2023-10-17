import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User>;
  constructor() {
    this.userObservable = this.userSubject.asObservable();
  }

  ngOnInit(): void {}
}
