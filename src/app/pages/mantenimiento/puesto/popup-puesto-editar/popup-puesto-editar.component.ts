import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TurnoService } from './../../../../services/turno.service';
import { AlertServiceService } from './../../../../services/alert-service.service';

@Component({
  selector: 'app-popup-puesto-editar',
  templateUrl: './popup-puesto-editar.component.html',
  styleUrls: ['./popup-puesto-editar.component.scss']
})
export class PopupPuestoEditarComponent implements OnInit {


 
  updateDataForm: FormGroup;
  elementos: any;
  unidades: any;
  unidad: string;
  esNuevo;
  loading;
  selectedItem: any;
  selectedForma: any;
  userData: any;
  esAdministrador;
  editarPassword;

  constructor(public config: DynamicDialogConfig, private turnoService: TurnoService,
              private alertServiceService: AlertServiceService, public ref: DynamicDialogRef) {

    this.updateDataForm = new FormGroup({
      'id': new FormControl(''),
      'puesto_nombre': new FormControl('', Validators.required)

  });
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.config.data);
    if (this.config.data) {
      console.log('es editable');
      this.esNuevo = false;

/* --------------------- marco si es administrador o no --------------------- */

      this.updateDataForm.patchValue({id: this.config.data.id});
      this.updateDataForm.patchValue({puesto_nombre: this.config.data.puesto_nombre});


      console.log(this.updateDataForm);
    }else{      
      this.esNuevo = true;
      console.log('es nuevo');
    }
  }




  guardarDatos() {



    if (this.esNuevo) {
      this.crearPuesto();
    } else {

        this.modificarPuesto();
      }
  }

  crearPuesto() {

    this.loading = true;
    this.updateDataForm.patchValue({name: this.updateDataForm.value.email});
    try {
      this.turnoService.setPuesto(this.updateDataForm.value)
      .subscribe(resp => {
          this.loading = false;
          console.log(resp);
          this.ref.close(resp);
      },
      error => { // error path
        console.log(error);
        this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', '', '500');
     });
} catch (error) {
  this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', '', '500');
}
  }

  modificarPuesto() {
    try {
        this.turnoService.putPuesto(this.updateDataForm.value.id, this.updateDataForm.value )
        .subscribe(resp => {
          this.loading = false;
          console.log(resp);
          this.ref.close(resp);
        },
        error => { // error path
          console.log(error);
          this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', '', '500');
       });
  } catch (error) {
    this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', '', '500');
  }
  }

  }


