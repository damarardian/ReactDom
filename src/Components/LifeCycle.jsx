import React from 'react'

class LifeCycle extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count : 10
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return true;

    }
    componentDidMount(){

        setTimeout(() => {
            this.setState({
                count: this.state.count -1
            })
        }, 2000);

        console.log('componentDidMount')

    }
    shouldComponentUpdate(nextProps, nextState){ //default ini adalah true, jika di tulis, system akan menanyakan returnnya, true or false
        console.log('nextState', nextState)
        console.log('shouldComponentUpdate')
        if (nextState.count === 0) {
            return false;    
        }
        return true;

    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')

    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate')

        setTimeout(() => {
            this.setState({
                count: this.state.count -1
            })
        }, 1000);

    }
    componentWillUnmount(){
        console.log('componentWillUnmount')

    }

    render(){
        return (
            <div>
                <h3 className="bg-primary text-center">{this.state.count}</h3>
            </div>
        )
    }
}

export default LifeCycle