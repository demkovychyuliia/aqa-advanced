import axios from 'axios';

test('GET - Return valid users data', async () => {
  const response = await axios.get('https://dummyjson.com/users');

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data.users)).toBe(true);

  const user = response.data.users[0];

  expect(user).toHaveProperty('id');
  expect(user).toHaveProperty('firstName');
  expect(user).toHaveProperty('lastName');
  expect(user).toHaveProperty('email');

  expect(typeof user.id).toBe('number');
  expect(typeof user.firstName).toBe('string');
  expect(typeof user.lastName).toBe('string');
  expect(typeof user.email).toBe('string');
});

test('GET - Return valid user data', async () => {
  const response = await axios.get('https://dummyjson.com/users/1');

  expect(response.status).toBe(200);
  expect(response.data.id).toBe(1);

  expect(response.data).toHaveProperty('firstName');
  expect(response.data).toHaveProperty('lastName');
  expect(response.data).toHaveProperty('email');

  expect(typeof response.data.id).toBe('number');
  expect(typeof response.data.firstName).toBe('string');
  expect(typeof response.data.lastName).toBe('string');
  expect(typeof response.data.email).toBe('string');
});

test('POST - Create a new user', async () => {
  const newUser = {
    firstName: 'TestFirst1',
    lastName: 'TestLast1',
    email: 'testuser1@example.com',
  };

  const response = await axios.post('https://dummyjson.com/users/add', newUser);

  expect(response.status).toBe(201);
  expect(response.data.firstName).toBe(newUser.firstName);
  expect(response.data.lastName).toBe(newUser.lastName);
  expect(response.data.email).toBe(newUser.email);

  expect(typeof response.data.id).toBe('number');
  expect(typeof response.data.firstName).toBe('string');
  expect(typeof response.data.lastName).toBe('string');
  expect(typeof response.data.email).toBe('string');
});

test('POST - Create another user', async () => {
  const newUser = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
  };

  const response = await axios.post('https://dummyjson.com/users/add', newUser);

  expect(response.status).toBe(201);
  expect(response.data.firstName).toBe(newUser.firstName);
  expect(response.data.lastName).toBe(newUser.lastName);
  expect(response.data.email).toBe(newUser.email);

  expect(typeof response.data.id).toBe('number');
  expect(typeof response.data.firstName).toBe('string');
  expect(typeof response.data.lastName).toBe('string');
  expect(typeof response.data.email).toBe('string');
});

test('POST - Login successfully', async () => {
  const credentials = {
    username: 'emilys',
    password: 'emilyspass',
  };

  const response = await axios.post('https://dummyjson.com/user/login', credentials);

  expect(response.status).toBe(200);

  expect(response.data).toHaveProperty('id');
  expect(response.data).toHaveProperty('username');
  expect(response.data).toHaveProperty('email');
  expect(response.data).toHaveProperty('accessToken');

  expect(typeof response.data.id).toBe('number');
  expect(typeof response.data.username).toBe('string');
  expect(typeof response.data.email).toBe('string');
  expect(typeof response.data.accessToken).toBe('string');

  expect(response.data.username).toBe(credentials.username);
});
