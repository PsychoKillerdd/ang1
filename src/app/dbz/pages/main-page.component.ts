import { Component} from '@angular/core';
import { Characters } from '../interfaces/character.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService:DbzServices){

  }
  get characters():Characters[]{
    return [...this.dbzService.characters];
  }

  ondelateCharacter(id:string):void{
    this.dbzService.deleteCharacterbyid(id);
  }
  onNewCharacter(character:Characters):void{
    this.dbzService.onNewCharacter(character)
  }

}
