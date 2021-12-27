import { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,BarElement);

export class ChartMP extends Component {
    state = {
        marketPriceData: null,
    }

    componentDidMount() {
        this.setState({ marketPriceData: this.props.marketPriceData })
    }

    options = {
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

    get data() {
        let marketPriceDataX = this.props.marketPriceData.values.reduce((acc, data, idx) => {
            acc[idx] = new Date(data.x * 1000).toLocaleDateString();
            return acc;
        }, [])

        let marketPriceDataY = this.props.marketPriceData.values.reduce((acc, data, idx) => {
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

    render() {
        return (
            <div className='chart-tv'>
                <div className='chart-box'>
                    <Bar className='chart' options={this.options} data={this.data} />;
                </div>
            </div>
        )
    }
}









