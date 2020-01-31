import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.css']
})
export class TotoComponent implements OnInit {
  todos: Todo[];
  todoTitle:string;
  count:number=1;

  constructor() { }

  ngOnInit() {
    this.todoTitle='';
    this.todos=[];
  }
  addTodo()
  {
    this.todos.push(
      {
        id:this.count++,
        title:this.todoTitle,
        completed:false,
        editing:false
      }
    )
  }

  deleteTodo(id:number)
  {
    this.todos=this.todos.filter(todo=>todo.id !==id);
  }

}


interface Todo
{
  id:number,
  title:string,
  completed:boolean,
  editing:boolean
}