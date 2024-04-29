import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
  const craft = useLoaderData();
  console.log(craft);

  const {
    image,
    item_name,
    subcategory_name,
    description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
  } = craft;

  return (
    <div>
      <div>
        <h1 className=" text-center text-4xl font-semibold  mb-8">
          Crafts Details
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 bg-slate-100 shadow-lg p-5 rounded-md">
        <div className="rounded-lg ">
          <img className="rounded-xl" src={image} alt="" />
        </div>
        <div className="space-y-1">
          <p className="flex gap-4">
            Status:{" "}
            <span
              className={
                stockStatus == "In stock"
                  ? "bg-green-600 flex items-center rounded-lg px-3 bg-center text-center text-white"
                  : "bg-red-600 flex items-center rounded-lg px-3 bg-center text-center text-white"
              }
            >
              {stockStatus}
            </span>{" "}
          </p>
          <h3 className="text-2xl font-semibold">{item_name}</h3>
          <p>
            <span className="font-bold">Ratings:</span> {rating}
          </p>
          <p className=" text-xl font-bold">
            {" "}
            Price: <span className="text-amber-600">{price}</span>{" "}
          </p>
          <div  className="space-y-4">
            <p>
              <span className="font-bold">Subcategory Name:</span>{" "}
              {subcategory_name}
            </p>
            <hr className="border border-gray-200" />
            <p>
              <span className="font-bold">Discrption: </span> {description}
            </p>
            <hr className="border border-gray-200" />
            <p>
              <span className="font-bold">Processing Time:</span>{" "}
              {processing_time} days
            </p>
          </div>
          <p className="flex gap-4">
            Customization:{" "}
            <span
              className={
                customization == "Yes"
                  ? "bg-green-400 flex items-center rounded-lg px-3 bg-center text-center text-white"
                  : "bg-red-400 flex items-center rounded-lg px-3 bg-center text-center text-white"
              }
            >
              {customization}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
