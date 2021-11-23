import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Credentials } from '../../models';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private _httpClient: HttpClient) { }


    login(credentials: Credentials) {
        return this._httpClient.post(`${environment.server.url}/login`, credentials);
    }
    
}