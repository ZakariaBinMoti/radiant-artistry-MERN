
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProviders';

const AddCraftItems = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
  const handleAddItems = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;
    const email = form.email.value;
    const name = form.name.value;

    const newCraft = {
      image,
      item_name,
      subcategory_name,
      description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      email,
      name,
    };

    console.log("this is the form", newCraft);

    fetch("https://radiant-artistry-server.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: "Success!",
                text: "Craft Items Added Successfully!",
                icon: "success"
              });
              event.target.reset();
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              event.target.reset();
        }
      });
  };

  return (
    <div>
      {/* <h1 className="text-center text-3xl">Type Craft Item Details</h1> */}

      <div>
        <div className="hero-content flex-col lg:flex-col mx-10">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-semibold">Add Craft Item</h1>
          </div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100 ">
            {/* form */}
            <form
              onSubmit={handleAddItems}
              className="card-body grid grid-cols-1 lg:grid-cols-2 space-x-5"
            >
              <div className="form-control ml-5 lg:col-span-2">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="image URL"
                  name="image"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  name="item_name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subcategory Name</span>
                </label>
                <select
                  name="subcategory_name"
                  className="select select-bordered w-full"
                >
                  <option>Card Making</option>
                  <option>Scrapbooking</option>
                  <option>Paper Quilling & origami</option>
                  <option>Glass Painting</option>
                  <option>Lampworking</option>
                  <option>Glass Dying & Staining</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Short Description"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  name="price"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="rating"
                  name="rating"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customization</span>
                </label>
                <select
                  name="customization"
                  className="select select-bordered w-full"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Processing Time</span>
                </label>
                <input
                  type="text"
                  name="processing_time"
                  placeholder="processing time in days"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Stock Status</span>
                </label>
                <select
                  name="stockStatus"
                  className="select select-bordered w-full"
                >
                  <option>In stock</option>
                  <option>Made to Order</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  placeholder="User Email"
                  name="email"
                  className="input input-bordered"
                  defaultValue={user.email}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  name="name"
                  defaultValue={user.displayName}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6 lg:col-span-2">
                <input
                  className="btn text-white font-semibold bg-[#BDA76E]"
                  type="submit"
                  value="Add"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItems;
