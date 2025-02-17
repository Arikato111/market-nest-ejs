import { NextFunction, Request, Response } from 'express';

export function DefaultHeaders(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.header(
    'Content-Security-Policy',
    "script-src-elem 'none'; script-src 'none'; object-src 'none'; font-src 'none'",
  );
  next();
}
