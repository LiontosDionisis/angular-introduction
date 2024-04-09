import { Component, OnInit, inject } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import {MatCardModule} from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokeService = inject(JokesService);
  dadJoke = "";
  chuckJoke = "";

  ngOnInit(): void {
      this.jokeService.getDadJoke().subscribe((data) => {
        //console.log(data.joke);
        this.dadJoke = data.joke;
      })
      
      this.jokeService.getChuckNorrisJoke().subscribe((data: {value: string}) => {
        //console.log(data.value)
        this.chuckJoke = data.value;
      })
      // We either create an interface to pass the data.value or pass it on the arrow function
  }

  refreshDadJoke() {
    this.jokeService.getDadJoke().subscribe((data) => {
      this.dadJoke = data.joke;
    })
  }

  refreshChuckJoke() {
    this.jokeService.getChuckNorrisJoke().subscribe((data: {value: string}) => {
      this.chuckJoke = data.value;
    })
  }
}
