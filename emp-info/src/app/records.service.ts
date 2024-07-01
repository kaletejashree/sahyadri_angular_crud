import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  //we create array
  info1:string[]=["tejashree",'E23','ab@.net']
  info2:string[]=["tej",'B523','cd@.net']
  info3:string[]=["shree",'A213','id@.net']
  
  //create method

  getinfo1():string[]{
    return this.info1;
  }

  getinfo2():string[]{
    return this.info2;
  }

  getinfo3():string[]{
    return this.info3;
  }
  constructor() { }
}
