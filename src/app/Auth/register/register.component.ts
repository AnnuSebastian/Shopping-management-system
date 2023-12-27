import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form! : FormGroup;

  constructor(private authSvc:AuthServiceService,
    private router: Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      //name of elements hsould match the elements name in product.ts
      id : new FormControl(0),
      name : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.email, Validators.required]),
      password : new FormControl('', Validators.required),
      dateOfBirth : new FormControl('', Validators.required),
      role : new FormControl(1,Validators.required)
    });
  }

 
  submit(){ // this is the method of the component class register. this method calls the service class method
    //register through injection
    this.authSvc.register(this.form.value).subscribe(result=>{
      console.log(result);
      alert('Registered Successfully');
      //navigate to login
      this.router.navigate(['']);
    },err=>{
      alert('ERROR');
      console.log('Error');
    });
    
  }
}
