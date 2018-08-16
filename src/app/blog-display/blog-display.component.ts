import { Component, OnInit } from '@angular/core';
import { BlogDisplayService } from './blog-display.service';
import { IblogDisplay } from './iblog-display';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-display',
  templateUrl: './blog-display.component.html',
  styleUrls: ['./blog-display.component.css']
})
export class BlogDisplayComponent implements OnInit {

  blogDisplay: IblogDisplay;
  safeLocationUrl: SafeResourceUrl;

  constructor(
    private _blogDisplayService: BlogDisplayService, 
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) 
    {

    }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.GetBlogs(id);
  }

  private GetBlogs(id: number){
    this._blogDisplayService.getBlogById(id)
      .subscribe((myBlog: IblogDisplay) => {
      this.blogDisplay = myBlog;
      this.safeLocationUrl = this.transform(this.blogDisplay.locationUrl);
      console.log("The safe url is " + this.safeLocationUrl);
    }, 
    (error: any) => console.log(error));
  }

  private transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
