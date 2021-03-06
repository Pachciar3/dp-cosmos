const API_URL = process.env.REACT_APP_API_URL;

function request(endpoint, method = "GET", data = null) {
  const config = {
    method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (method === "POST" || method === "PATCH") {
    config.body = JSON.stringify(data);
  }
  const url = `${API_URL}${endpoint}`;
  return fetch(url, config).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  });
}

const get = (endpoint) => {
  return request(endpoint);
};

const post = (endpoint, data) => {
  return request(endpoint, "POST", data);
};

const patch = (endpoint, data) => {
  return request(endpoint, "PATCH", data);
};

const _delete = (endpoint) => {
  return request(endpoint, "DELETE");
};

const api = {
  get,
  post,
  patch,
  delete: _delete
};

export default api;