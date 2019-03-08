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
           <h2 className="h1-responsive font-weight-bold mb-5 pb-5">{content[0].heading}</h2>
                <ul className='graviola-container d-block d-sm-none'>
                    <li>
                        <div className="circle circle-white c2">
                            <div dangerouslySetInnerHTML={{__html: content[3].text}}></div>
                            <p><a href={content[3].href}>MEHR DAZU</a></p>
                        </div>
                    </li>
                    <li>
                        <div className="circle circle-blue c3">
                            <div dangerouslySetInnerHTML={{__html: content[4].text}}></div>
                            <p><a href={content[4].href}>MEHR DAZU</a></p>
                        </div>
                    </li>
                    <li>
                        <div className="circle circle-white c4">
                           <div dangerouslySetInnerHTML={{__html: content[5].text}}></div>
                            <p><a href={content[5].href}>MEHR DAZU</a></p>
                        </div>
                    </li>
                    <li>
                        <div className="circle circle-blue c1">
                            <div dangerouslySetInnerHTML={{__html: content[2].text}}></div>
                            <p><a href={content[2].href}>MEHR DAZU</a></p>
                        </div>
                    </li>
                </ul>

                <div className="asbest ml-auto mr-auto mb-5 d-none d-sm-block">
                <div className="r r1">
                    <div className="c c2">
                        <div className="sphere s1">
                            <div dangerouslySetInnerHTML={{__html: content[2].text}}></div>
                            <p><a href={content[2].href}>MEHR DAZU</a></p>
                        </div>
                    </div>
                </div>
                <div className="r r2">
                    <div className="c c1">
                        <div className="sphere s4">
                            <div dangerouslySetInnerHTML={{__html: content[5].text}}></div>
                            <p><a href={content[5].href}>MEHR DAZU</a></p>
                        </div>
                    </div>
                    <div className="c c3">
                        <div className="sphere s2">
                            <div dangerouslySetInnerHTML={{__html: content[3].text}}></div>
                            <p><a href={content[3].href}>MEHR DAZU</a></p>
                        </div>
                    </div>
                </div>
                <div className="r r3">
                    <div className="c c2">
                        <div className="sphere s3">
                            <div dangerouslySetInnerHTML={{__html: content[4].text}}></div>
                            <p><a href={content[4].href}>MEHR DAZU</a></p>
                        </div>
                    </div>
                </div>
            </div>
          
            <Btn btnstyle="oWHITE" href={content[1].btnhref} className="font-weight-bold mt-5">{content[1].btntext}</Btn>

        </div>
    )
}

export default SectionContent
