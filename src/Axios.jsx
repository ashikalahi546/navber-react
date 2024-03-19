import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

const Axios = () => {
  const [phones, setPhone] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then(data=>{
        const phoneData = data.data.data;
        const fakeData = phones.map(phone =>{
            const obj = {
                name:phone.phone_name,
                price:parseInt(phone.slug.split('-')[1])
            }
            return obj
        })
        setPhone(fakeData)
      })
  }, []);
  return (
    <div>
      {/* <h2>Data : {phoneData.length}</h2> */}
    </div>
  );
};

export default Axios;
