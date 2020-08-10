import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, minus, reset } from '@/actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.less']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;
  preson$:Observable<any>

  constructor(private store: Store<{ count: number }>,private storeObj: Store<{name:string,age:number}>) {
    this.count$ = store.pipe(select('count')); //这里关键点，在于app.module.ts注册时候的key
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(add());
  }

  decrement() {
    this.store.dispatch(minus());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
