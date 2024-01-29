import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent {
  public planetDetails: any;
  constructor(
    private planetService: PlanetService,
    private actRoute: ActivatedRoute,
    private apiconfigService: ApiConfigService
  ) {}
  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true);
    this.actRoute.paramMap.subscribe((params) => {
      const id = params.get('url');
      this.planetService.getPlanetDetailsWithNumber(id).subscribe(
        (result: any) => {
          this.planetDetails = result;
          this.apiconfigService.apiStatusIndicator.next(false);
        },
        (err) => {
          //this.planetDetails = planetDetails[0];
          this.apiconfigService.apiStatusIndicator.next(false);
        }
      );
    });
  }
}
