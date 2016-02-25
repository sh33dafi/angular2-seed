import "reflect-metadata";
import chai = require("chai");
import {AppComponent} from "../../src/app/AppComponent";

describe("AppComponent Test", () => {

    let appComponent;

    beforeEach(() => {
        appComponent = new AppComponent();
    });

    describe("When initialized", () => {
        it("should have property hello", () => {
            chai.expect(appComponent.hello).to.equal("This is the app component");
        });
    });

});
