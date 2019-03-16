import * as React from 'react'

//Import atoms
import Btn from "../../atoms/Button"

type Props = {
    content: string
}

const SectionContent = (props: Props): React.Element<*> => {
    const { heading, cards } = props;

    function getType(i){
        if(i === 2){
            return 'card premium pb-4';                 
        }else{
            return 'card pricing-card pb-4';
        }
    }

    function getWidth(){
        let count = cards.length;
        
        switch (count) {
            case 1:
                return "col-md-12 mb-4";
            case 2:
                return "col-md-6 mb-4";
            case 3:
                return "col-md-4 mb-4";
            default:
                return "col-md-4 mb-4";
        }
    }

    return (
        <div className="container py-5">
           <h2 className="h1-responsive font-weight-bold mb-5" dangerouslySetInnerHTML={{__html: heading}}></h2>
            <div className="row">
                {cards.map((value, i) => {
                    return (
                        <div key={i} className={getWidth()}>
                            <div className={getType(i)}>
                                <h3 className="text-uppercase font-weight-bold my-4">{value.title}</h3>
                                <div className="pricing-description p-4">
                                    <p className="m-0" dangerouslySetInnerHTML={{__html: value.description}}></p>
                                </div>
                                <div className="card-body striped p-0">
                                    <div className="py-4">
                                        <p className="text-uppercase mb-0 pricetag">Preis</p>
                                        <p className="text-muted mb-0">€ {value.price}</p>
                                    </div>
                                    <hr className="mt-0"/>
                                    <Btn className="font-weight-bold" btnstyle="oELEGANT" href="#">Beautyprogramm starten</Btn>
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
