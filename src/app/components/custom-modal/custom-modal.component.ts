import { Component,EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent  {
  @Input() title:string ='';
  @Input() message:string ='';
  @Output() onClose=new EventEmitter<void>();


  constructor() { }

  closeModal(){
    this.onClose.emit();
  }

}
