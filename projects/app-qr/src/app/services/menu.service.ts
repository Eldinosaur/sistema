import { Injectable } from '@angular/core';

export interface IMenu{
  title: string,
  url: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
}
