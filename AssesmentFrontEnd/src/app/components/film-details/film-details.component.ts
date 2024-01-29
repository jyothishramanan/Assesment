import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent {
  public filmDetails: any;
  constructor(
    private filmService: FilmService,
    private actRoute: ActivatedRoute,
    private apiconfigService: ApiConfigService
  ) {}
  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true);
    this.actRoute.paramMap.subscribe((params) => {
      const id = params.get('url');
      this.filmService.getFilmDetailsWithNumber(id).subscribe(
        (result: any) => {
          this.filmDetails = result;
          this.apiconfigService.apiStatusIndicator.next(false);
        },
        (err) => {
         // this.filmDetails = filmDetails[0];
          this.apiconfigService.apiStatusIndicator.next(false);
        }
      );
    });
  }
}
