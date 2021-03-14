import { CentreUserService } from './../services/CentreUser.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CentreUser } from '../models/CentreUser.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscri-centre',
  templateUrl: './inscri-centre.component.html',
  styleUrls: ['./inscri-centre.component.scss'],
})
export class InscriCentreComponent implements OnInit {
  public centres: CentreUser[] = [];

  constructor(private centreUserService: CentreUserService,
              private Router: Router,
              private toastr: ToastrService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.centreUserService.addUser(form.value).subscribe(
      (response: CentreUser) => {
        this.Router.navigate(['']);
        console.log(response);
        this.toastr.success('inscrit avec succée');
        form.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
