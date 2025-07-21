

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterServices',
  standalone: true,
})
export class FilterServicesPipe implements PipeTransform {
  transform(services: any[], search: string): any[] {
    if (!search) return services;
    return services.filter(s =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}