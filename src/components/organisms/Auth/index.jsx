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
           token: false
        }
    }

    componentDidMount(){
        this.login();
    }

    //** Call Login Mutation */
    login = async () => {
        await this.props.mutate()
        .then(({ loading, data }) => {
            //console.log(data);
            if(data !== null && data.tokenAuth !== null){
                if(data.tokenAuth.token !== undefined && data.tokenAuth.token !== ""){
                    //** Encode token and store in local storage */
                    //var encodedToken = window.btoa(data.tokenAuth.token);
                    localStorage.setItem('ares', data.tokenAuth.token);

                    this.setState({token: data.tokenAuth.token});
                } else {
                    this.setState({token: false});
                }
            } else {
                this.setState({token: false});
            }
        }).catch((loading, error) => {
            console.warn('there was an error sending the query', error);
        });
    };

    render(){
        console.log("Token fetched: "+this.state.token);
        return(
            this.state.token !== false && localStorage.getItem("ares") === this.state.token ? (
                <Homepage test="Test" />
            ) : (
                <p>Ohnono</p>
            )  
        )
    }
}

const AuthWithMutation = graphql(LOGIN_USER)(Auth);

export default AuthWithMutation;
