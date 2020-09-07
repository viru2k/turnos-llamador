import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { EmptyComponent } from './pages/info/empty/empty.component';
import { NotFoundComponent } from './pages/info/not-found/not-found.component';
import { UsuarioComponent } from './pages/mantenimiento/usuario/usuario.component';
import { NumerosGestionComponent } from './pages/mantenimiento/numeros/numeros-gestion/numeros-gestion.component';
import { SectorComponent } from './pages/mantenimiento/sector/sector.component';
import { ReglasComponent } from './pages/mantenimiento/reglas/reglas.component';
import { LlamadorSectorComponent } from './pages/llamador/llamador-sector/llamador-sector.component';
import { PuestoComponent } from './pages/mantenimiento/puesto/puesto.component';
import { LlamadorColaComponent } from './pages/llamador/llamador-cola/llamador-cola.component';
import { VideoAdministrarComponent } from './pages/pantalla/video-administrar/video-administrar.component';

const routes: Routes = [

{ path: 'inicio', component: EmptyComponent },


/* -------------------------------------------------------------------------- */
/*                                  LLAMADOR                                  */
/* -------------------------------------------------------------------------- */

{ path: 'llamador', component: LlamadorSectorComponent },
{ path: 'usuario', component: UsuarioComponent },
{ path: 'atencion', component: LlamadorColaComponent },

/* -------------------------------------------------------------------------- */
/*                                    VIDEO                                   */
/* -------------------------------------------------------------------------- */

{ path: 'video', component: VideoAdministrarComponent },

/* -------------------------------------------------------------------------- */
/*                                MANTENIMIENTO                               */
/* -------------------------------------------------------------------------- */


{ path: 'usuario', component: UsuarioComponent },
{ path: 'numero', component: NumerosGestionComponent },
{ path: 'sector', component: SectorComponent },
{ path: 'puesto', component: PuestoComponent },
{ path: 'reglas', component: ReglasComponent },


/* -------------------------------------------------------------------------- */
/*                              PAGINAS DEL SITIO                             */
/* -------------------------------------------------------------------------- */

{ path: '404', component: NotFoundComponent },
{ path: '', pathMatch: 'full', redirectTo: 'inicio' },
{ path: '**', pathMatch: 'full', redirectTo: 'inicio' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],

























exports: [RouterModule]
})
export class AppRoutingModule { 

}
