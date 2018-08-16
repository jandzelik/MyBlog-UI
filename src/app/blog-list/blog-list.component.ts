import { Component, OnInit } from '@angular/core';
import { IblogList } from './iblog-list';
import { BlogListService } from './blog-list.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogList: IblogList[];

  constructor(private _blogListService: BlogListService) {

   }

  ngOnInit() {
    this.GetBlogs();
  }

  private GetBlogs(){
    this._blogListService.getBlogs()
      .subscribe((myBlogs: IblogList[]) => {
      this.blogList = myBlogs;
    }, 
    (error: any) => console.log("I have encountered an error " + error));
  }

}
