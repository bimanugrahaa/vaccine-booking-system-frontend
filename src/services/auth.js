import axios from "axios";

const BASE_URL = "http://localhost:8000";
const value = {
    status: "",
    response: "",
}

const LoginUser = async (e, user) => {

    e.preventDefault()

    const config = {
        method: 'post',
        url: `${BASE_URL}/user/login`,
        data : user
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

const RegisterUser = async(e, data) => {

    e.preventDefault()

    var config = {
        method: 'post',
        url: `${BASE_URL}/user/register`,
        data : data
    };

    await axios(config)
        .then(response => {
            console.log(response)
            // navigate(`/masuk`)
        })
        .catch((error) => {

            const status = error.response.status;

            if (status === 500) {
                // setErr({...err, ["email"]: "Email yang Anda masukkan sudah terdaftar!"})
            }

            console.error('There was an error!', error);
        });        
}

export { LoginUser, RegisterUser }