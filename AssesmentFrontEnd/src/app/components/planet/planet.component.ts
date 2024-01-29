import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  public planetDetails: any;
  displayedColumns: string[] = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'actions'
    
  ];
  public vehicleNumber: number = 0;
  constructor(private planetService: PlanetService, private router: Router,private apiconfigService: ApiConfigService) {}

  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true)
    this.planetService.getPlanetDetails().subscribe(
      (result: any) => {
        let { results } = result;
        this.planetDetails = results;
        this.apiconfigService.apiStatusIndicator.next(false)
      },
      (err) => {
        //this.peopleDetails = peopleDetails
        this.apiconfigService.apiStatusIndicator.next(false)
      }
    );
  }

  getPlanetDetails(element: any) {
    debugger;
    console.log('element', element.url);
    this.router.navigate([`planet/details`, { url: element.url }]);
  }
}
