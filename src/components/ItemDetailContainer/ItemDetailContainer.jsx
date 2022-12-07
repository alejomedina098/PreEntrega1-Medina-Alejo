import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Proptypes from 'prop-types'
import { Link } from "react-router-dom";
import Item from "../Item/Item";


const productoslista = [
    {
        itemid: '1',
        name: 'REPRESENT - Sudadera Crema',
        img: 'https://ogsbrand.storage.googleapis.com/media/images/Sudadera_FRONT_01_SVrNmGg.2e16d0ba.fill-800x933-c100.png',
        categoria: 'represent',
        precio: '$28.000'
    },
    {
        itemid: '2',
        name: 'REPRESENT - Pantalón',
        img: 'https://ogsbrand.storage.googleapis.com/media/images/Pantalon_FRONT_01_y7btEwS.2e16d0ba.fill-800x933-c100.png',
        categoria: 'represent',
        precio: '$28.000'
    },
    {
        itemid: '3',
        name: 'C.R.E.A.M. - Sudadera Beige',
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_SudaOriginalsV2_Beige_Del.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'cream',
        precio: '$28.000'
    },
    {
        itemid: '4',
        name: 'C.R.E.A.M. - Sudadera Negra',
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_SudaOriginalsV2_Negra_Del.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'cream',
        precio: '$28.000'
    },
    {
        itemid: '5',
        name: `MAKE OG'S GREAT AGAIN - Camiseta`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_MakeOGSGreat_Camiseta_Bla.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'presidente',
        precio: '$28.000'
    },
    {
        itemid: '6',
        name: `MAKE OG'S GREAT AGAIN - Sudadera con Capucha`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_MakeOGSGreat_Hoodie_Blanc.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'presidente',
        precio: '$28.000'
    },
    {
        itemid: '7',
        name: `KOREAN BEER - Camiseta`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_KoreanBeer_Camiseta_Blanc.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'beer',
        precio: '$28.000'
    },
    {
        itemid: '8',
        name: `KOREAN BEER - Sudadera con Capucha`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_KoreanBeer_Hoodie_Blanca_.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'beer',
        precio: '$28.000'
    },
    {
        itemid: '9',
        name: `TIGER - Camiseta Relaxed Fit`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_Rawr_Camiseta_Black_Delan.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'tiger',
        precio: '$28.000'
    },
    {
        itemid: '10',
        name: `TIGER - Sudadera con Capucha`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_Rawr_Hoodie_Negra_Delante.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'tiger',
        precio: '$28.000'
    },
    {
        itemid: '11',
        name: `The OG's - Sudadera`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/og_sweatshirt_black.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'og',
        precio: '$28.000'
    },
    {
        itemid: '12',
        name: `OG's 2.0 - Sudadera Con Capucha`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/Ogs_2_hood_White.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'og',
        precio: '$28.000'
    }
]

const ItemDetailContainer = ({onAdd}) => { 

    return (
        <div className="item__container">
                <Item productoslista={productoslista} />   
                
        </div>
    )
}

ItemDetailContainer.proptype = {
    productos: Proptypes.array.isRequired
}

export default ItemDetailContainer;