import { Directive,Input  } from '@angular/core'
import { FormControl, Validator,NG_VALIDATORS } from '@angular/forms'
//DIRECTIVAS, necesita su selector, tamb se las llamana en el modulo

//selector: le dice al componente que debe utilizar la directiva personalizada
//se lo asocia a un ngModel

@Directive({
   selector: '[customMin][ngModel]',
   providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
   }] 
})

//implements validator: ES UN OBJETO DE ANGULAR QUE ME PERMITE HACER VALIDACIONES

export class CustomMinDirective implements Validator{

    @Input() minimo!: number;

    constructor(){
        console.log('directiva', this.minimo);
    }

    //el control es el elemento dle input
    validate( control: FormControl){
        const inputValue = control.value;
        return (inputValue < this.minimo) 
                ? { 'customMin': true }
                : null 
    
    }
}