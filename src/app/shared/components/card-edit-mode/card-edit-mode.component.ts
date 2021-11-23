import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from 'app/core/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-edit-mode',
  templateUrl: './card-edit-mode.component.html',
  styleUrls: ['./card-edit-mode.component.scss'],
})
export class CardEditModeComponent implements OnInit, OnDestroy {
  cardValue = {} as Card;

  @Input()
  get card() {
    return this.cardValue;
  }

  @Output()
  cardChange = new EventEmitter();

  cardFormSubscription: Subscription;
  cardForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.cardForm = this._formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.cardFormSubscription = this.cardForm.valueChanges.subscribe({
      complete: () => {
        this.card = this.cardForm.value;
        console.log(this.card);
      },
    });
  }

  ngOnDestroy() {
    this.cardForm.reset();
    this.cardFormSubscription.unsubscribe();
  }

  set card(val) {
    this.cardValue = val;
    this.cardChange.emit(this.cardValue);
  }
}
