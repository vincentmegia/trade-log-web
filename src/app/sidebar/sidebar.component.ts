import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { MdSidenav } from "@angular/material";

@Component({
    selector: "tl-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: [
         "./sidebar.component.scss",
    ]
})

export class SidebarComponent {
    @ViewChild(MdSidenav) sidebar: MdSidenav

    /**
     * 
     */
    toggle() {
        console.log("sidebar component is opening.");
        this.sidebar.toggle();
    }
}
