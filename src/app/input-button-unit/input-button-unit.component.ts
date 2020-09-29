import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';
  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Angular CLI Rules!';
  }

  changeTitle(inputElementRef): void {
    this.submit.emit(inputElementRef.value);
  }

  submitValue(inputElementRef): void {
    this.submit.emit(inputElementRef.value);
  }
}
