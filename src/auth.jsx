//** Standard Frameworks */
import React from "react";

//** Additional Frameworks */
/** Apollo */
import { gql } from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import { ApolloProvider, graphql } from "react-apollo";

//** App */
import App from './App';

//** Get JWT */
const LOGIN_USER = gql`
    mutation tokenAuth{
        tokenAuth(username:"cisco",password:"ciscocisco"){
            token
        }
    }
`;

//** Cache setup */
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [], //** no types provided - works */
    },
  },
});
const cache = new InMemoryCache({ fragmentMatcher });


class Authenticate{
    constructor(props){
        console.log("Reached 3");
        this.state = {
           token: false
        }
    }

    componentDidMount(){
        this.login();
    }

    createClient = () => {
        console.log(this.props.token);

        const token = this.props.token;
        
        return new ApolloClient({
        cache,
        link: new HttpLink({
            uri: "https://pharmaziegasse.at/api/graphql"
        })
        });
    }

    //** Call Login Mutation */
    login = async () => {
        console.log("Reached");
        this.props.mutate()
        .then(({ loading, data }) => {
            console.log(data);
            if(data !== null && data.tokenAuth !== null){
                if(data.tokenAuth.token !== undefined && data.tokenAuth.token !== ""){
                    this.setState({token: true});
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
        console.log(this.state.token);
        return (
            <ApolloProvider client={this.createClient()}>
                <App token={this.state.token} />
            </ApolloProvider>
        )
    }
}

export default graphql(
  LOGIN_USER
)(Authenticate);
