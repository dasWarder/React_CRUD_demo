import axios from "axios";

const BASE_CLIENT_URL = 'http://localhost:8083/clients';


class ClientService {

    getClients() {
        console.log('Axios get all clients');

        return axios.get(BASE_CLIENT_URL);
    }

    saveClient(client) {
        console.log('Axios save a client');

        return axios.post(BASE_CLIENT_URL + '/client', client);
    }
}

export default new ClientService();