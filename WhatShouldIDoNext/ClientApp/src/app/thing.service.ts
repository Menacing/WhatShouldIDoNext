import { Injectable } from '@angular/core';
import { thing } from './thing';
import { THINGS } from './mockthings'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({providedIn: 'root',})
export class ThingService {

  constructor(private messageService: MessageService) { }

  getThings(): Observable<thing[]> {
    this.messageService.add('ThingService: fetched things');
    return of(THINGS);
  }

}
