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
            return (<p key={i}>{content[i].paragraph}</p>)
        }
        
    }

    return (
        <div className="container py-5 text-left">
            <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: content[0].heading}}></h2>
            <div className="text-center my-5">
                <img draggable="false" className="img-fluid" src={content[1].img} alt="Beautyprogramm starten"/>
            </div>
            <div className="row my-5">
            <div className="col-md-6">
                    <div className="row h-100">
                        <div className="col-12"><p className="lead">{content[3].lead}</p></div>
                        <div className="col-12"><Btn btnstyle="oELEGANT" href={content[2].btnhref} className="font-weight-bold">{content[2].btntext}</Btn></div>
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
