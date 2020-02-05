import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { startMirage } from "../api/server";
import { Server, Response } from "miragejs";

if (environment.production) {
  enableProdMode();
}

//@ts-ignore
if (window.Cypress) {
  // mirage cypress server
  let cyServer = new Server({
    environment: "test",
    routes() {
      this.namespace = "api";
      let methods = ["get", "put", "patch", "post", "delete"];
      methods.forEach(method => {
        this[method]("/*", async (schema, request) => {
          //@ts-ignore
          return new Response(...(await window.handleFromCypress(request)));
        });
      });
    }
  });
} else {
  startMirage();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
