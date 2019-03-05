import * as React from 'react'
import classnames from 'classnames/bind'

import SectionBG from './section_bgs.js';

var sbg = classnames.bind(SectionBG);

type Props = {
    background: string,
    children: React.Node,
    className: string,
    sectionid: string
}

const Section = (props: Props): React.Element<*> => {
    const { background, children, className, sectionid } = props;

    const classProps: string = classnames(
        sbg(background),
        className
    )

    return (
        <section id={sectionid} className={classProps}>
            {children}
        </section>
    )
}

Section.defaultProps = {
    background: SectionBG.WHITE,
    className: ''
}

export default Section
