
import React, { useEffect, useState } from "react"

class CountDown extends React.Component {
    state = {
        count: 10
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                // this.props.onTimesUp()
            }
        }
    }

    render() {
        return (
            <div> {this.state.count} class </div>
        )
    }
}

const NewCountDown = (props) => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        if (count === 0) {
            props.onTimesUp();
            return;
        }

        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    })
    return (
        <div> {count} hooks </div>
    )
}

export { CountDown, NewCountDown }