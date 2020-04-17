import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tatble',
  templateUrl: './tatble.component.html',
  styleUrls: ['./tatble.component.css']
})
export class TatbleComponent implements OnInit {
  idEdit = null;
  dataEdit: {
    id: 0,
    name: "",
    level: '0'
  };
  @Input() data: Array<any>;
  @Output() deleteTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void { }

  clickEdit(item){ console.log(item)
    const { id, name, level} = item;
    this.idEdit = id;
    this.dataEdit = { id, name, level };
  }

  editSubmit(){
    this.editTask.emit({
      id: this.idEdit,
      ...this.dataEdit
    });

    this.idEdit = null;
  }

}
