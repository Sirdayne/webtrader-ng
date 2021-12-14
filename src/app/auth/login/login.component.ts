import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAppState } from '../../core/store/state/app.state';
import { Store } from '@ngrx/store';
import { setUser } from '../../core/store/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private store: Store<IAppState>) {
    this.form = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.store.dispatch(setUser( { user: {
      name: this.form.get('username')?.value,
      role: 'Trader'
    }}));
    if (this.form.valid) {
      this.router.navigateByUrl('/');
    }
  }

}
