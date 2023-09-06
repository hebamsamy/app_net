import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name:string= "heba"
  id:number = 2323
  profilePic:string= "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1"
  profilefile:string = "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1"


  change(){
    this.name = "ITI"
  }
  testtemp(elem:any){
    elem.value= ""
    console.log(elem.value)
  }
  getfile(elem :any){
    console.log(elem.files)
  }
}
