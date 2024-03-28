import { Component, OnInit, inject } from '@angular/core';
import { StaetService } from '../../services/staet.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './header.component.html',
  styles: ''
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
    console.log("inheadercomponent");
  //   this.searchControl.valueChanges.subscribe((value)=>{
  //     console.log(value);
  //     this.staetService.searchSubject.next(value || "") ;
  // })
  }
  
  staetService=inject(StaetService); 
  searchControl=new FormControl();

  searchItem(){
    console.log(this.searchControl.value);
    this.staetService.searchSubject.next(this.searchControl.value);

  }
  
  // ngOninit():void{
  //   console.log("inheadercomponent");
  //   this.searchControl.valueChanges.subscribe((value)=>{
  //     console.log(value);
  //     this.staetService.searchSubject.next(value || "") ;
  // })
  // }

}
