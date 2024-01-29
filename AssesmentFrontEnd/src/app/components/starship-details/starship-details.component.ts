import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent {
  public starshipDetails: any;
  constructor(
    private starshipService: StarshipService,
    private actRoute: ActivatedRoute,
    private apiconfigService: ApiConfigService
  ) {}
  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true);
    this.actRoute.paramMap.subscribe((params) => {
      const id = params.get('url');
      this.starshipService.getStarshipDetailsWithNumber(id).subscribe(
        (result: any) => {
          this.starshipDetails = result;
          this.apiconfigService.apiStatusIndicator.next(false);
        },
        (err) => {
          this.apiconfigService.apiStatusIndicator.next(false);
        }
      );
    });
  }
}
