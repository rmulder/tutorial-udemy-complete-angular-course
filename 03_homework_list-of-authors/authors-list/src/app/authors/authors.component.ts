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
  email = "me@email.com";
  email2 = "me@domain.com";
  email4 = "me@domain.com";
  constructor(AuthorsService: AuthorsService) {
    this.authors = AuthorsService.getAuthors();
   }

  ngOnInit() {
  }

  getNumAuthors(){
    return this.authors.length;
  }
  onClick($event){
    $event.stopPropagation();
    console.log('clicked', $event)
  }
  onDivClick($event){
    console.log('div clicked', $event)
  }
  onKeyUp($event){
    //if ($event.keyCode == 13) console.log('Enter pressed', $event)
    console.log('Enter pressed = ', $event, $event.target.value)
  }
  onKeyUp2(value){
    console.log('Enter pressed = ', value)
    console.log('Enter pressed = ', this.email)
  }
  onKeyUp3(){
    // similar to 2 way binding
    console.log('Enter pressed = ', this.email2)
  }
  onKeyUp4(){
    // 2 way binding
    console.log('Enter pressed = ', this.email4)
  }
}
