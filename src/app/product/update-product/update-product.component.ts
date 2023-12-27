import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  product1!: Product;

  productId: number = 0;

  form! : FormGroup;
  categoryArray: Category []=[];

  constructor(private route:ActivatedRoute,
    private prodService:ProductService,
    private catService: CategoryService,
    private dtPipe: DatePipe,//injecting date pipe to get the date in the console to the format of the date field of the update form
    //DatePipe is registered in the app.module.ts
    private router: Router){}

  ngOnInit(): void {
    this.productId= this.route.snapshot.params['id']; //this will allow us to fetch the route parameter in the target component updateproduct
    //['id'] should match with the path mentioned in the routing module
    console.log(this.productId);

    this.form = new FormGroup({ //initialising form with default value
      //name of elements should match the elements name in product.ts
      id : new FormControl(0),
      name : new FormControl('',Validators.required),
      price : new FormControl(null,[Validators.min(1), Validators.required]),
      categoryId : new FormControl(null ,Validators.required),
      manufacturedDate : new FormControl(''),
      imageUrl : new FormControl('',Validators.required)
    });

    this.catService.getList().subscribe(result=>{ //Here we are storing the data from the category component to the initialised list
      //it is done by the object of the service class
      this.categoryArray=result;// the imported data is stored in the initialised array
    },err=>{
      console.log(err);
      alert(err);
    })

    //calling service method in the class component through injection
    this.prodService.getById(this.productId).subscribe(result=>{
      console.log(result);
      this.product1 = result;
      
      this.form.setValue({
        id: this.product1.id,
        name: this.product1.name,
        price: this.product1.price,
        categoryId: this.product1.categoryId,
        manufacturedDate: this.dtPipe.transform(this.product1.manufacturedDate, 'yyyy-MM-dd'),
        imageUrl: this.product1.imageUrl
      });
    
    }, err=>{
      console.log(err);
      alert('ERROR');
    })

  }

  submit(){
    this.prodService.update(this.form.value).subscribe(()=>{
      alert('Updated Successfully');
      //navigate to product list
      this.router.navigate(['/products']);
    },err=>{
      alert('ERROR');
      console.log(err);
    })
  }
  
  }

  


