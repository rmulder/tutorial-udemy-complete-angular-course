import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


class FormContent {
  constructor(public courseName: String = '', public categoryId: number = null, public guaranteeBackSelected: boolean=false){
  }
}

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  public text:String = '';
  public categoriesDict = {
    1 : 'Development',
    2 : 'Art',
    3 : 'Languages'
  };
  objectKeys = Object.keys;
  public form: NgForm;
  public model: FormContent = new FormContent();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) { 
    console.log('onSubmit(): ',f,f.value,this.model)
    // f.resetForm();
   }
   
}
