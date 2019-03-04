import * as React from 'react'

//Import atoms
import Btn from "../../atoms/Button"

type Props = {
    content: string
}

const SectionContent = (props: Props): React.Element<*> => {
    const { content } = props;

    function getActiveItem(id){
        if(id === 0){
            return "carousel-item active";
        }else{
            return "carousel-item";
        }
    }

    return (
        <div className="container py-5">
           <h2 className="h1-responsive font-weight-bold mb-5">{content[0].heading}</h2>
            <div className="py-5 asbest m-auto">
                <div className="r r1">
                    <div className="c c2">
                        <div className="sphere s1">
                            <p>Verstehe deine Hautbedürfnisse</p>
                        </div>
                    </div>
                </div>
                <div className="r r2">
                    <div className="c c1">
                        <div className="sphere s4">
                            <p>Laufende Überprüfung und Anpassung</p>
                        </div>
                    </div>
                    <div className="c c3">
                        <div className="sphere s2">
                            <p>Analysieren deines Hautzustandes</p>
                        </div>
                    </div>
                </div>
                <div className="r r3">
                    <div className="c c2">
                        <div className="sphere s3">
                            <p>Entwickeln deines individuellen Beautyprogramms</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 text-center">
                <div className="row">
                    <div className="col-12"><Btn btnstyle="oWHITE" href="" className="font-weight-bold">Beautyprogramm starten</Btn></div>
                </div>
            </div>
        </div>
    )
}

export default SectionContent
