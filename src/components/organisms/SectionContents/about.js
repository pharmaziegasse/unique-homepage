//** Standard Frameworks */
import * as React from 'react'

type Props = {
    content: string
}

/**
 * Section: About
 */
const SectionContent = (props: Props): React.Element<*> => {
    const { content } = props;

    //** Dynamic paragraph rendering */
    function printParagraph(i){
        if(typeof content[i].paragraph != "undefined"){
            return (<div key={i} dangerouslySetInnerHTML={{__html: content[i].paragraph}}></div>)
        }
        
    }

    return (
        <div className="container py-5 text-left section-text-grey">
            {props.showHead === true &&
                <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: content[0].heading}}></h2>
            }
            <div className="row my-5">
            <div className="col-md-6">  
                <img draggable="false" className="img-fluid" src={content[1].img} alt="Über uns"/>
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
