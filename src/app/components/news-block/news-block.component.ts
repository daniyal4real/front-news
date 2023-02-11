import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/model/models'

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {


  @Input() news!: News

  
  constructor() { }

  ngOnInit(): void {
  }

}
