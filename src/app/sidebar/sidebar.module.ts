import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "@angular/material";
import { SidebarComponent } from "./sidebar.component";

@NgModule({
    imports:
        [
            BrowserModule,
            MaterialModule.forRoot()
        ],
  declarations: [ SidebarComponent ],
  bootstrap:    [ SidebarComponent ]
})

export class SidebarModule { }