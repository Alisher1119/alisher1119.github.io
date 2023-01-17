import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _open: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  set open(state: boolean) {
    this._open.next(state);
  }

  get open(): Observable<boolean> {
    return this._open.asObservable();
  }
}
