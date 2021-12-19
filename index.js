
const axios = require('axios')

class logger {

    _api_key = ''
    _endpoint = ''

    constructor(api_key, endpoint) {  // Constructor
        this._api_key = api_key
        this._endpoint = endpoint
    }

    handleLog = (logs, level) => {
        try{
            const headers = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this._api_key
                }
            }
            const data = {
                logs, 
                level
            }
            axios.post(this._endpoint, data, headers)
        }
        catch(e){
            console.log(e);
        }
    }
}

module.exports = logger