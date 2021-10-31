import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({//class'ı servis yapan yapı
  providedIn: 'root' //global bir servis, lokal değil
})
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message);
  }
}
