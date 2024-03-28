import { Routes } from '@angular/router';
import { MyDayComponent } from './component/Pages/my-day/my-day.component';
import { ImportantComponent } from './component/Pages/important/important.component';
import { CompletedComponent } from './component/Pages/completed/completed.component';
import { GroceryiComponent } from './component/Pages/groceryi/groceryi.component';

export const routes: Routes = [

    {
        path:"",
        component:MyDayComponent
    },
    {
        path:"Important",
        component:ImportantComponent
    },
    {
        path:"Completed",
        component:CompletedComponent
    },
    {
        path:"Grocery",
        component:GroceryiComponent
    }

];
