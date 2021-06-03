import React from 'react';

const scaleNames = {
  c: "Celcius",
  f: "Fahrenheit"
 }
 
export function toCelcius (fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

export function toFahrenheit (celcius) {
  return (celcius * 9 / 5) + 32
}

export function TryConvert (temperature, convert) {
 const value = parseFloat(temperature)
 if (Number.isNaN(value)) {
   return ''
 }
 return (Math.round(convert(value) * 100) / 100 ).toString()
}


class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render () {
    const {temperature} = this.props
    const name = 'scale' + this.props.scale
    const scaleName = scaleNames[this.props.scale]
    return (
      <>
        <div className="form-group">
          <label htmlFor={name}>Température (en {scaleName})</label>
          <input type="text" id={name} value={temperature} className="form-control" onChange={this.handleChange}/>
        </div>
      </>
    )
  }
}
export default TemperatureInput;