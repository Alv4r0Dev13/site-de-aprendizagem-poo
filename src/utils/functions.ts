import axios from 'axios';
import api from '../services/api';

/**
 * Makes a request to the API.
 *
 * @param url URL to fetch.
 * @param onFulfilled Optional. Callback for fullfilled request.
 * @param onRejected Optional. Callback for rejected request or error.
 * @returns response data or `null`.
 */
export async function fetchData<T = any>(
  url: string,
  onFulfilled?: (value: axios.AxiosResponse<any, any>) => T | PromiseLike<T>,
  onRejected?: (reason: any) => PromiseLike<null> | null,
): Promise<T | null> {
  return await api
    .get(url)
    .then(
      onFulfilled || (resp => resp.data as T),
      onRejected ||
        (reason => {
          console.log(reason.response);
          return null;
        }),
    )
    .catch(
      onRejected ||
        (err => {
          console.log(err);
          return null;
        }),
    );
}
