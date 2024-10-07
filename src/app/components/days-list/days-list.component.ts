import {DatePipe, NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {DayInterface} from '../../interfaces/day.interface';
import {MatIconButton} from "@angular/material/button";

@Component({
    selector: 'app-days-list',
    standalone: true,
    imports: [MatCardModule, MatListModule, MatIconModule, MatCheckboxModule, DatePipe, NgFor, NgIf, MatIconButton],
    providers: [DatePipe],
    templateUrl: './days-list.component.html',
    styleUrl: './days-list.component.css'
})
export class DaysListComponent {

    days: DayInterface[] = []

}
