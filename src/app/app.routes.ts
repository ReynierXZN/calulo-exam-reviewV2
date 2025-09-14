import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Goods } from './goods/goods';
import { Detail } from './detail/detail';



export const routes: Routes = [

{path: '.', component: Home},
{path: 'Home', component: Home},
{path: 'Goods', component: Goods},
{path: 'detail', component: Detail}




 

];

 



