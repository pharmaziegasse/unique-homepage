import * as React from 'react'

class SectionText extends React.Component{
    printParagraph(i){
        if(typeof this.props.content[i].paragraph != "undefined"){
            return (<div key={i} dangerouslySetInnerHTML={{__html: this.props.content[i].paragraph}}></div>)
        }
    }
    render(){
        return (
            <div className="container pb-5 text-center">
                <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: this.props.content[0].heading}}></h2>
                    {this.props.content.map((item, i) => {
                        return (
                            this.printParagraph(i)
                        )
                    })}
            </div>
        );
    }
}

export default SectionText
