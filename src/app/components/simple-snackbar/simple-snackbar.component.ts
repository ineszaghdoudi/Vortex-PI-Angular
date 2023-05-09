import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-snackbar',
  template: `
  <div [class]="'snackbar ' + messageClass">
    <div class="message">{{ message }}</div>
  </div>
`,
  styles: [
    `
      .simple-snackbar-container {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
        background-color: #333;
        color: #fff;
        font-size: 16px;
        text-align: center;
        transition: transform 0.3s ease-out;
        transform: translateY(100%);
      }
      .simple-snackbar-container.success {
        background-color: #2ecc71;
      }
      .simple-snackbar-container.error {
        background-color: #e74c3c;
      }
      .show {
        transform: translateY(0);
      }
    `
  ]
})
export class SimpleSnackbarComponent {
  @Input() message: string = '';
  @Input() messageClass: string = '';

  show(message: string, duration: number): void {
    const snackbar = document.createElement('div');
    snackbar.textContent = message;
    snackbar.style.backgroundColor = 'black';
    snackbar.style.color = 'white';
    snackbar.style.padding = '10px';
    snackbar.style.position = 'fixed';
    snackbar.style.bottom = '20px';
    snackbar.style.right = '20px';
    snackbar.style.zIndex = '9999';
    snackbar.style.opacity = '0';
    snackbar.style.transition = 'opacity 300ms ease-in-out';

    document.body.appendChild(snackbar);

    setTimeout(() => {
      snackbar.style.opacity = '1';
    }, 100);

    setTimeout(() => {
      snackbar.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(snackbar);
      }, 300);
    }, duration);
  }





}
