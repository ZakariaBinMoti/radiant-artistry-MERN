import { useEffect, useState } from "react";
import Category from "../Category/Category";
const SubCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/subcategory")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div className="my-20">
        <h1 className=" text-center text-4xl font-semibold  mb-8">
        Categories
      </h1>
      <p className="text-center mb-8">Varity of crafting beauty in paper and glass unveiling <br /> with the magic of paper</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
