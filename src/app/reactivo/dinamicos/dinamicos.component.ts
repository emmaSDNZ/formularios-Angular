import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ["Metal Gear", Validators.required],
      ["segundo Valor", Validators.required]
    ], Validators.required )
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido( campo:string){
    return this.miFormulario.controls[campo].errors 
           && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){

    if(this.nuevoFavorito.invalid) return;
    
    //this.favoritosArr.push( new FormControl (this.nuevoFavorito.value, Validators.required) )
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required))

    this.nuevoFavorito.reset()
  }

  guardar(){

    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
    }
    console.log(this.miFormulario.value)
  }

  borrar(i: number){
    this.favoritosArr.removeAt(i)
  }

}
