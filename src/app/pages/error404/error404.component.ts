import { Component } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styles: ['./error404.component.css']
})
export class Error404Component {

year = new Date().getFullYear();

}
