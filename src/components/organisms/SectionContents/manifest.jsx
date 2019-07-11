//** Standard Frameworks */
import * as React from 'react';
//** Additional Frameworks */
//** Apollo */
import { ApolloConsumer } from 'react-apollo';
import { gql } from "apollo-boost";

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton"

/* Get Images QUERY */
const GET_IMAGE = gql`
    query img(
            $token: String!
            $id: Int!
        ){
        image(
            token: $token
            id: $id
        ){
            urlLink
        }
    }
`;

/**
 * Section: Steps
 */
class Manifest extends React.Component{
     constructor(props){
        super(props);
        this.state = {}
    }

    onImgFetched = (img, id) => {
        this.setState({[id]: img});
    }

    //** Query image and render it */
     renderImg = (image_id, key) => {
        return(
            <ApolloConsumer>
                {client => (
                    <div className="imgcontainer">
                        <div className="img-profile-container" onClick={
                            async function(){
                                let { data } = await client.query({
                                    query: GET_IMAGE,
                                    variables: { "id": image_id, "token": this.props.token }
                                });
                                if(data !== undefined){
                                    this.onImgFetched(data.image, key)
                                }
                            }.bind(this)
                        }>
                            {this.state[key] && <img className="img-fluid" src={"https://pharmaziegasse.at"+this.state[key].urlLink} alt={"step "+(key+1)} />}
                        </div>
                    </div>
                )}
            </ApolloConsumer>
        )
    }

    render(){
        return(
            <div className="container text-left">
               
            </div>
        )
    }
}

export default Manifest;
