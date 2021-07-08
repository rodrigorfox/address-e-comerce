import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit {

  enderecoForm: FormGroup = this.fb.group({
    cep: ['', Validators.required],
    rua: ['', Validators.required],
    numero: ['', Validators.required],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    estados: ['', Validators.required],
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }
  imprimir(){
    console.log(this.enderecoForm.value)
  }
  
}
