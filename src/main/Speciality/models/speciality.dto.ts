import { Base } from "src/main/Shared/models/Base.model";

export class SpecialityFilterDto{
 
}

export class SpecialityCreateDto{
  
}


export class SpecialityUpdateDto{
 
}


export class SpecialityDto extends Base {
   
    id :number ; 
    countryCode? :string ; 
    phoneNumber? :string ; 
    email :string ; 
    level?: number  ; 
    isActive :string ; 
    isDeleted :number ; 
 
}

