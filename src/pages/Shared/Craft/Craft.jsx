
const Craft = ({craft}) => {
    const {
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
      } = craft;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default Craft;