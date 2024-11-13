import { Component, Input,EventEmitter, Output } from '@angular/core';
import { Characters } from '../../interfaces/character.interface';
import { Index } from '../../interfaces/index.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input()
  public charactersList:Characters[] = [{
    name:'Trunk',
    power:10
  }]
  
  
  @Output()
  public onDelete:EventEmitter<number> = new EventEmitter();
 
  
  onDelateCharacter(index:number):void{
    this.onDelete.emit(index);
  }

}
