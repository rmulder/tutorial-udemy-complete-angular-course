import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likesCount') totalNumber:number = 0;
  @Input('isLiked') isActive:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if (!this.isActive){
      this.totalNumber += 1;
    }
    else{
      this.totalNumber -= 1;
    }
    this.isActive = !this.isActive;
    console.log('onClick(), isActive = ' + this.isActive);
  }

}
