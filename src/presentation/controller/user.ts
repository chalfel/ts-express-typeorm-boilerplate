export class UserController {
  findUser = (body: any) => {
    return { statusCode: 200, data: { message: 'Hello World ' } }
  };
}
