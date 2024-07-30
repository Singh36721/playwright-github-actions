import { expect, test } from '@playwright/test';

//using this variable globally

let userId;

//test.describe('API Testing Demo', () => {
test('GET Request', async ({ request }) => {
  //GET Request to fetch data

  const get_response = await request.get('https://reqres.in/api/users/?page=2');

  console.log(await get_response.json());

  //Expecting the appropiate status of the request

  expect(get_response.status()).toBe(200);
});

///POST REQUEST

test('POST Request', async ({ request }) => {
  //POST Request to fetch data

  const post_response = await request.post('https://reqres.in/api/users', {
    data: { name: 'Sujata Singh', job: 'Testing' },

    headers: { Accept: 'applicatoion/json' },
  });

  //Storing the result in a varibale
  const result = await post_response.json();
  console.log(result);

  //Expecting the appropiate status of the request

  expect(post_response.status()).toBe(201);

  //Assigning the result id in variable -> userID
  //Purpose: To update and delete the particular user in API
  userId = result.id;
});

/////PUT REQUEST

test('PUT Request', async ({ request }) => {
  //PUT Request to fetch data

  const put_response = await request.put('https://reqres.in/api/users', {
    data: { name: 'Sujata Singh', job: 'Testing- Automation' },

    headers: { Accept: 'applicatoion/json' },
  });

  //Log the raw reponse content
  console.log(await put_response.text());

  //Expecting the appropiate status of the request

  expect(put_response.status()).toBe(404);
});

//DELETE REQUEST

test('DELETE Request', async ({ request }) => {
  //DELETE Request to fetch data

  const delete_response = await request.delete(
    'https://reqres.in/api/users',
    +userId
  );

  //Expecting the appropiate status of the request

  expect(delete_response.status()).toBe(204);
});
//});
