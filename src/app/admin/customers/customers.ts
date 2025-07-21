import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.html',
  styleUrls: ['./customers.scss']
})
export class CustomersComponent {
  customers = [
    { id: 1, name: 'Ahmed Ali', email: 'ahmed@example.com', phone: '0501234567' },
    { id: 2, name: 'Sara Nasser', email: 'sara@example.com', phone: '0509876543' }
  ];

  newCustomer = { name: '', email: '', phone: '' };

  addCustomer() {
    if (this.newCustomer.name && this.newCustomer.email && this.newCustomer.phone) {
      this.customers.push({ ...this.newCustomer, id: Date.now() });
      this.newCustomer = { name: '', email: '', phone: '' };
    }
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
  }
}