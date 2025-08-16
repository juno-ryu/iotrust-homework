import withLangMiddleware from "@/shared/utils/middlewares/with-lang";
import { createMiddleware } from "@rescale/nemo";

const middlewares = {
  "{/*endpoint}": [withLangMiddleware],
};

const globalMiddlewares = {
  before: () => {},
  after: () => {},
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico).*)"],
};

export const middleware = createMiddleware(middlewares, globalMiddlewares);
