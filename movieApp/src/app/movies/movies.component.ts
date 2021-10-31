import { Component,OnInit } from "@angular/core";
import { Movie } from "../movie";

import { MovieService } from "../movie.service";


@Component({
    selector:'movies',
    templateUrl:'movies.component.html',
    styles:['.badge {color:blue}', 
    '.list-group-item{display:flex; flex-direction:row; justify-content:space-between; align-items:space-between;}',
    '.close{ font-size:30px}'

]
})
export class MoviesComponent implements OnInit{

    constructor(
        private movieService:MovieService
    ){}

    ngOnInit():void{
        this.getMovies();
    }

    title="hakan";

    getTitle(){
        return this.title;
    }

    movies!:Movie[];

    selectedMovie!:Movie;

    onSelect(movie:Movie):void{
        this.selectedMovie=movie;
    }

    getMovies():void{
        this.movieService.getMovies().subscribe(movies=>
            this.movies=movies);
    }

    add(name:string, imageUrl:string, description:string):void{
       this.movieService.add({
           name,
           imageUrl,
           description
       } as Movie).subscribe(movie=>this.movies.push(movie));
    }

    delete(movie:Movie):void{
        this.movies=this.movies.filter(m=>m!==movie);
        this.movieService.delete(movie).subscribe();
    }
}