import { Component, Input, inject } from '@angular/core';
import { ItemCalendar } from './../item-calendar';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  black : string = 'width: 100px; height: 100px; background-color: cornflowerblue;';

  @Input() inputItem!: ItemCalendar;

  itema: ItemCalendar={
    date : 10062023,
    full :true,
    activity : 'solo gym class',
  }

  getGame():string|undefined{
    let date:number=0;
    let item: ItemCalendar | undefined = this.transactionService.getItemsbydate(date);
    while (date != this.transactionService.getItemsbydate(date)?.date){
      date++;
      item=this.transactionService.getItemsbydate(date);
    }

      return item?.activity;
  }
  gameResult: string | undefined = this.getGame();

  itemList : ItemCalendar[] =[]

  constructor(public transactionService : TransactionService){

    this.itemList = this.transactionService.getAllItems();
    //this.itema = this.transactionService.getItemsbydate(this.itema.date);
  }


}
