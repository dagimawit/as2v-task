import Image from "next/image";
import Link from "next/link";

interface Cardprops {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: any;
  perksAndBenefits: any;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
}

export default function Jobcard({
  id,
  title,
  description,
   responsibilities,
   requirements,
   idealCandidate,
   categories,
   opType,
   startDate,
   endDate,
   deadline,
   location,
   requiredSkills,
  whenAndWhere,
  orgID,
   datePosted,
   status,
   applicantsCount,
   viewsCount,
   orgName,
   logoUrl,
   isBookmarked,
   isRolling,
   orgPrimaryPhone,
   orgEmail,
}: Cardprops) {
  return (
    <div>
      <div className="lg:p-6 md:w-full flex justify-start mt-10">
        <div className="max-w-6xl rounded-2xl overflow-hidden shadow-lg flex flex-col">
          <div className="w-1/3">
            <Image
              src={logoUrl}
              alt="img"
              className="pl-5"
              width={80} 
              height={80}
            />
          </div>
          <div className="w-2/3 px-6 py-4 flex flex-col justify-between pl-24 -mt-16">
            <div>
              <div className="title-font text-lg font-medium mb-2">
                <span className="no-underline font-bold">{title}</span>
              </div>
              <p className="text-gray-900 text-base p-1 ">{description}</p>
            </div>
            <div className="mt-5 w-80 flex">
            <button className="w-16 h-7 rounded-3xl border-1 border-green-300 border-solid  text-xs text-green-500">In Person</button>
            <Image className="ml-1" src="/line.png" alt="Image Not Found" width={1} height={30} />
            <button className="w-20 h-7 rounded-3xl ml-3 border-1 border-orange-400 bg-orange-100 text-xs text-orange-600">Education</button>
            <button className="w-12 h-7 rounded-3xl ml-3 border-1 border-purple-950 text-purple-900 text-xs">IT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
