import axios from "axios";

const BASE_CLIENT_URL = 'http://localhost:8083/clients';


class ClientService {

    getClients() {
        return axios.get(BASE_CLIENT_URL);
    }
}

export default new ClientService();