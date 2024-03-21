// import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Hourglass } from "react-loader-spinner";
const Axios = () => {
  const [phones, setPhone] = useState([]);

const [loading,setLoading] = useState(true)
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then(data=>{
        const phoneData = data.data.data;
        const fakeData = phoneData.map(phone =>{
            const obj = {
                name:phone.phone_name,
                price:parseInt(phone.slug.split('-')[1])
            }
            return obj
        })
        setPhone(fakeData)
        // console.log(fakeData)
        setLoading(false)
      })
  }, []);
  return (
    <div>
      <h2>Data : {phones.length}</h2>

      <div>
     { loading && <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />}

        <BarChart width={600} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        </BarChart>
       
      </div>
    </div>
  );
};

export default Axios;
