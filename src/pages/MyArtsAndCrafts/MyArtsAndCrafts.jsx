import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyItemsCard from "../Shared/MyItemsCard/MyItemsCard";

const MyArtsAndCrafts = () => {
  const { user } = useContext(AuthContext);
  const [myitems, setMyitems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCustomfilter  = (filter) =>{
     const value = myitems.filter(item => item.customization===filter);
     console.log(value);
  }

  useEffect(() => {
    fetch("https://radiant-artistry-server.vercel.app/myitems", {
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
      <div className="flex items-center justify-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-white m-1 bg-[#23BE0A]"
          >
            Customization{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.5 8.25L12 15.75L4.5 8.25"
                stroke="white"
                className="text-white"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={()=>handleCustomfilter('Yes')}>
              <a>Yes</a>
            </li>
            <li onClick={()=>handleCustomfilter('No')}>
              <a>No</a>
            </li>
          </ul>
        </div>
      </div>
      {loading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        <>
          {myitems.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {myitems.map((craft) => (
                <MyItemsCard
                  key={craft._id}
                  craft={craft}
                  myitems={myitems}
                  setMyitems={setMyitems}
                ></MyItemsCard>
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
