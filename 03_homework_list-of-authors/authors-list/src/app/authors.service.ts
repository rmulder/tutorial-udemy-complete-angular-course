import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors() {
    return ['author1', 'author2', 'author3', 'author4'];
    // return ['author1'];
    // return [];
  }
  constructor() { }
}
