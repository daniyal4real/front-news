import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/models';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  term = ''
  news$!: Observable<News[]>

  newsObject!: News


  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsObject = this.newsService.getTest()
    console.log(this.newsObject)
  }
}
