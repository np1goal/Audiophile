import { NgModule, Component, ComponentDecorator } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { HeadphonesComponent } from './pages/headphones/headphones.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { EarphonesComponent } from './pages/earphones/earphones.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'earphones', component: EarphonesComponent },
  { path: 'headphones', component: HeadphonesComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents: any = [ NavigationBarComponent, ProductsListComponent, AboutComponent,
                                FooterComponent, CartComponent, CheckoutComponent,
                                HomeComponent, HeadphonesComponent, SpeakersComponent,
                                EarphonesComponent, ProductComponent ]