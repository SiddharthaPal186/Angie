import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router){}

    onFeatureSelected(selectedfeature: any){
    if (selectedfeature == 'recipe'){
      this.router.navigate(['/recipe'])
    }
    else if(selectedfeature == 'shopping-list'){
      this.router.navigate(["/shopping-list"]);
    }
    else{
      alert("Invalid Route!");
    }
  }

  ngOnInit() {
  }
  isOpen = false;
  toggleDropDown(){
    this.isOpen = !this.isOpen;
  }

}
