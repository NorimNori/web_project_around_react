class Auth {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  _handleError(error) {
    console.error(error);
    return Promise.reject(error);
  }

  _getHeaders() {
    const headers = {
      "Content-Type": "application/json",
    };
    return headers;
  }

  register(email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({ email, password }),
    })
      .then(this._checkResponse)
      .catch(this._handleError);
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({ email, password }),
    })
      .then(this._checkResponse)
      .catch(this._handleError);
  }

  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._getHeaders(true),
    })
      .then(this._checkResponse)
      .catch(this._handleError);
  }
}

export const auth = new Auth({
  baseUrl: "https://se-register-api.en.tripleten-services.com/v1",
});
