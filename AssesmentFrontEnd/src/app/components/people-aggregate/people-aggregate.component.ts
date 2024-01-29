import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-aggregate',
  templateUrl: './people-aggregate.component.html',
  styleUrls: ['./people-aggregate.component.css']
})
export class PeopleAggregateComponent {

  public peopleDetails: any;
  public vehicleResults:any;
  public filmResults:any;
  constructor(
    private peopleService: PeopleService,
    private actRoute: ActivatedRoute,
    private apiconfigService: ApiConfigService
  ) {}
  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true);
    this.actRoute.paramMap.subscribe((params) => {
      const id = params.get('url');
      this.peopleService.getPeopleAggregateDetails(id).subscribe(
        (result: any) => {
          this.peopleDetails = result.people;
          this.vehicleResults=result.vehicleResult;
          this.filmResults=result.filimResult;
          this.apiconfigService.apiStatusIndicator.next(false);
        },
        (err) => {
          this.peopleDetails = this.peopleDetails[0];
          this.apiconfigService.apiStatusIndicator.next(false);
        }
      );
    });
  }

  // public peopleDetails: any;
  // public vehicleResults:any;
  // displayedColumns: string[] = [
  //   'name',
  //   'height',
  //   'mass',
  //   'hair_color',
  //   'skin_color',
  //   'birth_year',
  //   'gender',
  //   'actions'
    
  // ];
  // public vehicleNumber: number = 0;
  // constructor(private peopleService: PeopleService, private router: Router,private apiconfigService: ApiConfigService) {}

  // ngOnInit(): void 
  // {

  //   this.apiconfigService.apiStatusIndicator.next(true);
  //   this.actRoute.paramMap.subscribe((params) => {
  //     const id = params.get('url');
  //     this.peopleService.getPeopleDetailsWithNumber(id).subscribe(
  //       (result: any) => {
  //         this.peopleDetails = result;
  //         this.apiconfigService.apiStatusIndicator.next(false);
  //       },
  //       (err) => {
  //         this.peopleDetails = this.peopleDetails[0];
  //         this.apiconfigService.apiStatusIndicator.next(false);
  //       }
  //     );
  //   });


  //   //
  //   this.apiconfigService.apiStatusIndicator.next(true)
  //   this.peopleService.getPeopleAggregateDetails().subscribe(
  //     (result: any) => {
  //       debugger;
  //       let { results } = result.people;
  //       this.peopleDetails = results;
  //       this.vehicleResults=result.vehicleResult;
  //       this.apiconfigService.apiStatusIndicator.next(false)
  //     },
  //     (err) => {
  //       //this.peopleDetails = peopleDetails
  //       this.apiconfigService.apiStatusIndicator.next(false)
  //     }
  //   );
  // }

  // getPeopleDetails(element: any) {
  //   debugger;
  //   console.log('element', element.url);
  //   this.router.navigate([`people/details`, { url: element.url }]);
  // }
}
