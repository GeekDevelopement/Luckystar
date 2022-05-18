import Locks from "./items/Locks"
import FF from "./items/FF"
import Channel from "./items/Channel"

function OurProducts() {
  return (
      <>
      <h1 className="my-4 text-center text-decoration-underline">OUR PRODUCT CATEGORIES</h1>
      <FF />
      <Locks />
      <Channel /> 
    </>
  );
}

export default OurProducts;
