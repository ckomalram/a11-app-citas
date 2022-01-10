import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-citas',
  templateUrl: './agregar-citas.component.html',
  styleUrls: ['./agregar-citas.component.css']
})
export class AgregarCitasComponent implements OnInit {
  nombre: string = '';
  fecha: string = '';
  hora: string = '';
  sintomas: string = '';

  formError = false;
  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita():void{
    if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == ''  ) {
        this.formError= true;
        return;
    }
    this.formError = false;

    const cita = {
      nombre:this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    };
    console.log(cita);
    this.nuevaCita.emit(cita);
    //#1 logica pasar a componente padre las citas..

    //fin logica #1
    this.resetForm();

  }

  resetForm(){
    this.nombre='';
    this.fecha='';
    this.hora='';
    this.sintomas='';
  }

}
