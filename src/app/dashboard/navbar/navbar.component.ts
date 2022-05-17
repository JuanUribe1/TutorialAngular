import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/Menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this.menuService.getMenu().subscribe(fakebackdata => {
      this.menu = fakebackdata;
      console.log(fakebackdata);
    })
  }

}
