import { API } from 'api';
import { BASE_URL } from 'config';
import endpoints from 'constants/endpoints';
import { ErrorType } from 'utils';

export const GET_USER_ATTENDANCE = async (id: number | string) => {
  const url = `${BASE_URL}/${endpoints.attendance}/${id}`;
  try {
    let response = await API.get(url);
    return response.data;
  } catch (err) {
    throw ErrorType(err);
  }
};
