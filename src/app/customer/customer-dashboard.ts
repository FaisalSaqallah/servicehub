// File: src/app/customer/customer-dashboard.ts
import { Component, OnInit } from '@angular/core';
import { FilterServicesPipe } from './filter-services.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterServicesPipe, HttpClientModule],
  templateUrl: './customer-dashboard.html',
  styleUrls: ['./customer-dashboard.scss'],
})
export class CustomerDashboardComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadServices();
    this.loadAppointments();
  }
  filterText: string = '';
  view: 'services' | 'appointments' = 'services';

  services: any[] = [];

  appointments: { service: string; date: string; time: string; status: string }[] = [];

  newAppointment = {
    service: '',
    date: '',
    time: ''
  };

  addAppointment() {
    if (this.newAppointment.service && this.newAppointment.date && this.newAppointment.time) {
      const appointment = {
        service: this.newAppointment.service,
        date: this.newAppointment.date,
        time: this.newAppointment.time,
        status: 'Scheduled'
      };

      this.http.post<any>('http://localhost:3000/appointments', appointment)
        .subscribe(data => {
          this.appointments.push(data);
          this.newAppointment = { service: '', date: '', time: '' };
          this.view = 'appointments';
        });
    }
  }

  loadServices() {
    this.http.get<any[]>('http://localhost:3000/services')
      .subscribe(data => this.services = data);
  }

  loadAppointments() {
    this.http.get<any[]>('http://localhost:3000/appointments')
      .subscribe(data => this.appointments = data);
  }

  selectedService: any = null;
  showDetails: boolean = false;

  viewServiceDetails(service: any) {
    this.selectedService = service;
    this.showDetails = true;
  }
}