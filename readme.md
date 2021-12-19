# CB Logit

A simple client logging library to send standardized log format to a specified URL with a specified API Key. The api key will be appended to the "Authorization" header as "Bearer <API_KEY>"

The logger method handleLog accepts two arguments:
Logger.handleLog([..logs], LOG_LEVEL);

the log argument can be an array of json, strings, numbers, etc, mixed content is fine. 
the LOG_LEVEL argument must be one of these log levels TRACE, DEBUG, INFO, WARN, ERROR, FATAL

for typescript helper
```
export enum LOG_LEVEL {
  TRACE = 'TRACE',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL'
}
```

## Usage

```
import * as logit from 'cb-logit';
const Logger = new logit('your_api_key', 'http://someapi/log');

Logger.handleLog([{ test: 'any json data' }, "can also be a string", 123], 'WARN');
```