import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: string[];
  isActive = true;
  constructor(AuthorsService: AuthorsService) {
    this.authors = AuthorsService.getAuthors();
   }

  ngOnInit() {
  }

  getNumAuthors(){
    return this.authors.length;
  }

}
