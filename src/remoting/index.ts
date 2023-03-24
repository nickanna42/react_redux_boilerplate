/**
*** This file handles all calls to external API's.
*** All function exported from here should be
*** asyncronous. Async calls are handled as `thunks`,
*** and update the redux state themselves.
**/
import { AppDispatch, AppGetState } from '../reduxElements';
import {
  incUiBusy,
  decUiBusy,
  addUiError,
} from '../reduxElements/remotingState';

const fetchWrapper = (url: RequestInfo | URL, options: RequestInit={}) => async (dispatch: AppDispatch) =>{
  dispatch(incUiBusy);
  let output = undefined;
  try {
    output = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      }, 
    });
  } catch (err: any) {
    dispatch(addUiError(`Call to '${url}' failed\n${err?.statusCode} - ${err?.statusText}`));
  }
 
  dispatch(decUiBusy)

  return output;
}

export const exampleFetch = () => async (dispatch: AppDispatch, getState:AppGetState ) =>{
    // fetch data here. Use `await dispatch(fetchWrapper())`
    const results = await dispatch(fetchWrapper(
      '/example'
    )).then(res => {
      if (res === undefined) return res;
      return res.json();
    }) as {exampleKey: string} | undefined

    return results;
  };
