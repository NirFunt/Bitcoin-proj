import { useState, useEffect  } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,BarElement);

export const ChartMP = (props) =>  {
    const [marketPriceData,setMarketPriceData] = useState(null);
 
    useEffect( ()=> {
        setMarketPriceData(props.marketPriceData)
    }, [])


   var options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Market Price data',
            },
        },
    };

    const getData = () => {
        let marketPriceDataX = props.marketPriceData.values.reduce((acc, data, idx) => {
            acc[idx] = new Date(data.x * 1000).toLocaleDateString();
            return acc;
        }, [])

        let marketPriceDataY = props.marketPriceData.values.reduce((acc, data, idx) => {
            acc[idx] = data.y;
            return acc;
        }, [])

        const labels = marketPriceDataX;

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: marketPriceDataY,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        };
        return data
    }

        return (
            <div className='chart-tv'>
                <div className='chart-box'>
                    <Bar className='chart' options={options} data={getData()} />;
                </div>
            </div>
        )
}









