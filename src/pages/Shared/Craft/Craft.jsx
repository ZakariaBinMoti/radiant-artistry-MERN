import { Link } from "react-router-dom";

const Craft = ({craft}) => {
    const {
        _id,
        image,
        item_name,
        subcategory_name,
        description,
        price,
        rating,
        customization,
        processing_time,
        stockStatus
      } = craft;
    return (
        <div>
            <div className="space-y-1 p-4 shadow-lg rounded-xl">
            <img className="rounded-xl mb-4" src={image} alt="" />
            <div className="flex justify-between">
            <h3 className="text-2xl font-semibold">{item_name}</h3>
            <p className={stockStatus=='In stock' ? "bg-green-600 flex items-center rounded-lg px-3 bg-center text-center text-white" : "bg-red-600 flex items-center rounded-lg px-3 bg-center text-center text-white" } >{stockStatus}</p>
            </div>
            <p>Processing Time: {processing_time} days</p>
            <p>Ratings: {rating}</p>
            <p className=" text-xl font-bold"> Price: <span className="text-amber-600">{price}</span> </p>
            <p></p>
            <Link to={`/crafts/${_id}`}><button className="btn w-full bg-[#BDA76E] text-white">View Details</button></Link>
        </div>
        </div>
    );
};

export default Craft;