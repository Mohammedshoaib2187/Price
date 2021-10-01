import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricecard';

  cards=[
    {
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
    },
    {
      planTitle:"PLUS",
      price:9,
      period:"month",
      user:{
        userAllowed:"5 Users",
        active:true
      },
      storage:{
        size:50,
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
        Allowed:"Free",
        active:true
      },
      statusReport:{
        report:"Monthly",
        active:false
      }

    },
    {
      planTitle:"PRO",
      price:49,
      period:"month",
      user:{
        userAllowed:"Unlimited Users",
        active:true
      },
      storage:{
        size:150,
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
        Allowed:"Unlimited Free",
        active:true
      },
      statusReport:{
        report:"Monthly",
        active:true
      }

    }
    
  ]
}
