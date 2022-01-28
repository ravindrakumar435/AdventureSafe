import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/session/signIn",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "session",
        loadChildren: () =>
          import("./auth/auth.module").then((m) => m.AuthModule),
      },
    ],
  },

  {
    path: "main",
    loadChildren: () => import("./main/main.module").then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
