import React from 'react'
import Cards from './Components/Cards/Cards'
import Chart from './Components/Chart/Chart'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import { fetchData } from './api'
import coronaImage from "./images/image.jpg"

class App extends React.Component {
    state = {
        data: {},
        country: "",
    }
    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }
    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country })
    }
    render() {
        const { data, country } = this.state
        return (
            <div className = { styles.container } >
            <img className = { styles.image }
            src = { coronaImage }
            alt = "COVID-19"
            />
            <br/>
            <text >
            <h1> Global and country - wise cases of COVID - 19 </h1>
            </text >
            <br />
            <text className={styles.font30}>Select country from below</text>
            <br />
            <br />
            <Cards
            data = { data }
            country = { country }
            />
            <CountryPicker handleCountryChange = { this.handleCountryChange }/>
            <Chart
            data = { data }
            country = { country }
            />
            </div >
        )
    }
}

export default App