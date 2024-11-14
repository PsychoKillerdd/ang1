import { Injectable } from '@angular/core';
import { Characters } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

console.log(uuid())
@Injectable({providedIn: 'root'})
export class DbzServices {

  public characters:Characters[] = [
    {
      id:uuid(),
      name:'Krillin',
      power:1000
    },
    {
      id:uuid(),
      name:'goku',
      power:9500

    },
    {
      id:uuid(),
      name:'vegeta',
      power:7500
    }
  ];
  onNewCharacter(character:Characters):void{


    const newCharacter:Characters = {id:uuid(),...character}

    this.characters.push(newCharacter);
  }
  deleteCharacterbyid(id:string){
    this.characters = this.characters.filter(character => character.id !== id )
  }

}
