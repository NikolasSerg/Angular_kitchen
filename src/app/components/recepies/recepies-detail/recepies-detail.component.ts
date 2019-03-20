import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Route} from "@angular/router";
import {PostsService} from "../services/posts.service";
import {Posts} from "../services/posts";

@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrls: ['./recepies-detail.component.sass']
})
export class RecepiesDetailComponent implements OnInit {
post: Posts;
  constructor(private router: Route,
              private activatedRoute: ActivatedRoute,
              private service: PostsService) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      this.service
        .getPost(id)
        .then(result => this.post = result);
    })
  }

  goBackRecepiesList() {
    this.router.navigate(['recepies']);
  }
}
