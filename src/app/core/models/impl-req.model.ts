export enum RequestStatus {
    ACTIVE = 'ACTIVE',
    CLOSED = 'CLOSED'
  }
  
  export interface ImplReq {
    rid: string;
    uid: string;
    desc: string;
    smp_cde?: string;
    crdt: number;
    cid_list: string[];
    input?: string;
    output?: string;
    deadline: Date;
    timestamp: Date;
    status: RequestStatus;
  }