import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

// Replace with CMS!
import bg1 from "./bg1.jpg";
import bg2 from "./bg2.jpg";
import logo_dark from "./dark.png";
import logo_light from "./light.png";
import icon1 from "./icon1.gif";
import icon2 from "./icon2.gif";
import icon3 from "./icon3.gif";
import section1_img from "./section1.jpg";
import section2_img from "./section2.jpg";
import section3_img from "./section3.jpg";

import section8_img from "./section8.jpg";


const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://thedifferent.at/api/graphql' }),
  cache: new InMemoryCache()
});

client.query({ query: gql`
      query articles {
        articles {
          
          header {
            ... on HeadingBlock {
              value
            }
          }
          main {
            ... on ParagraphBlock {
              value
            }
          }
          footer {
            ... on HeadingBlock {
              value
            }
          }
        }
      }
    ` }).then(result => {console.log(result)
    
    /* Later to be replaced with headless CMS content */
export const navitems = [
  {href:"#why", text:"Warum TheUniqueStory?", active:false, type:"text"},
  {href:"#method", text:"Wie funktioniert es?", active:false, type:"text"},
  {href:"#pricing", text:"Preise", active:false, type:"text"},
  {href:"#about", text:"Über uns", active:false, type:"text"},
  {href:"/getting-started", text:"Loslegen", active:false, type:"button"}
];
export const heroitems = [
  {img:bg1,head:"Don't call it a cream,<br>call it your unique<br>program.", subhead:"Deine persönliche Erfolgsstory zu schöner Haut durch individuelle Beautyprogramme von erfahrenen Experten.",btntext:"Beautyprogramm starten",btnhref:"/start"},
  {img:bg2,head:"Don't call it a cream,<br>call it Lorem Ipsum.", subhead:"Lorem Ipsum Dolor sit amet.",btntext:"",btnhref:""}
]
export const sociallinks = [
  {fb:"https://www.facebook.com", ig:"https://www.instagram.com"}
]
export const companyinfo = [
  {city:"Klagenfurt",zip:"9020",address:"Pharmaziegasse 5",phone:"+43 463 45 904-0",email:"office@theuniquestory.com",copyrightholder:"TheUniqueStory"}
]
export const logos = [
  {light:logo_light,dark:logo_dark}
]
// Section 0
export const section0_contents = [
  {heading:"Drei Gründe zu schöner Haut.<br>Garantiert"},
  {icon:icon1,text:"Dein Pflegeprogramm wird individuell nur für dich und für deine Haut entwickelt"},
  {icon:icon2,text:"Experten kümmern sich um deine ganz persönlichen Anforderungen"},
  {icon:icon3,text:"Deine Haut wird auf Dauer mit ehricher, frischer und natürlicher Pflege made in Austria versorgt"},
  {btntext:"Beautyprogramm starten",btnhref:"/start"}
]
// Section 1
// Number of paragraphs is flexible. Just add more or less and the view will render accordingly
export const section1_contents = [
  {heading:"Individuelles Programm"},
  {img:section1_img},
  {btntext:"Beautyprogramm starten",btnhref:"/start"},
  {lead:"<p>THE UNIQUE STORY hilft bei der Lösung von individuelen, ganz speziellen Hauptproblemen. Keine Haut gleicht der anderen, ein Standardprodukt vom Regal kann diesen Anforderungen in keiner Weise gerecht werden. Das Risiko, dass Produkte gekauft werden, die für den individuellen Hauttyp unpassend und damit unwirksam, unter Umständen sogar schädigend sind, ist in der Regel sehr hoch.</p>"},
  {paragraph:"THE UNIQUE STORY hilft dir deine Haut besser kennenzulernen und damit die optimale Lösung für deine ganz speziellen Bedürfnisse zu finden. Abgestimmt auf deinen persönlichen Hautzustand stellen wir ein persönliches/personalisiertes Pflegeprogramm mit ausgewählten Produkten zusammen, die den höchsten Qualitäts- und Frischeanspürchen genügen. "},
  {paragraph:"Begleitet wird die Entwicklung dieses Pflegeprogramms von deinem persönlichen Beautycoach, der sich eingehend mit den Bedürfnissen deiner Haut auseinandersetzt und dir hilft deine Haut besser zu verstehen. Dein Beautycoach stellt sicher, dass deine Wünsche alle in deinem Programm umgesetzt werden und überwacht mit dir die Wirkung der Produkte."},
  {paragraph:"Unsere Beautyexperten lassen dich nach der Behandlung nicht im Stich, sondern begleiten dich dann in der gesamten Zeit der Anwendung, besprechen mit dir die Wirksamkeit und den Erfolg der Anwendung und arbeiten gegebenfalls an einer Verbesserung oder Adaptierung der Rezeptur."},
]
// Section 2
// Number of paragraphs is flexible. Just add more or less and the view will render accordingly
export const section2_contents = [
  {heading:"Analyse von Experten"},
  {img:section2_img},
  {btntext:"Beautyprogramm starten",btnhref:"/start"},
  {lead:"Bei der Wahl deines Beautyprogramms unterstützt dich neben deinem Beautycoach auch unser Expertenteam. Dieses Team besteht aus langjährig erfahrenen Kosmetikerinnen und Dermatologen, die sich im Rahmen von regelmäßigen Board Meetings deinen Hautzustand ansehen und analysieren. "},
  {paragraph:"Die Experten stellen sicher, dass nur diejenigen Inhaltsstoffe an deine Haut gelassen werden, die auch für dich geeignet sind und entwickeln dein persönliches hochwirksames Programm abgestimmt auf deine Lebensumstände, auf die Jahreszeit, Klimaänderungen u.v.m."},
  {paragraph:"Darüber hinaus versorgt dich das Expertenteam regelmäßig mit seinem Know-how und die neuesten Erkenntnisse aus dem Gebiet der Hautpflege, damit du immer am laufenden bist. Somit ist es für dich leichter, dich im Dschungel der Pflegeprodukte besser zu orientieren und damit bessere Entscheidungen für deine Haut zu treffen. Die Zeit, die du dir bei der aufwändigen Suche nach dem richtigen Produkt sparst. kannst du nun deiner Haut und deinem persönlichen Pflegeprogramm widmen."}
]

// Section 3
export const section3_contents = [
  {heading:"Frische und natürliche Kosmetik<br>handgemacht aus dem Labor"},
  {img:section3_img},
  {btntext:"Beautyprogramm starten",btnhref:"/start"},
  {lead:"Unsere Produkte werden frisch für dich zubereitet."},
  {paragraph:"Sie beinhalten keine chemischen Konservierungs. Farb- und Duftstoffe, sondern ausschließlich natürliche und zertifizierte Rohstoffe. Sie werden von Hand in unserem Labor unter strengsten Auflagen nur für dich hergestellt. Alle Produkte sind mit nachhaltigen Inhaltsstoffen nach den persönlichen Anforderungen des jeweiligen Hautzustandes hergestellt und genügen höchsten Qualitätsanforderungen. Wir legen sehr viel Wert, dass unsere Inhaltsstofffe auch sehr gut verträglich sind. Um die optimale Auswahl dieser Inhaltsstoffe zu gewährleisten, teile u deine Wünsche und Anforderungen mit und sprich mit unserem Beautycoach."}
]

// Section 4
export const section4_contents = [
  {heading:"Wie funktioniert es?"},
  {btntext:"Beautyprogramm starten",btnhref:"/start"},
  {text:"Verstehen deiner Hautbedürfnisse",href:"#"},
  {text:"Analysieren deines Hautzustandes",href:"#"},
  {text:"Entwickeln deines individuellen Beautyprogrammes",href:"#"},
  {text:"Laufendes Überprüfen und Anpassen",href:"#"},
]
// Section 5
export const section5_button = [
  {btntext:"Beautyprogramm starten",btnhref:"/start"}
]
export const section5_contents = [
  {title:"Interview mit deinem Beautycoach",text:"Im Rahmen eines ausführlichen Gesprächs mit unserem Beautycoach lernen Wir deine Haut kennen. Wir sprechen über deine individuelle Haut- und Lebenssituation, tauschen Informationen aus, die für dich und deine Hautpflege wichtig sind. Es weiden alle Faktoren besprochen, die deine individuelle Hautsituation beeinflussen. Alles Wird genau erfasst, um deinen individuellen Beautyreport zu erstellen. Was genau Wir mit dir besprechen findest du im Interviewleitfaden."},
  {title:"10 Schritte zu gesunder und schöner Haut",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
]

// Section 6
export const section6_contents = [
  {heading:"Was unsere Kunden sagen"}
]
export const reviews = [
  {name:"Max Mustermann",img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",quote:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",info:"Position und Firma"},
  {name:"Maxine Musterfrau",img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",quote:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr. At vero eos et accusam et justo duo dolores et ea rebum.",info:"Position und Firma"},
]

// Section 7
export const section7_contents = [
  {heading:"Preis"},
  {title:"Baisc",description:"Hier kommt die Beschreibung inkl. Details vom Basic Programm.",price:"199",btntext:"Beautyprogramm starten",btnhref:"/start"},
  {title:"Standard",description:"Hier kommt die Beschreibung inkl. Details vom Standard Programm.",price:"299",btntext:"Beautyprogramm starten",btnhref:"/start"},
  {title:"Premium",description:"Hier kommt die Beschreibung inkl. Details vom Premium Programm.",price:"399",btntext:"Beautyprogramm starten",btnhref:"/start"}
]
// Section 8
// Number of paragraphs is flexible. Just add more or less and the view will render accordingly
export const section8_contents = [
  {heading:"Über uns"},
  {img:section8_img},
  {paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {paragraph:"Number of paragraphs is flexible"},
]
    
    
    
    
    });


