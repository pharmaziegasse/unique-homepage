//** Standard Frameworks */
import * as React from 'react'

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton"

type Props = {
    content: string
}

/**
 * Section: Lab
 */
const SectionContent = (props: Props): React.Element<*> => {
    const { content } = props;

    function printParagraph(i){
        if(typeof content[i].paragraph != "undefined"){
            return (<div key={i} dangerouslySetInnerHTML={{__html: content[i].paragraph}}></div>)
        }
        
    }

    return (
        <div className="container py-5 text-left">
            {props.showHead === true &&
                <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: content[0].heading}}></h2>
            }
            <div className="text-center my-5">
                <img draggable="false" className="img-fluid" src={content[1].img} alt="Beautyprogramm starten"/>
            </div>
            <div className="row my-5">
            <div className="col-md-6">
                    <div className="row h-100">
                        <div className="col-12"><div className="lead" dangerouslySetInnerHTML={{__html: content[3].lead}}></div></div>
                        <div className="col-12">{props.btnShow !== null && <ModalBtn btnstyle="WHITE" modal="#modalRegister" className="font-weight-bold">{content[2].btntext}</ModalBtn>}</div>
                    </div>
                </div>
                <div className="col-md-6">
                    {content.map((item, i) => {
                        return (
                            printParagraph(i)
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default SectionContent
