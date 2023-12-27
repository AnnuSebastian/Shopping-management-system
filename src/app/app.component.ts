import { Component } from '@angular/core';
import { AuthServiceService } from './Auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnguDemoApp';

  constructor(private authSvc:AuthServiceService){
    authSvc.logout();
  }

  isLoggedIn():boolean{
    return this.authSvc.isLoggedIn();
  }

  logout(){
    this.authSvc.logout();
  }

  
}
