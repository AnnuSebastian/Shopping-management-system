import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit{
    list:Category[] = [];

    constructor(private catService:CategoryService){

    }
  ngOnInit(): void {
    //subscribe asynchronously calls the method getList(), it is called asynchronously as the return type is observable
    this.catService.getList().subscribe(result=>{
      console.log(result);
      this.list = result;
    },
    err=>{  // err is the second parameter
      alert(err);
    })
  }
  printcat(){
    console.log(this.list)
  }
}
