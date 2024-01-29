import { Component } from '@angular/core';
import { ApiConfigService } from './services/api-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vehicle-management';
  public apiIndicator: boolean = false;
  constructor(private apiconfigService: ApiConfigService) {
    apiconfigService.apiStatusIndicator.subscribe(
      (res) => (this.apiIndicator = res)
    );
  }
}
