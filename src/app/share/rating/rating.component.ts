import { Component, Input, SimpleChanges, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() isRatingDisable: boolean;
  @Input() itemId: number;
  disableRatings: boolean = false;

  inputName: string;

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes.isRatingDisable) {
      this.changeStateOfratingComponent(changes.isRatingDisable.currentValue);
    }
  }

  changeStateOfratingComponent(input) {
    if (input === true) {
      this.disableRatings = true;
    }
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: this.rating
    });
  }
}
