import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent {
  public peopleDetails: any;
  constructor(
    private peopleService: PeopleService,
    private actRoute: ActivatedRoute,
    private apiconfigService: ApiConfigService
  ) {}
  ngOnInit(): void {
    this.apiconfigService.apiStatusIndicator.next(true);
    this.actRoute.paramMap.subscribe((params) => {
      const id = params.get('url');
      this.peopleService.getPeopleDetailsWithNumber(id).subscribe(
        (result: any) => {
          this.peopleDetails = result;
          this.apiconfigService.apiStatusIndicator.next(false);
        },
        (err) => {
          this.peopleDetails = this.peopleDetails[0];
          this.apiconfigService.apiStatusIndicator.next(false);
        }
      );
    });
  }
}
