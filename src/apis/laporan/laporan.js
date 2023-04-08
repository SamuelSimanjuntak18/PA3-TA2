import { instance } from '../axios';

/**
 *
 * @param {{ email:string, password:string }} data
 * @returns
 */

async function lapor(data) {
  return await instance
    .post('/laporan/bencanas', data)
    .then((response) => {
      return { data: response.data, status: response.status };
    })
    .catch((error) => {
      const { message } = error.response.data;
      console.log(message);
    });
}

export default lapor;
