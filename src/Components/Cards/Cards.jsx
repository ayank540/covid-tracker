import React from 'react'
import { Card, CardContent, Typography, Grid } from "@material-ui/core"

const Cards = ({
    data: { confirmed, recovered, deaths, lastUpdate },
    country,
}) => {
    if (!confirmed) {
        return "Loading..."
    }
    const active = confirmed["value"] - recovered["value"] - deaths["value"]
    let cardDetails = [
        {
            sytle: styles.infected,
            text: "Infected",
            value: confirmed.value,
            bottomText: "Number of infected cases from COVID-19",
        },
        {
            sytle: styles.recovered,
            text: "Recovered",
            value: recovered.value,
            bottomText: "Number of recovered cases from COVID-19",
        },
        {
            sytle: styles.deaths,
            text: "Deaths",
            value: deaths.value,
            bottomText: "Number of deaths from COVID-19",
        },
        {
            sytle: styles.active,
            text: "Active",
            value: active.value,
            bottomText: "Number of active COVID-19 cases",
        },
    ]
    return (
        <div className="styles.container">
            <Grid container spacing={3} justify="center">
                {cardDetails.map((detail, index) => (
                    <Grid
                        item
                        component={Card}
                        xs={12}
                        md={2}
                        className={cx(styles.Card, detail.style)}
                        key={index}
                        style={{ margin: "0px 23.675px", padding: "12px" }}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>
                                <b>{detail.text}</b>
                            </Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={detail.value}
                                    duration={2}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textPrimary">Last updated at: </Typography>
                            <Typography color="textSecondary" variant="body2">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography color="textSecondary" variant="body2">
                                {new Date(lastUpdate).toLocaleTimeString()}
                            </Typography>
                            <Typography variant="body2">
                                {detail.bottomText}
                            </Typography>
                            <Typography color="textPrimary">
                                {country}
                            </Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Cards
