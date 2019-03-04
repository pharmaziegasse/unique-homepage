import * as React from 'react'

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
            <div className="row my-5">
            <div className="col-md-6">  
                <img draggable="false" className="img-fluid" src={content[1].img} alt="Über uns"/>
            </div>
            <div className="col-md-6">
                <p className="lead">{content[3].lead}</p>
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
