import {
    instance
} from "../axios";

/**
 *
 * @param {{ email:string, password:string }} data
 * @returns
 */

async function login({
    email,
    password
}) {
    return await instance.post('/login', {
            email: email,
            password: password
        })
        .then((response) => {
            const { data: { user, token }, message } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user_data', JSON.stringify(user));
            return response.status;
        })
        .catch((error) => {
            const { message } = error.response.data;
            console.log(message);
        });
}

export default login;