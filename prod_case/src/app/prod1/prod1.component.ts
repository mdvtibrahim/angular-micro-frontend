import { Component } from '@angular/core';

@Component({
  selector: 'app-prod1',
  templateUrl: './prod1.component.html',
  styleUrls: ['./prod1.component.scss']
})
export class Prod1Component {
  selectedCard: number | null = null;

  selectCard(cardNumber: number) {
    this.selectedCard = this.selectedCard === cardNumber ? null : cardNumber;
  }
}
