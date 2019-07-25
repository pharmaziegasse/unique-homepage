//** Standard Frameworks */
import React from "react";

class SocialLinks extends React.Component{

    getType = (item) => {
        if(item.value.includes("facebook")){
            return "facebook";
        } else if(item.value.includes("instagram")){
            return "instagram";
        } else if(item.value.includes("twitter")){
            return "twitter";
        } else if(item.value.includes("linkedin")){
            return "linkedin";
        } else if(item.value.includes("xing")){
            return "xing";
        } else if(item.value.includes("pinterest")){
            return "pinterest";
        }
    }

    printItem = (item, i) => {
        
        let icon = "";
        switch (this.getType(item)) {
            case "facebook":
                icon = "fab fa-facebook-f";
                break;
            case "instagram":
                icon = "fab fa-instagram";
                break;
            case "twitter":
                icon = "fab fa-twitter";
                break;
            case "linkedin":
                icon = "fab fa-linkedin-in";
                break;
            case "xing":
                icon = "fab fa-xing";
                break;
            case "pinterest":
                icon = "fab pinterest-p";
                break;
        
            default:
                icon = "fas fa-hashtag";
                break;
        }

        return(
            <li key={i} className="list-inline-item">
              <a href={item.value} rel="noopener noreferrer" target="_blank" className="mx-1">
                <i className={icon}></i>
              </a>
            </li>
        );
    }

    renderItems =() => {
        let items = this.props.items;
        if(items !== null && items !== undefined){
            return(
                <ul className="list-unstyled list-inline list-social">
                    {
                        items.map((item, i) => {
                            return this.printItem(item, i);
                        })
                    }
                </ul>
            );
        } else {
            return null;
        }
        
    }

    render(){
        return this.renderItems();
    }

}

export default SocialLinks;
