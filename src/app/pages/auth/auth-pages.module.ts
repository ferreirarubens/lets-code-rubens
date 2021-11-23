import { NgModule } from '@angular/core';
import { LCCoreModule } from 'app/core';
import { LCSharedModule } from 'app/shared';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [LCCoreModule, LCSharedModule],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LCAuthPagesModule { }
