import * as React from 'react'
import * as mobx from 'mobx'
import {observer} from 'mobx-react'
import {Button} from 'antd'

@observer
class Header extends React.Component{
    @mobx.observable
    public $num:number = 1;

    public getNum() {
        console.log(this.$num)
    }
    public render(){
        return (
            <header>
                {this.$num}
                <button onClick={()=>{
                    this.$num+=1
                }}>+1</button>
                <Button>你好</Button>
            </header>
        )
    }
}
export default (Header as any)