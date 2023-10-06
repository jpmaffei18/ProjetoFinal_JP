import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Router } from '@angular/router';
import { getName } from 'ionicons/dist/types/components/icon/utils';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

title = 

  constructor(private router: Router) { }

  ngOnInit() {}

  sair(){
    this.router.navigate(['/']);
  }
}
