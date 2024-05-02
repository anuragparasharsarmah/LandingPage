import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Created by
      </h5>
      <ul className="flex">
        <div className="flex items-center justify-center flex-1 h-[8.5rem] space-x-6">
          {/* Adjusted to wrap each name in a <div> */}
          <div className="name-item flex-1 text-center">Adarsh</div>
          <div className="name-item flex-1 text-center">Anurag</div>
          <div className="name-item flex-1 text-center">Chiranjeev</div>
        </div>
      </ul>
    </div>
  );
};

export default CompanyLogos;
