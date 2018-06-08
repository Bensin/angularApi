import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
}
