import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import chalk = require('chalk');
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		// console.log('TEST', context.getArgs()[3]);

		if (context.getArgs()[3]) {
			const parentType = context.getArgs()[3]['parentType'];

			const fieldName = chalk.hex('#87e8de').bold(`${context.getArgs()[3]['fieldName']}`);

			// Logger.debug(`⛩  ${parentType} » ${fieldName}`, 'GRAPHQL')

			return next.handle().pipe(
				tap(() => {
					Logger.debug(`⛩  ${parentType} » ${fieldName}`, 'GRAPHQL');
				})
			);
		} else {
			const parentType = chalk.hex('#87e8de').bold(`${context.getArgs()[0].route.path}`);

			const fieldName = chalk.hex('#87e8de').bold(`${context.getArgs()[0].route.stack[0].method}`);

			return next.handle().pipe(
				tap(() => {
					Logger.debug(`⛩  ${parentType} » ${fieldName}`, 'GRAPHQL');
				})
			);
		}
	}
}
