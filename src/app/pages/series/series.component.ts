import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  title1 : string = 'Unlimited movies, TV';
  title2 : string = 'shows, and more.';
  title3 : string = 'Watch anywhere. Cancel anytime.';


  serie_top : string = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png';
  title_serie_top : string = 'Esta es la Serie mas vista de esta semana !'; 
  sub_title_top :string = 'Save your data and watch all your favorites offline.'; 
}
