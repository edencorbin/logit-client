
const axios = require('axios')

class logger {

    _api_key = ''
    _endpoint = ''

    logger(api_key, endpoint){
        this._api_key = api_key
        this._endpoint = endpoint
    }

    handleLog = (logs, level, context) => {
        try{
            const headers = {
                headers: {
                    'Accept': 'application/json'
                }
            }
            const data = {
                logs, 
                level,
                context,
                api_key: this.api_key,
            }
            axios.post(this._endpoint, data, headers)
        }
        catch(e){
            console.log(e);
        }
    }
}


module.exports = logger