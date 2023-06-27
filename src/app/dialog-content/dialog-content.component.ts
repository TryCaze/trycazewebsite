import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void{

    const dialogRef = this.dialog.open(DialogContentComponent, {
    width: '50%',
    height: '50%',
    maxWidth: '100%',
    maxHeight: '100%',
    panelClass: 'custom-dialog-class'
    });
  }


}
