import HttpConfig from '../http/httpconfig'

export async function httpGet(route) {
    try {
        let response = await fetch(
          `http://${HttpConfig.host}:${HttpConfig.port}/${route}`,
        );
        let responseJson = await response.json();
        return responseJson;
      } catch (error) {
        console.error(error);
      }
}

export async function httpPost(route, data) {
    try {
        let response = await fetch(
          `http://${HttpConfig.host}:${HttpConfig.port}/${route}`,
          {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
          }
        );
        let responseJson = await response.json();
        return responseJson;
      } catch (error) {
        console.error(error);
      }
}

export async function httpDelete(route, data) {
    try {
        let response = await fetch(
          `http://${HttpConfig.host}:${HttpConfig.port}/${route}`,
          {
              method: 'POST',
          }
        );
        let responseJson = await response.json();
        return responseJson;
      } catch (error) {
        console.error(error);
      }
}
