import { Base } from "src/main/Shared/models/Base.model";

export class ProfileFilterDto{
 
}

export class ProfileCreateDto{
  
}


export class ProfileUpdateDto{
 
}


export class ProfileDto extends Base {
   
    id :number ; 
    countryCode? :string ; 
    phoneNumber? :string ; 
    email :string ; 
    level?: number  ; 
    isActive :string ; 
    isDeleted :number ; 
 
}

