import { Component, EventEmitter, Output } from '@angular/core';
import { IconGridComponentComponent } from 'src/app/icon-grid-component/icon-grid-component.component';

@Component({
  selector: 'app-dialog-home',
  templateUrl: './dialog-home.component.html',
  styleUrls: ['./dialog-home.component.scss']
})
export class DialogHomeComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();





  onClose() {
    this.close.emit();

  }
  browserName: string = '';

  ngOnInit() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes('chrome')) {
      this.browserName = 'Chrome';
    } else if (userAgent.includes('firefox')) {
      this.browserName = 'Firefox';
    } else if (userAgent.includes('safari')) {
      this.browserName = 'Safari';
    } else if (userAgent.includes('edge')) {
      this.browserName = 'Edge';
    } else if (userAgent.includes('opera')) {
      this.browserName = 'Opera';
    } else {
      this.browserName = 'Unknown';
    }
  }
}
