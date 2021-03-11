import { CentreUserService } from './../services/CentreUser.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CentreUser } from '../models/CentreUser.model';

@Component({
  selector: 'app-inscri-centre',
  templateUrl: './inscri-centre.component.html',
  styleUrls: ['./inscri-centre.component.scss'],
})
export class InscriCentreComponent implements OnInit {
  public centres: CentreUser[] = [];

  constructor(private centreUserService: CentreUserService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.centreUserService.addCentreUsers(form.value).subscribe(
      (response: CentreUser) => {
        console.log(response);
        form.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
