import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    imports:
        [
            BrowserModule,
            //MaterialModule.forRoot()
        ],
  declarations: [
      AppComponent,
      //HeaderComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }