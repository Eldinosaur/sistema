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
  private listMenu:IMenu[]=[
    {title:'Agencias', url:'/agencias', icon:'/assets/icons/agencias.svg'},
    {title:'Canales', url:'/canales', icon:'/assets/icons/canales.svg'},
    {title:'Clientes', url:'/clientes', icon:'/assets/icons/clientes.svg'},
    {title:'Empleados', url:'/empleados', icon:'/assets/icons/empleados.svg'},
    {title:'Quejas y Reclamos', url:'/qr', icon:'/assets/icons/quejas.svg'},
    {title:'Seguimiento', url:'/seguimiento', icon:'/assets/icons/seguimiento.svg'}

  ]

  constructor() { }
  getMenu():IMenu[]{
    return[...this.listMenu] //clon del listado por seguridad

  }
  getMenuByUrl(url:string):IMenu{
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu
  }
}
