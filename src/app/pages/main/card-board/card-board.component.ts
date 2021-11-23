import { Component, OnInit } from '@angular/core';
import { Card, TaskList } from 'app/core/models';
import { CardService } from 'app/core/services';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss'],
})
export class CardBoardComponent implements OnInit {
  cards: Card[] = [];

  newCard = {
    lista: 'TODO',
  } as Card;

  taskList: TaskList[] = [
    {
      text: 'Novo',
      description: 'Tarefas que precisam ser feitas',
      id: 'NEW',
    },
    {
      text: 'To Do',
      description: 'Tarefas que precisam ser feitas',
      id: 'TODO',
    },
    {
      text: 'Doing',
      description: 'Tarefas em andamento',
      id: 'DOING',
    },
    {
      text: 'Done',
      description: 'Tarefas concluídas',
      id: 'DONE',
    },
  ];

  constructor(private _cardService: CardService) {
    this.getCards();
    this.resetCard();
  }

  async getCards() {
    this.cards = await this._cardService.getCards();
  }

  resetCard() {
    this.newCard = {
      lista: 'TODO',
    } as Card;
  }

  ngOnInit() {}

  getCardsByList$(cards, lista: string) {
    return cards?.filter((card) => card.lista === lista);
  }

  insertNewCard() {
    this._cardService.insertCard(this.newCard).then((card) => {
      if (card) {
        this.getCards();
        this.resetCard();
      }
    });
  }

  updateCard(card: Card) {
    this._cardService.updateCard(card).then((card) => {
      if (card) {
        this.getCards();
      }
    });
  }

  async deleteCard(card: Card) {



    this.cards = await this._cardService.deleteCard(card.id);
  }
}
