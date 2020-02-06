import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  //styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  readonly ROOT_URL = 'http://booksapi.test/api/books';

  posts: any;
  /*newPost: Observable<any>;*/

  constructor(private http: HttpClient) {}

  getBookBy() {
    //this.posts = this.http.get(this.ROOT_URL /*+ '/posts', { params, headers }*/)    
    //let params = new HttpParams().set('userId', '1');
    //let headers = new HttpHeaders().set('Authorization', 'auth-token');
  }

  ngOnInit() {
      this.posts = this.http.get(this.ROOT_URL /*+ '/posts', { params, headers }*/)    
  }

}
