import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../core/store/state/app.state';
import { Subscription } from 'rxjs';
import { selectCurrentUser } from '../../core/store/selectors/user.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.css']
})
export class OrderEntryComponent implements OnInit {
  form: FormGroup;
  periods = [1, 2, 3, 4, 5, 6, 7];
  sides = ['SELL', 'BUY'];
  types = ['LIMIT', 'MARKET IOC (FAK)', 'MARKET FOK'];
  subscription = new Subscription();

  constructor(private fb: FormBuilder,
              private store: Store<IAppState>) {
    this.form = fb.group({
      security: ['', [Validators.required]],
      period: ['', [Validators.required]],
      side: ['', [Validators.required]],
      type: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      investor: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.subscription.add(this.store.pipe(
      select(selectCurrentUser),
      filter(user => user !== null)
    ).subscribe(user => {
      console.log('current user from store: ', user);
    }));
  }

  onSubmit() {
    console.log(this.form.getRawValue(), ' form');
  }
}
