import { AppComponent } from "./app.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import {} from "jasmine"

describe("AppComponent", () => {

    describe("App", () => {
        beforeEach(() => {
            TestBed.configureTestingModule({ declarations: [AppComponent] });
        });
        it("should work", () => {
            let fixture = TestBed.createComponent(AppComponent);
            expect(fixture.componentInstance instanceof AppComponent).toBe(true, "should create AppComponent");
        });
    });
});
