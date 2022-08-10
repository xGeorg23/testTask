import {Injectable} from "@angular/core";
import {Post} from "./interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime, pluck} from "rxjs";

interface IData {
  items: Post[]
}

@Injectable({providedIn: 'root'})
export class PostService {


  post!: Post;
  searchText = '';
  form: FormGroup = this.initForm();
  categories = 'fiction';
  reload = 5;
  newestRel = 'relevance';

  constructor(
    private http: HttpClient,
  ) {}

  getById(id: any): Post {
    const params = new HttpParams()
      .set('q', `${ this.form.get('categories')?.value }+intitle:${this.form.get('search')?.value}`)
      .set('maxResults', this.reload)
      .set('orderBy', this.newestRel)

    this.http.get<IData>('https://www.googleapis.com/books/v1/volumes', { params: params })
      .subscribe((posts: IData) => {
          this.post = <Post>posts.items.find(p => p.id === id);
    })
    return this.post;
  }

  initForm(): FormGroup {
    return new FormGroup({
      search: new FormControl(''),
      categories: new FormControl('fiction'),
    })
  }

  valueChangesSearch() {
    this.form.get('search')?.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => {
        console.log(value)
      });
  }

  valueChangesCategories() {
    this.form.get('categories')?.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  loadBooks() {
    this.reload += 5
  }

  newRel() {
    this.newestRel = this.newestRel === 'relevance'? 'newest' : 'relevance'
  }


}
