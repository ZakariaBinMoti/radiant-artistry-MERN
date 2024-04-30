import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyItemsCard = ({ craft, myitems, setMyitems }) => {
  const {
    _id,
    image,
    item_name,
    price,
    rating,
    processing_time,
    stockStatus,
    customization,
  } = craft;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/crafts/${_id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft item has been deleted.",
                icon: "success",
              });

              const remaining = myitems.filter(item => item._id !== _id);
              setMyitems(remaining);

            }
          });
      }
    });
  };

  return (
    <div>
      <div className="space-y-1 p-4 shadow-lg rounded-xl">
        <img className="rounded-xl mb-4" src={image} alt="" />
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">{item_name}</h3>
          <p
            className={
              stockStatus == "In stock"
                ? "bg-green-600 flex items-center rounded-lg px-3 bg-center text-center text-white"
                : "bg-red-600 flex items-center rounded-lg px-3 bg-center text-center text-white"
            }
          >
            {stockStatus}
          </p>
        </div>
        <p>Processing Time: {processing_time} days</p>
        <p>Ratings: {rating}</p>

        <div className="flex justify-between">
          <p className=" text-xl font-bold">
            {" "}
            Price: <span className="text-amber-600">{price}</span>{" "}
          </p>
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
        <div className="p-1"></div>
        <div className="grid grid-cols-2 gap-2">
          <Link to={`/updateCrafts/${_id}`}>
            <button className="btn font-bold w-full bg-[#ddd5c3]">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn w-full font-bold text-red-600"
          >
            {" "}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyItemsCard;
