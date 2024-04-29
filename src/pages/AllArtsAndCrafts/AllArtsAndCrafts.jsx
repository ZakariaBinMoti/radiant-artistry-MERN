import { useLoaderData } from "react-router-dom";
import CraftTable from "../Shared/CraftTable/CraftTable";

const AllArtsAndCrafts = () => {
  const loadedCrafts = useLoaderData();
  console.log(loadedCrafts);

  return (
    <div>
      <h1 className=" text-center text-4xl font-semibold  mb-8">
        All Arts And Crafts
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}

          <thead>
            <tr>
              <th>Name</th>
              <th>Sub Categories</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loadedCrafts.map((craft) => (
              <CraftTable key={craft._id} craft={craft}></CraftTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtsAndCrafts;
