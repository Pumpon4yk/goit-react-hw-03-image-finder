import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '32634738-c4f3b04753ac88df1d3aaa7b6';

export async function getImg(name, page) {
  try {
    const respons = await axios(
      `?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    return respons.data
  } catch (error) {
    return error
  }
}
