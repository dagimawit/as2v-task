import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import build from "next/dist/build";
import { HospitalType } from "@/types/Hospital/hospitaltypes";
  
export const HospitalApi= createApi ({
    reducerPath : 'hospitalApi',
    baseQuery : fetchBaseQuery({
        baseUrl: "https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/",
        
    }),
    endpoints : (builder) =>({
        getHospitadata : builder.query< HospitalType, void>({ 
            query : ()=> ({
                url : "v1/search?institutions=true&articles=false&doctors=false&from=1&size=3",
                method: "POST",
                body : {}
            })
        })
    })
})


export const { useGetHospitadataQuery } = HospitalApi;