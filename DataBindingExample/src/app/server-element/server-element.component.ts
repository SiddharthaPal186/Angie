import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() element : {type: string, name: string, content: string};
  @ContentChild('headerTag') headerTag;

  ngAfterContentInit(){
    console.log('Projected content element: ' + this.headerTag.nativeElement.textContent);
  }
}
