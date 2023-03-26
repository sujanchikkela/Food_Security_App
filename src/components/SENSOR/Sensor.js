import React, { useState } from "react";
import { Chart } from "react-google-charts";
import DateRangeSlider from "./dateSlider";
import sensorData from "../DATA/sensordata";

const SensorGraph = () => {
    const [startDate, setStartDate] = useState(7);
    const [endDate, setEndDate] = useState(10);
    const [sensorId, setSensorId] = useState(0);

    const getDateRange = async (dates) => {
        await setStartDate(dates[0]);
        await setEndDate(dates[1]);
    };

    const dateSpecificData = () => {
        let result = [];

        sensorData.forEach(d => {
            if(d.date >= startDate && d.date <= endDate) {
                result.push(d)
            }
        })

        return result;
    };
      
    const getData = () => {
        console.log("Inside getData");
        let finalData = [];
        let result = dateSpecificData();
        finalData.push(["Date", "CattleTemperature","Cattle_humidity","Internal_sensor_temperature","Internal_sensor_humidity"]);

        result.map(async (val, index) => {
            await finalData.push([ "", val.Cattle_temperature[sensorId], val.Cattle_humidity[sensorId], val.Internal_sensor_temperature[sensorId], val.Internal_sensor_humidity[sensorId]]);
        });
        console.log(finalData);
        return finalData;
    }

     const options = {
        title: "Sensor Recorded value Information",
        curveType: "function",
        legend: { position: "bottom" },
    };

    const options1 = {
        title: "Sensor value Information",
        curveType: "function",
        legend: { position: "bottom" },
    };

    return (
       
        
        <div>
        <div style={{ marginLeft: "20%" ,marginBottom:"5%"}}>
            <DateRangeSlider getDateRange={getDateRange}/>
            </div>
            <div className="row">
            <label style={{ marginLeft: "2%", fontSize:"13px"}} for="pet-select">Select ID:</label>
            <select
            name="yields"
            id="yields"
            value={sensorId}
            onChange={(e) => setSensorId(e.target.value)}
            style={{
              marginLeft: "2%",
              backgroundColor: "#4CAF50",
              color: "white",
              fontWeight: "bolder",
              borderRadius : "8px",
              fontSize: "13px",
              textAlign : "center",
              height : "40px",
              width : "90px",
              marginBottom : "3%",
            }}
          >
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
            <option value="6">7</option>
            <option value="7">8</option>
            <option value="8">9</option>
            <option value="9">10</option>
            <option value="10">11</option>
            <option value="11">12</option>
            <option value="12">13</option>
            <option value="13">14</option>
            <option value="14">15</option>
            <option value="15">16</option>
            <option value="16">17</option>
            <option value="17">18</option>
            <option value="18">19</option>
            <option value="19">20</option>
            <option value="20">21</option>
            <option value="21">22</option>
            <option value="22">23</option>
            <option value="23">24</option>
            <option value="24">25</option>
            <option value="25">26</option>
            <option value="26">27</option>
            <option value="27">28</option>
            <option value="28">29</option>
            <option value="29">30</option>
            <option value="30">31</option>
            <option value="31">32</option>
            <option value="32">33</option>
            <option value="33">34</option>
            <option value="34">35</option>
            <option value="35">36</option>
            <option value="36">37</option>
            <option value="37">38</option>
            <option value="38">39</option>
            <option value="39">40</option>
            <option value="40">41</option>
            <option value="41">42</option>
            <option value="42">43</option>
            <option value="43">44</option>
            <option value="44">45</option>
            <option value="45">46</option>
            <option value="46">47</option>
          </select>
            </div>
            <div>
                <Chart
                    chartType="Line"
                    width="100%"
                    height="400px"
                    data={getData()}
                    options={options}
                />
            </div>
      
         </div>
         
    )
}

export default SensorGraph;