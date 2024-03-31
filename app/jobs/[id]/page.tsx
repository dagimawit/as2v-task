"use client"
import { useGetJobByIdQuery } from '@/redux/services/jobsApi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import image1 from '@/public/image1.png';
import image from '@/public/image.png';

// Function to render responsibilities with icon
const renderResponsibilities = (responsibilities: string | undefined) => {
  if (!responsibilities) {
    return null;
  }

  // Split responsibilities into separate paragraphs
  const responsibilityList = responsibilities.split('\n');

  // Map each responsibility to include the icon
  const responsibilitiesWithIcon = responsibilityList.map((responsibility, index) => (
    <div key={index} className="flex items-center">
      <Image src="/Icon.png" alt="Responsibility Icon" width={30} height={30} />
      <p className="pl-2">{responsibility}</p>
    </div>
  ));

  return (
    <div className="responsibilities">
      {responsibilitiesWithIcon}
    </div>
  );
};

export default function JobDetail({params}: {params: {id: string}}) {
  const router = useRouter();
  const { id } = params; // Extract id from router query

  const { data: job, isLoading, isError } = useGetJobByIdQuery(id);

  if (isLoading) return <p>Loading...</p>; // 1
  if (isError) return <p>Error</p>; // 2
  if (!id) return <p>No job ID provided.</p>; // 3

  return (
    <div className='p-10'>
      <div className="flex m-5 justify-between p-6 rounded-tl-3xl  rounded-bl-3xl rounded-br-3xl rounded-tr-3xl  border border-solid shadow-lg">
        <div className="flex ">
          <div className="flex-shrink-0 pr-3 ">
          <Image
              src={job?.logoUrl}
              alt={'jjjj'}
              className="pl-5"
              width={80}
              height={80}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold pb-3">
              {job?.title}
            </h1>
            <p className="text-black">
            {job?.orgName} . {job?.location} . {job?.opType}
            </p>
          </div>
        </div>

        <div className="flex gap-10 p-3">
        <Image
              src={image}
              alt="jjjj"
              width={25}
              height={10}
            />
             <Image
              src={image1}
              alt="jjjj"
              width={3}
              height={10}
            />
          <button className='w-28 h-10 mt- text-white text-base font-Poppins font-medium rounded-3xl bg-indigo-900 '>Apply</button>
        </div>
      </div>

      <div>
        <div className="p-6">
          <h1 className="text-2xl font-bold pb-3">Description</h1>
          <ul>
            <li className="text-24 pl-1 ">{job?.description}</li>
          </ul>
        
        </div>
        <div className="p-6 pt-2">
          <h1 className="text-2xl font-bold pb-3">Responsibilities</h1>
          {renderResponsibilities(job?.responsibilities)}
        </div>
        <div className="p-6 pb-1">
          <h1 className="text-2xl font-bold pb-3 pt-0">Ideal Candidate we want</h1>
          <li className="font-bold-400 ">{job?.idealCandidate}</li>
        </div>
  
        <div className="flex flex-col p-5">
          <h1 className="text-2xl font-bold pb-3">When & Where</h1>
          <div className="flex pl-5">
            <Image src="/Icon1.png" alt="Image Not Found" width={30} height={30} />
            <p className="whitespace-pre-line">{job?.whenAndWhere}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
