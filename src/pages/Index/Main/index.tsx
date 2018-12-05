import * as React from 'react';
import Header from 'src/components/Header'
import BannerX from 'src/components/BannerX';
import BannerY from 'src/components/Index/BannerY';
import SubBanner from 'src/components/Index/SubBanner';
import Danpin from 'src/components/Index/Danpin';
import ItemOne from 'src/components/Index/CategoryItem/ItemOne';
import ItemTwo from 'src/components/Index/CategoryItem/ItemTwo';
import Footer from 'src/components/Footer';

class Main extends React.Component{
    public render() {
        return (
          <div className="main-page">
            <Header/>
            <BannerX/>
            <BannerY/>
            <SubBanner/>
            <Danpin/>
            <ItemOne/>
            <ItemTwo/>
            <Footer/>
          </div>  
        )
    }
}
export default Main