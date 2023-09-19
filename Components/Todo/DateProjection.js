import { DateDay_Calculation_cont } from '@/Helpers/Date-Day-Calculation'
import React, { useContext, useEffect} from 'react'

const DateProjection = () => {
    const {rawDateData, setRawDateData,CalculateResult} = useContext(DateDay_Calculation_cont)
    useEffect(() => {
      CalculateResult(4);
      console.log(rawDateData)
    }, []);
    const date = new Date().getDate();
    return (
      rawDateData.map((data)=>
      <div className={data.toString().slice(8,10) == date ? "date-day todaydate" : "date-day"}>
        <h1>{data.toString().slice(8,10)}</h1>
        <h3>{data.toString().slice(0,3)}</h3>
      </div>
      )
    )
}

export default DateProjection