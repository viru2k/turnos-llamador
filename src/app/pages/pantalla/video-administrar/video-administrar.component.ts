import { Component, OnInit } from '@angular/core';
import { TurnoService } from './../../../services/turno.service';
import { AlertServiceService } from './../../../services/alert-service.service';
import { DialogService, MessageService } from 'primeng/api';
import { ConexionService } from '../../../../../../turnos-anfitrion/src/app/services/conexion.service';
import { PopupVideoComponent } from './popup-video/popup-video.component';

@Component({
  selector: 'app-video-administrar',
  templateUrl: './video-administrar.component.html',
  styleUrls: ['./video-administrar.component.scss']
})
export class VideoAdministrarComponent implements OnInit {

  cols: any[];
  columns: any[];
  elementos: any[];
  selecteditems: any;
  loading;

  constructor(
    private turnoService: TurnoService,
    private alertServiceService: AlertServiceService,
    public dialogService: DialogService,
    private messageService: MessageService,
    private conexionService: ConexionService) {
  }


  ngOnInit() {
    this.loadlist();
  }

  loadlist(){

    this.loading = true;
    try {
        this.turnoService.getMultimedia()
        .subscribe(resp => {
            if(resp[0]){
              resp.forEach(element => {
                element.ruta = this.conexionService.getURL_ARCHIVO
              });
              this.elementos = resp;
              console.log(this.elementos);
              this.loading = false;
              console.log(resp);
            }
           
        },
        error => { // error path
            console.log(error);
            this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', '', '500');
         });
    } catch (error) {
      this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', '', '500');
    }
}

guardarOrden() {
  console.log(this.selecteditems);
  console.log(this.elementos);
  let i = 0;
  this.elementos.forEach(element => {
    element.orden = i;
    i ++;
  });
}



buscar(elemento: any) {
  console.log(elemento);  
  const data: any = elemento;
  const ref = this.dialogService.open(PopupVideoComponent, {
  data,
   header: 'Editar archivo multimedia',
   width: '80%',
   height: '90%'
  });

  // tslint:disable-next-line: no-shadowed-variable
  ref.onClose.subscribe((PopupVideoComponent: any) => {
    if (PopupVideoComponent) {
      this.loadlist();
    }

  });

}




nuevo() {

  const data: any = null;
  const ref = this.dialogService.open(PopupVideoComponent, {
  data,
   header: 'Subir archivo multimedia',
   width: '80%',
   height: '90%'
  });

  // tslint:disable-next-line: no-shadowed-variable
  ref.onClose.subscribe((PopupVideoComponent: any) => {
    if (PopupVideoComponent) {
      this.loadlist();
    }
  });

}
}

