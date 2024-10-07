import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {ToDoInterface} from "../../interfaces/to-do.interface";
import {NgFor} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-add-to-do',
    standalone: true,
    imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule, FormsModule, NgFor],
    templateUrl: './add-to-do.component.html',
    styleUrl: './add-to-do.component.css'
})
export class AddToDoComponent {

    constructor(public dialogRef: MatDialogRef<AddToDoComponent>) {
    }

    newTodo: ToDoInterface = {
        title: '',
        description: '',
        priority: 5,
        category: ''
    }

    handleAdd() {
        if (this.newTodo.title.trim() !== '') {
            this.dialogRef.close(this.newTodo);
        }
    }
}
