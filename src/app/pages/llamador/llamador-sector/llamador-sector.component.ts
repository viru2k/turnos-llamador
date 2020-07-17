import { Component, OnInit } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { TurnoService } from '../../../services/turno.service';

@Component({
  selector: 'app-llamador-sector',
  templateUrl: './llamador-sector.component.html',
  styleUrls: ['./llamador-sector.component.scss']
})
export class LlamadorSectorComponent implements OnInit {

  selectedItem: any;
  loading;
  constructor(private turnoService: TurnoService) { }

  ngOnInit() {
  
  }

   

  accion(evt: any, overlaypanel: OverlayPanel) {

    console.log(event);
    this.selectedItem = event;
    overlaypanel.toggle(evt);
  }



  

obtenerDatosPuestos() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  console.log(userData);
  
  this.turnoService.getProximoNumero(userData.id)
    .subscribe(resp => {
    console.log(resp);
    localStorage.removeItem('turnoDato');
    localStorage.setItem('turnoDato', JSON.stringify(resp));
    this.loading = false;
      
    },
    error => {
        console.log(error.message);
        console.log(error.status);
        localStorage.removeItem('error');
        localStorage.setItem('error', JSON.stringify(error));
      //  this.loading_mensaje = '';

     });
} catch (error) {
}
}
