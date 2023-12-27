import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Auth/auth-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  form! : FormGroup;

  constructor(private catService:CategoryService,
    private router:Router){}
    ngOnInit(): void {
    //initialize form
    this.form = new FormGroup({
      id : new FormControl(0),
      name : new FormControl('', Validators.required)
    })
  }

  submit(){
    console.log(this.form.value);
    this.catService.add(this.form.value).subscribe(result=>{
    alert('added successfully');
    this.router.navigate(['/categories']);
  },err=>{
    alert('ERROR');
    console.log(err);
  })
  }
}
