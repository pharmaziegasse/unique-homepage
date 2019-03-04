import * as React from 'react'

//Import atoms
import Btn from "../../atoms/Button"

type Props = {
    content: string
}

const SectionContent = (props: Props): React.Element<*> => {
    const { content } = props;

    return (
        <div className="container py-5">
           <h2 className="h1-responsive font-weight-bold mb-5">{content[0].heading}</h2>
            <div className="py-5 asbest ml-auto mr-auto mb-4">
                <div className="r r1">
                    <div className="c c2">
                        <div className="sphere s1">
                            <p>Verstehe deine Hautbedürfnisse</p>
                            <p>MEHR DAZU</p>
                        </div>
                    </div>
                </div>
                <div className="r r2">
                    <div className="c c1">
                        <div className="sphere s4">
                            <p>Laufende Überprüfung und Anpassung</p>
                            <p>MEHR DAZU</p>
                        </div>
                    </div>
                    <div className="c c3">
                        <div className="sphere s2">
                            <p>Analysieren deines Hautzustandes</p>
                            <p>MEHR DAZU</p>
                        </div>
                    </div>
                </div>
                <div className="r r3">
                    <div className="c c2">
                        <div className="sphere s3">
                            <p>Entwickeln deines individuellen Beautyprogramms</p>
                            <p>MEHR DAZU</p>
                        </div>
                    </div>
                </div>
            </div>

            <Btn btnstyle="oWHITE" href="" className="font-weight-bold mt-5">Beautyprogramm starten</Btn>

        </div>
    )
}

export default SectionContent
