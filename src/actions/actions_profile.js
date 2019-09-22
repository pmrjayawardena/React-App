export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile() {

    let header = new Headers({"Content-Type":"application/json", "Authorization":"token acae74318129653b30c20aaec2235f6d049c0136"});

    return (dispatch) => {
      return fetch('https://api.github.com/users/pmrjayawardena', {
        method: 'GET',
        headers : header
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(loadProfile(json))
      })
      .catch(error => console.log(error));
    }
}


export function saveProfile(profile) {

    let header = new Headers({"Content-Type":"application/json", "Authorization":"token acae74318129653b30c20aaec2235f6d049c0136"});

    return (dispatch) => {
      return fetch('https://api.github.com/user', {
        method: 'PATCH',
        headers : header,
        body : JSON.stringify(profile)
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(loadProfile(json))
      })
      .catch(error => console.log(error));
    }
}

export function loadProfile(results) {
  return {
    type : PROFILE_FETCHED,
    payload : results
  }
}
