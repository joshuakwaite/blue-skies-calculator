import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  states = [
    {
      name: "Alabama",
      abbreviation: "AL"
    },
    {
      name: "Alaska",
      abbreviation: "AK"
    },
    {
      name: "Arizona",
      abbreviation: "AZ"
    },
    {
      name: "Arkansas",
      abbreviation: "AR"
    },
    {
      name: "California",
      abbreviation: "CA"
    },
    {
      name: "Colorado",
      abbreviation: "CO"
    },
    {
      name: "Connecticut",
      abbreviation: "CT"
    },
    {
      name: "Delaware",
      abbreviation: "DE"
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC"
    },
    {
      name: "Florida",
      abbreviation: "FL"
    },
    {
      name: "Georgia",
      abbreviation: "GA"
    },
    {
      name: "Guam",
      abbreviation: "GU"
    },
    {
      name: "Hawaii",
      abbreviation: "HI"
    },
    {
      name: "Idaho",
      abbreviation: "ID"
    },
    {
      name: "Illinois",
      abbreviation: "IL"
    },
    {
      name: "Indiana",
      abbreviation: "IN"
    },
    {
      name: "Iowa",
      abbreviation: "IA"
    },
    {
      name: "Kansas",
      abbreviation: "KS"
    },
    {
      name: "Kentucky",
      abbreviation: "KY"
    },
    {
      name: "Louisiana",
      abbreviation: "LA"
    },
    {
      name: "Maine",
      abbreviation: "ME"
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH"
    },
    {
      name: "Maryland",
      abbreviation: "MD"
    },
    {
      name: "Massachusetts",
      abbreviation: "MA"
    },
    {
      name: "Michigan",
      abbreviation: "MI"
    },
    {
      name: "Minnesota",
      abbreviation: "MN"
    },
    {
      name: "Mississippi",
      abbreviation: "MS"
    },
    {
      name: "Missouri",
      abbreviation: "MO"
    },
    {
      name: "Montana",
      abbreviation: "MT"
    },
    {
      name: "Nebraska",
      abbreviation: "NE"
    },
    {
      name: "Nevada",
      abbreviation: "NV"
    },
    {
      name: "New Hampshire",
      abbreviation: "NH"
    },
    {
      name: "New Jersey",
      abbreviation: "NJ"
    },
    {
      name: "New Mexico",
      abbreviation: "NM"
    },
    {
      name: "New York",
      abbreviation: "NY"
    },
    {
      name: "North Carolina",
      abbreviation: "NC"
    },
    {
      name: "North Dakota",
      abbreviation: "ND"
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP"
    },
    {
      name: "Ohio",
      abbreviation: "OH"
    },
    {
      name: "Oklahoma",
      abbreviation: "OK"
    },
    {
      name: "Oregon",
      abbreviation: "OR"
    },
    {
      name: "Palau",
      abbreviation: "PW"
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA"
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR"
    },
    {
      name: "Rhode Island",
      abbreviation: "RI"
    },
    {
      name: "South Carolina",
      abbreviation: "SC"
    },
    {
      name: "South Dakota",
      abbreviation: "SD"
    },
    {
      name: "Tennessee",
      abbreviation: "TN"
    },
    {
      name: "Texas",
      abbreviation: "TX"
    },
    {
      name: "Utah",
      abbreviation: "UT"
    },
    {
      name: "Vermont",
      abbreviation: "VT"
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI"
    },
    {
      name: "Virginia",
      abbreviation: "VA"
    },
    {
      name: "Washington",
      abbreviation: "WA"
    },
    {
      name: "West Virginia",
      abbreviation: "WV"
    },
    {
      name: "Wisconsin",
      abbreviation: "WI"
    },
    {
      name: "Wyoming",
      abbreviation: "WY"
    }
  ];
  calculateForm: FormGroup;
  usedStates = ['Alaska'];
  regDs = ['b', 'c'];


  // @ViewChild('f') inputForm: NgForm;



  constructor() { }

  ngOnInit() {
    this.calculateForm = new FormGroup({
      // 'stateGroup': new FormGroup ({
      //   'state': new FormControl(null, Validators.required),
      //   'investorNumber': new FormControl(null, Validators.required),
      //   'totalInvested': new FormControl(null, Validators.required),
      //   'regD': new FormControl(null, Validators.required)
      // }),
      'stateGroups': new FormArray([new FormGroup ({
        'state': new FormControl(null, Validators.required),
        'investorNumber': new FormControl(null, Validators.required),
        'totalInvested': new FormControl(null, Validators.required),
        'regD': new FormControl(null, Validators.required)
      })
      ])
    });
  }

  // save(model: Customer) {
  //   // call API to save customer
  //   console.log(model);
  // }

  // clicking(form: NgForm) {
  //   console.log(form.value)
  // }

  // clicking () {
  //   console.log(this.inputForm);
  //
  //   this.inputForm.reset();
  //
  // }

  onSubmit() {
    console.log(this.calculateForm.value);

  }

  onAddStateGroup() {
    (<FormArray>this.calculateForm.get('stateGroups')).push(new FormGroup({
      'state': new FormControl(null, Validators.required),
      'investorNumber': new FormControl(null, Validators.required),
      'totalInvested': new FormControl(null, Validators.required),
      'regD': new FormControl(null, Validators.required)
    }))
  }

  removeStateGroup(index: number) {
    (<FormArray>this.calculateForm.get('stateGroups')).removeAt(index)
  }



  // usedStatesValidator(control: FormControl): {[s: string]: boolean} {
  //   if (this.usedStates.indexOf(control.value) !== -1) {
  //     return {'State is already in use': true};
  //   }
  //   return null
  // }



}


// <div class="col-sm-3 nopadding center-radio">
// <div class="input-group">
// <span style="padding-right: 4px;">RegD Type:</span>
// <div class="form-group radio" *ngFor="let regD of regDs" style="margin-top: 4px; padding-right: 4px; padding-left: 4px;">
// <label>
//   <input type="radio" name="regD" formControlName="regD" [value]="regD">
//   {{regD}}
// </label>
// </div>
// </div>
// </div>
