import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() tearmChanged = new EventEmitter<string>();
  @ViewChild('searchbar', {static: true}) searchbarEl!: ElementRef<HTMLInputElement>;
  
  tearm = '';

  constructor() { }

  ngOnInit(): void {
    fromEvent(this.searchbarEl.nativeElement, 'keyup')
      .subscribe(() => {
        this.tearmChanged.emit(this.tearm);
      })
  } 
}
