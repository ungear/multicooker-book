import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/typing/recipe';

@Component({
  selector: 'app-recipe-snapshot',
  templateUrl: './recipe-snapshot.component.html',
  styleUrls: ['./recipe-snapshot.component.scss']
})
export class RecipeSnapshotComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
