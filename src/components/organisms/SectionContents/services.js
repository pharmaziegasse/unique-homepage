//** Standard Frameworks */
import * as React from 'react'

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton"

type Props = {
    content: string,
    btn: string
}

/**
 * Section: Services
 */
const SectionContent = (props: Props): React.Element<*> => {
    const { content, btn } = props;

    function getActiveItem(id){
        if(id === 0){
            return "carousel-item active";
        }else{
            return "carousel-item";
        }
    }
    function getActiveIndicator(id){
        if(id === 0){
            return "btn-floating btn-lg active";
        }else{
            return "btn-floating btn-lg";
        }
    }

    return (
        <div className="py-5">
           
            
            <div className="wrapper-carousel-fix">
            
                <div id="interview-carousel" className="carousel no-flex testimonial-carousel slide dark-grey-text" data-ride="carousel" data-interval="10000">
                <ol className="carousel-indicators">
                    {content.map((item, i) => {
                    return(
                        <button key={i} data-target="#interview-carousel" data-slide-to={i} className={getActiveIndicator(i)}><span>{i+1}</span></button>
                    )
                        
                    })}
                </ol>
               
                <div className="carousel-inner py-5" role="listbox">
                
                {content.map((item, i) => {
                    return(
                    <div key={i} className={getActiveItem(i)}>
                        <div className="testimonial pb-5">
                             <div className="num-display font-weight-bold"><span>{"0"+(i+1)}</span></div>
                            <h2 className="h1-responsive font-weight-bold mb-5">{item.title}</h2>
                            <div dangerouslySetInnerHTML={{__html: item.text}}></div>
                            <h4 className="font-weight-bold">{item.name}</h4>
                            <h6 className="font-weight-bold my-3 text-muted">{item.info}</h6>
                        </div>
                    </div>
                    )
                })}
                </div>
                <a className="carousel-control-prev left carousel-control" href="#interview-carousel" role="button"
                    data-slide="prev">
                    <span className="icon-prev" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next right carousel-control" href="#interview-carousel" role="button"
                    data-slide="next">
                    <span className="icon-next" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>
            {props.btnShow !== null && 
                <ModalBtn btnstyle="WHITE" modal="#modalRegister" className="font-weight-bold">{btn[0].btntext}</ModalBtn>
            }
        </div>
    )
}

export default SectionContent
