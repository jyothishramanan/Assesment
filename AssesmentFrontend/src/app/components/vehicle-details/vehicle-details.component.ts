import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { vehicleDetails } from 'src/app/data/vehicle';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent implements OnInit {
  public vehicleDetails: any;
  constructor(
    private vehicleService: VehicleService,
    private actRoute: ActivatedRoute,
    private apiconfigService: ApiConfigService
  ) {}
  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true);
    this.actRoute.paramMap.subscribe((params) => {
      const id = params.get('url');
      this.vehicleService.getVehicleDetailsWithNumber(id).subscribe(
        (result: any) => {
          this.vehicleDetails = result;
          this.apiconfigService.apiStatusIndicator.next(false);
        },
        (err) => {
          this.vehicleDetails = vehicleDetails[0];
          this.apiconfigService.apiStatusIndicator.next(false);
        }
      );
    });
  }
}
