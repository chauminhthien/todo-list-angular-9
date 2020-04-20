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
      name: "a",
      level: '0'
    }
  ]

  control =  {
    filter: '',
    sort: 'name-asc',
  }

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

  handleFilter({key, value}){
    this.control[key] = value
  }

  filterData(){
    let data = [...this.data];
    const { filter, sort } = this.control;
    data = data.filter(item => (new RegExp(`^.*${this.replaceCharCode(filter)}.*$`, 'i')).test(item.name))

    const [key, sortKey] = sort.split('-');

    data = data.sort( (a, b) => {
      // return -1;
      if(sortKey === 'asc')
        return a[key] > b[key] ? 1 : -1
      return a[key] > b[key] ? -1 : 1
    })

    return data
  }

  replaceCharCode(s: string = '') {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  
  
}
