import { Component, TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core'
import { DialogHomeComponent  } from '../virtualapps/dialog-home/dialog-home.component'

@Component({
  selector: 'app-icon-grid-component',
  templateUrl: './icon-grid-component.component.html',
  styleUrls: ['./icon-grid-component.component.scss']
})

export class IconGridComponentComponent {
  icons: string[] = [
    'home',
    'account_balance',
    'chrome_reader_mode',
    'touch_app',
    'mail',
    'movie_creation',
    'wb_cloudy',
    'directions',
    'menu',
    'star'
  ];

  @ViewChild('dialogContainer', { read: ViewContainerRef }) dialogContainer!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  openDialog(icon: string) {
    const dialog = document.getElementById('dialog-' + icon) as HTMLDialogElement;
    dialog.showModal();
  }

  closeDialog(icon: string) {
    const dialog = document.getElementById('dialog-' + icon) as HTMLDialogElement;
    dialog.close();
  }

  createDialogComponent(icon: string): void {
    this.dialogContainer.clear();

    switch (icon) {
      case 'home':
        const homeComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogHomeComponent);
        this.dialogContainer.createComponent(homeComponentFactory);
        break;
      // Add cases for other icons
    }
  }
}


