import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = ''; // uses 2 way binding to capture the input of ServerName from user

  @ViewChild('inputServerContent') inputServerContent: ElementRef;
  // ElementRef is an angular type of object, hence needs to be imported from angular/core

  onAddServer(inputServerName) {
    // console.log(inputServerName); // Gives the details of the element associated to the local reference - inputServerName
    // console.log(inputServerName.value); // Provides value of the element
     console.log (this.inputServerContent);
    this.serverCreated.emit({serverName: inputServerName.value,
      serverContent: this.inputServerContent.nativeElement.value});
  }

  onAddBlueprint(inputServerName) {
    this.blueprintCreated.emit({serverName: inputServerName.value,
    serverContent: this.inputServerContent.nativeElement.value});
  }

}
