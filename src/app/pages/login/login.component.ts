import { Component } from '@angular/core';
import {AuthenRequest} from "../../model/authen-request";
import {AuthenResponse} from "../../model/authen-response";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string | undefined;
  public password: string | undefined;
  public loginWarning: string | null | undefined;
  authenResponse: AuthenResponse | null | undefined;
  public authenticateUrl: string = "http://localhost:8080/api/v1/authen/login";

  constructor(private http: HttpClient, private router: Router) {
  }



  public onSubmit() {
      const authen: AuthenRequest = new AuthenRequest(this.username, this.password);
      // @ts-ignore
      this.http.post(this.authenticateUrl, authen).subscribe((res: AuthenResponse) => {
        console.log(res);
        this.authenResponse = new AuthenResponse(res);
        console.log(this.authenResponse.token);
      });

  }
}
