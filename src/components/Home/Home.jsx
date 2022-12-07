import Itemlistcontainer from "../Itemlistcontainer";
import Proptypes from 'prop-types'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({menus}) => {

    const listasproductos = [
        {
            producto: 'REPRESENT',
            img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_NV22_BannerWeb2_XP1fzTY.2e16d0ba.fill-700x930-c100.jpg',
            id: '1',  
            href: '/categoria/represent' 
        },
        {
            producto: 'C.R.E.A.M',
            img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_DC22_CREAM_BannerWeb.2e16d0ba.fill-700x930-c100.jpg',
            id: '2',
            href: '/categoria/cream'
        },
        {
            producto: 'PRESIDENTE',
            img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_NV22_RRSS_Presidente_Web.2e16d0ba.fill-700x930-c100.png',
            id: '3',   
            href: '/categoria/presidente'
        },
        {
            producto: 'BEER & CHURROS',
            img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_NV22_BannerWeb4b.2e16d0ba.fill-700x930-c100.jpg',
            id: '4',   
            href: '/categoria/beer'
        },
        {
            producto: 'ORIGINAL GANGSTER',
            img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_NV22_BannerWeb2.2e16d0ba.fill-700x930-c100.jpg',
            id: '5',
            href: '/categoria/tiger'   
        },
        {
            producto: `OG'S`,
            img: 'https://ogsbrand.storage.googleapis.com/media/images/Clasica.2e16d0ba.fill-700x930-c100.jpg',
            id: '6',
            href: '/categoria/og'
        }
    ];

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(listasproductos);
            }, 1000)
        });
        getData.then(res => setData(res))
    }, [])

    return (
        <div className="home__container">
            <div className='home__containerflex'>
                { data && data.map((listasproducto, index) =>{
                    const newKey = `${listasproducto}-${index}`
                    return (
                        <Link to={listasproducto.href} key={newKey} className="home__itemcontainer">
                            <img src={listasproducto.img} alt="" />
                            <div className='home__detalles'>
                                <p className="home__items">{listasproducto.producto}</p>
                            </div>
                        </Link>
                    )  
                })
                } 
            </div>      
        </div>
        )
}

Home.proptype = {
    listasproductos: Proptypes.array.isRequired,
    menus: Proptypes.array.isRequired
}

export default Home;