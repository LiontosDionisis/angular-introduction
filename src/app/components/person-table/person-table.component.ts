import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: "Dionisis",
    surName: "Liontos",
    age: 0x17,
    email: "DionisisLiontos@outlook.com"
  };
}
