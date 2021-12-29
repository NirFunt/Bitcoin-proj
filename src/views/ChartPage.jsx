
import { useState, useEffect } from 'react';
import { ChartTV } from '../cmps/ChartTV';
import { ChartAB } from '../cmps/ChartAB';
import { ChartMP } from '../cmps/ChartMP';
import { BitcoinService } from '../services/BitcoinService';

export const ChartPage = () => {
    const [tradeVolumeData,setTradeVolumeData] = useState(null);
    const [avgBlockData,setAvgBlockData] = useState(null);
    const [marketPriceData,setMarketPriceData] = useState(null);

    useEffect ( async ()=> {
        //can accept async? or inner async function needed? 
        let tradeVolumeData = await BitcoinService.getTradeVolume();
        setTradeVolumeData( tradeVolumeData );

        let avgBlockData = await BitcoinService.getAvgBlock();
        setAvgBlockData( avgBlockData );

        let marketPriceData = await BitcoinService.getMarketPrice();
        setMarketPriceData( marketPriceData );
    },[])

        return (
            <section className='chart-page main-layout'>
                {tradeVolumeData && <ChartTV tradeVolumeData={tradeVolumeData} />}
                {avgBlockData && <ChartAB avgBlockData={avgBlockData} />}
                {marketPriceData && <ChartMP marketPriceData={marketPriceData} />}
            </section>
        )
}




