import { Base } from "src/main/Shared/models/Base.model";

export class ExpertiseFilterDto{
 
}

export class ExpertiseCreateDto{
  
}


export class ExpertiseUpdateDto{
 
}


export class ExpertiseDto extends Base {
   
    id :number ; 
    countryCode? :string ; 
    phoneNumber? :string ; 
    email :string ; 
    level?: number  ; 
    isActive :string ; 
    isDeleted :number ; 
 
}

