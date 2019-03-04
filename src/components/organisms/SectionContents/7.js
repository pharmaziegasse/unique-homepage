import * as React from 'react'

//Import atoms
import Btn from "../../atoms/Button"

type Props = {
    content: string
}

const SectionContent = (props: Props): React.Element<*> => {
    const { content } = props;

    const elements = [content[1], content[2], content[3]];

    function getType(i){
        if(i === 2){
            return 'card premium pb-4';                 
        }else{
            return 'card pricing-card pb-4';
        }
    }

    return (
        <div className="container py-5">
           <h2 className="h1-responsive font-weight-bold mb-5">{content[0].heading}</h2>
            <div className="row">
                {elements.map((value, i) => {
                    return (
                        <div key={i} className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                            <div className={getType(i)}>
                                <h3 className="text-uppercase font-weight-bold my-4">{value.title}</h3>
                                <div className="pricing-description p-4">
                                    <p className="m-0">{value.description}</p>
                                </div>
                                <div className="card-body striped p-0">
                                    <div className="py-4">
                                        <p className="text-uppercase mb-0 pricetag">Preis</p>
                                        <p className="text-muted mb-0">€ {value.price}</p>
                                    </div>
                                    <hr className="mt-0"/>
                                    <Btn className="font-weight-bold" btnstyle="oELEGANT" href={value.btnhref}>{value.btntext}</Btn>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default SectionContent
