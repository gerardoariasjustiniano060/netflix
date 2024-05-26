import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  title1 : string = 'Unlimited movies, TV';
  title2 : string = 'shows, and more.';
  title3 : string = 'Watch anywhere. Cancel anytime.';

  pelicula_top : string = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png';
  title_pelicula_top : string = 'Pelicula mas taquillera de la semana.'; 
  sub_pelicula_top :string = 'Save your data and watch all your favorites offline.';
}
