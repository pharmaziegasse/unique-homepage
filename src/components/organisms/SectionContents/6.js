import * as React from 'react'

type Props = {
    content: string
}

const SectionContent = (props: Props): React.Element<*> => {
    const { heading, users } = props;

    function getActiveItem(id){
        if(id === 0){
            return "carousel-item active";
        }else{
            return "carousel-item";
        }
    }

    return (
        <div className="container py-5">
           <h2 className="h1-responsive font-weight-bold mb-5" dangerouslySetInnerHTML={{__html: heading}}></h2>

            <div className="wrapper-carousel-fix">
                <div id="customer-carousel" className="carousel no-flex testimonial-carousel slide py-5 dark-grey-text" data-ride="carousel" data-interval="20000">
                <div className="carousel-inner" role="listbox">
                {users.map((item, i) => {
                    return(
                    <div key={i} className={getActiveItem(i)}>
                        <div className="testimonial">
                            <div className="avatar mx-auto mb-4">
                                <img src={item.img} className="rounded-circle img-fluid" alt={item.name}/>
                            </div>
                            <p>
                                <i className="fas fa-quote-left mr-2"></i><span dangerouslySetInnerHTML={{__html: item.quote}}></span>
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

export default SectionContent
