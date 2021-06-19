// import chalk from 'chalk'
// import { logger } from '../wiston'
import { Logger } from '@nestjs/common';

export function LoggerMiddleware(req, _res, next) {
	// logger.debug(`💬  ${req.headers['user-agent']}`)
	Logger.debug(`💬  ${req.headers['user-agent'] ? req.headers['user-agent'].split(') ')[0] : req.headers})`, 'LOGGER', false);
	next();
}
