import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {TransportDataService} from "../transport-data.service";

@Component({
  selector: 'app-transport-modes-one',
  templateUrl: './transport-modes-one.page.html',
  styleUrls: ['./transport-modes-one.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TransportModesOnePage {
  constructor(protected transportService: TransportDataService) { }
}
