import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

  public selectedLocale:string=this.localeId;

  public locales:any=[
    {name:"French",code:"fr"},
    { name:"English",code:"en"}
  ]



  ngOnInit() {
  }

  changePath(code:string){
    location.replace(`/${code}/`);
  }

}
