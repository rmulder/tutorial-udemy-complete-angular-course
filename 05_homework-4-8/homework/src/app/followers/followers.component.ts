import { Component, Input, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})

export class FollowersComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('name') name: string;
  private followers;//: Array<object>;

  constructor(private followersService: FollowersService ) { }

    ngOnInit() {
      this.followersService.getFollowers(this.name).subscribe(
          response => {
              this.followers = response;
          }
      )
  }

}
