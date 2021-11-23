import { NgModule } from '@angular/core';
import { LCCoreModule } from 'app/core';
import { CardEditModeComponent } from './components/card-edit-mode/card-edit-mode.component';
import { CardComponent } from './components/card/card.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';


@NgModule({
    imports: [LCCoreModule, MaterialModule],
    exports: [MaterialModule, CardComponent, CardEditModeComponent, DeleteDialogComponent, ToolbarComponent],
    declarations: [CardComponent, CardEditModeComponent, DeleteDialogComponent, ToolbarComponent],
    providers: [],
})
export class LCSharedModule { }
