
import { Component } from 'react';
import { ChartTV } from '../cmps/ChartTV';
import { ChartAB } from '../cmps/ChartAB';
import { ChartMP } from '../cmps/ChartMP';
import { BitcoinService } from '../services/BitcoinService';

export class ChartPage extends Component {

    state = {
        tradeVolumeData: null,
        avgBlockData: null,
        marketPriceData: null,

    }

    async componentDidMount() {
        let tradeVolumeData = await BitcoinService.getTradeVolume();
        this.setState({ tradeVolumeData });

        let avgBlockData = await BitcoinService.getAvgBlock();
        this.setState({ avgBlockData });

        let marketPriceData = await BitcoinService.getMarketPrice();
        this.setState({ marketPriceData });
    }


    render() {
        const { tradeVolumeData, avgBlockData, marketPriceData } = this.state;

        return (
            <section className='chart-page main-layout'>
                {tradeVolumeData && <ChartTV tradeVolumeData={tradeVolumeData} />}
                {avgBlockData && <ChartAB avgBlockData={avgBlockData} />}
                {marketPriceData && <ChartMP marketPriceData={marketPriceData} />}
            </section>
        )
    }
}




