import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import CategoryWiseDataCard from "../CategoryWiseDataCard/CategoryWiseDataCard";

const CategoryWiseData = () => {
  const { subcategoryName } = useContext(AuthContext);
  console.log(subcategoryName);

  const [myitems, setMyitems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://radiant-artistry-server.vercel.app/myitems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ subcategory_name: subcategoryName }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyitems(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className=" text-center text-4xl font-semibold  mb-8">
        <span className="text-[#BDA76E]">Category Name:</span> {subcategoryName}
      </h1>
      {loading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        <>
          {myitems.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {myitems.map((craft) => (
                <CategoryWiseDataCard
                  key={craft._id}
                  craft={craft}
                ></CategoryWiseDataCard>
              ))}
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center gap-5">
                <img
                  src="../../../public/out-of-stock.png"
                  className="h-40 w-40"
                  alt=""
                />
                <h1 className="text-center text-2xl text-[#BDA76E]">
                  No items in {subcategoryName} category {" "}
                </h1>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CategoryWiseData;
