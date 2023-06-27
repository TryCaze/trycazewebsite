import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery: string = '';

  performSearch(): void {
    // Perform the search logic here
    console.log('Performing search for:', this.searchQuery);
  }
}
