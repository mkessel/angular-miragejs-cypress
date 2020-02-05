import { Server, Model } from 'miragejs';

export function startMirage({ environment = "development" } = {}) {
  return new Server({
    environment,

    models: {
      actor: Model
    },

    seeds(server) {
      server.create('actor', {
        firstName: 'foo',
        lastName: 'bar',
      });
    },

    routes() {
      this.namespace = 'api';
      this.get('foo', schema => schema.db.actors.find('1'));
      this.passthrough();
    }
  });
}
