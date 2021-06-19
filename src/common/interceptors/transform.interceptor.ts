import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type Response<T> = {
	readonly data: T;
};

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
	intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
		return next.handle().pipe(map((data) => ({ data })));
	}
}
