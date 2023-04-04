import {
    instance
} from "../axios";

/**
 *
 * @param {{ email:string, password:string }} data
 * @returns
 */

async function lapor(data) {
    return await instance.post('/laporan/bencanas', data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            const { message } = error.response.data;
            console.log(message);
        });
}

export default lapor;