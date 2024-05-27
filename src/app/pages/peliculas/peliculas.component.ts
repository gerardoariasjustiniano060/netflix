import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  title1 : string = 'Todas tus peliculas,Tv celular';
  title2 : string = 'Mira, lo mejor.';
  title3 : string = 'De forma gratuita con limites.     ';

  pelicula_top : string = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png';
  title_pelicula_top : string = ' Pelicula mas taquillera de la semana.    '; 
  sub_pelicula_top :string =    '     Kung fu Panda 4 .     ';
}
