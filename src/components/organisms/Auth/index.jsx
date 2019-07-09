//** Standard Frameworks */
import React, { Component } from "react";

//** Additional Frameworks */
/** Apollo */
import { graphql, Query } from "react-apollo";
import { gql } from "apollo-boost";

//** Query */
import { CMSFetchQuery_PAGES } from "../../../static";

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
        //** Manual token for debugging */
        //this.setState({token: ""})
    }

    //** Call Login Mutation */
    login = async () => {

        await this.props.mutate()
        .then(({ loading, data }) => {
            if(data !== null && data.tokenAuth !== null){
                if(data.tokenAuth.token !== undefined && data.tokenAuth.token !== ""){
                    //console.log("True");
                    this.setState({token: data.tokenAuth.token});
                } else {
                    //console.log("False");
                    this.setState({token: false});
                }
            } else {
                //console.log("False");
                this.setState({token: false});
            }
        }).catch((loading, error) => {
            console.warn('there was an error sending the query', error);
        });
    };

    render(){
        //console.log("Token fetched: "+this.state.token);
        return(
            this.state.token !== false ? (
                <Query
                    query={CMSFetchQuery_PAGES}
                    variables={{ "token": this.state.token }}
                >
                    {({ loading, error, data }) => {
                        if (loading) return null;
                        if (error) return null;

                        return (
                            <Homepage data={data} token={this.state.token} />
                        );
                    }}
                </Query>
            ) : (
                <p>Ohnono</p>
            )  
        )
    }
}

const AuthWithMutation = graphql(LOGIN_USER)(Auth);

export default AuthWithMutation;
