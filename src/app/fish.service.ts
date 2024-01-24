import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Fish } from './fish';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class FishService {

  private fishesUrl = 'api/fishes';  // URL to web api TODO: Place url to fishes-api here

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET fishes from the server */
  getFishes(): Observable<Fish[]> {
    return this.http.get<Fish[]>(this.fishesUrl)
      .pipe(
        tap(_ => this.log('fetched fisheses')),
        catchError(this.handleError<Fish[]>('getFishes', []))
      );
  }

  /** GET fish by id. Return `undefined` when id not found */
  getFishNo404<Data>(id: number): Observable<Fish> {
    const url = `${this.fishesUrl}/?id=${id}`;
    return this.http.get<Fish[]>(url)
      .pipe(
        map(fishes => fishes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} fish id=${id}`);
        }),
        catchError(this.handleError<Fish>(`getFish id=${id}`))
      );
  }

  /** GET fish by id. Will 404 if id not found */
  getFish(id: number): Observable<Fish> {
    const url = `${this.fishesUrl}/${id}`;
    return this.http.get<Fish>(url).pipe(
      tap(_ => this.log(`fetched fish id=${id}`)),
      catchError(this.handleError<Fish>(`getFish id=${id}`))
    );
  }

  /* GET fishes whose specie contains search term */
  searchFishes(term: string): Observable<Fish[]> {
    if (!term.trim()) {
      // if not search term, return empty fish array.
      return of([]);
    }
    return this.http.get<Fish[]>(`${this.fishesUrl}/?specie=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found fishes matching "${term}"`) :
        this.log(`no fishes matching "${term}"`)),
      catchError(this.handleError<Fish[]>('searchFishes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new fish to the server */
  addFish(fish: Fish): Observable<Fish> {
    return this.http.post<Fish>(this.fishesUrl, fish, this.httpOptions).pipe(
      tap((newFish: Fish) => this.log(`added fish w/ id=${newFish.id}`)),
      catchError(this.handleError<Fish>('addFish'))
    );
  }

  /** DELETE: delete the fish from the server */
  deleteFish(id: number): Observable<Fish> {
    const url = `${this.fishesUrl}/${id}`;

    return this.http.delete<Fish>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted fish id=${id}`)),
      catchError(this.handleError<Fish>('deleteFish'))
    );
  }

  /** PUT: update the fish on the server */
  updateFish(fish: Fish): Observable<any> {
    return this.http.put(this.fishesUrl, fish, this.httpOptions).pipe(
      tap(_ => this.log(`updated fish id=${fish.id}`)),
      catchError(this.handleError<any>('updateFish'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a FishService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FishService: ${message}`);
  }
}
