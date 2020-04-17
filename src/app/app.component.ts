import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data = [
    {
      id: +(new Date()),
      name: "Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết",
      level: '0'
    }
  ]

  createNewTask(task){
    this.data.unshift({
      id: +(new Date()),
      ...task
    })
    return this.data
  }

  deleteTask(id: number){
    this.data = this.data.filter(item => item.id !== id)
  }

  editTask(item){
    this.data = this.data.map(it => {
      if(item.id === it.id) it = item;
      return it;
    })
  }
}
