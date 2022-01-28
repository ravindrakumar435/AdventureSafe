import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastrService: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let token;
    token = localStorage.getItem("token");
    req = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + token),
    });
    return next.handle(req).pipe(
      //retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.toastrService.error(error.error.message);
        }
        // console.log(error.error.message, "errormsg");

        // alert(`HTTP Error: ${req.url}`);
        return throwError(error);
      })
    );
  }
}
