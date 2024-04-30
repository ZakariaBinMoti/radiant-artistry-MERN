import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Craft from "../Shared/Craft/Craft";
import Contact from "../Shared/Contact/Contact";

const Home = () => {

    const loadedCrafts = useLoaderData();

    return (
        <div>
            <Header></Header>
            <h1 className="text-center mt-16 mb-4 font-bold text-4xl">Arts and Crafts</h1>
            <p className="text-center">Meet Inspiration Crafting beauty in paper and glass unveiling <br /> with the magic of paper</p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {
                    loadedCrafts.map(craft => <Craft key={craft._id} craft={craft} ></Craft>)
                }
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;