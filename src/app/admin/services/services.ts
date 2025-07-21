import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {
  services = [
    { id: 1, name: 'Haircut', price: 50 },
    { id: 2, name: 'Beard Trim', price: 30 },
    { id: 3, name: 'Facial', price: 70 }
  ];

  newService = { name: '', price: 0 };

  addService() {
    if (this.newService.name && this.newService.price !== null) {
      this.services.push({ ...this.newService, id: Date.now() });
      this.newService = { name: '', price: 0 };
    }
  }

  deleteService(index: number) {
    this.services.splice(index, 1);
  }
}