import axios from 'axios';

test('GET - Return valid posts list', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);

  const post = response.data[0];

  expect(post).toHaveProperty('userId');
  expect(post).toHaveProperty('id');
  expect(post).toHaveProperty('title');
  expect(post).toHaveProperty('body');

  expect(typeof post.userId).toBe('number');
  expect(typeof post.id).toBe('number');
  expect(typeof post.title).toBe('string');
  expect(typeof post.body).toBe('string');
});

test('GET - Return valid post data', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status).toBe(200);

  expect(response.data).toEqual({
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  });
});

test('GET - Return posts for user 1', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);

  response.data.forEach((post) => {
    expect(post.userId).toBe(1);
    expect(typeof post.id).toBe('number');
    expect(typeof post.title).toBe('string');
    expect(typeof post.body).toBe('string');
  });
});

test('POST - Create a new post', async () => {
  const newPost = {
    title: 'QA Automation Test',
    body: 'Testing API with Axios and Jest',
    userId: 1,
  };

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

  expect(response.status).toBe(201);

  expect(response.data).toMatchObject(newPost);
  expect(typeof response.data.id).toBe('number');
});

test('POST - Create a post with specific user', async () => {
  const newPost = {
    title: 'Playwright and API Testing',
    body: 'Learning API testing with Axios and Jest',
    userId: 5,
  };

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

  expect(response.status).toBe(201);
  expect(response.data.userId).toBe(5);
  expect(response.data.title).toBe('Playwright and API Testing');
  expect(response.data.body).toBe('Learning API testing with Axios and Jest');
  expect(response.data).toHaveProperty('id');
  expect(typeof response.data.id).toBe('number');
});
