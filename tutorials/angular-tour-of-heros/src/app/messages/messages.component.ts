import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //  this is placed inside the constructor because 
  // Angular will inject the singleton MessageService 
  // into that property when it creates the MessagesComponent.
  // **MUST BE PUBLIC TO BIND TO TEMPLATE** 
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
