// import {Component, OnInit} from '@angular/core';
// import {Post} from "../shared/interface";
// import {HttpClient, HttpParams} from "@angular/common/http";
// import {debounceTime, delay, pluck} from "rxjs";
// import { FormControl, FormGroup} from "@angular/forms";
//
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//
//   posts: Post[] = [];
//   searchText = '';
//   form: FormGroup = this.initForm();
//   categories = 'fiction';
//   reload = 5;
//   newestRel = 'relevance';
//
//   constructor(
//     private http: HttpClient,
//   ) { }
//
//   ngOnInit(): void {
//     this.fetchBooks();
//     this.valueChangesCategories();
//     this.valueChangesSearch();
//     this.loadBooks()
//   }
//
//   fetchBooks() {
//     const params = new HttpParams()
//       .set('q', `${ this.form.get('categories')?.value }+intitle:${this.form.get('search')?.value}`)
//       .set('maxResults', this.reload)
//       .set('orderBy', this.newestRel)
//
//     this.http.get<Post[]>('https://www.googleapis.com/books/v1/volumes', { params: params })
//       .pipe(delay(400),
//         pluck('items')).subscribe(objKey => {
//       this.posts = <Post[]>objKey
//     });
//
//   }
//
//   initForm(): FormGroup {
//     return new FormGroup({
//       search: new FormControl(''),
//       categories: new FormControl('fiction'),
//     })
//   }
//
//   valueChangesSearch() {
//     this.form.get('search')?.valueChanges
//       .pipe(debounceTime(300))
//       .subscribe(value => {
//       console.log(value)
//       this.fetchBooks();
//     });
//   }
//
//   valueChangesCategories() {
//     this.form.get('categories')?.valueChanges.subscribe(value => {
//       console.log(value);
//       this.fetchBooks();
//     });
//   }
//
//   loadBooks() {
//     this.reload += 5
//     this.fetchBooks()
//   }
//
//   newRel() {
//     this.newestRel = this.newestRel === 'relevance'? 'newest' : 'relevance'
//     this.fetchBooks()
//   }
//
// }
