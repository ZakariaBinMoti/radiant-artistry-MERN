import { useParams } from "react-router-dom";


const CraftDetails = () => {
    const {_id} = useParams();
    const idInt = parseInt(_id)
    console.log(idInt);
    // const estates = use]]]LoaderData();
    // const idInt = parseInt(id);
    // const estate = estates.find((estate) => estate.id === idInt);

    // const {image,estate_title,segment_name, description, price,status, area, location, facilities} = estate;

    return (
        <div>
            {/* <div>
            <h1 className=" text-center text-4xl font-semibold  mb-8">Properties Details</h1>
            </div>
 <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 bg-slate-100 shadow-lg p-5 rounded-md">
            
            <div className="rounded-lg ">
                <img className="rounded-xl" src={image} alt="" />
            </div>
            <div className="space-y-1">
                <p className="flex gap-4">Status: <span className="bg-green-600 flex items-center rounded-lg px-3 bg-center text-center text-white">{status}</span>    </p>
            <h3 className="text-2xl font-semibold">{estate_title}</h3>
            <p>Area: {area}</p>
            <p className=" text-xl font-bold"> Price: <span className="text-amber-600">{price}</span> </p>
            <p>Segment Name: {segment_name}</p>
            <hr className="border border-gray-200 my-2" />
            <p><span className="font-bold">Discrption: </span> {description}</p>
            <p> <span className="font-bold">Location:</span>  {location}</p>
            <hr className="border border-gray-200 my-2" />
            <p className="font-bold">Facilities:</p>
                {
                    facilities.map(facility => <li key={id}>{facility}</li> )
                }


            </div>
        </div> */}
        <h1>{_id}</h1>

        </div>


       
    );
};

export default CraftDetails;