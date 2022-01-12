import bunyan, { LogLevel } from 'bunyan';

export const logger = bunyan.createLogger({
    name: 'test-service',
    streams: [
        {
            stream: process.stdout,
            level: (process.env.LOG_LEVEL || 'info') as LogLevel,
        },
    ],
});

logger.info('test-service logger started');
