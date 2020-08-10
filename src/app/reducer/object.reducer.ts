import { createReducer, on } from '@ngrx/store'
import { add, minus, reset } from '@/actions/counter.actions'


export interface State {
    // name?: string;
    age: number
}

export const initialState: State = {
    age: 0,
};

const _objectReducer = createReducer(initialState,
    on(add, state => ({ ...state, age: state.age + 1 })),
    on(minus, state => ({ ...state, age: state.age - 1 })),
    on(reset, state => ({ ...state, age: 0 })),
);

export function objectReducer(state, action) {
    return _objectReducer(state, action)
}