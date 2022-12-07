import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Itemlistcontainer from '../../components/Itemlistcontainer';
import ItemDetailContainer from '../../components/ItemDetailContainer';

import Home from '../../components/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


const Initial = () => {
    const Menus = [
        {
            name: 'HOME',
            href: '/' 
        },
        {
            name: 'REPRESENT',
            href: '/categoria/represent'   
        },
        {
            name: 'C.R.E.A.M',
            href: '/categoria/cream'   
        },
        {
            name: 'PRESIDENTE',
            href: '/categoria/presidente'
        },
        {
            name: 'BEER & CHURROS',
            href: '/categoria/beer'
        },
        {
            name: 'TIGER',
            href: '/categoria/tiger'
        },
        {
            name: `OG'S`,
            href: '/categoria/og'
        }
    ]


    
    return (
        <Layout>   
            <BrowserRouter>
                <Navbar menus={Menus} />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/categoria/:categoriaid' element={<Itemlistcontainer />}/>
                    <Route exact path='/item/:itemid' element={<ItemDetailContainer />}/>
                </Routes>
            </BrowserRouter>  
        </Layout>
    )
}

export default Initial;