"use client";

import Link from "next/link";
import { useGetJobsQuery } from '@/redux/services/jobsApi';
import Jobcard from '@/components/Jobcard';
import Image from "next/image";

export default function Home() {
  const { isLoading, isFetching, data: jobsData, error } = useGetJobsQuery(null);
 

  return (
    <div className="px-10">
      <div className="flex justify-between p-5">
        <div>
          <h1 className='text-3xl text-indigo-950 font-bold'>Opportunities</h1>
          <p className="text-body text-epilogue text-base font-normal leading-6 text-left text-gray-500">Showing {jobsData?.data.length} results </p>
        </div>
        <div className='flex justify-end items-center w-72 mr-56 pl-20'>
                  <p className='font-Epilogue text-indigo-950 font-medium'><span className="text-body text-epilogue text-base font-normal leading-6 text-right text-gray-500">Sort by:</span> Most relevant</p>
                  <Image className='pt-1' src = "/dropdown.jpg" width={30} height={30} alt="Image Not Found" />
        </div>
      </div>
      {error ? (
        <p>Error</p>
      ) : isLoading || isFetching ? (
        <p>Loading</p>
      ) : Array.isArray(jobsData?.data) && jobsData.data.length > 0 ? (
        jobsData.data.slice(2).map((item:any) => (
          <Link href={`jobs/${item.id}`} key={item.id}>
            <Jobcard
              id={item.id}
              title={item.title}
              description={item.description}
              responsibilities={item.responsibilities}
              requirements={item.requirements}
              idealCandidate={item.idealCandidate}
              categories={item.categories}
              opType={item.opType}
              startDate={item.startDate}
              endDate={item.endDate}
              deadline={item.deadline}
              location={item.location}
              requiredSkills={item.requiredSkills}
              whenAndWhere={item.whenAndWhere}
              orgID={item.orgID}
              datePosted={item.datePosted}
              status={item.status}
              applicantsCount={item.applicantsCount}
              viewsCount={item.viewsCount}
              orgName={item.orgName}
              logoUrl={item.logoUrl}
              isBookmarked={item.isBookmarked}
              isRolling={item.isRolling}
              orgPrimaryPhone={item.orgPrimaryPhone}
              orgEmail={item.orgEmail} 
              questions={item.questions} 
              perksAndBenefits={item.perksAndBenefits} 
              createdAt={item.createdAt} 
              updatedAt={item.updatedAt}
            />
          </Link>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
