import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LCCoreModule } from 'app/core';
import { LCSharedModule } from 'app/shared';
import { CardBoardComponent } from '..';
import { routes as mainRoutes } from './main.routes';

@NgModule({
  imports: [LCCoreModule, LCSharedModule, RouterModule.forChild(mainRoutes)],
  exports: [],
  declarations: [CardBoardComponent],
  providers: [],
})
export class MainPagesModule {}
