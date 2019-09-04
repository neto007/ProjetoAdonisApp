const {test, trait} = use('Test/Suite')('Session');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factore = use('Factory')


/**@type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');


trait('Test/ApiClient')

test('it shoutld return  JWT token when session created', async ({ assert,client }) => {

  const sessionsPayload = {
    email:'salvador.dilio@gmail.com',
    password: '132456'
  }

  const user = await Factore
    .model('App/Models/User')
    .create(sessionsPayload)

  const response = await client
    .post('/sessions')
    .send({
      email: 'salvador.dilio@gmail.com',
      password: '132456'
    })
    .end()

  response.assertStatus(200);
  assert.exists(response.body.token)
});
