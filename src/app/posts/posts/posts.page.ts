import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/servicios/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts= []
  constructor(private ps:PostService) { }

  ngOnInit() {
    this.ps.cargarDatos().subscribe(data=>{
      this.posts = data

    })
  }

}
