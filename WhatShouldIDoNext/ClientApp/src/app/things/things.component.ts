import { Component, OnInit } from '@angular/core';
import { thing } from '../thing';
import { ThingService } from '../thing.service';


@Component({
    selector: 'app-things',
    templateUrl: './things.component.html',
    styleUrls: ['./things.component.scss']
})
/** thing component*/
export class ThingsComponent implements OnInit{
    /** thing ctor */
    constructor(private thingService: ThingService) {

  }

  things: thing[];

  selectedThing: thing;

  onSelect(thing: thing): void {
    this.selectedThing = thing;
  }

  getThings(): void {
    this.thingService.getThings().subscribe(things  => this.things = things);
  }

  ngOnInit() {
    this.getThings();
    //pull saved things out of client memory
  }
}
