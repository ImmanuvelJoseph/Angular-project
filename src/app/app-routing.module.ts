import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { UserloansComponent } from "./userloans/userloans.component";
const routes:Routes=[
  {path:'loan',component: UserloansComponent},
  {path:'home',component: HomeComponent},
  {path:'product',component:ProductComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }