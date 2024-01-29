import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  public filmDetails: any;
  displayedColumns: string[] = [
    'slno',
    'title',
    'episode_id',
    'opening_crawl',
    'director',
    "producer",
    "release_date",
    'actions',
  ];
  public vehicleNumber: number = 0;
  constructor(private filmService: FilmService, private router: Router,private apiconfigService: ApiConfigService) {}

  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true)
    this.filmService.getFilmDetails().subscribe(
      (result: any) => {
        let { results } = result;
        this.filmDetails = results;
        this.apiconfigService.apiStatusIndicator.next(false)
      },
      (err) => {
        //this.vehicleDetails = vehicleDetails
        this.apiconfigService.apiStatusIndicator.next(false)
      }
    );
  }

  getFilmDetails(element: any) {
    debugger;
    console.log('element', element.url);
    this.router.navigate([`film/details`, { url: element.url }]);
  }
}
