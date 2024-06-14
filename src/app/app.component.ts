import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppointmentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


//flow of operations
//when you create a component, you put the content in the ts file and bind it to the html, then you make sure the content in ts file is exportable. it is then exported to the app.component.ts file, where the overall AppComponent class(containing eveyrhting about the web app) is exported to themain.ts file
export class AppComponent {
  
}
