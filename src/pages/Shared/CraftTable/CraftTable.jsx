import { Link } from "react-router-dom";


const CraftTable = ({craft}) => {

    const {
        _id,
        image,
        item_name,
        subcategory_name,
        price,
        processing_time,
        stockStatus
      } = craft;

    return (
        <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold ">{item_name}</div>
                    <div className="flex">
                    <p className={stockStatus=='In stock' ? "bg-green-600 flex justify-center text-sm opacity-50 items-center rounded-lg px-3 bg-center text-center text-white" : "bg-red-600 text-sm opacity-50 flex items-center justify-center rounded-lg px-3 bg-center text-center text-white" } >{stockStatus}</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {subcategory_name}
                <br />
                <span className="badge badge-ghost badge-sm">
                  Processing Time: {processing_time} days
                </span>
              </td>
              <td className="font-bold" > <span className=" text-2xl"> &#2547; </span> <span className="text-[#BDA76E]  text-lg">{price} </span> </td>
              <th>
              <Link to={`/crafts/${_id}`}><button className="btn w-full bg-[#BDA76E] text-white">View Details</button></Link>
              </th>
            </tr>
    );
};

export default CraftTable;