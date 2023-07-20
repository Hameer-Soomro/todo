export class TodoItem
{
  constructor(taskVal:string, completeVal:boolean = false){
    this.task = taskVal;
    this.complete = completeVal;
  }

  //public property
  task:string;
  complete: boolean;
}
