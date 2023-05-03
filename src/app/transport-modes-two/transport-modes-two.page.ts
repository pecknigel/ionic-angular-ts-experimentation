import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TransportDataService } from "../transport-data.service";

enum TransportModeTypes {
  VAN = 1,
  TRACTOR = 2,
  TRAILER = 3,
  SHIP = 4,
}

export interface TransportMode {
  id: TransportModeTypes;
  name: string;
}

@Component({
  selector: 'app-transport-modes-two',
  templateUrl: './transport-modes-two.page.html',
  styleUrls: ['./transport-modes-two.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TransportModesTwoPage implements OnInit {
  protected transportModes!: TransportMode[];

  constructor(private transportDataService: TransportDataService) { }

  ngOnInit() {
    this.transportModes = this.transportDataService.getTransportModes();
  }
}
