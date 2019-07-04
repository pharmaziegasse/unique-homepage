//** Standard Frameworks */
import * as React from 'react'

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton"

type Props = {
    content: string
}

/**
 * Section: Pricing
 */
const SectionContent = (props: Props): React.Element<*> => {
    const { heading, cards } = props;

    function getType(i){
        if(i === 1){
            return 'card premium pb-4';                 
        }else{
            return 'card pricing-card pb-4';
        }
    }

    function getWidth(){
        let count = cards.length;
        
        switch (count) {
            case 1:
                return "col-md-6 m-auto mb-4";
            case 2:
                return "col-md-6 mb-4";
            case 3:
                return "col-md-4 mb-4";
            default:
                return "col-md-4 mb-4";
        }
    }

    return (
        <div className="container py-5 section-text-grey">
            {props.showHead === true &&
                <h2 className="h1-responsive font-weight-bold mb-5" dangerouslySetInnerHTML={{__html: heading}}></h2>
            }
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
                                    <ModalBtn btnstyle="WHITE" modal="#modalRegister" className="font-weight-bold">Beautyprogramm starten</ModalBtn>
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
