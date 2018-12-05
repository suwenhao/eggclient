import * as React from 'react';
import {HashRouter} from 'react-router-dom'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import Routes from './routes'
import './assets/style.css'
import 'swiper/dist/css/swiper.min.css'

class App extends React.Component {
  public render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <HashRouter>
            <Routes/>
        </HashRouter>
      </LocaleProvider>
    );
  }
}

export default App;
