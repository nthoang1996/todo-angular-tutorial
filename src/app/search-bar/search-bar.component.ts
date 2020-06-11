import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term: string;
  @Output()searchTermChanged = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  notifyTermChanged(event){
    console.log("abc");
    this.searchTermChanged.emit(this.term);
  }

  clearTearm(event){
    this.term = '';
    this.notifyTermChanged(event);
  }

}
