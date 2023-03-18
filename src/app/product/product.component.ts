import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private aR:ActivatedRoute){
    this.aR.params.subscribe((params)=>{
    console.log(params);
    })
  }
}
