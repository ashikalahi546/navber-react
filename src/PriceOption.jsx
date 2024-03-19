import Feature from "./Feature";

const PriceOption = ({ priceOption }) => {
  const { name, price, features } = priceOption;
  return (
    <div className="bg-blue-500 text-white py-8 flex flex-col gap-2 rounded-lg px-10">
    
        <h2 className="">
          <span className="text-4xl font-semibold ">{price}</span>
          <span className="text-xl font-semibold">/mon</span>
        </h2>
        <h3 className="text-2xl py-3">{name}</h3>
        <div className="flex-grow space-y-2">
          {features.map((feature, i) => (
            <Feature feature={feature} key={i}></Feature>
          ))}
        </div>
      
      <button className="bg-orange-600 hover:bg-orange-700 py-2 rounded-md  mt-5">Buy Now</button>
    </div>
  );
};

export default PriceOption;
