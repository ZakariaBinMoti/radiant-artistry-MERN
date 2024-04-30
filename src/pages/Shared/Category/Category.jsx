import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { Tooltip } from "react-tooltip";

const Category = ({category}) => {
    const {image, subcategory_name, description} = category;
    const { setSubcategoryName } = useContext(AuthContext);

   const handleButton =()=>{
            setSubcategoryName(subcategory_name);
    }

    return (
        
        <>
        <Tooltip id="my-tooltip" />
        <button data-tooltip-id="my-tooltip" data-tooltip-content={subcategory_name} onClick={handleButton}>
            <Link to="/category">
        <div className="shadow-xl p-5 rounded-sm hover:bg-orange-50 space-y-2">
            <img src={image} alt="" />
            <h1 className="text-2xl shadow-2xl font-bold">{subcategory_name}</h1>
            <p>{description}</p>
        </div>
        </Link>
        </button>
        
        
        </>
        
    );
};

export default Category;