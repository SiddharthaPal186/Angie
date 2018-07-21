import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // Used if we need the properties in CSS file has to be applied glbally with no encapsulation to current DOM
  // encapsulation: ViewEncapsulation.Native // used for emulating shadow DOM
  // encapsulation: ViewEncapsulation.Emulated // Default setting, provides encapsulation to CSS being applied to current component only
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Server1', content: 'test content'}];

 onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
