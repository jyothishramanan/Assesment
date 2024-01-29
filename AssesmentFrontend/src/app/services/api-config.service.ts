import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  public apiStatusIndicator = new BehaviorSubject<boolean>(false);
  constructor() {}
}
