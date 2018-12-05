import * as React from 'react'
import './SubBanner.css'

class SubBanner extends React.Component{
    public render() {
        return (
            <div className="sub_banner center">
                <div className="sidebar fl">
                    <div className="fl"><a href=""><img src={require('./hjh_01.gif')} /></a></div>
                    <div className="fl"><a href=""><img src={require('./hjh_02.gif')} /></a></div>
                    <div className="fl"><a href=""><img src={require('./hjh_03.gif')} /></a></div>
                    <div className="fl"><a href=""><img src={require('./hjh_04.gif')} /></a></div>
                    <div className="fl"><a href=""><img src={require('./hjh_05.gif')} /></a></div>
                    <div className="fl"><a href=""><img src={require('./hjh_06.gif')} /></a></div>
                    <div className="clear"/>
                </div>
                <div className="datu fl">
                    <a href=""><img src={require('./hongmi4x.png')} alt=""/></a>
                </div>
                <div className="datu fl">
                    <a href=""><img src={require('./hongmi4x.png')} alt=""/></a>
                </div>
                <div className="datu fr">
                    <a href=""><img src={require('./hongmi4x.png')} alt=""/></a>
                </div>
                <div className="clear"/>
            </div>
        )
    }
}
export default SubBanner