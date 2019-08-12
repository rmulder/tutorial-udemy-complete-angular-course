import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private http: HttpClient) { }

  getFollowers(username: string) {
    console.log('username = ',username);
    const url = `https://api.github.com/users/${username}/followers`;
    return this.http.get(url);
  }
}
