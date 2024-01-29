import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent {
  public starshipDetails: any;
  displayedColumns: string[] = [
    'slno',
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'max_atmosphering_speed',
    'crew',
    'cargo_capacity',
    'starship_class',
    'consumables',
    'hyperdrive_rating',
    'actions',
  ];
  public vehicleNumber: number = 0;
  constructor(private starshipService: StarshipService, private router: Router,private apiconfigService: ApiConfigService) {}

  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true)
    this.starshipService.getStarshipDetails().subscribe(
      (result: any) => {
        let { results } = result;
        this.starshipDetails = results;
        this.apiconfigService.apiStatusIndicator.next(false)
      },
      (err) => {
        this.apiconfigService.apiStatusIndicator.next(false)
      }
    );
  }

  getStarshipDetails(element: any) {
    debugger;
    console.log('element', element.url);
    this.router.navigate([`starship/details`, { url: element.url }]);
  }
}
