import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PersonTableComponent } from './components/person-table/person-table.component';

export const routes: Routes = [
    {path: "event-bind-example", component: EventBindExampleComponent},
    {path: "welcome", component: WelcomeComponent},
    {path: "", redirectTo: "/welcome", pathMatch: "full"},
    {path: "person-table-component", component: PersonTableComponent}
];
