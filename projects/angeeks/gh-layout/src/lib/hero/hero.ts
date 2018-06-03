import { Input, Component } from '@angular/core';

@Component({
  selector: 'ngk-hero',
  templateUrl: 'hero.html',
  styleUrls: ['hero.scss']
})
export class HeroComponent {
  @Input() logo = 'https://angeeks.github.io/assets/angeeks.png';
  @Input() title = '';
  @Input() desc = '';
}
