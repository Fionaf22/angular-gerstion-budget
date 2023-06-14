import { Injectable } from '@angular/core';
import { ItemCalendar } from './item-calendar';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  itemList : ItemCalendar[] =[ {
    date : 21122023,
    full :true,
    activity : 'golf',
  },
  {
    date : 29042023,
    full :true,
    activity : 'tennis',
  },
  {
    date : 23052023,
    full : false,
    activity : 'dance',
  },
  {
    date : 24022023,
    full :false,
    activity : 'swimming',
  },
  {
    date : 12032023,
    full :true,
    activity : 'salsa',
  },
  {
    date : 31122023,
    full :false,
    activity : 'knitting',
  },
  {
    date : 17012023,
    full :false,
    activity : 'hiking',
  },
  {
    date : 10102023,
    full :true,
    activity : 'rock climbing',
  },
]
getAllItems():ItemCalendar[]{
  return this.itemList;
}

getItemsbydate(date : number): ItemCalendar | undefined{
  return this.itemList.find(itemService => itemService.date == date);
}

  constructor() { }
}
