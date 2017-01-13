import { Component, ViewEncapsulation, Input } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: "tl-header",
    templateUrl: "./header.component.html",
    styleUrls: [
         "./header.component.scss",
    ]
})

export class HeaderComponent { 
    @Input()
    sidebar: SidebarComponent;

    /**
     * 
     */
    onListClick(){
        console.log("header component is opening the sidebar.");
        this.sidebar.toggle();
    }
}
