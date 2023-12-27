import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { inject } from '@angular/core';

export const routeAuthGuard: CanActivateFn = (route, state) => { //created a guard inside the arrow function

  return inject(AuthServiceService).isLoggedIn(); //returns the function of service class
  //return true;
};
