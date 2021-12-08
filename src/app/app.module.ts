import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MarketViewComponent } from './pages/market-view/market-view.component';
import { OrderDepthComponent } from './pages/order-depth/order-depth.component';
import { MarketTradesComponent } from './pages/market-trades/market-trades.component';
import { OrderEntryComponent } from './pages/order-entry/order-entry.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { MyTradesComponent } from './pages/my-trades/my-trades.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { AngularSplitModule } from 'angular-split';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketViewComponent,
    OrderDepthComponent,
    MarketTradesComponent,
    OrderEntryComponent,
    MyOrdersComponent,
    MyTradesComponent,
    NavigationComponent,
    HeaderComponent,
    PageLayoutComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularSplitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
