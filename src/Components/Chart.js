import React from 'react'
import { Chart } from 'react-charts'




function Charts(props) {

    let data = [{ label: "Series 1", data: [] }]
    for (let [key, value] of Object.entries(props.stock)) {

        let newKey = Date.parse(key)
        let arr = { x: Number(newKey), y: Number(value["4. close"]) }
        data[0].data.push(arr)
    }
    let arr2 = data[0].data.reverse()
    data[0].data = arr2



    const axes = React.useMemo(
        () => [
            { primary: true, type: 'utc', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return (
        <div
            style={{
                width: '1400px',
                height: '300px'
            }}
        >
            {data && <Chart data={data} axes={axes} tooltip />}
        </div>
    )
}

export default Charts