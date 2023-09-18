import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
    return (
        <div className="bg-emerald-400 flex flex-col p-6 rounded-lg mt-10">
            <h2 className="text-center">
                <span className="text-6xl font-bold ">{option.price}</span>
                <span className="text-2xl">/Mon</span>
            </h2>
            <h2 className="text-3xl mt-5 mb-4 ">{option.name}</h2>
           <div className="flex-grow">
           {
                option.features.map((feature , index) => <Feature key={index} feature={feature}></Feature>)
            }
           </div>
            <button className="text-xl bg-green-700 w-full text-center py-3 mt-5 rounded-lg hover:bg-green-800">Bye Now</button>

        </div>
    );
};

export default PriceOption;