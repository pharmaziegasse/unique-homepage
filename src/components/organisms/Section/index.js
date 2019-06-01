import * as React from 'react'

type Props = {
    background: string,
    children: React.Node,
    className: string,
    sectionid: string
}

const Section = (props: Props): React.Element<*> => {
    const { background, children, className, sectionid } = props;

    let sectionStyle = {
        backgroundColor: background
    }

    return (
        <section id={sectionid} className={className} style={sectionStyle}>
            {children}
        </section>
    )
}

export default Section
