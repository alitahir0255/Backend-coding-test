import { AxiosError } from 'axios';

export function ErrorType(err: AxiosError<Error>) {
  if (err.response) {
    return err.response.data || err.message || 'Response Error';
  } else if (err.request) {
    return err.message || 'Bad Request!';
  } else {
    return err.message;
  }
}
