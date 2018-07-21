import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  currentId: number;
  editMode = false;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.currentId = params["id"];
        this.editMode = params["id"] == null ? false : true;
      }
    );
  }

}
