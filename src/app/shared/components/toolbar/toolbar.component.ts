import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/services';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(public userService: UserService) { }

}
