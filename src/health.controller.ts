import { Controller, Get } from '@nestjs/common';
import { HttpHealthIndicator, HealthCheck, HealthCheckService } from '@nestjs/terminus';
const os = require('os');

@Controller('health')
export class HealthController {
	constructor(private readonly health: HealthCheckService, private readonly dns: HttpHealthIndicator) {}

	@Get()
	@HealthCheck()
	check() {
		return this.health.check([() => this.dns.pingCheck('google', `https://google.com`)]);
	}

	@Get('/memory')
	checkMemory(){
		const used = process.memoryUsage();

		const all = Object.entries(used).map(([k, v]: [string, number]) => {
			// console.log(`${k} -> ${Math.round((v / 1024 / 1024) * 100) / 100} mb`);
			return `${k} -> ${Math.round((v / 1024 / 1024) * 100) / 100} mb`
		});

		// console.log(all);

		const usedMemory = os.totalmem() - os.freemem(), totalMemory = os.totalmem();

		return {
			memoryUsed: `Memory used in GB, ${(usedMemory / Math.pow(1024, 3)).toFixed(2)}`,
			usedMemory: `${ ((usedMemory / totalMemory) * 100).toFixed(2)}'%'`,
			details:all
		}

	}
}
