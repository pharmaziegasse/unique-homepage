import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { gql } from "apollo-boost";

const GET_IMAGE = gql`
  query img($id: Int!){
  image(id: $id){
    urlLink
  }
}
`;

/*class DelayedQuery extends Component {
  state = { img: null };

  onImgFetched = img => this.setState(() => ({ img }));

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div>
            {this.state.img && <img src={this.state.img} />}
            <button
                onClick={async () => {
                let { data } = await client.query({
                    query: GET_IMAGE,
                    variables: { id: 13 }
                });
                this.onImgFetched(data);
                console.log(data);
                }}
            >
                Click me!
            </button>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}
*/
class DeplayedQuery extends Component {
    state = { img1: null, img2: null, img3: null, img4: null, img5: null };

    //onImgFetched = img => this.setState(() => ({ img }));

    onImgFetched = (img, id) => {
        console.log(img, id);
        let statename = "img"+id;
        this.setState({[statename]: img})
    }

    renderImg = (image_id) => {
        return(
            <ApolloConsumer>
                {client => (
                    <div className="imgcontainer">
                        {/*<div onLoad={
                            function(){console.log("test")}.call(this)
                        }>*/}
                        
                        <div className="py-2 img-profile-container" onClick={
                            async function(){
                                console.log("Test");
                                let { data } = await client.query({
                                    query: GET_IMAGE,
                                    variables: { id: 13 }
                                });
                                console.log(data);
                                this.onImgFetched(data.image, 1)
                            }.bind(this)
                        }>
                            {this.state.img1 && <img className="img-profile" src={"https://pharmaziegasse.at"+this.state.img1.urlLink} alt="Profil" />}
                        </div>
                    </div>
                )}
            </ApolloConsumer>
        )
    }

    render() {
        console.log(this.state);
        return (
        this.renderImg(13)
        );
    }
}

export default DeplayedQuery
