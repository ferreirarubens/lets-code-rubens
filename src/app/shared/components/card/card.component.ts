import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'app/core/models';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  editMode = false;

  @Input() card: Card;
  @Output() onUpdate = new EventEmitter<Card>();
  @Output() onDelete = new EventEmitter<Card>();

  backupCard = {} as Card;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  setEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      this.card = { ...this.backupCard };
    } else {
      this.backupCard = { ...this.card };
    }
  }

  update() {
    this.onUpdate.emit(this.card);
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.onDelete.emit(this.card);
      }
    });
  }

  changeList(plus: boolean) {
    if (this.card.lista === 'DOING') {
      this.card.lista = plus ? 'DONE' : 'TODO';
    } else {
      this.card.lista = 'DOING';
    }
    this.update();
  }
}
