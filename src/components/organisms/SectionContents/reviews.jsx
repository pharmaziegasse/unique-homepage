//** Standard Frameworks */
import React, { Component } from 'react';

//** Additional Frameworks */
//** Apollo */
import { ApolloConsumer } from 'react-apollo';
import { gql } from "apollo-boost";

//** Mutation: Get Image */
const GET_IMAGE = gql`
  query img($id: Int!){
  image(id: $id){
    urlLink
  }
}
`;

/**
 * Section: Reviews
 */
class DeplayedQuery extends Component {
     constructor(props){
        super(props);
        this.state = {
           
        }
    }

    getActiveItem = (id) => {
        if(id === 0){
            return "carousel-item active";
        }else{
            return "carousel-item";
        }
    }

    onImgFetched = (img, id) => {
        this.setState({[id]: img});
    }

    renderImg = (image_id, key) => {
        return(
            <ApolloConsumer>
                {client => (
                    <div className="imgcontainer">
                        <div className="py-2 img-profile-container" onClick={
                            async function(){
                                let { data } = await client.query({
                                    query: GET_IMAGE,
                                    variables: { id: image_id }
                                });
                                if(data !== undefined){
                                    this.onImgFetched(data.image, key)
                                }
                            }.bind(this)
                        }>
                            {this.state[key] && <img width="160px" height="160px" className="rounded-circle img-fluid img-profile" src={"https://pharmaziegasse.at"+this.state[key].urlLink} alt="Profil" />}
                        </div>
                    </div>
                )}
            </ApolloConsumer>
        )
    }

    render() {
        return (
            <div className="container py-5">
                {this.props.showHead === true &&
                    <h2 className="h1-responsive font-weight-bold mb-5" dangerouslySetInnerHTML={{__html: this.props.heading}}></h2>
                }
                <div className="wrapper-carousel-fix">
                    <div id="customer-carousel" className="carousel no-flex testimonial-carousel slide py-5 dark-grey-text" data-ride="carousel" data-interval="20000">
                    <div className="carousel-inner" role="listbox">
                    {this.props.users.map((item, i) => {
                        return(
                        <div key={i} className={this.getActiveItem(i)}>
                            <div className="testimonial">
                                <div className="avatar mx-auto mb-4">
                                    {this.renderImg(item.img, i)}
                                </div>
                                <p>
                                    <span dangerouslySetInnerHTML={{__html: item.quote}}></span>
                                </p>
                                <h4 className="font-weight-bold">{item.name}</h4>
                                <h6 className="font-weight-bold my-3 text-muted">{item.info}</h6>
                            </div>
                        </div>
                        )
                    })}
                    </div>
                    <a className="carousel-control-prev left carousel-control" href="#customer-carousel" role="button"
                        data-slide="prev">
                        <span className="icon-prev" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next right carousel-control" href="#customer-carousel" role="button"
                        data-slide="next">
                        <span className="icon-next" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeplayedQuery
