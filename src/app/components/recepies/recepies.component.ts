import { Component, OnInit } from '@angular/core';
import {Posts} from "./services/posts";
import {PostsService} from "./services/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.sass']
})
export class RecepiesComponent implements OnInit {
 posts: Posts[];
  constructor(private postService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.postService
      .getAll()
      .then(rezult => this.posts = rezult);
  }

  onSelect(selected: Posts) {
this.router.navigate(['recepies', selected.id]);
  }

}
