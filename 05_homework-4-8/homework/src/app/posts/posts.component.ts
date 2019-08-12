import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {
  }

  ngOnInit() {
    // For init of http services of the component
    this.service.getPosts().subscribe(
      (response: { id: string; }) => {
        console.log('response = ', response);
        this.posts = response;
      }, (error: AppError) => {
        if (error instanceof BadRequestError) {
          alert('Bad request.');
        } else {
          throw error;
        }
      }
    );
  }

  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    this.service.createPost(post).subscribe(
      (response: { id: string; }) => {
        console.log('response = ', response);
        post.id = response.id;
        console.log('post = ', post);
        // this.posts.unshift({ title: input.value });
        this.posts.splice(0, 0, post);
      }
    );
  }
  updatePost(post: { id: string; }) {
    this.service.updatePost(post.id).subscribe(
      (response: { id: string; }) => {
        console.log('response = ', response);
      }
    );
    // this.http.pur(this.url, JSON.stringify({ isRead: true }));
  }
  deletePost(post: { id: string; }) {
    const id = post.id; //'?&$@%)))(*%113';//5559999; //post.id
    this.service.deletePost(id).subscribe(
      (response: { id: string; }) => {
        console.log('response = ', response);
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('Post already deleted.');
        } else {
          throw error;
        }
      }
    );
  }


}
