import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyItemsCard from "../Shared/MyItemsCard/MyItemsCard";

const MyArtsAndCrafts = () => {
  const { user } = useContext(AuthContext);
  const [myitems, setMyitems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/myitems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
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
        My Arts And Crafts List
      </h1>
      {loading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        <>
          {myitems.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {myitems.map((craft) => (
                <MyItemsCard key={craft._id} craft={craft}></MyItemsCard>
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
                  You havent added any Art and Craft Items yet.{" "}
                </h1>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MyArtsAndCrafts;
