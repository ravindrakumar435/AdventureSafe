import { variable } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/api/services/authservice/auth.service";
import { HttpService } from "src/app/api/services/authservice/http.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private http: HttpService,
    private router: Router
  ) {
    this.signupForm = this.fb.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: [
          "",
          [
            Validators.required,
            Validators.email,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
          ],
        ],
        password: ["", [Validators.required, Validators.minLength(8)]],

        phoneNumber: [
          "",
          [
            Validators.required,
            Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
          ],
        ],

        confirmPassword: ["", Validators.required],
      },
      {
        validator: this.http.MatchPassword(
          "new_password",
          "confirm_new_password"
        ),
      }
    );
  }

  ngOnInit(): void {}
  get f() {
    return this.signupForm.controls;
  }

  login() {
    this.router.navigateByUrl("/");
  }

  signUp() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
  }
}
