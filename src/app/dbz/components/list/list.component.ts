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
  public onDelete:EventEmitter<string> = new EventEmitter();


  onDelateCharacter(id?:string):void{
    if(!id) return;
    console.log(id)
    this.onDelete.emit(id);
  }

}
