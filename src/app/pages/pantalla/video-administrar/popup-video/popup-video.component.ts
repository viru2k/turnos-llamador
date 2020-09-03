import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TurnoService } from './../../../../services/turno.service';
import { AlertServiceService } from './../../../../services/alert-service.service';
import { Multimedia } from './../../../../models/multimedia.model';
import { calendarioIdioma } from './../../../../config/config';
import { ConexionService } from './../../../../services/conexion.service';
import { formatDate } from '@angular/common';
import { FileUpload } from 'primeng/fileupload';


@Component({
  selector: 'app-popup-video',
  templateUrl: './popup-video.component.html',
  styleUrls: ['./popup-video.component.scss']
})
export class PopupVideoComponent implements OnInit {
  @ViewChild('fileInput', {static: false}) fileInput: FileUpload;

  updateDataForm: FormGroup;
  es: any;
  userData: any;
  esNuevo;
  loading;
  tiene_vencimiento = false;

  multimendia: Multimedia = null;
  constructor(public config: DynamicDialogConfig, private turnoService: TurnoService,
    private alertServiceService: AlertServiceService, public ref: DynamicDialogRef, public conexionService: ConexionService) {
      this.updateDataForm = new FormGroup({
        'id': new FormControl(''),
        'archivo_nombre': new FormControl(''),
        'archivo_nombre_original': new FormControl(''),
        'archivo_descripcion': new FormControl('', Validators.required),
        'orden': new FormControl(''),
        'fecha_carga': new FormControl(new Date()),
        'fecha_vencimiento': new FormControl(new Date(2050, 0O0, 0O1)),
        'tiene_vencimiento': new FormControl(''),
  
    });
    }

    ngOnInit() {
      this.es = calendarioIdioma;
      
      this.userData = JSON.parse(localStorage.getItem('userData'));
      console.log(this.config.data);
      if (this.config.data) {
        console.log('es editable');
        this.esNuevo = false;
  
  /* --------------------- marco si es administrador o no --------------------- */
  
       /*  this.updateDataForm.patchValue({id: this.config.data.id});
        this.updateDataForm.patchValue({puesto_nombre: this.config.data.puesto_nombre});
  
  
        console.log(this.updateDataForm); */
      }else{      
        this.esNuevo = true;
        console.log('es nuevo');
      }
    }

    vencimientoStatus(event) {
      console.log(event);
      this.tiene_vencimiento = event.checked;
      
    }
    onUpload(event) {               
        console.log(event.files[0].name);
      //  let selectedReceta = this.listarecetas[0]['label'];
      let _archivo_nombre = this.updateDataForm.value.archivo_nombre;
      let _fecha_carga = formatDate(new Date(this.updateDataForm.value.fecha_carga), 'yyyy-MM-dd HH :mm', 'en');
      let _fecha_creacion = formatDate(new Date(this.updateDataForm.value.fecha_carga), 'yyyy-MM-dd-HH-mm', 'en');
      let fecha_vencimiento = formatDate(new Date(this.updateDataForm.value.fecha_vencimiento), 'yyyy-MM-dd ', 'en');

      this.updateDataForm.patchValue({archivo_nombre: _fecha_creacion+event.files[0].name });
        this.multimendia = new Multimedia('0',this.updateDataForm.value.archivo_nombre, _archivo_nombre,this.updateDataForm.value.archivo_descripcion, '0', _fecha_carga, fecha_vencimiento , this.updateDataForm.value.tiene_vencimiento )
        console.log(this.multimendia);
        
        
        //console.log(this.estudios);
        this.uploadEstudioDatos(this.multimendia);
    }




    uploadEstudioDatos(datos:Multimedia){ 
   /*   this.loading = true; 
   
            try { 
         this.cirugiaService.uploadEstudioDatos(datos)
          .subscribe(resp => {
         // this.elementos = resp;
          console.log(resp);      
          this.throwAlert('success','Se subieron los archivos con éxito','','');
        //  this.formPaciente.patchValue({historia_clinica: resp})
          console.log(this.formPaciente);
          this.loading = false;
          //this.loadList();
          //this.resultSave = true;
          },
          error => { // error path
              console.log(error.message);
              console.log(error.status);
              this.throwAlert('error','error','Error: '+error.status+'  Error al cargar los registros',error.message);
         //     this.resultSave = false;
              this.loading = false;
            });    
      } catch (error) {
        this.throwAlert('error','error','Error: '+error.status+'  Error al cargar los registros',error.message);
      } */
    
    
    }

    guardarDatos() {
      this.fileInput.upload();
    }

  }