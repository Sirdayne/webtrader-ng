import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.css']
})
export class OrderEntryComponent implements OnInit {
  form: FormGroup;
  periods = [1, 2, 3, 4, 5, 6, 7];
  sides = ['SELL', 'BUY'];
  types = ['LIMIT', 'IOC (FAK)', 'FOK'];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      security: ['', [Validators.required]],
      period: ['', [Validators.required]],
      side: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.getRawValue(), ' form');
  }
}
