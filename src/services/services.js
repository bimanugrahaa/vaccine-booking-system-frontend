import axios from "axios";

const BASE_URL = "http://localhost:8000";
const value = {
    status: "",
    response: "",
}

const VaccineStatus = async(e, mySession, user) => {

    // e.preventDefault()

    console.log(user)
    // axios.defaults.headers.common = {'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NDI4MTYwMjQsInVzZXJfaWQiOjl9.O0Nm801yGk-HuV5NuMu5B7rSwaPU7IVRYjG670TfE8g`}
    const config = {
        method: 'post',
        url: `${BASE_URL}/requestvaksin/login`,
        data : user,
        headers : {
            'Authorization': `Bearer ${mySession.token}`
        }
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data.data
        })

        .catch((error) => {
            console.error('There was an error!', error);

            const status = error.response.status;
            if (status === 500) {
                value.status = status
                value.response = "Data yang Anda masukan salah!"
            }
        });

        return value

}

const GetUserDetail = async(e, mySession) => {

    const config = {
        method: 'get',
        url: `${BASE_URL}/user/${mySession.id}`,
        headers : {
            'Authorization': `Bearer ${mySession.token}`
        }
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data.data
        })

        .catch((error) => {
            console.error('There was an error!', error);

            const status = error.response.status;
            value.status = status
            value.response = error
        });

        return value
}

const EditUserDetail = async(e, mySession, data) => {

    e.preventDefault()
    console.log("data api", data)
    const config = {
        method: 'put',
        url: `${BASE_URL}/user`,
        data: data,
        headers : {
            'Authorization': `Bearer ${mySession.token}`
        }
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data.data
        })

        .catch((error) => {
            console.error('There was an error!', error);

            const status = error.response.status;
            if (status === 500) {
                value.status = status
                value.response = "Data yang Anda masukan salah!"
            }
        });

        return value
}

const EditUserPassword = async(e, mySession, data) => {

    e.preventDefault()
    console.log("data api", data)
    const config = {
        method: 'put',
        url: `${BASE_URL}/user/newpassword`,
        data: data,
        headers : {
            'Authorization': `Bearer ${mySession.token}`
        }
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data.data
        })

        .catch((error) => {
            console.error('There was an error!', error);

            const status = error.response.status;
            value.status = status
            value.response = error
        });

        return value
}

const GetSearchFaskes = async(nama) => {

    const config = {
        method: 'post',
        url: `${BASE_URL}/faskesnama`,
        data: {
            "nama": nama
        }
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data.data
        })

        .catch((error) => {
            console.error('There was an error!', error);

            const status = error.response.status;
            value.status = status
            value.response = error
        });

        return value
}

const GetAllFaskes = async() => {
    var config = {
        method: 'get',
        url: `${BASE_URL}/faskes/semua`
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data.data
            console.log(response)
            // getFaskesList(response)
        })
        .catch((error) => {

            const status = error.response.status;

            if (status === 500) {
            }

            console.error('There was an error!', error);
        });

        return value
}

const GetFaskesByID = async(id) => {
    var config = {
        method: 'get',
        url: `${BASE_URL}/faskes/${id}`
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data.data
            console.log(response)
            // getFaskesList(response)
        })
        .catch((error) => {

            const status = error.response.status;

            if (status === 500) {
            }

            console.error('There was an error!', error);
        });

        return value
}

const GetVaksinByID = async(id) => {
    var config = {
        method: 'get',
        url: `${BASE_URL}/vaksin/${id}`
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data.data
            console.log(response)
            // getFaskesList(response)
        })
        .catch((error) => {

            const status = error.response.status;

            if (status === 500) {
            }

            console.error('There was an error!', error);
        });

        return value
}

const GetCountVaksin = async(id) => {
    var config = {
        method: 'post',
        url: `${BASE_URL}/requestvaksin/kuota/${id}`
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data
            console.log(response)
            // getFaskesList(response)
        })
        .catch((error) => {

            const status = error.response.status;

            if (status === 500) {
            }

            console.error('There was an error!', error);
        });

        return value
}

const PostRequestVaksin = async(mySession, data) => {
    console.log(data)
    var config = {
        method: 'post',
        url: `${BASE_URL}/requestvaksin`,
        data: data,
        headers : {
            'Authorization': `Bearer ${mySession.token}`
        }
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data
            console.log(response)
            // getFaskesList(response)
        })
        .catch((error) => {

            const status = error.response.status;

            if (status === 500) {
            }

            console.error('There was an error!', error);
        });

        return value
}

const EditRequestVaksinSatu = async(mySession, data) => {
    console.log(data)
    var config = {
        method: 'put',
        url: `${BASE_URL}/status/satu`,
        data: data,
        headers : {
            'Authorization': `Bearer ${mySession.token}`
        }
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data
            console.log(response)
            // getFaskesList(response)
        })
        .catch((error) => {

            const status = error.response.status;

            if (status === 500) {
            }

            console.error('There was an error!', error);
        });

        return value
}

const EditRequestVaksinDua = async(mySession, data) => {
    console.log(data)
    var config = {
        method: 'put',
        url: `${BASE_URL}/status/dua`,
        data: data,
        headers : {
            'Authorization': `Bearer ${mySession.token}`
        }
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data
            console.log(response)
            // getFaskesList(response)
        })
        .catch((error) => {

            const status = error.response.status;

            if (status === 500) {
            }

            console.error('There was an error!', error);
        });

        return value
}

const GetAllRequestVaksin = async() => {
    var config = {
        method: 'get',
        url: `${BASE_URL}/requestvaksin`
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data
            console.log(response)
            // getFaskesList(response)
        })
        .catch((error) => {

            const status = error.response.status;

            if (status === 500) {
            }

            console.error('There was an error!', error);
        });

        return value
}

export { VaccineStatus, GetUserDetail, EditUserDetail, EditUserPassword, GetSearchFaskes, GetAllFaskes, GetFaskesByID, GetVaksinByID, GetCountVaksin, PostRequestVaksin, EditRequestVaksinSatu, EditRequestVaksinDua,
GetAllRequestVaksin }