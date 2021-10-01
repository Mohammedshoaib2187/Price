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
        active:false
      },
      phoneSupprt:{
        phoneSupportAllowed:"Dedicated",
        active:false
      },
      subdomain:{
        Allowed:"Free",
        active:false
      },
      statusReport:{
        report:"Monthly",
        active:false
      }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
