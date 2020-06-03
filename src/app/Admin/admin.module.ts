import { AuthGuard } from './auth.guard';
import { OrderTableComponent } from './orderTable.component';
import { ProductEditorComponent } from './productEditor.component';
import { ProductTableComponent } from './productTable.component';

import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let routing = RouterModule.forChild([
        { path: 'auth', component: AuthComponent } ,
        { path: 'main', component: AdminComponent, 
            children:[
                { path: 'products/:mode/:id',   component:ProductEditorComponent},
                { path: 'products/:mode',       component:ProductEditorComponent},
                { path: 'products',             component:ProductTableComponent},
                { path: 'orders',               component:OrderTableComponent},
                { path: '**',                   redirectTo: 'products' }
            ]
        },
        { path: '**', redirectTo: 'auth'}
    ]);

@NgModule ({
    imports: [CommonModule, routing, FormsModule],
    declarations: [AuthComponent, AdminComponent, ProductEditorComponent, ProductTableComponent, OrderTableComponent]
})

export class AdminModule {

}