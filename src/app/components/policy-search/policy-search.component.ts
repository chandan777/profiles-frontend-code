import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Service/http.service';
import { Global } from '../../Shared/global';
import{Policy} from '../../Models/Policy';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Gender, searchParam} from '../../Models/Master'
@Component({
  selector: 'app-policy-search',
  templateUrl: './policy-search.component.html'
})
export class PolicySearchComponent implements OnInit {
  Policy:Policy=new Policy();
  PolicyList:Policy[]=[];
  MasterGender:Gender[]=[];
  MasterSearchParam:searchParam[]=[];
  SelectedSearchParam:string="Profile ID";
  searchinput:string="";
  constructor(private httpService: HttpService,private http:HttpClient) { }

  ngOnInit() {
   this.MasterGender=[{value:"Male",name:"Male"},
   {value:"Female",name:"Female"}
  ]

   // this.GetPolicyList();
  //  this.GetPolicy(12346);

  }
  SelectSearchParam(e){
    this.SelectedSearchParam=e.target["options"][e.target["options"].selectedIndex].text;
    // if(param=='pid'){
    //   this.SelectedSearchParam="pid";
    // }
    // else{
    //   this.SelectedSearchParam="cid";
    // }
  }
  search(){
    this.Policy=new Policy();
    if(this.SelectedSearchParam=='Profile ID'){
      this.GetPolicy(this.searchinput);
    }
    else{
      this.GetPolicyByCustomerID(this.searchinput);
    }
  }
  GetPolicyList(){
    console.log(Global.POLICY_LIST);
    this.http.get(Global.POLICY_LIST+"/").subscribe(data=>{
      this.PolicyList=<any>data;
    })
  }

  GetPolicy(policyid){
   
    this.http.get(Global.POLICY_LIST+"/").subscribe(data=>{
      this.PolicyList=<any>data;
      this.Policy=this.PolicyList.find(x=>x.Policy_id==policyid);
      if(this.Policy==null){
        alert('No records found!');
      }
    })
  }
  
  GetPolicyByCustomerID(customerid){
   
    this.http.get(Global.POLICY_LIST+"/").subscribe(data=>{
      this.PolicyList=<any>data;
      this.Policy=this.PolicyList.find(x=>x.Customer_id==customerid);
      if(this.Policy==null){
        alert('No records found!');
      }
    })
  }

  UpdatePolicy(policyid){

    this.http.put(Global.POLICY_LIST+"/"+policyid+"/",this.Policy).subscribe(data=>{
      this.Policy=<any>data;
      alert('Policy updated successfully!');
    })
  }

  validatePremium(){
    if(this.Policy.Premium>1000000){
      alert('Premium cannot be greater than 1 million');
      return;
    }
  }
  CreatePolicy(){
 
    this.http.post(Global.POLICY_LIST+"/",this.Policy).subscribe(data=>{
      this.Policy=<any>data;
      alert('Policy created successfully!');
      // if(this.Policy!=null || this.Policy!=undefined){
      //   alert('Policy created successfully!');
      // }
      // else{
      //   alert('Some technical error occured.');
      // }
    })
  }

  AddNew(){
    this.Policy=new Policy();
  }


  save(){
    this.validatePremium();
    if(this.Policy.Policy_id!=undefined){
      this.UpdatePolicy(this.Policy.Policy_id);
    }
    else{
      this.CreatePolicy();
    }
  }



}
