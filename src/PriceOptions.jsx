import PriceOption from "./PriceOption";
// import PriceOptions from './PriceOptions';


const PriceOptions = () => {
  
      const PriceOptions =   [
        {
          "id": 1,
          "name": "Basic",
          "price": 30,
          "features": [
            "Access to cardio area",
            "Limited gym equipment",
            "Locker room access",
            "Water fountain"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 50,
          "features": [
            "Full gym access",
            "Group fitness classes",
            "Sauna access",
            "Towel service",
            "Personal lockers"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 80,
          "features": [
            "24/7 gym access",
            "Personal training sessions",
            "Access to all facilities",
            "Nutritional consultation",
            "Massage therapy",
            "Spa access",
            "Free parking"
          ]
        }
      ]
    return (
        <div className="mt-5 mx-10">
            <h2 className="text-4xl mb-5">Best price in town</h2>
           <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-6">
           {
                PriceOptions.map(priceOption => <PriceOption priceOption={priceOption} key={priceOption.id}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;