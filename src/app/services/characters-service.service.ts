import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Character} from '../models/character';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CharactersServiceService {

  private charsUrl = 'api/chars';  

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> 
  {
    return this.http.get<Character[]>(this.charsUrl)
    	.pipe(catchError(this.handleError('getChars', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) 
  {
	return (error: any): Observable<T> => {
	 
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead

	    // Let the app keep running by returning an empty result.
	    return of(result as T);
  	};
  }
}
