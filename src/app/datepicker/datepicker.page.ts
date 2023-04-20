import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.page.html',
  styleUrls: ['./datepicker.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DatepickerPage {
  #date: string = '2023-04-20T12:00';
  get date(): string { return this.#date };
  set date(val: string) {
    this.#date = val;
    console.log(this.date);
  };

  constructor() { }
}
