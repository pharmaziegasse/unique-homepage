//** Standard Frameworks */
import * as React from 'react';
//** Additional Frameworks */
//** Apollo */
import { ApolloConsumer } from 'react-apollo';
import { gql } from "apollo-boost";

//** Helpers */
//** Personalization */
import Text from "../../helper/Text";
import { renderToString } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser'; 

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
                {this.props.title !== "" &&
                    <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ this.props.title }/>))}}></h2>
                }
                <div className="row my-5">
                    <div className="col-md-6">
                        <div dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ this.props.paragraph }/>))}}></div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="row">
                            <div className="col-12 mb-5"><img draggable="false" className="img-fluid" src={"https://pharmaziegasse.at"+this.props.img} alt="Stefan"/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Manifest;
