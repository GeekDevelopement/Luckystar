import Locks from "./items/Locks"
import FF from "./items/FF"
import Channel from "./items/Channel"

function OurProducts() {
  return (
      <>
      <h1 className="my-3 text-center">OUR PRODUCT CATEGORIES</h1>
      <FF />
      <Locks />
      <Channel /> 
    </>
  );
}

export default OurProducts;
