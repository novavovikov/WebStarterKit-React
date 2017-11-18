import config from '../../../config';

const URL = `http://${config.api.host}:${config.api.port}${config.api.uri}${config.api.version}`;

export default {
    getURL: function () {
        console.log(URL);
    }
}