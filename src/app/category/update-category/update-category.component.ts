import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit{
  category1!: Category;

  categoryId: number = 0;

  form!: FormGroup;

  //categoryArray: Category []=[];
 

  constructor(private catService:CategoryService,
    private route:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {

    this.categoryId= this.route.snapshot.params['id'];
    console.log(this.categoryId);

    this.form = new FormGroup({
      id : new FormControl(0),
      name : new FormControl('',Validators.required)
    });

    /*this.catService.getList().subscribe(result=>{ //Here we are storing the data from the category component to the initialised list
      //it is done by the object of the service class
      this.categoryArray=result;// the imported data is stored in the initialised array
    },err=>{
      console.log(err);
      alert(err);
    })*/
    //calling service method in the class component through injection
      this.catService.getById(this.categoryId).subscribe(result=>{
      console.log(result);
      this.category1 = result;
      
      this.form.setValue({
        id: this.category1.id,
        name: this.category1.name
        });
    
    }, err=>{
      console.log(err);
      alert('ERROR');
    })

  }

  submit(){
    this.catService.update(this.form.value).subscribe(()=>{
      alert('Updated Successfully');
      //navigate to product list
      this.router.navigate(['/categories']);
    },err=>{
      alert('ERROR');
      console.log(err);
    })
  }

   
  }

  
  
