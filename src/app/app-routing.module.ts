import {NgModule} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import {PolicySearchComponent} from './components/policy-search/policy-search.component';

const routes:Routes=[
    {path:'',redirectTo:'/policy-search',pathMatch:'full'},
    {path:'policy-search',component:PolicySearchComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingcomponents=[PolicySearchComponent]
