import {Pipe, PipeTransform} from "@angular/core";
import {Post} from "./interface";

@Pipe({
  name: 'searchBook'
})
export class SearchPipe implements PipeTransform {
  transform(posts: Post[], search =''): Post[] {
    if (!search.trim()) {
      return posts
    }
    return posts.filter(post => {
      return post.volumeInfo.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}