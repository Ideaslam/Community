import { Base } from "src/main/Shared/models/Base.model";

 

export class InvitationFilterDto{
 
}

export class InvitationCreateDto{
  
}


export class InvitationUpdateDto{
 
}


export class InvitationDto extends Base {
   
    id :number ; 
    countryCode? :string ; 
    phoneNumber? :string ; 
    email :string ; 
    level?: number  ; 
    isActive :string ; 
    isDeleted :number ; 
 
}

