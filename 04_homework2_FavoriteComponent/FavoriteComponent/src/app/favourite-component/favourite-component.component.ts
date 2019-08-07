import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite-component.component.html',
  styleUrls: ['./favourite-component.component.css']
})
export class FavouriteComponentComponent implements OnInit {
  public isFavourite:boolean = false;
  public formText:String = "default";

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    // Toogle boolean
    this.isFavourite = !this.isFavourite;
    console.log("onClick(), isFavourite = ", this.isFavourite)
  }

  printFormText(){
    console.log("printFormText(), formText = ", this.formText)
  }

}
