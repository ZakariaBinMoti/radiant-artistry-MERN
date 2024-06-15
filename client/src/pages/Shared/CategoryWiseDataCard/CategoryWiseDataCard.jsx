import { Link } from "react-router-dom";

const CategoryWiseDataCard = ({craft}) => {
    const {
        _id,
        subcategory_name,
        image,
        description,
        item_name,
        price,
        rating,
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
            <h3><span className="font-semibold">Category Name:</span> {subcategory_name}</h3>

            <hr />
            <p className="py-3">{description}</p>
            <hr />

            <p><span className="font-semibold">Processing Time:</span>  {processing_time} days</p>
            <p><span className="font-semibold">Ratings:</span> {rating}</p>
            <p className=" text-xl font-bold"> Price: <span className="text-amber-600">{price}</span> </p>
            <p></p>
            <Link to={`/crafts/${_id}`}><button className="btn w-full bg-[#BDA76E] text-white">View Details</button></Link>
        </div>
        </div>
    );
};

export default CategoryWiseDataCard;