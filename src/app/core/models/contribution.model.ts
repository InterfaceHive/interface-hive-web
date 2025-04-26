export enum ContributionStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED'
  }
  
  export interface Contribution {
    cid: string;
    uid: string;
    desc?: string;
    impl: string;
    Status: ContributionStatus;
  }