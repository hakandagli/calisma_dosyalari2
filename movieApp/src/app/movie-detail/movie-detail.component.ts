import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  // localhost:4200/detail/2

  @Input()movie:Movie | any;
  
  constructor(
    private movieService:MovieService,
    private route:ActivatedRoute,
    private location:Location
  ) { }
  
  ngOnInit(): void {
    this.getMovie();
  }

  getMovie():void{
    const id =  Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id)
        .subscribe(movie=>this.movie=movie);
   
  }

  save(){
    this.movieService.update(this.movie)
    .subscribe((res)=>{
      console.log(res);
      this.location.back();
    },(err)=>{
      console.log(err);
    })
  }

  

}
