import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Dionisis';

  person = {
    givenName: "Dionisis",
    surName: "Liontos",
    age: 0x17,
    email: "DionisisLiontos@outlook.com"
  };
}
