import { Component, EventEmitter, Output } from '@angular/core';
import { IconGridComponentComponent } from 'src/app/icon-grid-component/icon-grid-component.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './dialog-calculator.component.html',
  styleUrls: ['./dialog-calculator.component.scss']
})
export class CalculatorComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  onClose() {
    this.close.emit();

  }
}
