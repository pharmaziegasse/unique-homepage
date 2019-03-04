import * as React from 'react'

//Import atoms
import Btn from "../../atoms/button"

type Props = {
    className: string
}

const Hero = (props: Props): React.Element<*> => {
    const { heroitems } = props;


    function getActive(id){
        if(id === 0){
            return "active";
        }
    }
    function getActiveItem(id){
        if(id === 0){
            return "carousel-item active";
        }else{
            return "carousel-item";
        }
    }
    function checkButton(text, href){
        if(text !== "" && href !== ""){
            return <Btn href={href} className="wow fadeInDown font-weight-bold" btnstyle="WHITE" size="LG" data-wow-delay="0.4s">{text}</Btn>
        }
    }

    return (
        <div id="hero-carousel" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
                {heroitems.map((item, i) => {
                    return (<li data-target="#hero-carousel" data-slide-to={i} className={getActive(i)}></li>) 
                })}
            </ol>
         
            <div class="carousel-inner" role="listbox">

            {heroitems.map((item, i) => {
                return (
                    <div className={getActiveItem(i)}>
                        <div class="view hero-view" style={{backgroundImage: 'url('+ item.img +')'}}>
                            <div class="mask hero-gradient d-flex justify-content-center align-items-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 mb-4 white-text text-left">
                                            <div className="hero-content">
                                                <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown" data-wow-delay="0.3s"><strong dangerouslySetInnerHTML={{__html: item.head}}></strong></h1>
                                                <h3 className="my-5 white-text wow fadeInDown" data-wow-delay="0.4s"><strong dangerouslySetInnerHTML={{__html: item.subhead}}></strong></h3>
                                                {checkButton(item.btntext,item.btnhref)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-caption">
                            <div class="animated fadeInDown">
                                <h3 class="h3-responsive">Light mask</h3>
                                <p>First text</p>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>

            <a class="carousel-control-prev" href="#hero-carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#hero-carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Hero
