import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image: number;
  @Input() marked: boolean;
  @Output() select: EventEmitter<void> = new EventEmitter();
}
