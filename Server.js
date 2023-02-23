import {createServer, Model} from 'miragejs';

const carData = [
  {
    id: 1,
    registrationNo: 'ABC123',
    make: 'Toyota',
    model: 'Corolla',
    color: 'Red',
    year: '2022',
    price: '10000',
  },
  {
    id: 2,
    registrationNo: 'XYZ456',
    make: 'Honda',
    model: 'Civic',
    color: 'Blue',
    year: '2021',
    price: '12000',
  },
  {
    id: 3,
    registrationNo: 'DEF789',
    make: 'Ford',
    model: 'Mustang',
    color: 'Black',
    year: '2020',
    price: '25000',
  },
];
export function makeServer({environment = 'development'} = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      car: Model,
    },

    seeds(server) {
      server.db.loadData({
        cars: carData,
        user: [
          {
            id: 1,
            email: 'test1@gmail.com',
            password: 'password1',
          },
          {
            id: 2,
            email: 'test2@gmail.com',
            password: 'password2',
          },
        ],
      });
    },

    routes() {
      this.namespace = 'api';

      this.post('/login', (schema, request) => {
        let {email, password} = JSON.parse(request.requestBody);

        let user = schema.users.findBy({email, password});

        if (!user) {
          return new Response(401, {}, {message: 'Invalid email or password'});
        }

        return {token: 'access-token'};
      });

      this.post('/signup', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let user = schema.users.create(attrs);
        return {token: 'access-token'};
      });
      this.get('/cars', (schema, request) => {
        const {make, model, year, color, registrationNo} = request.queryParams;
        let cars = schema.cars.all();

        if (make) {
          cars = cars.filter(car =>
            car.make.toLowerCase().includes(make.toLowerCase()),
          );
        }

        if (model) {
          cars = cars.filter(car =>
            car.model.toLowerCase().includes(model.toLowerCase()),
          );
        }

        if (year) {
          cars = cars.filter(car => car.year == year);
        }

        if (color) {
          cars = cars.filter(car =>
            car.color.toLowerCase().includes(color.toLowerCase()),
          );
        }

        if (registrationNo) {
          cars = cars.filter(car =>
            car.registrationNo
              .toLowerCase()
              .includes(registrationNo.toLowerCase()),
          );
        }

        return cars;
      });

      this.post('/cars', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let car = schema.cars.create(attrs);
        return car;
      });

      this.patch('/cars/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let car = schema.cars.find(id);
        car.update(attrs);
        return car;
      });

      this.delete('/cars/:id', (schema, request) => {
        let id = request.params.id;
        let car = schema.cars.find(id);
        car.destroy();
        return new Response(204);
      });
    },
  });

  return server;
}
