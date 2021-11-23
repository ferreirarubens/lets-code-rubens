import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Card, TaskList } from 'app/core/models';
import { map } from 'rxjs/operators';
import { LCUtil } from 'app/core/util';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardService {
  constructor(private _httpClient: HttpClient) {}

  getCards(): Promise<Card[]> {
    return this._httpClient.get<Card[]>(`${environment.server.url}/cards`).toPromise();
  }

  insertCard(card: Card): Promise<Card> {
    return this._httpClient
      .post<Card>(`${environment.server.url}/cards`, card)
      .toPromise();
  }
  
  updateCard(card: Card): Promise<Card> {
    return this._httpClient
      .put<Card>(`${environment.server.url}/cards/${card.id}`, card)
      .toPromise();
  }

  deleteCard(cardId: string): Promise<Card[]> {
    return this._httpClient
      .delete<Card[]>(`${environment.server.url}/cards/${cardId}`).toPromise()
  }
}
