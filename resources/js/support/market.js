import Axios from 'axios';

export default class Market {
    constructor() {
        this.api = Axios.create({
            baseURL: 'https://api.evemarketer.com/ec/marketstat/json',

            headers: {
                'X-Requested-WIth': 'XMLHttpRequest',
                'Accept': 'application/json',
            },
        });
    }
}
