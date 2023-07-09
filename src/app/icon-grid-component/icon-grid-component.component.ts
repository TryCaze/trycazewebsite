import { Component, TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core'
import { DialogHomeComponent  } from '../virtualapps/dialog-home/dialog-home.component'
import { CalculatorComponent } from '../virtualapps/calculator/dialog-calculator.component'



@Component({
  selector: 'app-icon-grid-component',
  templateUrl: './icon-grid-component.component.html',
  styleUrls: ['./icon-grid-component.component.scss']
})

export class IconGridComponentComponent {
  icons:  string[] = [
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

      case 'account_balance':
        const accountBalance = this.componentFactoryResolver.resolveComponentFactory(CalculatorComponent);
        this.dialogContainer.createComponent(accountBalance);
        break;

      case 'chrome_reader_mode':
        const chromeReaderMode = this.componentFactoryResolver.resolveComponentFactory(CalculatorComponent);
        this.dialogContainer.createComponent(chromeReaderMode);
        break;

      case 'touch_app':
        const touchApp = this.componentFactoryResolver.resolveComponentFactory(CalculatorComponent);
        this.dialogContainer.createComponent(touchApp);
        break;

      case 'mail':
        const mail = this.componentFactoryResolver.resolveComponentFactory(CalculatorComponent);
        this.dialogContainer.createComponent(mail);
        break;

      case 'movie_creation':
        const movieCreation = this.componentFactoryResolver.resolveComponentFactory(CalculatorComponent);
        this.dialogContainer.createComponent(movieCreation);
        break;

      case 'wb_cloudy':
        const wbCloudy = this.componentFactoryResolver.resolveComponentFactory(CalculatorComponent);
        this.dialogContainer.createComponent(wbCloudy);
        break;

      case 'directions':

    }
  }
}


