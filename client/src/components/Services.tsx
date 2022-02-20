import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';
import { ServiceCard } from './ServiceCard';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-whte text-3xl sm:text-5xl py-2 text-gradient">
            Services <br /> continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952e3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranted. We always maintain privacy and maintaining the quality of our products."
        />
        <ServiceCard
          color="bg-[#8945f8]"
          title="Best Exchange Rate"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guaranted. We always maintain privacy and maintaining the quality of our products."
        />
        <ServiceCard
          color="bg-[#f84550]"
          title="Fastest Transaction"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guaranted. We always maintain privacy and maintaining the quality of our products."
        />
      </div>
    </div>
  );
};

export default Services;
