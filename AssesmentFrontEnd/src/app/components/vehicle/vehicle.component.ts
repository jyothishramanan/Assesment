import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { vehicleDetails } from 'src/app/data/vehicle';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  public vehicleDetails: any;
  displayedColumns: string[] = [
    'slno',
    'name',
    'model',
    'manufacturer',
    'passengers',
    'actions',
  ];
  public vehicleNumber: number = 0;
  constructor(private vehicleService: VehicleService, private router: Router,private apiconfigService: ApiConfigService) {}

  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true)
    this.vehicleService.getVehicleDetails().subscribe(
      (result: any) => {
        let { results } = result;
        this.vehicleDetails = results;
        this.apiconfigService.apiStatusIndicator.next(false)
      },
      (err) => {
        this.vehicleDetails = vehicleDetails
        this.apiconfigService.apiStatusIndicator.next(false)
      }
    );
  }

  getVehicleDetails(element: any) {
    debugger;
    console.log('element', element.url);
    this.router.navigate([`vehicle/details`, { url: element.url }]);
  }
}
