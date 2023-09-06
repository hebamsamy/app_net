import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { WishlistComponent } from "./Components/wishlist/wishlist.component";
import { ProductDetailsComponent } from "./Components/product-details/product-details.component";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { NotFoundComponent } from "./Components/not-found/not-found.component";
import { UserLayoutComponent } from "./Components/User-layout/User-layout.component";

let routes: Routes = [
    { path: '', redirectTo: "user", pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    {
        path: 'user',component: UserLayoutComponent, children: [
            { path: '', redirectTo: "list", pathMatch: "full" },
            { path: 'list', component: ProductListComponent },
            { path: 'wish', component: WishlistComponent },
            { path: 'details/:id/:name', component: ProductDetailsComponent },
        ]
    },
    {
        path: 'vendor',
        children: []
    },

    { path: "**", component: NotFoundComponent }


]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}