// File removed. Backend logic moved to /backend
import { Response } from "miragejs";
const { signup, login } = require("../utils/userFileAuth");
/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, email, password}
 * */

export const signupHandler = function (schema, request) {
  const { email, password, firstName, lastName, isAdmin } = JSON.parse(request.requestBody);
  try {
    const result = signup({ email, password, firstName, lastName, isAdmin });
    if (!result.success) {
      return new Response(422, {}, { errors: [result.message] });
    }
    return new Response(201, {}, { user: result.user });
  } catch (error) {
    return new Response(500, {}, { error });
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {email, password}
 * */

export const loginHandler = function (schema, request) {
  const { email, password } = JSON.parse(request.requestBody);
  try {
    const result = login({ email, password });
    if (!result.success) {
      return new Response(401, {}, { errors: [result.message] });
    }
    const user = { ...result.user };
    delete user.password;
    return new Response(200, {}, { user });
  } catch (error) {
    return new Response(500, {}, { error });
  }
};