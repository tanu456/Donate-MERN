import API from './axios';

export  const getAllNgos =   ()=> {
        const uri = '/ngos/all';
        return API.get(uri)
            .then(function (response) {
                return response.data
            })
    }
