import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { AuthService } from "src/app/api/services/authservice/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.loginForm.controls;
  }
  signup() {
    this.router.navigateByUrl("/session/signUp");
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let obj = {
      email: this.loginForm.value?.email,
      password: this.loginForm.value.password,
    };

    console.log(obj, "rk obj");

    this.service.signIn(obj).subscribe((res: any) => {
      console.log(res, "rk-res");
      console.log(res.message, "res.message");

      this.toastrService.success(res.message);
      this.router.navigateByUrl("/main");
      localStorage.setItem("token", res.token);
    });
  }
}
