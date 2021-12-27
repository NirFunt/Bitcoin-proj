import { Component } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export class ChartAB extends Component {
    state = {
        avgBlockData: null,
    }

    componentDidMount() {
        this.setState({ avgBlockData: this.props.avgBlockData })
    }

    options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Average Block Data',
            },
        },
    };

    get data() {
        let avgBlockDataX = this.props.avgBlockData.values.reduce((acc, data, idx) => {
            acc[idx] = new Date(data.x * 1000).toLocaleDateString();
            return acc;
        }, [])

        let avgBlockDataY = this.props.avgBlockData.values.reduce((acc, data, idx) => {
            acc[idx] = data.y;
            return acc;
        }, [])

        const labels = avgBlockDataX;

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: avgBlockDataY,
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
                    <Line className='chart' options={this.options} data={this.data} />;
                </div>
            </div>
        )
    }
}









