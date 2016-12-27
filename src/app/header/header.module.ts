import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "@angular/material";
import { HeaderComponent } from "./header.component";

@NgModule({
    imports:
        [
            BrowserModule,
            //MaterialModule.forRoot()
        ],
  declarations: [ HeaderComponent ],
  bootstrap:    [ HeaderComponent ]
})
export class HeaderModule { }