import { Injectable } from '@angular/core';
import { SpinnerServiceService } from './services/spinner-service.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';


@Injectable()
export class CustomHTTPIntercptor implements HttpInterceptor{

  constructor(private spinnerService: SpinnerServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerService.show();

    return next
    .handle(req)
    .pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinnerService.hide();
        }
      },
      (error) => {
        this.spinnerService.show();
      }
      ),
      retry(1),
      catchError(( error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
          this.spinnerService.hide();
        } else {
          errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
          this.spinnerService.hide();
        }
        window.alert(errorMsg);
        return throwError(errorMsg);
      }
      )
    );
  }

}
