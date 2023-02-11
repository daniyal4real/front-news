import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {News} from "../../model/models";
import {NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  @Input() news!: News
  id: any
  data: any

  constructor(
    //private newsService: NewsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    // this.getMovieDetailById(this.id)
  }

  // getMovieDetailById(id: number): void {
  //   this.newsService.getById(this.id)
  //     .subscribe(res => {
  //       this.data = res
  //       this.news = this.data
  //     })
  // }
}
