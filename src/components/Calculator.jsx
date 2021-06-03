import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput, {toCelcius, TryConvert, toFahrenheit} from './TemperatureInput';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scale: 'c',
      temperature: ''
    }
    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleCelciusChange (temperature) {
    this.setState({
      scale: 'c',
      temperature
    })
  }

  handleFahrenheitChange (temperature) {
    this.setState({
      scale: 'c',
      temperature
    })
  }


  render () {
    const {temperature, scale} = this.state
    const celcius = scale === 'c' ? temperature : TryConvert( temperature, toCelcius)
    const fahrenheit = scale === 'f' ? temperature : TryConvert( temperature, toFahrenheit)
    return (
      <>
        <TemperatureInput scale="c" temperature={celcius} onTemperatureChange={this.handleCelciusChange}/>
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict celcius={celcius}/>
      </>
    )
  }
}

export default Calculator;