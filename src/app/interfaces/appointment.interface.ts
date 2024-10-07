export interface AppointmentInterface {
    _id?: string,
    title: string,
    description?: string,
    startTime: string,
    endTime: string,
    location: string,
    completed?: Boolean,
    createdAt?: string
}
