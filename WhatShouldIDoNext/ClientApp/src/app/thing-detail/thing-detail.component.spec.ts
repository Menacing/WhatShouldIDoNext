/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ThingDetailComponent } from './thing-detail.component';

let component: ThingDetailComponent;
let fixture: ComponentFixture<ThingDetailComponent>;

describe('thing-detail component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ThingDetailComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ThingDetailComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});