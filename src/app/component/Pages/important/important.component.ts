import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { HttpService } from '../../../services/http.service';
import { StaetService } from '../../../services/staet.service';

@Component({
  selector: 'app-important',
  standalone: true,
  imports: [PageTitleComponent,TaskListComponent],
  templateUrl: './important.component.html',
  styleUrl: './important.component.scss'
})
export class ImportantComponent {
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
  
  getAllTasks(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result.filter ((x:any)=>x.important==true);
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
  

}
