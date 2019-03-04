import * as React from 'react'
import classnames from 'classnames/bind'

import SectionBG from './section_bgs.js';

var sbg = classnames.bind(SectionBG);

type Props = {
    background: string,
    children: React.Node,
    className: string,
}

const Section = (props: Props): React.Element<*> => {
    const { background, children, className } = props;

    const classProps: string = classnames(
        sbg(background),
        className
    )

    return (
        <section className={classProps}>
            {children}
        </section>
    )
}

Section.defaultProps = {
    background: SectionBG.WHITE,
    className: ''
}

export default Section
