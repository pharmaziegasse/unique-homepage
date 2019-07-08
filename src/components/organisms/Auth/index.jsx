//** Standard Frameworks */
import React, { Component } from "react";

//** Additional Frameworks */
/** Apollo */
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

import Homepage from "../../pages/Homepage";

const LOGIN_USER = gql`
    mutation tokenAuth{
        tokenAuth(username:"cisco",password:"ciscocisco"){
            token
        }
    }
`;

class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
           logged: false
        }
    }

    componentDidMount(){
        this.login();
    }

    //** Call Login Mutation */
    login = async () => {
        this.props.mutate()
        .then(({ loading, data }) => {
            console.log(data);
            if(data !== null && data.tokenAuth !== null){
                if(data.tokenAuth.token !== undefined && data.tokenAuth.token !== ""){
                    localStorage.setItem('myData', data.tokenAuth.token);
                    this.setState({logged: true});
                } else {
                    this.setState({logged: false});
                }
            } else {
                this.setState({logged: false});
            }
        }).catch((loading, error) => {
            console.warn('there was an error sending the query', error);
        });
    };

    render(){
        console.log(this.state);
        return(
            this.state.logged ? (
                <Homepage />
            ) : (
                <p>Ohnono</p>
            )  
        )
    }
}

const AuthWithMutation = graphql(
  LOGIN_USER
)(Auth);

export default AuthWithMutation;
