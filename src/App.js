import React from 'react';
import './App.css';
import SiteCard from '../src/Components/SiteCard/SiteCard'
import Ad from './Components/Ad/Ad.js'
import Skeleton from '@material-ui/lab/Skeleton';

// Site photo
import otrohetsplatsen from './images/sites/otrohetsplatsen/otrohetsplatsen.jpg'
import otrohetsplatsenGirl from './images/sites/otrohetsplatsen/otrohetsplatsenGirl.jpg'

import spaningsplatsen from './images/sites/spaningsplatsen/spaningsplatsen.jpg'
import spaningsplatsenGirl from './images/sites/spaningsplatsen/spaningsplatsenGirl.jpg'

import mogenromantik from './images/sites/mogenromantik/mogenromantik.jpg'
import mogenromantikGirl from './images/sites/mogenromantik/mogenromantikGirl.jpg'

import hetakontakter from './images/sites/hetakontakter/hetakontakter.jpg'
import hetakontakterGirl from './images/sites/hetakontakter/hetakontakterGirl.jpg'

import hetkontakt from './images/sites/hetkontakt/hetkontakt.jpg'
import hetkontaktGirl from './images/sites/hetkontakt/hetkontaktGirl.jpg'

import dejtkontakt from './images/sites/dejtkontakt/dejtkontakt.jpg'
import dejtkontaktGirl from './images/sites/dejtkontakt/dejtkontaktGirl.jpg'

import erotikmatch from './images/sites/erotikmatch/erotikmatch.jpg'
import erotikmatchGirl from './images/sites/erotikmatch/erotikmatchGirl.jpg'

import flirthits from './images/sites/flirthits/flirthits.jpg'
import flirthitsGirl from './images/sites/flirthits/flirthitsGirl.jpg'

import engangsligg from './images/sites/engangsligg/engangsligg.jpg'
import engangsliggGirl from './images/sites/engangsligg/engangsliggGirl.jpg'

// Girls
import MinaBrostVillHa from './images/girls/MinaBrostVillHa.jpg'
import StormandeHjarna from './images/girls/StormandeHjarna.jpg'
import TrallandeUllis from './images/girls/TrallandeUllis.jpg'
import LindaPangPaSex from './images/girls/LindaPangPaSex.jpg'
import SussanFriSex from './images/girls/SussanFriSex.jpg'
import Petra_villha_KK from './images/girls/Petra_villha_KK.jpg'
import KrylligaJag from './images/girls/KrylligaJag.jpg'
import Knullaenbrud from './images/girls/Knullaenbrud.jpg'
import MaddeVarierar from './images/girls/MaddeVarierar.jpg'
import ToppandeKedjan from './images/girls/ToppandeKedjan.jpg'
import BeasKreationer from './images/girls/BeasKreationer.jpg'
import Paupaupau from './images/girls/Paupaupau.jpg'
import VanligaKaffet from './images/girls/VanligaKaffet.jpg'
import LindaVillHasnop from './images/girls/LindaVillHasnop.jpg'
import ALLICAM from './images/girls/ALLI-CAM.jpg'
import KUKMEDKONDOM from './images/girls/KUKMEDKONDOM.jpg'
import TrognaFia from './images/girls/TrognaFia.jpg'
import PorrLiza from './images/girls/Porr-Liza.jpg'
import BlondaSusse from './images/girls/BlondaSusse.jpg'
import NakenEm from './images/girls/NakenEm.jpg'


import photoForAd from '../src/images/girl.jpg'


let sitesForGirl = "http://www.otrohetsplatsen.com";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site: [
        {
          domain: "otrohetsplatsen",
          link: "s.scandinavia-date.website",
          rank: "top",
          category: "Adult",
          image: otrohetsplatsen,
          girlPhoto: otrohetsplatsenGirl,
          girlName: "VeckovisKia",
          age: "32",
          desc: `MÖT NÅGRA AV VÅRA MEDLEMMAR
           Detta är en social plattform med tusentals fördomsfria människor som söker kravlöst sex hos Sverigeflirten. Så om du letar efter en flirty kompis för att leva ut dina vildaste fantasier är Otrohetsplatsen det perfekta stället att göra det! Bara registrera dig och njut!`
        },
        {
          domain: "spaningsplatsen",
          link: "s1.scandinavia-date.website",
          rank: "top",
          category: "Adult",
          image: spaningsplatsen,
          girlPhoto: spaningsplatsenGirl,
          girlName: "Blondalillajag",
          age: "44",
          desc: " Registrera dig och fyll i din profilinformation. Att lägga till en profilbild förbättrar dina chanser att nå framgång. Klicka på aktiveringslänken i ditt bekräftelsemail och du kan börja matcha direkt!"
        },
        {
          domain: "mogenromantik",
          link: "s2.scandinavia-date.website",
          rank: "top",
          category: "Adult",
          image: mogenromantik,
          girlPhoto: mogenromantikGirl,
          girlName: "Rockadinshow",
          age: "26",
          desc: "REGISTRERA DIG, FÅ OBEGRÄNSAD. TILLGÅNG OCH BÖRJA DEJTA! Ja, det är är enkelt. Som medlem hos mogenromantik.com får du alla verktyg du behöver. Ett användarvänligt gränssnitt, sidor, sidor och ännu fler sidor med foton och möjliga matchningar samt alla sökalternativ du behöver för att hitta det du letar efter ... snabbt"
        },
        {
          domain: "hetakontakter",
          link: "s3.scandinavia-date.website",
          rank: "top",
          category: "Adult",
          image: hetakontakter,
          girlPhoto: hetakontakterGirl,
          girlName: "KuligaKyckling",
          age: "30",
          desc: "Optimerad för dator, surfplatta och smartphone.Sveriges nya top-hit i sexkontakt online! 100% sekretess i en diskret och säker miljö."
        },
        {
          domain: "hetkontakt",
          link: "s4.scandinavia-date.website",
          rank: "top",
          category: "Adult",
          image: hetkontakt,
          girlPhoto: hetkontaktGirl,
          girlName: "ROLapparDA",
          age: "34",
          desc: "För att kunna se alla bilder, skapa konto gratis!"
        },
        {
          domain: "dejtkontakt",
          link: "s5.scandinavia-date.website",
          rank: "top",
          category: "Adult",
          image: dejtkontakt,
          girlPhoto: dejtkontaktGirl,
          girlName: "SparandaStation",
          age: "28",
          desc: "ENDAST IDAG FRI ÅTKOMST FÖR MÄN Skynda! Besvara ett par korta frågor så att vi kan koppla samman dig med dina bästa matchningar. Du får omedelbar GRATIS tillgång till sidan! Obs! Detta erbjudande gäller endast i 2.11 minuter!"
        },
        {
          domain: "erotikmatch",
          link: "s6.scandinavia-date.website",
          rank: "adult",
          category: "Adult",
          image: erotikmatch,
          girlPhoto: erotikmatchGirl,
          girlName: "ThessOrgasmer",
          age: "30",
          desc: `Vår webbplats är skyddad med ett SSL-certifikat
          Idealisk ratio mellan män och kvinnor
          Antalet medlemskap för män är begränsat – på så sätt säkerställer vi en bra balans mellan antalet män och kvinnor
          100% flirtgaranti!
          Vår unika matchnings- och chattformula fungerar för alla!`
        },
        {
          domain: "flirthits",
          link: "s7.scandinavia-date.website",
          rank: "adult",
          category: "Adult",
          image: flirthits,
          girlPhoto: flirthitsGirl,
          girlName: "CarinFantiserar",
          age: "48",
          desc: `flirthits.com - Look for Fun in Your Area
          Forget about disappointing acquaintances – here you’re going to find men and women ready for fun! Sign up quickly on our site and quickly find a pleasant partner. `
        },
        {
          domain: "engangsligg",
          link: "s8.scandinavia-date.website",
          rank: "adult",
          category: "Adult",
          image: engangsligg,
          girlPhoto: engangsliggGirl,
          girlName: "HalsoElin",
          age: "32",
          desc: `"Din nästa crush finns här!
          Gå med nu! Det är GRATIS.
          Vår webbplats är mobil anpassad, så att du alltid kan anslutas till vår dejting tjänst. Detta sättet kommer du inte att gå miste om chansen att dejta din fantasi sexy tjej."`
        },
      ],



      girls: [
        {
          name: "MinaBrostVillHa",
          age: 35,
          image: MinaBrostVillHa,
          link: sitesForGirl
        },
        {
          name: "StormandeHjarna",
          age: 29,
          image: StormandeHjarna,
          link: sitesForGirl
        },
        {
          name: "TrallandeUllis",
          age: 29,
          image: TrallandeUllis,
          link: sitesForGirl
        },
        {
          name: "LindaPangPaSex",
          age: 32,
          image: LindaPangPaSex,
          link: sitesForGirl
        },
        {
          name: "LindaPangPaSex",
          age: 32,
          image: LindaPangPaSex,
          link: sitesForGirl
        },
        {
          name: "SussanFriSex",
          age: 39,
          image: SussanFriSex,
          link: sitesForGirl
        },
        {
          name: "Petra_villha_KK",
          age: 33,
          image: Petra_villha_KK,
          link: sitesForGirl
        },
        {
          name: "KrylligaJag",
          age: 35,
          image: KrylligaJag,
          link: sitesForGirl
        },
        {
          name: "Knullaenbrud",
          age: 31,
          image: Knullaenbrud,
          link: sitesForGirl
        },
        {
          name: "MaddeVarierar",
          age: 30,
          image: MaddeVarierar,
          link: sitesForGirl
        },
        {
          name: "ToppandeKedjan",
          age: 31,
          image: ToppandeKedjan,
          link: sitesForGirl
        },
        {
          name: "BeasKreationer",
          age: 35,
          image: BeasKreationer,
          link: sitesForGirl
        },
        {
          name: "Paupaupau",
          age: 30,
          image: Paupaupau,
          link: sitesForGirl
        },
        {
          name: "VanligaKaffet",
          age: 37,
          image: VanligaKaffet,
          link: sitesForGirl
        },
        {
          name: "LindaVillHasnop",
          age: 33,
          image: LindaVillHasnop,
          link: sitesForGirl
        },
        {
          name: "ALLI-CAM",
          age: 35,
          image: ALLICAM,
          link: sitesForGirl
        },
        {
          name: "KUKMEDKONDOM",
          age: 33,
          image: KUKMEDKONDOM,
          link: sitesForGirl
        },
        {
          name: "TrognaFia",
          age: 33,
          image: TrognaFia,
          link: sitesForGirl
        },
        {
          name: "Porr-Liza",
          age: 30,
          image: PorrLiza,
          link: sitesForGirl
        },
        {
          name: "Blonda:Su:sse",
          age: 30,
          image: BlondaSusse,
          link: sitesForGirl
        },
        {
          name: "NakenEm",
          age: 33,
          image: NakenEm,
          link: sitesForGirl
        },
      ],
      isAdOpen: true,
    }
  }




  render() {
    let closing = () => {
      this.setState({ isAdOpen: false })
    }

    return (
      <div className="App" >
        <h1 style={{ fontSize: "60px", fontFamily: "Courgette" }}>SCANDINAVIA-DATE</h1>
        <p style={{ fontSize: "20px", fontFamily: "Courgette" }}>Skapa en profil på alla sidor för att njuta av onlinevärlden till fullo !</p>
        <Ad isAdOpen={this.state.isAdOpen} closing={closing} link="https://cyberblueberry.com/?a=100319&c=104408&s1=" photoForAd={photoForAd} />
        <div className="sliderWrapper">
          <div className="sliders diffColor">
            <h2 className="indie">Toppsidor !</h2>
            {NakenEm ?
              <SiteCard state={this.state.site} rank="top" /> :
              <Skeleton variant="rect" width={210} height={117} />
            }
          </div>
          <div className="sliders diffColor animation">
            <h2 className="indie">Nära dig !</h2>
            {NakenEm ?
              <SiteCard state={this.state.girls} isAvatar={true} />
              : <Skeleton variant="rect" width={210} height={117} />
            }
          </div>
          <div className="sliders diffColor">
            <h2 className="indie">Adult !</h2>
            {NakenEm ?
              <SiteCard state={this.state.site} rank="adult" />
              : <Skeleton variant="rect" width={210} height={117} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
