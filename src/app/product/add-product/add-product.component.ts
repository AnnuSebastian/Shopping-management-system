import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  form! : FormGroup;
  categoryArray: Category []=[];//Array categoryArray is initialised here for storing the categories
  constructor(private catService: CategoryService, private prodService:ProductService,
    private router: Router){}
    ngOnInit():void{
      //initialise form
      this.form = new FormGroup({
        //name of elements hsould match the elements name in product.ts
        id : new FormControl(0),
        name : new FormControl('',Validators.required),
        price : new FormControl(null,[Validators.min(1), Validators.required]),
        categoryId : new FormControl('', Validators.required),
        manufacturedDate : new FormControl(''),
        imageUrl : new FormControl('',Validators.required)
      })
      this.catService.getList().subscribe(result=>{ //Here we are storing the data from the category component to the initialised list
        //it is done by the object of the service class
        this.categoryArray=result;// the imported data is stored in the initialised array
      },err=>{
        console.log(err);
        alert(err);
      })
    }
    submit(){
      console.log(this.form.value);
      this.prodService.add(this.form.value).subscribe(result=>{
        alert('Product added successfully');
        this.router.navigate(['/products']);
      },err=>{
        alert('ERROR');
        console.log(err);
      })
    }
}
