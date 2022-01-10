import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {

  @Input() listadoCitas: any[];
  @Output() deleteCita = new EventEmitter<number>();

  constructor() {
    this.listadoCitas = [];
   }

  ngOnInit(): void {
  }

  eliminarCita(i: number): void{
      this.deleteCita.emit(i);
  }

}
