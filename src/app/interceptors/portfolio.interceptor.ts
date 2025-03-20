import { HttpInterceptorFn } from '@angular/common/http';

export const portfolioInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
