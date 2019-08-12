import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    let obs = http.get(this.url);
    obs.subscribe(response => {
      // console.log(response);
      this.posts = response;
    })
  }

  createPost(input:HTMLInputElement){
    let post : any = {title: input.value};
    this.http.post(this.url, JSON.stringify(post)).subscribe(
      response => {
        console.log("response = ",response)
        post.id = response.id;
        console.log("post = ", post)
        //this.posts.unshift({ title: input.value });
        this.posts.splice(0, 0, post);
      }
    )
  }
  updatePost(post) {
    this.http.patch(this.url+'/'+post.id, JSON.stringify({ isRead: true })).subscribe(
      response => {
        console.log(response);
      }
    )
    //this.http.pur(this.url, JSON.stringify({ isRead: true }));
  }
  ngOnInit() {
  }

}
