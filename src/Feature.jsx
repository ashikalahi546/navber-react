
import { IoBagCheckOutline } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div className="">
            <h2 className="flex items-center gap-1.5 "><IoBagCheckOutline ></IoBagCheckOutline>
            {feature}</h2>
        </div>
    );
};

export default Feature;