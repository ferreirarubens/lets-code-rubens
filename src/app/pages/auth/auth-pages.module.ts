import { NgModule } from '@angular/core';
import { LCSharedModule } from 'app/shared';
import { LCCoreModule } from 'app/core';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [LCCoreModule, LCSharedModule],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LCAuthPagesModule { }
