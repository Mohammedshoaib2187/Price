import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() myData = {
    planTitle:"FREE",
      price:0,
      period:"month",
      user:{
        userAllowed:"Single User",
        active:true
      },
      storage:{
        size:5,
        active:true
      },
      publicProject:{
        publicProjectAllowed:"Unlimited",
        active:true
      },
      communityAccess:{
        communityAccess:"Community Access",
        active:true
      },
      UnlimitedPrivateProject:{
        PPAllowed:"Unlimited",
        active:true
      },
      phoneSupprt:{
        phoneSupportAllowed:"Dedicated",
        active:true
      },
      subdomain:{
        subdomainAllowed:"Free",
        active:true
      },
      statusReport:{
        reportPeriod:"Monthly",
        active:false
      }
  };
  constructor() { }

  ngOnInit(): void {
  }

}