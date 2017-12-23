import { Component ,Input, Output, EventEmitter,NgModule,OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { empdataInfo} from  './Model/gridData';
import { empService} from './Service/employeeSrvc.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Table-Data Demo'; 
  data1 = '';  
  nextLibAvailable: boolean= false;
  isShow:boolean;
  isHide:boolean;
  emp:empdataInfo = {};
  empList:empdataInfo[] = [];
  salaryList =[];
  toggoleShowHide:boolean;
  disabled: boolean=false;
  salaryTotal:any;
  sucessmsg:string;
  errmsg:string;
  status:boolean = false;
  statusdel:boolean = false;
  deletemsg:string;

 public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
 ];
 constructor(private infoService:empService){}
 
  ngOnInit()
  {
     this.getEmplList();
     this.isHide = true;
     
  }
  
  Show(data){
    //alert('hi');
    this.data1 = data;
    this.nextLibAvailable = false;
  }
getEmplList() {
      this.infoService.getEmplList()
          .subscribe(
            Dataemp=> {
               console.log(Dataemp)
              this.empList = Dataemp;
         
              for(let i=0; i < this.empList.length; i++){
                this.empList[i].salary[0].salaryTot = this.empList[i].salary[0].basic + this.empList[i].salary[0].allowance - this.empList[i].salary[0].deduction;
              }
           },
          err => {console.log(err); }); 
    }
    //edit data
    editdata(editid)
    {
      this.emp = this.empList.filter(p=>p.id==editid)[0];
       let Basic = this.emp.salary[0].basic;
       let Allowance = this.emp.salary[0].allowance;
       let Deduction = this.emp.salary[0].deduction;
       let id = Basic + Allowance -Deduction ;
    }
    chngeval(data){
      data.salary[0].salaryTot = parseInt(data.salary[0].basic) + parseInt(data.salary[0].allowance) - parseInt(data.salary[0].deduction);
     
      this.sucessmsg = 'Salary updated successfully..!';
       this.status = true;
       
      setTimeout(() => {
        this.status = false;
      },3000);
    }
   
    clickMethod(data) {
      if(confirm("Are you sure to edit this record "+data)) {
        console.log("Implement edit functionality here");
        this.nextLibAvailable = true;
      }
    }
    deletedata(data){
        if(confirm("Are you sure to delete this record")) {
         for(let i=0; i < this.empList.length; i++){
      
            if(this.empList[i].empdel && this.empList[i].empdel == true){
              this.empList.splice(i,1);
              i--;
              this.deletemsg = 'Record deleted successfully..!';
            }
          }
        }
        
        this.statusdel = true;
        setTimeout(() => {
          this.statusdel = false;
        },3000);
    }
   
  }
