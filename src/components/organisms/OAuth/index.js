import React from 'react';
import createReactClass from 'create-react-class';
import { Facebook, Google } from 'react-oauth2';

let FacebookComponent = createReactClass({
  getInitialState: function () {
    return {
      "data": {
        "id": "", "name": "", "email": "", "gender": "", "location": { "id": "", "name": "" }
      }
    };
  },

  facebook: function (err, res) {
    if (!err) {
      this.setState({ data: res.profile })
    } else {
      this.setState({ data: 'something happen wrong' })
    }
  },

  render: function () {
    return <div>
      <Facebook url={'http://localhost:3000'}
        clientId={''}
        clientSecret={''}
        redirectUri={'http://localhost:3000'}
        scope={'email'}
        callback={this.facebook}
        style={{ color: 'green' }}
      >
        Login With Facebook From component
  </Facebook>
      <hr />
      {JSON.stringify(this.state)}
    </div>
  }
});


let GoogleComponent = createReactClass({
  getInitialState: function () {
    return {
      "data": {
        "id": "", "name": "", "email": "", "gender": "", "location": { "id": "", "name": "" }
      }
    };
  },
  google: function (err, res) {
    if (!err) {
      this.setState({ data: res.profile })
    } else {
      this.setState({ data: 'something happen wrong' })
    }
  },

  render: function () {
    return <div>
      <Google
        url={'http://localhost:3000'}
        clientId={''}
        clientSecret={''}
        redirectUri={'http://localhost:3000'}
        scope={['https://www.googleapis.com/auth/userinfo.email']}
        callback={this.google}
        style={{ color: 'green' }}
      >
        Login With Google From component
  </Google>
      <hr />
      {JSON.stringify(this.state)}
    </div>
  }
});

export {
  FacebookComponent,
  GoogleComponent,
}