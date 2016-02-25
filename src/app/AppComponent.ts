import {Component} from "angular2/core";
@Component({
    selector: "my-app",
    template: "<h1>{{hello}}</h1>"
})
export class AppComponent {
    public hello: string = "This is the app component";
}
