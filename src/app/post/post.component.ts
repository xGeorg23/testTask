import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../shared/interface";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input() icon = false
  @Input() post!: Post;
  @Input() flag = true;
  @Output() onDelete = new EventEmitter<Post>()


  constructor() { }

  ngOnInit(): void {
    const books: { [key: string]: Post } = JSON.parse(<string>localStorage.getItem('books'));
    Object.keys(books).find((book: any) => {
      if (book === this.post.id) {
        this.icon = true;
      }
    })
  }


  setFavorites(): any {
    const books: { [key: string]: Post } = JSON.parse(<string>localStorage.getItem('books')) as { [key: string]: Post };
    if (books) {
      let isExist = books[this.post.id + ''];
      this.icon = true

      if(!isExist) {
        books[this.post.id + ''] = this.post;
        localStorage.setItem('books', JSON.stringify(books));
      }

    } else {
      localStorage.setItem('books', JSON.stringify({[this.post.id + '']: this.post}));
    }
  }


  deleteBook() {
    this.icon = false
    const books: { [key: string]: Post } = JSON.parse(<string>localStorage.getItem('books')) as { [key: string]: Post };
    delete books[this.post.id + ''];
    localStorage.setItem('books', JSON.stringify(books));
    this.onDelete.emit();
  }

}


