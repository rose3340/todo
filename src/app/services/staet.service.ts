import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaetService {
  searchSubject:BehaviorSubject<string>= new BehaviorSubject<string>("");
  constructor() { }
}
