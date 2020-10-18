import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsModule } from './collections/collections.module';
import { HomeComponent } from './home/home.component';
import { ModsModule } from './mods/mods.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    CollectionsModule,
    ModsModule,
    ViewsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
