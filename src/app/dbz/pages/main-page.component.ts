import { Component} from '@angular/core';
import { Characters } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters:Characters[] = [
    {
      name:'Krillin',
      power:1000
    },
    {
      name:'goku',
      power:9500

    },
    {
      name:'vegeta',
      power:7500
    }
  ];
  onNewCharacter(character:Characters):void{
    this.characters.push(character);
  }
  onDeleteCharacter(index:number){
    this.characters.splice(index,1);
  }



}
