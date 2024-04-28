import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Craft from "../Shared/Craft/Craft";

const Home = () => {

    const loadedCrafts = useLoaderData();

    return (
        <div>
            <Header></Header>
            <h1 className="text-center mt-16 mb-4 font-bold text-4xl">Arts and Crafts</h1>
            <p className="text-center">Meet Inspiration Crafting beauty in paper and glass unveiling <br /> with the magic of paper</p>
            <div className="mt-8">
                {
                    loadedCrafts.map(craft => <Craft key={craft._id} craft={craft} ></Craft>)
                }
            </div>
        </div>
    );
};

export default Home;