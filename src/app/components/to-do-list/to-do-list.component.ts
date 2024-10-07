import {Component, inject, ViewChild} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DayInterface} from '../../interfaces/day.interface';
import {DatePipe, NgFor, NgIf, TitleCasePipe} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AddToDoComponent} from "../add-to-do/add-to-do.component";
import {AddAppointmentComponent} from "../add-appointment/add-appointment.component";
import {ToDoInterface} from "../../interfaces/to-do.interface";
import {AppointmentInterface} from "../../interfaces/appointment.interface";
import {MatChipsModule} from "@angular/material/chips";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
    selector: 'app-to-do-list',
    standalone: true,
    imports: [MatCardModule,
        MatListModule,
        MatIconModule,
        MatCheckboxModule,
        DatePipe,
        NgFor,
        NgIf,
        MatButtonModule,
        MatDialogModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInput,
        MatTableModule,
        FormsModule,
        TitleCasePipe,
        MatTooltipModule,
    ],
    providers: [DatePipe],
    templateUrl: './to-do-list.component.html',
    styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
    currentDate: Date = new Date();
    todos: ToDoInterface[] = [];
    appointments: AppointmentInterface[] = [];
    note: string = '';

    readonly dialog = inject(MatDialog);

    openAddTodoDialog(): void {
        const dialogRef = this.dialog.open(AddToDoComponent);

        dialogRef.afterClosed().subscribe((result: ToDoInterface) => {
            console.log(result);
            if(result) {
                this.todos.push(result);
            }
        })
    }

    openAddAppointmentDialog(): void {
        const dialogRef = this.dialog.open(AddAppointmentComponent);

        dialogRef.afterClosed().subscribe((result: AppointmentInterface) => {
            if(result) {
                this.appointments.push(result);
            }
        })
    }

    handleReset(): void {
        this.todos = [];
        this.appointments = [];
        this.note = '';
    }

    handleSave(): void {

    }
}
