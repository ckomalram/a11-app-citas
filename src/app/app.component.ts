import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas: any[]=[];

  agregaCitas(cita: any): void{
      // console.log(cita);
      this.listCitas.push(cita);
      console.log('Lista Citas - Padre: ' , this.listCitas);
  }

  eliminarCita(index: number):void{
    this.listCitas.splice(index,1);
  }
}
