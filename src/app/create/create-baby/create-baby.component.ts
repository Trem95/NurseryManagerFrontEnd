import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { baby, createBaby } from 'src/app/entitiesModels/entitiesModels';
import { BabyService } from 'src/app/service/babyService/baby.service';
import { EncrDecrService } from 'src/app/service/encrDecrService/encr-decr.service';

@Component({
  selector: 'app-create-baby',
  templateUrl: './create-baby.component.html',
  styleUrls: ['./create-baby.component.css']
})
export class CreateBabyComponent implements OnInit {

  baby : createBaby
  constructor(
    private service : BabyService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  createBaby(value: NgForm){
    this.baby = {
      name: value.form.value.nameInput
    }

    this.service.createBaby(this.baby).subscribe();

    this.router.navigate(['baby']);
  }

}
