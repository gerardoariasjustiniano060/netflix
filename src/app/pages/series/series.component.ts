import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  title1 : string = 'Tus mejores Series, TV - Celular';
  title2 : string = 'Mira lo mejor.';
  title3 : string = 'de forma gratuita con limites.';


  serie_top : string = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png';
  title_serie_top : string = 'Esta es la Serie mas vista de esta semana !'; 
  sub_title_top :string =           'Noche Polar.   '; 
}
