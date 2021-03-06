//** Standard Frameworks */
import * as React from "react";

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton";

//** Helpers */
//** Personalization */
import Text from "../../helper/Text";
import { renderToString } from "react-dom/server";
import ReactHtmlParser from "react-html-parser";

//** Images */
/*import AAU from '../../../assets/content/aau.png';
import Build from '../../../assets/content/build.png';
import EFRE from '../../../assets/content/efre.png';
import Gingel from '../../../assets/content/gingel.png';
import KWF from '../../../assets/content/kwf.png';
import USP from '../../../assets/content/usp.png';*/

/**
 * General Hero Element
 */
const Hero = (props: Props): React.Element<*> => {
  const { heroitems } = props;

  //** Make the first carousel INDICATOR the active */
  function getActive(id) {
    if (id === 0) {
      return "active";
    }
  }

  //** Make the first carousel VIEW item the active */
  function getActiveItem(id) {
    if (id === 0) {
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

  //** Check if button exists (has values) */
  function checkButton(btn) {
    return <ModalBtn size="LG" param={btn} />;
  }

  return (
    <div
      id="hero-carousel"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      {/*<div className="companies">
            <div className="row justify-content-center w-100">
                <div className="col-4 col-md-auto">
                    <img className="img-fluid" src={Gingel} alt="Gingel Naturkosmetik" />
                </div>
                <div className="col-4 col-md-auto">
                    <img className="img-fluid" src={AAU} alt="Alpen Adria Universität" />
                </div>
                <div className="col-4 col-md-auto desktop-only">
                    <img className="img-fluid" src={KWF} alt="Kärnter Wirtschaftsförderung Fonds" />
                </div>
                <div className="col-4 col-md-auto desktop-only">
                    <img className="img-fluid" src={Build} alt="Build! Gründerzentrum" />
                </div>
                <div className="col-4 col-md-auto desktop-only">
                    <img className="img-fluid" src={EFRE} alt="EFRE" />
                </div>
                <div className="col-4 col-md-auto">
                    <img className="img-fluid" src={USP} alt="USP solutions" />
                </div>
    </div>
        </div>*/}
      {heroitems.length > 1 && (
        <ol className="carousel-indicators">
          {heroitems.map((item, i) => {
            return (
              <li
                key={i}
                data-target="#hero-carousel"
                data-slide-to={i}
                className={getActive(i)}
              ></li>
            );
          })}
        </ol>
      )}

      <div className="carousel-inner" role="listbox">
        {
          //** Render individual hero carousel items */
          heroitems.map((item, i) => {
            return (
              <div key={i} className={getActiveItem(i)}>
                <div
                  className="view hero-view"
                  style={{ backgroundImage: "url(" + item.img + ")" }}
                >
                  <div className="mask hero-gradient d-flex justify-content-center align-items-center">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 mb-4 white-text text-left">
                          <div className="hero-content">
                            <h1
                              className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown"
                              data-wow-delay="0.3s"
                            >
                              <strong
                                dangerouslySetInnerHTML={{
                                  __html: ReactHtmlParser(
                                    renderToString(<Text value={item.head} />)
                                  ),
                                }}
                              ></strong>
                            </h1>
                            <h3
                              className="my-5 white-text wow fadeInDown"
                              data-wow-delay="0.4s"
                            >
                              <strong
                                dangerouslySetInnerHTML={{
                                  __html: ReactHtmlParser(
                                    renderToString(
                                      <Text value={item.subhead} />
                                    )
                                  ),
                                }}
                              ></strong>
                            </h3>
                            {checkButton(item.btn)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {heroitems.length > 1 && (
                  <div className="carousel-caption pl-5 pr-5">
                    <div className="row white-text">
                      <div className="col-md-12 text-right">
                        <p className="hero-counter">
                          {i + 1} - {heroitems.length}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        }
      </div>
      {heroitems.length > 1 && (
        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-slide="prev"
        ></a>
      )}
      {heroitems.length > 1 && (
        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-slide="next"
        ></a>
      )}
    </div>
  );
};

export default Hero;
