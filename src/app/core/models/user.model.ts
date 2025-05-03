export interface User {
    uid: string;
    auth_id: string;
    usr_email: string;
    desc?: string;
    avail_crdt: number;
    cu_crdt: number;
  }