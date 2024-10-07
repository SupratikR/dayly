import {AppointmentInterface} from "./appointment.interface";
import {ToDoInterface} from "./to-do.interface";

export interface DayInterface {
  _id?: string,
  date: string,
  todos: ToDoInterface[],
  appointments: AppointmentInterface[],
  note: string
  createdAt?: string
}
