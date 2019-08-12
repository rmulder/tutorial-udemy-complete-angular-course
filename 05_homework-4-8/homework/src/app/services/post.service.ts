import { NotFoundError } from '../common/not-found-error';
import { Injectable } from '@angular/core';
import { throwError  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url).pipe(
      catchError((error: Response) => {
        if (error.status === 400) {
          return throwError(new BadRequestError());
        }
        return throwError(new AppError(error));
      }
      )
    );
  }
  updatePost(postId: string) {
    return this.http.patch(this.url + '/' + postId, JSON.stringify({ isRead: true }));
  }
  deletePost(postId) {
    console.log('postId = ', postId);
    return this.http.delete(this.url + '/' + postId).pipe(
      catchError( (error: Response) => {
        if (error.status === 404) {
          return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
      }
    )
    );
  }
  createPost(post: { id: string; }) {
    return this.http.post(this.url, JSON.stringify(post));
  }
}
