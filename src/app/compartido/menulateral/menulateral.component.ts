import { Component, } from '@angular/core';

interface MenuItem {
  text: string;
  ruta: string
}

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }`
  ]
})

export class MenulateralComponent {
  

  templateMenu: MenuItem[] = [
    {
      text: 'Basicos',
      ruta: './template/basicos'
    },
    {
      text: 'Dinamicos',
      ruta: './template/dinamicos'
    },
    {
      text: 'Switches',
      ruta: './template/switches'
    }
  ]


  reactiveMenu: MenuItem[] = [
    {
      text: 'Basicos',
      ruta: './reactivo/basicos'
    },
    {
      text: 'Dinamicos',
      ruta: './reactivo/dinamicos'
    },
    {
      text: 'Switches',
      ruta: './reactivo/switches'
    }
  ]

}
