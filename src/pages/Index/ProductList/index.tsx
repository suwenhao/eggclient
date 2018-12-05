import * as React from 'react'
import './ProductList.css'
import Header from 'src/components/Header'
import BannerX from 'src/components/BannerX';
import Footer from 'src/components/Footer';

class ProductList extends React.Component{
    
    public render() {
        return (
            <div className="product-info-page">
                <Header/>
                <BannerX/>
                
                <Footer/>
            </div>
        )
    }
}
export default ProductList