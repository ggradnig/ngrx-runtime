/* Reducer */

import {withEffects} from '../lib/functions';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ActionsOf, StateWithEffects} from '../public-api';
import {createAction} from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class TestService {
  performSideEffect(): Observable<void> {
    return of(void 0);
  }
}

export function reducer(state: 1 | 2 | 3 = 1, action: ActionsOf<typeof Actions>): StateWithEffects<1 | 2 | 3> {
  switch (action.type) {
    case Actions.init.type:
      return withEffects(state, {
        operation: (inject) => inject(TestService).performSideEffect(),
        next: () => Actions.next()
      });
    case Actions.next.type:
      return 2 as const;
    case Actions.last.type:
      return state === 2 ? 3 : state;
  }
}

export const Actions = {
  init: createAction('init'),
  next: createAction('next'),
  last: createAction('last')
};