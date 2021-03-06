import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, LOCALE_ID } from '@angular/core';

import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LlamadorSectorComponent } from './pages/llamador/llamador-sector/llamador-sector.component';
import { LlamadorColaComponent } from './pages/llamador/llamador-cola/llamador-cola.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* -------------------------------------------------------------------------- */
/*                                  SERVICIOS                                 */
/* -------------------------------------------------------------------------- */

import { PushNotificationService } from './services/push-notification.service';

/* -------------------------------------------------------------------------- */
/*                             PRIME NG LIBRERIAS                             */
/* -------------------------------------------------------------------------- */

import {OrderListModule} from 'primeng/orderlist';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {SpinnerModule} from 'primeng/spinner';
import {ToastModule} from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {ListboxModule} from 'primeng/listbox';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MenuItem, MessageService, DialogService, SelectItem} from 'primeng/api';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelModule} from 'primeng/panel';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {FileUploadModule} from 'primeng/fileupload';


import {ColorPickerModule} from 'primeng/colorpicker';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ServiceWorkerModule } from '@angular/service-worker';




/* -------------------------------------------------------------------------- */
/*                            LIBRERIAS DE TERCEROS                           */
/* -------------------------------------------------------------------------- */

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AutofocusModule } from 'angular-autofocus-fix';
import localeEsAR from '@angular/common/locales/es-AR';
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { ExcelService } from './services/excel.service';

/* -------------------------------------------------------------------------- */
/*                                 COMPONENTES                                */
/* -------------------------------------------------------------------------- */

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { EmptyComponent } from './pages/info/empty/empty.component';
import { NotFoundComponent } from './pages/info/not-found/not-found.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { CustomPreloaderComponent } from './shared/components/custom-preloader/custom-preloader.component';
import { UsuarioEditarComponent } from './pages/mantenimiento/usuario-editar/usuario-editar.component';
import { UsuarioModuloComponent } from './pages/mantenimiento/usuario-modulo/usuario-modulo.component';
import { PopupUsuarioComponent } from './shared/components/popups/popup-usuario/popup-usuario.component';
import { UsuarioComponent } from './pages/mantenimiento/usuario/usuario.component';
import { SectorComponent } from './pages/mantenimiento/sector/sector.component';
import { PopupSectorEditarComponent } from './pages/mantenimiento/sector/popup-sector-editar/popup-sector-editar.component';
import { PopupSectorAsociarPuestoComponent } from './pages/mantenimiento/sector/popup-sector-asociar-puesto/popup-sector-asociar-puesto.component';
import { ReglasComponent } from './pages/mantenimiento/reglas/reglas.component';
import { PopupReglasEditarComponent } from './pages/mantenimiento/reglas/popup-reglas-editar/popup-reglas-editar.component';
import { NumerosGestionComponent } from './pages/mantenimiento/numeros/numeros-gestion/numeros-gestion.component';
import { PopupNumerosGestionEditarComponent } from './pages/mantenimiento/numeros/numeros-gestion/popup-numeros-gestion-editar/popup-numeros-gestion-editar.component';
import { PopupConexionComponent } from './shared/components/popup-conexion/popup-conexion.component';
import { UsuarioSectorComponent } from './pages/mantenimiento/usuario-sector/usuario-sector.component';
import { PuestoComponent } from './pages/mantenimiento/puesto/puesto.component';
import { PopupPuestoEditarComponent } from './pages/mantenimiento/puesto/popup-puesto-editar/popup-puesto-editar.component';
import { PantallaInformativaComponent } from './pages/pantalla/pantalla-informativa/pantalla-informativa.component';
import { VideoAdministrarComponent } from './pages/pantalla/video-administrar/video-administrar.component';
import { PopupVideoComponent } from './pages/pantalla/video-administrar/popup-video/popup-video.component';
import { UsuarioSectorAsociarComponent } from './pages/mantenimiento/usuario-sector-asociar/usuario-sector-asociar.component';
import { PantallaComponent } from './pages/mantenimiento/pantalla/pantalla.component';
import { AnfitrionComponent } from './pages/mantenimiento/anfitrion/anfitrion.component';


@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
    LlamadorSectorComponent,
    LlamadorColaComponent,
    NavbarComponent,
    EmptyComponent,
    NotFoundComponent,
    CustomPreloaderComponent,
    UsuarioComponent,
    UsuarioEditarComponent,
    UsuarioModuloComponent,
    PopupUsuarioComponent,
    SectorComponent,
    PopupSectorEditarComponent,
    PopupSectorAsociarPuestoComponent,
    ReglasComponent,
    PopupReglasEditarComponent,
    NumerosGestionComponent,
    PopupNumerosGestionEditarComponent,
    PopupConexionComponent,
    UsuarioSectorComponent,
    PuestoComponent,
    PopupPuestoEditarComponent,
    PantallaInformativaComponent,
    VideoAdministrarComponent,
    PopupVideoComponent,
    UsuarioSectorAsociarComponent,
    PantallaComponent,
    AnfitrionComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    MultiSelectModule,

    HttpClientModule ,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    DialogModule,
    RadioButtonModule,
    CalendarModule,
    InputMaskModule,
    MenubarModule,
    MenuModule,
    CheckboxModule,
    SpinnerModule,
    ToastModule,
    ListboxModule,
    OverlayPanelModule,
    DynamicDialogModule,
    OrderListModule,
    InputTextareaModule,
    ScrollPanelModule,
    ProgressSpinnerModule,
    InputSwitchModule,
    PanelModule,
    SelectButtonModule,
    ColorPickerModule,
    ToggleButtonModule,
    FileUploadModule,
    AutoCompleteModule,
    PivotViewModule ,
    SweetAlert2Module.forRoot(),
    AutofocusModule,
    //SocketIoModule.forRoot(  (((JSON.parse(localStorage.getItem('conexion'))) !== undefined) ?   { url: 'http://localhost:4444', options: {} }: (JSON.parse(localStorage.getItem('conexion')).conexion))),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
 entryComponents: [
     UsuarioEditarComponent,
     UsuarioModuloComponent,
    PopupUsuarioComponent,
    PopupSectorEditarComponent,
    PopupSectorAsociarPuestoComponent,
    PopupReglasEditarComponent,
    ReglasComponent,
    PopupNumerosGestionEditarComponent,
    PopupConexionComponent,
    UsuarioSectorComponent,
    UsuarioSectorAsociarComponent,
    PopupPuestoEditarComponent,
    PopupVideoComponent,
    ],
  providers: [CurrencyPipe, DecimalPipe,
    PushNotificationService, ExcelService, { provide: LOCALE_ID, useValue: 'es-Ar' },
 {
  provide: HTTP_INTERCEPTORS,
  useFactory: function(injector: Injector) {
      return new JwtInterceptor(injector);
  },
  multi: true,
  deps: [Injector]
},
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
