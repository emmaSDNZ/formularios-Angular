import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',

})
export class SwitchesComponent  {

  persona = {
    genero: "",
    notificaciones: false
  }
  
  terminosCondiciones:boolean = false
}
