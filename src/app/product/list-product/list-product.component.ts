import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
  list:Product[]=[];
  private productId=0;

  constructor (private prodService : ProductService){

  }
  ngOnInit():void{
    this.prodService.getList().subscribe(result=>{
      console.log(result);
      this.list=result;
    },err=>{
      alert(err);
    })
  }

  delete(){
    console.log('product to delete:' + this.productId);
    this.prodService.delete(this.productId).subscribe(()=>{
      alert('delete successful');
      this.ngOnInit(); // this will refresh the same list after deletion
        }, err=>{
      console.log(err);
      alert('error');
    })
  }

  setProductId(id:number){
    this.productId=id;
  }

}
