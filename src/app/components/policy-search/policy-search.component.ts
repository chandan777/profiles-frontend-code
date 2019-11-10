import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Service/http.service';
import { Global } from '../../Shared/global';
import{Policy} from '../../Models/Policy';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-policy-search',
  templateUrl: './policy-search.component.html'
})
export class PolicySearchComponent implements OnInit {
  Policy:Policy=new Policy();
  PolicyList:Policy[]=[];
  constructor(private httpService: HttpService,private http:HttpClient) { }

  ngOnInit() {
   // this.GetPolicyList();
    this.GetPolicy(12346);
  }

  GetPolicyList(){
    console.log(Global.POLICY_LIST);
    this.http.get(Global.POLICY_LIST).subscribe(data=>{
      this.PolicyList=<any>data;
    })
  }

  GetPolicy(policyid){
   
    this.http.get(Global.POLICY_LIST+"/"+policyid).subscribe(data=>{
      this.Policy=<any>data;
      console.log(this.Policy);
    })
  }
    // this.httpService.get(Global.POLICY_LIST).subscribe(data => {
    //   this.PolicyList=data;
    // })}

}
