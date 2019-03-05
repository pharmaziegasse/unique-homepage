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
            <div className="py-5 asbest ml-auto mr-auto mb-5">
                <div className="r r1">
                    <div className="c c2">
                        <div className="sphere s1">
                            <p>{content[2].text}</p>
                            <p><a href={content[2].href}><small>MEHR DAZU</small></a></p>
                        </div>
                    </div>
                </div>
                <div className="r r2">
                    <div className="c c1">
                        <div className="sphere s4">
                            <p>{content[5].text}</p>
                            <p><a href={content[5].href}><small>MEHR DAZU</small></a></p>
                        </div>
                    </div>
                    <div className="c c3">
                        <div className="sphere s2">
                            <p>{content[3].text}</p>
                            <p><a href={content[3].href}><small>MEHR DAZU</small></a></p>
                        </div>
                    </div>
                </div>
                <div className="r r3">
                    <div className="c c2">
                        <div className="sphere s3">
                            <p>{content[4].text}</p>
                            <p><a href={content[4].href}><small>MEHR DAZU</small></a></p>
                        </div>
                    </div>
                </div>
            </div>

            <Btn btnstyle="oWHITE" href={content[1].btnhref} className="font-weight-bold mt-5">{content[1].btntext}</Btn>

        </div>
    )
}

export default SectionContent
