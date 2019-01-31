import { Component} from '@angular/core';
import { ScrapeService } from '../../service/scrape.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private scrape:ScrapeService) {

      this.scrape.getScrape();



   }



}
