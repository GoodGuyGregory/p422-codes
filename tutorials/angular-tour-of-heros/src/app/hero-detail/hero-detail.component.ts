import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService} from '../hero.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getHero();
  }
//  recieves a hero object from the imported hero component
  @Input() hero: Hero;

  getHero(): void {
    //  gets the hero id from the router
    // '+' converts the string returned to a number for retrieval
    const id = +this.route.snapshot.paramMap.get('id');
    //  passes the id into the heroService to retrieve that hero 
    this.heroService.getHeroes(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
