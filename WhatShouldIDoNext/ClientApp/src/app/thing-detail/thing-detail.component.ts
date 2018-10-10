import { Component, OnInit, Input } from '@angular/core';
import { thing } from '../thing';

@Component({
    selector: 'app-thing-detail',
    templateUrl: './thing-detail.component.html',
    styleUrls: ['./thing-detail.component.scss']
})
/** thing-detail component*/
export class ThingDetailComponent implements OnInit {
    @Input() thing: thing;
    /** thing-detail ctor */
    constructor() { }
  ngOnInit() { }
}
