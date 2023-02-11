import { Component, Input, OnInit, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { News } from 'src/app/model/models';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {



  @Input() keywords!: string
  @Output() news!: News[]
  form!: FormGroup


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
    });
  }

  submit(): void {
    this.title = this.form.getRawValue();
    console.log(this.title);
    this.http.get('http://localhost:8000/api/news/', this.form.getRawValue())
    .subscribe((news: News[]) => {
        this.news = news;
    });
  }
}
