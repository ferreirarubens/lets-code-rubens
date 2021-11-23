import { Routes } from '@angular/router';
import { CardBoardComponent } from '..';

export const routes: Routes = [
    {
        path: 'tasks',
        component: CardBoardComponent,
        data: {
            pageId: 'tasks'
        }
    }
]