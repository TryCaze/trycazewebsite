import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTime!: string;
  currentDate!: string;
  title = 'trycazeportfolio';
  isDialogOpen = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);

    this.currentTime = new Date().toLocaleTimeString();
    this.currentDate = new Date().toLocaleDateString('en', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

  updateTime() {
    const date = new Date();
    const hours = this.formatTimeUnit(date.getHours());
    const minutes = this.formatTimeUnit(date.getMinutes());
    this.currentTime = `${hours}:${minutes}`;
  }

  formatTimeUnit(timeUnit: number): string {
    return timeUnit < 10 ? `0${timeUnit}` : `${timeUnit}`;
  }

  openDialog(): void {
    if (!this.isDialogOpen) {
      const dialogRef = this.dialog.open(DialogContentComponent, {
        width: '75%',
        height: '75%',
        maxWidth: '100%',
        maxHeight: '100%',
        panelClass: 'custom-dialog-class'
      });

      dialogRef.afterClosed().subscribe(() => {
        this.isDialogOpen = false;
      });

      this.isDialogOpen = true;
    } else {
      this.closeDialog();
    }
  }

  closeDialog(): void {
    this.dialog.closeAll();
    this.isDialogOpen = false;
  }
}
