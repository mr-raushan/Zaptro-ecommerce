/*eslint-disable*/
import { useUser } from "@clerk/clerk-react";

export const DeliveryInfo = ({ location, getLocation }) => {
  const { user } = useUser();
  console.log(user);
  return (
    <form>
      <h1 className="text-2xl font-semibold mt-2 mb-4">Delivery Info</h1>
      <div>
        <div className="my-2">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={user?.fullName}
            className="w-full p-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="my-2">
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Your Address"
            name="address"
            value={location?.county}
            className="w-full p-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 my-2">
          <div>
            <label>State</label>
            <input
              type="text"
              placeholder="Enter Your State"
              name="state"
              value={location?.state}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
          <div>
            <label>Postal Code</label>
            <input
              type="text"
              placeholder="Enter Your Postal Code"
              name="pin"
              value={location?.postcode}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 my-2">
          <div>
            <label>Country</label>
            <input
              type="text"
              placeholder="Enter Your Country"
              name="country"
              value={location?.country}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="number"
              placeholder="Enter Phone number"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-4 justify-end">
        <button
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-600 
        shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
