import { Component, OnInit } from '@angular/core';
import { thing } from '../thing';
import { THINGS } from '../mockthings';

@Component({
    selector: 'app-things',
    templateUrl: './things.component.html',
    styleUrls: ['./things.component.scss']
})
/** thing component*/
export class ThingsComponent implements OnInit{
    /** thing ctor */
    constructor() {

  }

  things = THINGS;

  selectedThing: thing;

  onSelect(thing: thing): void {
    this.selectedThing = thing;
  }

  ngOnInit() {
    //pull saved things out of client memory
  }
}
