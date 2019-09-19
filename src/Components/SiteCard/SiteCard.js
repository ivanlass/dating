import React from 'react';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import style from '../SiteCard/SiteCard.module.css'
import SimpleModal from "../Modals/SimpleModal"
import Avatars from "../Avatar/Avatars"
let topSitesSlide;

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
};

function SiteCard(props) {
    props.isAvatar ? settings.slidesToShow = 4 : settings.slidesToShow = 3
    topSitesSlide = props.isAvatar === true ? props.state.map(girl => (

        < div className={style.imgWrapper} key={girl.name}>
            <Avatars
                image={girl.image}
                name={girl.name}
                age={girl.age} />

            <p className="indie">{girl.name}</p>
            <SimpleModal className="avatarsWrapper"
                image={girl.image}
                name={girl.name}
                age={girl.age}
                isAvatar={props.isAvatar}
                link={girl.link} />
        </div >
    )) :

        topSitesSlide = props.state.map(site => (
            site.rank === props.rank ?
                < div key={site.domain}>
                    <div className={style.imgWrapper}>
                        <a target="_blank" href={site.link} className={style.forHover}>
                            <div style={{ backgroundImage: `url(${site.image})` }} className={style.img}></div>
                        </a>
                    </div>
                    <p style={{ textAlign: "center", textTransform: "uppercase", marginTop: "30px" }} className="indie">{site.domain}</p>
                    <SimpleModal
                        domain={site.domain}
                        category={site.category}
                        image={site.image}
                        girlPhoto={site.girlPhoto}
                        girlName={site.girlName}
                        age={site.age}
                        desc={site.desc}
                        link={site.link} />
                </div >
                : null

        ))

    return (
        < div>
            < Slider {...settings} style={{ textAlign: "center" }}>
                {topSitesSlide}

            </Slider >

        </div >
    );

}

export default SiteCard;