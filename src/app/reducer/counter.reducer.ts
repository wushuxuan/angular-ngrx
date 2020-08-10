import { reduceState } from "@ngrx/store"

import { createReducer, on } from '@ngrx/store';
import { add, minus, reset } from '@/actions/counter.actions';

export const initialState = 20;

const _counterReducer = createReducer(initialState,
    on(add, state => {
        if (state + 1 >=10) {
            return state = 0   //加到10，重置0
        } else {
            return state = state + 1
        }
    }),
    on(minus, state => state - 1),
    on(reset, state => 0),
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}