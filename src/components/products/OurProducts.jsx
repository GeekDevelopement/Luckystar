import Locks from "./items/Locks"
import Nails from "./items/Nails";
import Screw from "./items/Screw";
import FF from "./items/FF"
import Channel from "./items/Channel"

function OurProducts() {
  return (
      <>
      <h1 className="my-3 text-center">OUR PRODUCT CATEGORIES</h1>
      <FF />
      <Locks />
      <Nails />
      <Screw />
      <Channel /> 
    </>
  );
}

export default OurProducts;
