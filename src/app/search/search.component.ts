import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
    searchValue:string = "iphone";

    changeSearchValue(eventData : Event){
        // console.log((<HTMLInputElement>eventData.target).value);
        this.searchValue = (<HTMLInputElement>eventData.target).value;
    }
}
