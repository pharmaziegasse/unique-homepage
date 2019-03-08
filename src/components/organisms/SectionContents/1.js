import * as React from 'react'

//Import atoms
import Btn from "../../atoms/Button"

type Props = {
    content: string
}

const SectionContent = (props: Props): React.Element<*> => {
    const { content } = props;

    function printParagraph(i){
        if(typeof content[i].paragraph != "undefined"){
            return (<div key={i} dangerouslySetInnerHTML={{__html: content[i].paragraph}}></div>)
        }
        
    }

    return (
        <div className="container py-5 text-left">
            <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: content[0].heading}}></h2>
            <div className="row my-5">
                <div className="col-md-6">
                   <div className="lead" dangerouslySetInnerHTML={{__html: content[3].lead}}></div>
                    {content.map((item, i) => {
                        return (
                            printParagraph(i)
                        )
                    })}
                </div>
                <div className="col-md-6 text-center">
                    <div className="row">
                        <div className="col-12 mb-5"><img draggable="false" className="img-fluid" src={content[1].img} alt="Beautyprogramm starten"/></div>
                        <div className="col-12"><Btn btnstyle="oELEGANT" href={content[2].btnhref} className="font-weight-bold">{content[2].btntext}</Btn></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionContent
