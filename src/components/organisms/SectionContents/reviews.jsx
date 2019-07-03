import * as React from 'react'

class Reviews extends React.Component{
    constructor(props){
        super(props);
    }

    getActiveItem = (id) => {
        if(id === 0){
            return "carousel-item active";
        }else{
            return "carousel-item";
        }
    }
    render(){
        console.log(this.getImg());
        return (
            <div className="container py-5 section-text-grey">
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
                                    <img width="160px" height="160px" src={item.img} className="rounded-circle img-fluid" alt={item.name}/>
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
        )
    }
}

export default Reviews;
