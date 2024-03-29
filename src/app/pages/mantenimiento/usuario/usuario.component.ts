import { Component, OnInit } from "@angular/core";
import { AlertServiceService } from "../../../services/alert-service.service";
import { MessageService, DialogService } from "primeng/api";
import { UserService } from "./../../../services/user.service";
import { UsuarioModulo } from "../../../models/user-modulo.model";
import { UsuarioModuloComponent } from "./../usuario-modulo/usuario-modulo.component";
import { UsuarioEditarComponent } from "./../usuario-editar/usuario-editar.component";
import { UsuarioSectorComponent } from "./../usuario-sector/usuario-sector.component";
import { UsuarioSectorAsociarComponent } from "../usuario-sector-asociar/usuario-sector-asociar.component";
import { formatDate, CurrencyPipe } from "@angular/common";
import { ReglasComponent } from "../reglas/reglas.component";
import { calendarioIdioma } from "./../../../config/config";
import { ExcelService } from "../../../services/excel.service";
import { TurnoService } from "../../../services/turno.service";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.scss"],
})
export class UsuarioComponent implements OnInit {
  cols: any[];
  columns: any[];
  elementos: any[];
  selecteditems: any;
  loading;
  fecha: Date;
  _fecha: string;
  fechaDesde: Date;
  _fechaDesde: string;
  fechaHasta: Date;
  _fechaHasta: string;
  es: any;

  constructor(
    private userService: UserService,
    private alertServiceService: AlertServiceService,
    public dialogService: DialogService,
    private messageService: MessageService,
    private excelService: ExcelService,
    private turnoService: TurnoService
  ) {
    this.es = calendarioIdioma;
    this.fechaDesde = new Date();
    this.fechaHasta = new Date();
    this.cols = [
      { field: "nombreyapellido", header: "Nombre y apellido", width: "30%" },
      { field: "email", header: "Usuario", width: "30%" },
      { field: "", header: "Puesto", width: "10%" },
      { field: "", header: "Asociar", width: "10%" },
      { field: "", header: "Reglas", width: "10%" },
      { field: "", header: "Permisos", width: "10%" },
      { field: "", header: "Contraseña", width: "10%" },
      { field: "", header: "Editar", width: "10%" },
    ];
  }

  ngOnInit() {
    console.log("cargando insumo");
    this.loadlist();
  }

  actualizarFechaDesde(event) {
    console.log(event);
    this.fechaDesde = event;
    console.log(new Date(this.fechaDesde));
  }

  actualizarFechaHasta(event) {
    console.log(event);
    this.fechaHasta = event;
    console.log(new Date(this.fechaHasta));
  }

  exportarExcel() {
    this._fechaDesde = formatDate(
      new Date(this.fechaDesde),
      "yyyy-MM-dd",
      "en"
    );
    this._fechaHasta = formatDate(
      new Date(this.fechaHasta),
      "yyyy-MM-dd",
      "en"
    );
    this.loading = true;
    try {
      this.turnoService
        .getListadoAtencionByDates(this._fechaDesde, this._fechaHasta)
        .subscribe(
          (resp) => {
            this.elementos = resp;
            console.log(this.elementos);
            this.loading = false;
            console.log(resp);

            this.excelService.exportAsExcelFile(
              resp,
              "listado_deudores_al_" + this._fecha
            );
          },
          (error) => {
            // error path
            console.log(error);
            this.alertServiceService.throwAlert(
              "error",
              "Error: " + error.status + "  Error al cargar los registros",
              "",
              "500"
            );
          }
        );
    } catch (error) {
      this.alertServiceService.throwAlert(
        "error",
        "Error: " + error.status + "  Error al cargar los registros",
        "",
        "500"
      );
    }
  }

  loadlist() {
    this.loading = true;
    try {
      this.userService.getUsers().subscribe(
        (resp) => {
          this.elementos = resp;
          console.log(this.elementos);
          this.loading = false;
          console.log(resp);
        },
        (error) => {
          // error path
          console.log(error);
          this.alertServiceService.throwAlert(
            "error",
            "Error: " + error.status + "  Error al cargar los registros",
            "",
            "500"
          );
        }
      );
    } catch (error) {
      this.alertServiceService.throwAlert(
        "error",
        "Error: " + error.status + "  Error al cargar los registros",
        "",
        "500"
      );
    }
  }

  buscar(elemento: any) {
    console.log(elemento);
    elemento["editaPassword"] = "NO";
    const data: any = elemento;
    const ref = this.dialogService.open(UsuarioEditarComponent, {
      data,
      header: "Editar usuario",
      width: "50%",
      height: "90%",
    });

    // tslint:disable-next-line: no-shadowed-variable
    ref.onClose.subscribe((UsuarioEditarComponent: any) => {
      if (UsuarioEditarComponent) {
        this.loadlist();
      }
    });
  }

  editarPassword(elemento: any) {
    console.log(elemento);
    elemento["editaPassword"] = "SI";
    const data: any = elemento;
    const ref = this.dialogService.open(UsuarioEditarComponent, {
      data,
      header: "Editar usuario",
      width: "50%",
      height: "90%",
    });

    // tslint:disable-next-line: no-shadowed-variable
    ref.onClose.subscribe((UsuarioEditarComponent: any) => {
      if (UsuarioEditarComponent) {
        this.loadlist();
      }
    });
  }

  editarPermiso(elemento: any) {
    console.log(elemento);
    const data: any = elemento;
    const ref = this.dialogService.open(UsuarioModuloComponent, {
      data,
      header: "Editar módulo usuario",
      width: "50%",
      height: "60%",
    });

    // tslint:disable-next-line: no-shadowed-variable
    ref.onClose.subscribe((UsuarioModulo: any) => {
      if (UsuarioModulo) {
        this.loadlist();
      }
    });
  }

  editarSector(elemento: any) {
    console.log(elemento);
    const data: any = elemento;
    const ref = this.dialogService.open(UsuarioSectorComponent, {
      data,
      header: "Editar sector usuario",
      width: "50%",
      height: "60%",
    });

    // tslint:disable-next-line: no-shadowed-variable
    ref.onClose.subscribe((UsuarioSectorComponent: any) => {
      if (UsuarioSectorComponent) {
        this.loadlist();
      }
    });
  }

  editarSectorAsociacion(elemento: any) {
    console.log(elemento);
    const data: any = elemento;
    const ref = this.dialogService.open(UsuarioSectorAsociarComponent, {
      data,
      header: "Editar asociación sector usuario",
      width: "50%",
      height: "60%",
    });

    // tslint:disable-next-line: no-shadowed-variable
    ref.onClose.subscribe((UsuarioSectorAsociarComponent: any) => {
      if (UsuarioSectorAsociarComponent) {
        this.loadlist();
      }
    });
  }

  editarReglas(elemento: any) {
    console.log(elemento);
    const data: any = elemento;
    const ref = this.dialogService.open(ReglasComponent, {
      data,
      header: "Editar reglas",
      width: "75%",
      height: "60%",
    });

    // tslint:disable-next-line: no-shadowed-variable
    ref.onClose.subscribe((ReglasComponent: any) => {
      if (ReglasComponent) {
        this.loadlist();
      }
    });
  }

  nuevo() {
    const data: any = null;
    const ref = this.dialogService.open(UsuarioEditarComponent, {
      data,
      header: "Crear usuario",
      width: "50%",
      height: "90%",
    });

    // tslint:disable-next-line: no-shadowed-variable
    ref.onClose.subscribe((UsuarioEditarComponent: any) => {
      if (UsuarioEditarComponent) {
        this.loadlist();
      }
    });
  }
}
