import { InfiniteMovingCards } from "./infiniteTestimonials";
import RentForm from "./rentForm";
import ToursAccessories from "./tours_accessories";

const items = [
  {
    quote: "This service is amazing! I loved every bit of it.",
    name: "Alice Johnson",
    title: "CEO, TechCorp",
  },
  {
    quote: "Outstanding experience. Highly recommended.",
    name: "Bob Smith",
    title: "CTO, Innovatech",
  },
  {
    quote: "The team was professional and delivered great results.",
    name: "Carol White",
    title: "Manager, FinBank",
  },
  {
    quote: "A wonderful experience from start to finish.",
    name: "David Brown",
    title: "Director, HealthPlus",
  },
  {
    quote: "Exceptional quality and customer service.",
    name: "Emily Davis",
    title: "Owner, ShopEasy",
  },
  {
    quote: "I couldn't be happier with the service provided.",
    name: "Frank Wilson",
    title: "Founder, GreenTech",
  },
];

const BodyComponent = () => {
  return (
    <>
      {/* rent bike menu */}
      <div className="border border-gray-300 rounded-lg m-8 max-w-full sm:max-w-2xl  lg:max-w-6xl mx-auto">
        <header className="bg-blue-600 text-white rounded-t-lg py-4">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex justify-between items-center space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="p-4">
          <RentForm />
        </div>
      </div>

      <ToursAccessories />

      <div className="">
        <div className="text-center">
          <h2 className="text-3xl font-bold  my-6">Testimonials</h2>
          <h4 className="font-medium text-gray-700">
            What People Say about Us
          </h4>
        </div>

        <InfiniteMovingCards
          items={items}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className="custom-class mx-auto"
        />
      </div>
    </>
  );
};

export default BodyComponent;
