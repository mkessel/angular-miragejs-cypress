import { Server, Model } from "miragejs";
import { startMirage } from "../../api/server";

let server;

describe("foo", () => {
  beforeEach(() => {
    server = startMirage({ environment: "test" });
    server.logging = true;
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should display signup form", () => {
    server.create("actor", {
      firstName: "foo1",
      lastName: "bar1"
    });
    cy.visit("/");
    cy.contains("foo1");
  });
});
