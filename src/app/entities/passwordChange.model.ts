export interface IPasswordChange {
    
    currentPassword?: string | null;
    newPassword?: string | null;
  }
  
  export class PasswordChange implements IPasswordChange {
    constructor(
      public currentPassword?: string | null,
      public newPassword?: string | null
    ) {}
  } 
  