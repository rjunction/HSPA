import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Property } from 'src/app/model/Property';
import { HousingService } from 'src/app/services/housing.service';

@Injectable()
export class PropertyDetailResolverService implements Resolve<Property> {

constructor(private housingService : HousingService,private router :Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   Observable<any> {
    const propId=+route.params["id"]
    return this.housingService.getProperty(propId).pipe(
      catchError(error=>{
this.router.navigate(['/']);
return of(null);
      })
    );
  }

}
