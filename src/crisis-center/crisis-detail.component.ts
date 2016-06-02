import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';
import { DialogService } from '../dialog.service';

@Component({
  template: `
  <div *ngIf="crisis">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
  styles: ['input {width: 20em}']
})

export class CrisisDetailComponent implements OnInit, OnDestroy {
  crisis: Crisis;
  editName: string;
  private sub: any;

  constructor(
    private service: CrisisService,
    private router: Router,
    private dialog: DialogService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        let id =+ params['id'];
        this.service.getCrisis(id)
          .then(crisis => {
            if (crisis) {
              this.editName = crisis.name;
              this.crisis = crisis;
            } else { // id not found
              this.gotoCrises();
            }
          });
      });
  }

  /*routerCanDeactivate(): any {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialog.confirm('Discard changes?');
  }*/

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the hero id if available
    // so that the CrisisListComponent can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    // Absolute link
    //this.router.navigateByUrl(`/crisis-center/home;foo=foo?id=${crisisId}`);

    // Relative link
    this.router.navigate(['../', {foo: 'foo'}], { relativeTo: this.route, queryParameters: { id: crisisId } });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
