import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UserService {
  token: any =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzdXBlcmFkbWluQGJsZW5kZWRzZW5zZS5jb20iLCJpYXQiOjE2MzgzMzQyOTUsImV4cCI6MTYzODkzOTA5NX0.MMXGcY4uRIxaiFsaxjvcndeoZ4pNvLgG3QU7J_FQJ2Y";

  constructor(private http: HttpClient, private router: Router) {}

  UserData() {
    let headers = new HttpHeaders();
    headers = headers
      .set("Authorization", "Bearer  " + this.token)
      .set("client-id", "4CD884F88F476F647CC4446D4593D")
      .set("client-secret", "A955BEBD27BFC49E8CE12129346A4");
    return this.http.get(
      "http://34.194.167.104/api/admin/users/users_role_list?role=creative&perPage=ALL&orderBy=ASC&sortBy=firstName&status=&searchBy",
      { headers: headers }
    );
  }

  mockData() {
    return this.http.get("https://61adb12ad228a9001703aeb9.mockapi.io/users");
  }
}
