import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() tearmChanged = new EventEmitter<string>();
  tearm = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInputChanged(val: Event){
    this.tearmChanged.emit(this.tearm);
  }
}
