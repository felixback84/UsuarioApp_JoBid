import { NgModule } from '@angular/core';
import { OrdenarPipe } from './ordenar/ordenar';
import { RemoverPipe } from './remover/remover';
@NgModule({
	declarations: [OrdenarPipe,
    RemoverPipe],
	imports: [],
	exports: [OrdenarPipe,
    RemoverPipe]
})
export class PipesModule {}
