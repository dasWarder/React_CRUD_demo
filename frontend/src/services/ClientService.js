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

    getSingleClientById(id) {
        console.log('Axios get a client with id = ', id);

        return axios.get(BASE_CLIENT_URL + '/client/' + id);
    }

    updateClient(id, client) {
        console.log('Axios update a client with id = ', id);

        return axios.put(BASE_CLIENT_URL + '/client/' + id, client);
    }

    deleteClientById(id) {
        console.log('Axios delete a client by id = ', id);

        return axios.delete(BASE_CLIENT_URL + '/client/' + id);
    }
}

export default new ClientService();