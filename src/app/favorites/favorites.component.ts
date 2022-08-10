import { Component, OnInit } from '@angular/core';
import {Post} from "../shared/interface";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  posts: Post[] = []
  searchText = ''

  constructor( ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    this.posts = [];
    const objectPosts: { [key: string]: Post } = JSON.parse(<string>localStorage.getItem('books')) as { [key: string]: Post };
    for (let post in objectPosts) {
      this.posts.push(objectPosts[post]);
    }
  }

  delBook() {
    this.getBook();

  }

}
