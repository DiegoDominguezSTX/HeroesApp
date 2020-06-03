import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  hero = new HeroeModel();

  constructor() { }

  ngOnInit(): void {
  }

  guardarHeroe(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario invalido');
      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }

    console.log(form);
    console.log(this.hero);
    form.reset();
  }

}
