import { Component, OnInit } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { TurnoService } from '../../../services/turno.service';
import { LlamadorColaComponent } from './../llamador-cola/llamador-cola.component';
import { AlertServiceService } from '../../../services/alert-service.service';
import { MessageService, DialogService } from 'primeng/api';

@Component({
  selector: 'app-llamador-sector',
  templateUrl: './llamador-sector.component.html',
  styleUrls: ['./llamador-sector.component.scss']
})
export class LlamadorSectorComponent implements OnInit {

  selectedItem: any;
  loading;
  constructor(private turnoService: TurnoService, private alertServiceService: AlertServiceService,  public dialogService: DialogService, private messageService: MessageService) { }

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


listadoAtendidos(elemento: any) {
  console.log(elemento);  
  const data: any = elemento;
  const ref = this.dialogService.open(LlamadorColaComponent, {
  data,
   header: 'Números',
   width: '70%',
   height: '90%'
  });

  // tslint:disable-next-line: no-shadowed-variable
  ref.onClose.subscribe((LlamadorColaComponent: any) => {
    if (LlamadorColaComponent) {
     // this.loadlist();
    }

  });

}

}
