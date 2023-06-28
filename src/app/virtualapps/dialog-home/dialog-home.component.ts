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
}
