import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',

})

export class BasicosComponent implements OnInit {
  //con esto declaeo 1 formulario y control que se llama nombre
/* 
  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4081TT'),
    precio: new FormControl(1000),
    existencia: new FormControl(5)
    
  }); */

  miFormulario: FormGroup = this.fb.group({

    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    precio: [ , [ Validators.min(0), Validators.required] ],
    existencia: [ , [ Validators.min(0), Validators.required] ],
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Mi formulario Emanuel",
      precio: 16551,
      
    })
  }

  campoNoEsValido( campo:string){
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched
  }
  
  guardar(){
    console.log(this.miFormulario.value)

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    this.miFormulario.reset();
  }

}
