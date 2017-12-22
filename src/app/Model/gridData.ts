
export class GenderInfo {
    public id?: number;
    public gender?: string; 
  }
export class empdataInfo{
   public id?:string;
   public age?:number;
   public name?:string;
   public email?:any;
   public gender?:string;
   public salary?:salaryInfo[] = []; 
   public salaryTotal?:any;
   public empdel?:boolean;
   public queryString?:any;
   public searchableList?:any;
}

export class salaryInfo{
    public basic?:number;
    public allowance?:number;
    public deduction?:number;
    public salaryTot?:number;    
}
