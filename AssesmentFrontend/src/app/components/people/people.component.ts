import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  public peopleDetails: any;
  displayedColumns: string[] = [
    'name',
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'birth_year',
    'gender',
    'actions',
    'aggregate'
    
  ];
  public vehicleNumber: number = 0;
  constructor(private peopleService: PeopleService, private router: Router,private apiconfigService: ApiConfigService) {}

  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true)
    this.peopleService.getPeopleDetails().subscribe(
      (result: any) => {
        let { results } = result;
        this.peopleDetails = results;
        this.apiconfigService.apiStatusIndicator.next(false)
      },
      (err) => {
        //this.peopleDetails = peopleDetails
        this.apiconfigService.apiStatusIndicator.next(false)
      }
    );
  }

  getPeopleDetails(element: any) {
    debugger;
    console.log('element', element.url);
    this.router.navigate([`people/details`, { url: element.url }]);
  }
  getPeopleAggregateDetails(element: any) {
    debugger;
    console.log('element', element.url);
    this.router.navigate([`peopleaggregate`, { url: element.url }]);
  }
  
}
