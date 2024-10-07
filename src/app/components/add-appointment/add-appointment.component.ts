import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgFor} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppointmentInterface} from "../../interfaces/appointment.interface";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-add-appointment',
    standalone: true,
    imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, NgFor],
    templateUrl: './add-appointment.component.html',
    styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {

    constructor(public dialogRef: MatDialogRef<AddAppointmentComponent>) {
    }

    newAppointment: AppointmentInterface = {
        title: '',
        description: '',
        startTime: '',
        endTime: '',
        location: ''
    }

    handleAdd() {
        if (this.newAppointment.title.trim() !== '') {
            this.dialogRef.close(this.newAppointment);
        }
    }

}
