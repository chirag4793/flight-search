import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { LeadingComment } from '@angular/compiler';





@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

airportloc : any;
passangerCount:any;
value = false;


selectedValue: any;
fromLocationTemplate: boolean = true;

displayRetField: boolean = false;
constructor(private http : HttpClient) {
  this.handleLocation()
 }
  ngOnInit(): void {
  }
  

url = 'https://api-uat-ezycommerce.ezyflight.se/api/v1/Airport/OriginsWithConnections/en-us'


  handleLocation(){
    console.log('test call');
    this.http.get(this.url ,{        
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Tenant-Identifier': '9d7d6eeb25cd6083e0df323a0fff258e59398a702fac09131275b6b1911e202d'
      }
    }).subscribe(data => {
      console.log(data)
      this.airportloc=data});
  }

 

  onSelectedSource(val:any){
alert(val)
 }

 onChange(event:any , val:any){
  console.log(val)
  this.selectedValue = this.airportloc
  console.log(this.selectedValue)
 }

 selectAirport(event:any){
  let ind = event.target.value;
  this.selectedValue = this.airportloc.airports[ind];
}

noResults() {
  // Conditions to check whether or not to display results
  
    return true;
  
}



}