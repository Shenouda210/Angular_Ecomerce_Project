import { SharedService } from 'src/app/app2/Services/shared.service';
import { Component, OnInit, Input } from '@angular/core';
import { IAlert } from 'src/app/app2/ViewModel/IAlert';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  approvalText: string = "";

  @Input()
  public alerts: Array<IAlert> = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(msg => this.cartItemCount = msg);

  }

}
