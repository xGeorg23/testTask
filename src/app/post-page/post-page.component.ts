import {Component, OnInit} from '@angular/core';
import {Post} from "../shared/interface";
import {ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../shared/post.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post!: Post

  constructor(
    private route: ActivatedRoute,
    private postsService: PostService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post = <Post>this.postsService.getById(params['id']);
      }
    )
  }

}
