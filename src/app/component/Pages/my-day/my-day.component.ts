import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StaetService } from '../../../services/staet.service';

@Component({
  selector: 'app-my-day',
  standalone: true,
  imports: [FormsModule,DatePipe,PageTitleComponent,TaskListComponent],
  templateUrl: './my-day.component.html',
  styleUrl: './my-day.component.scss'
})
export class MyDayComponent {
  newTask=""; 
  taskList:any[]=[];
  httpService=inject(HttpService);
  staetService=inject(StaetService); 
  ngOnInit(){
    
    this.staetService.searchSubject.subscribe((value)=>{
      // console.log("fdfggvhjbhjbjbnvhhb",value);
      if (value){
        
        
        
        this.taskList=this.taskList.filter((x)=>
        x.title.toLowerCase().includes(value.toLowerCase())
        
        );
      }
      else{
        this.getAllTasks();
      }
    });
    this.getAllTasks();
  }
  addTask(){
    console.log("addTask",this.newTask)
    this.httpService.addTask(this.newTask).subscribe(()=>{
     this.newTask="";
     this.getAllTasks(); 
    })
  }
  getAllTasks(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result;
    })
  }
  onComplete(task:any){
    task.completed=true;
    console.log("complete",task)
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }

  onImportant(task:any){
    task.important=true;
    console.log("important",task)
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
  onDelete(task:any){
    console.log("important",task)
    this.httpService.deleteTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
  
}
