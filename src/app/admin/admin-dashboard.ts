import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.scss']
})
export class AdminDashboardComponent {
  serviceSearch: string = '';
  view: 'services' | 'customers' | 'appointments' = 'services';

  serviceForm!: FormGroup;
  customerForm!: FormGroup;

  _services: any[] = [];
  editingIndex: number | null = null;
  editingCustomerIndex: number | null = null;
  customers: any[] = [];
  appointments: any[] = [];

  get services() {
    if (!this.serviceSearch.trim()) return this._services;
    const term = this.serviceSearch.toLowerCase();
    return this._services.filter(s =>
      s.name.toLowerCase().includes(term) ||
      s.description.toLowerCase().includes(term) ||
      s.category.toLowerCase().includes(term)
    );
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]]
    });

    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      status: ['Active', Validators.required]
    });

    this.http.get<any[]>('http://localhost:3000/services').subscribe(data => this._services = data);
    this.http.get<any[]>('http://localhost:3000/customers').subscribe(data => this.customers = data);
    this.http.get<any[]>('http://localhost:3000/appointments').subscribe(data => this.appointments = data);
  }

  addService() {
    if (this.serviceForm.valid) {
      const newService = this.serviceForm.value;
      this.http.post('http://localhost:3000/services', newService).subscribe(data => {
        this._services.push(data);
        this.serviceForm.reset({ price: 0 });
      });
    }
  }

  editService(index: number) {
    this.editingIndex = index;
    const service = this._services[index];
    this.serviceForm.patchValue({
      name: service.name,
      description: service.description,
      category: service.category,
      price: service.price
    });
  }

  updateService() {
    if (this.serviceForm.valid && this.editingIndex !== null) {
      const service = { ...this._services[this.editingIndex], ...this.serviceForm.value };
      this.http.put(`http://localhost:3000/services/${service.id}`, service).subscribe(updated => {
        this._services[this.editingIndex!] = updated;
        this.serviceForm.reset({ price: 0 });
        this.editingIndex = null;
      });
    }
  }

  cancelEdit() {
    this.serviceForm.reset({ price: 0 });
    this.editingIndex = null;
  }

  deleteService(index: number) {
    const service = this._services[index];
    this.http.delete(`http://localhost:3000/services/${service.id}`).subscribe(() => {
      this._services.splice(index, 1);
    });
  }

  editCustomer(index: number) {
    this.editingCustomerIndex = index;
    const customer = this.customers[index];
    this.customerForm.patchValue({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      status: customer.status
    });
  }

  cancelCustomerEdit() {
    this.editingCustomerIndex = null;
    this.customerForm.reset({ status: 'Active' });
  }

  addCustomer() {
    if (this.customerForm.valid) {
      if (this.editingCustomerIndex === null) {
        const newCustomer = this.customerForm.value;
        this.http.post('http://localhost:3000/customers', newCustomer).subscribe(data => {
          this.customers.push(data);
          this.customerForm.reset({ status: 'Active' });
        });
      } else {
        const updated = {
          ...this.customers[this.editingCustomerIndex],
          ...this.customerForm.value
        };
        this.http.put(`http://localhost:3000/customers/${updated.id}`, updated).subscribe(updatedData => {
          this.customers[this.editingCustomerIndex!] = updatedData;
          this.editingCustomerIndex = null;
          this.customerForm.reset({ status: 'Active' });
        });
      }
    }
  }

  deleteCustomer(index: number) {
    const customer = this.customers[index];
    this.http.delete(`http://localhost:3000/customers/${customer.id}`).subscribe(() => {
      this.customers.splice(index, 1);
    });
  }

  deleteAppointment(index: number) {
    const appointment = this.appointments[index];
    this.http.delete(`http://localhost:3000/appointments/${appointment.id}`).subscribe(() => {
      this.appointments.splice(index, 1);
    });
  }

  updateAppointmentStatus(appointment: any) {
    this.http.put(`http://localhost:3000/appointments/${appointment.id}`, appointment).subscribe();
  }
}