import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }
}
