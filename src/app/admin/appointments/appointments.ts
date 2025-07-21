import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.scss']
})
export class AppointmentsComponent {
  appointments = [
    { id: 1, customer: 'Ahmed Ali', service: 'Haircut', date: '2025-07-21', status: 'Scheduled' },
    { id: 2, customer: 'Sara Nasser', service: 'Facial', date: '2025-07-22', status: 'Completed' }
  ];

  newAppointment = { customer: '', service: '', date: '', status: 'Scheduled' };

  addAppointment() {
    if (this.newAppointment.customer && this.newAppointment.service && this.newAppointment.date) {
      this.appointments.push({ ...this.newAppointment, id: Date.now() });
      this.newAppointment = { customer: '', service: '', date: '', status: 'Scheduled' };
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }
}