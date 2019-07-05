//** Standard Frameworks */
import React, { Component } from "react";

//** Additional Frameworks */
/** Apollo */
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

import Homepage from "../../pages/Homepage";

const LOGIN_USER = gql`
    mutation login{
        login(username:"cisco",password:"ciscocisco"){
            user{
            id
            }
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
            if(data !== null && data.login !== null && data.login.user !== null && data.login.user.id !== null){
                console.log(data.login.user);
                if(data.login.user.id === "1"){
                    console.log("Reached");
                    this.setState({logged: true})
                } else {
                    this.setState({logged: false})
                }
            } else {
                this.setState({logged: false})
            }
        }).catch((loading, error) => {
            console.warn('there was an error sending the query', error);
            this.setState({logged: false})
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
