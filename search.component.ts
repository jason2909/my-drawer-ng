import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticas.service";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    viewProviders: [NoticiasService]

})
export class SearchComponent implements OnInit {

    constructor(private noticias: 'noticiasservice') {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        
        this.noticias.agregar("hola!");
        this.noticias.agregar("hola!2");
        this.noticias.agregar("hola!3");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
