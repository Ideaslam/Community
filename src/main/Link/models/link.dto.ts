import { Base } from "../../Shared/models/Base.model";

export class LinkFilterDto{
 
}

export class LinkCreateDto{
  
}


export class LinkUpdateDto{
 
}


export class LinkDto extends Base {
   
    id :number ; 
    countryCode? :string ; 
    phoneNumber? :string ; 
    email :string ; 
    level?: number  ; 
    isActive :string ; 
    isDeleted :number ; 
 
}

