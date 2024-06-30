// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/auth/services/session.server";
import type { InsertUser } from "~/db/schema";
import { googleStrategy } from "../strategies/google.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator<InsertUser>(sessionStorage);
authenticator.use(googleStrategy);
