import { Clock5, RotateCcw, Truck, Lock } from "lucide-react";

const support = [
  {
    id: 1,
    icon: <Truck className="w-8 h-8 text-red-500" />,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  {
    id: 2,
    icon: <Lock className="w-8 h-8 text-green-500" />,
    title: "Secure Payment",
    description: "100% protected payment",
  },
  {
    id: 3,
    icon: <RotateCcw className="w-8 h-8 text-blue-500" />,
    title: "Easy Returns",
    description: "7 day return policy",
  },
  {
    id: 4,
    icon: <Clock5 className="w-8 h-8 text-yellow-500" />,
    title: "24/7 Support",
    description: "Dedicated customer service",
  },
];

export const Feature = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {support?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col cursor-pointer items-center justify-center bg-white rounded-2xl shadow-md p-10 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
