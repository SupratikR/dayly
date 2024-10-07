import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from "./components/to-do-list/to-do-list.component";
import { AnalyticsComponent } from "./components/analytics/analytics.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { DaysListComponent } from './components/days-list/days-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoListComponent, AnalyticsComponent, DaysListComponent, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DayLy';
}
