import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Hello world how are you?';
  userObject= {
    name: 'Kroy',
    age: '26',
    id: 0
  }

  newDate = new Date();

  constructor(private httpService: HttpService) {}
  handleEvent(event: any){
    console.log(event);
    // this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    // .subscribe((response) => {
    //   console.log('hello there')
    //   //this.jsonValue=response
    //})
  }
}
