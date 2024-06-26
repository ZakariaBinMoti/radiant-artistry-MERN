import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Craft from "../Shared/Craft/Craft";
import Contact from "../Shared/Contact/Contact";
import SubCategory from "../Shared/Subcategory/SubCategory";

const Home = () => {

    const loadedCrafts = useLoaderData();
    console.log(loadedCrafts);

    return (
        <div>
            <Header></Header>
            <h1 className="text-center mt-32 mb-4 font-bold text-4xl">Arts and Crafts</h1>
            <p className="text-center">Meet Inspiration Crafting beauty in paper and glass unveiling <br /> with the magic of paper</p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {
                    loadedCrafts.map(craft => <Craft key={craft._id} craft={craft} ></Craft>)
                }
            </div>
            <SubCategory></SubCategory>
            <Contact></Contact>
        </div>
    );
};

export default Home;