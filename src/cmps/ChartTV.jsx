import { useState,useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

export const ChartTV =(props) =>  {
    const [tradeVolumeData, setTradeVolumeData] = useState(null);

    useEffect( ()=> {
       setTradeVolumeData(props.tradeVolumeData)
    },[])

    var options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Trade Volume Data',
            },
        },
    };

    const getData= () => {
        let tradeVolumeDataX = props.tradeVolumeData.values.reduce((acc, data, idx) => {
            acc[idx] = new Date(data.x * 1000).toLocaleDateString();
            return acc;
        }, [])

        let tradeVolumeDataY = props.tradeVolumeData.values.reduce((acc, data, idx) => {
            acc[idx] = data.y;
            return acc;
        }, [])

        const labels = tradeVolumeDataX;

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: tradeVolumeDataY,
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
                    <Line className='chart' options={options} data={getData()} />;
                </div>
            </div>
        )
}









