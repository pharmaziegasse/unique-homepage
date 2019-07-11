//** Standard Frameworks */
import * as React from 'react'

type Props = {
    background: string,
    children: React.Node,
    className: string,
    sectionid: string
}

/**
 * General Section Element
 */
const Section = (props: Props): React.Element<*> => {
    const { background, children, sectionid } = props;

    //** Set background style */
    let sectionStyle = {
        backgroundColor: background
    }

    //** Detect if Text should be white or black */
     function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function isDark() {
        let r = hexToRgb(background).r;
        let g = hexToRgb(background).g;
        let b = hexToRgb(background).b;
        let rgb = "rgb("+r+","+g+","+b+")";

        let match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(rgb);
        let result = ( match[1] & 255 )
            + ( match[2] & 255 )
            + ( match[3] & 255 )
            < 3 * 256 / 1.2;
        if(result){
            return "section-text-white";
        } else {
            return "section-text-grey";
        }
    }

    return (
        <section id={sectionid} className={isDark()} style={sectionStyle}>
            {children}
        </section>
    )
}

export default Section
