import * as React from 'react'

//Import atoms
import Btn from "../../atoms/button"

const Hero_Content = () => {
    return (
        <div className="hero-content">
            <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown" data-wow-delay="0.3s"><strong>Don't call it a cream,<br/>call it your unique<br/>program.</strong></h1>
            <h3 className="my-5 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Deine persönliche Erfolgsstory zu schöner Haut durch individuelle Beautyprogramme von erfahrenen Experten.</strong></h3>
            <Btn className="wow fadeInDown font-weight-bold" btnstyle="WHITE" size="LG" data-wow-delay="0.4s">Beautyprogramm starten</Btn>
        </div>
    )
}

export default Hero_Content
