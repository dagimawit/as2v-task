export interface HospitalType {
    _id: string;
  
  
    address: {
      region: string;
      woreda: string;
      zone: string;
      summary: string;
    };
  
  
    availability: {
      twentyFourHours: boolean;
      startDay: string;
      endDay: string;
      opening: string;
      closing: string;
    };
  
  
    photo: string;
  
  
    phoneNumbers: string[];
    emails: string[];
  }
  