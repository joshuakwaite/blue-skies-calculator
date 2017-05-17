let fakeInput = {
      "stateGroups": [
        {"stateCode": "AZ", "investorNumber": 1, "totalInvested": 1000, "regD": "b"},
        {"stateCode": "IL", "investorNumber": 20, "totalInvested": 200000, "regD": "b"},
        {"stateCode": "HI", "investorNumber": 3, "totalInvested": 60000, "regD": "b"},
        {"stateCode": "MT", "investorNumber": 11, "totalInvested": 300000, "regD": "b"}
      ]
    };

    let regCheck = [
      {
        "stateCode": "AL",
        "state": "Alabama",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "b"
      },
      {
        "stateCode": "AR",
        "state": "Arkansas",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": true,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "AZ",
        "state": "Arizona",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "b"
      },
      {
        "stateCode": "CA",
        "state": "California",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 0,
        "regD": "b",
        "tieredBy": "total",
        "tiers": [
          {
            "startRange": 0,
            "endRange": 25000,
            "baseFee": 25,
            "mulitplier": 0,
            "subtractor": 0
          },
          {
            "startRange": 25000,
            "endRange": 100000,
            "baseFee": 35,
            "mulitplier": 0,
            "subtractor": 0
          },
          {
            "startRange": 100000,
            "endRange": 500000,
            "baseFee": 50,
            "mulitplier": 0,
            "subtractor": 0
          },
          {
            "startRange": 500000,
            "endRange": 1000000,
            "baseFee": 150,
            "mulitplier": 0,
            "subtractor": 0
          },
          {
            "startRange": 1000000,
            "endRange": 0,
            "baseFee": 300,
            "mulitplier": 0,
            "subtractor": 0
          }
        ]
      },
      {
        "stateCode": "CO",
        "state": "Colorado",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "CT",
        "state": "Connecticut",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 150,
        "regD": "b"
      },
      {
        "stateCode": "DC",
        "state": "District of Columbia",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "b"
      },
      {
        "stateCode": "DE",
        "state": "Delaware",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 0,
        "regD": "b",
        "tieredBy": "state",
        "tiers": [
          {
            "startRange": 0,
            "endRange": 40000,
            "baseFee": 200,
            "mulitplier": 0,
            "subtractor": 0
          },
          {
            "startRange": 40000,
            "endRange": 200000,
            "baseFee": 0,
            "mulitplier": 0.005,
            "subtractor": 0
          },
          {
            "startRange": 200000,
            "endRange": 0,
            "baseFee": 1000,
            "mulitplier": 0,
            "subtractor": 0
          }
        ]
      },
      {
        "stateCode": "FL",
        "state": "Florida",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "GA",
        "state": "Georgia",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "b"
      },
      {
        "stateCode": "HI",
        "state": "Hawaii",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "b"
      },
      {
        "stateCode": "IA",
        "state": "Iowa",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "ID",
        "state": "Idaho",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 50,
        "regD": "b"
      },
      {
        "stateCode": "IL",
        "state": "Illinios",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "b"
      },
      {
        "stateCode": "IN",
        "state": "Indiana",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "KS",
        "state": "Kansas",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 250,
        "regD": "b"
      },
      {
        "stateCode": "KY",
        "state": "Kentucky",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "b"
      },
      {
        "stateCode": "LA",
        "state": "Louisiana",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "b"
      },
      {
        "stateCode": "MA",
        "state": "Massachusetts",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "b"
      },
      {
        "stateCode": "MD",
        "state": "Maryland",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "b"
      },
      {
        "stateCode": "ME",
        "state": "Maine",
        "filingType": "swing",
        "threshhold": 10,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "b"
      },
      {
        "stateCode": "MI",
        "state": "Michigan",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "b"
      },
      {
        "stateCode": "MN",
        "state": "Minnesota",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "MO",
        "state": "Missouri",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "b"
      },
      {
        "stateCode": "MS",
        "state": "Mississippi",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "b"
      },
      {
        "stateCode": "MT",
        "state": "Montana",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b",
        "tieredBy": "state",
        "tiers": [
          {
            "startRange": 0,
            "endRange": 100000,
            "baseFee": 200,
            "mulitplier": 0,
            "subtractor": 0
          },
          {
            "startRange": 100000,
            "endRange": 900000,
            "baseFee": 200,
            "mulitplier": 0.001,
            "subtractor": 100000
          },
          {
            "startRange": 900000,
            "endRange": 0,
            "baseFee": 1000,
            "mulitplier": 0,
            "subtractor": 0
          }
        ]
      },
      {
        "stateCode": "NC",
        "state": "North Carolina",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 350,
        "regD": "b"
      },
      {
        "stateCode": "ND",
        "state": "North Dakota",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "b"
      },
      {
        "stateCode": "NE",
        "state": "Nebraska",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "NH",
        "state": "New Hampshire",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 500,
        "regD": "b"
      },
      {
        "stateCode": "NJ",
        "state": "New Jersey",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 250,
        "regD": "b"
      },
      {
        "stateCode": "NM",
        "state": "New Mexico",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 350,
        "regD": "b"
      },
      {
        "stateCode": "NV",
        "state": "Nevada",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 500,
        "regD": "b"
      },
      {
        "stateCode": "NY",
        "state": "New York",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "OH",
        "state": "Ohio",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "OK",
        "state": "Oklahoma",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "b"
      },
      {
        "stateCode": "OR",
        "state": "Oregon",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "b"
      },
      {
        "stateCode": "PA",
        "state": "Pennsylvania",
        "filingType": "swing",
        "threshhold": 2,
        "ppm": false,
        "formD": true,
        "fee": 525,
        "regD": "b"
      },
      {
        "stateCode": "RI",
        "state": "Rhode Island",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "b"
      },
      {
        "stateCode": "SC",
        "state": "South Carolina",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 300,
        "regD": "b"
      },
      {
        "stateCode": "SD",
        "state": "South Dakota",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "TN",
        "state": "Tennessee",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": true,
        "formD": false,
        "fee": 500,
        "regD": "b"
      },
      {
        "stateCode": "TX",
        "state": "Texas",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": true,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "UT",
        "state": "Utah",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "VA",
        "state": "Virginia",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "b"
      },
      {
        "stateCode": "VT",
        "state": "Vermont",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "WA",
        "state": "Washington",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "b"
      },
      {
        "stateCode": "WI",
        "state": "Wisconsin",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "b"
      },
      {
        "stateCode": "WV",
        "state": "West Virginia",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 125,
        "regD": "b"
      },
      {
        "stateCode": "WY",
        "state": "Wyoming",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 200,
        "regD": "b"
      },
      {
        "stateCode": "AK",
        "state": "Alaska",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 600,
        "regD": "c"
      },
      {
        "stateCode": "AK",
        "state": "Alaska",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 600,
        "regD": "b"
      },
      {
        "stateCode": "AL",
        "state": "Alabama",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "c"
      },
      {
        "stateCode": "AR",
        "state": "Arkansas",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 0,
        "regD": "c",
        "tieredBy": "state",
        "tiers": [
          {
            "startRange": 0,
            "endRange": 100000,
            "baseFee": 100,
            "mulitplier": 0,
            "subtractor": 0
          },
          {
            "startRange": 100000,
            "endRange": 500000,
            "baseFee": 0,
            "mulitplier": 0.001,
            "subtractor": 0
          },
          {
            "startRange": 500000,
            "endRange": 0,
            "baseFee": 500,
            "mulitplier": 0,
            "subtractor": 0
          }
        ]
      },
      {
        "stateCode": "AZ",
        "state": "Arizona",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "CA",
        "state": "California",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "c"
      },
      {
        "stateCode": "CO",
        "state": "Colorado",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 50,
        "regD": "c"
      },
      {
        "stateCode": "CT",
        "state": "Connecticut",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 150,
        "regD": "c"
      },
      {
        "stateCode": "DC",
        "state": "District of Columbia",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "DE",
        "state": "Delaware",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 0,
        "regD": "c",
        "tieredBy": "state",
        "tiers": [
          {
            "startRange": 0,
            "endRange": 40000,
            "baseFee": 200,
            "mulitplier": 0,
            "subtractor": 0
          },
          {
            "startRange": 40000,
            "endRange": 200000,
            "baseFee": 0,
            "mulitplier": 0.005,
            "subtractor": 0
          },
          {
            "startRange": 200000,
            "endRange": 0,
            "baseFee": 1000,
            "mulitplier": 0,
            "subtractor": 0
          }
        ]
      },
      {
        "stateCode": "FL",
        "state": "Florida",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "c"
      },
      {
        "stateCode": "GA",
        "state": "Georgia",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "HI",
        "state": "Hawaii",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "c"
      },
      {
        "stateCode": "IA",
        "state": "Iowa",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "c"
      },
      {
        "stateCode": "ID",
        "state": "Idaho",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 50,
        "regD": "c"
      },
      {
        "stateCode": "IL",
        "state": "Illinios",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "c"
      },
      {
        "stateCode": "IN",
        "state": "Indiana",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 0,
        "regD": "c"
      },
      {
        "stateCode": "KS",
        "state": "Kansas",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "KY",
        "state": "Kentucky",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "LA",
        "state": "Louisiana",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "c"
      },
      {
        "stateCode": "MA",
        "state": "Massachusetts",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "MD",
        "state": "Maryland",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "c"
      },
      {
        "stateCode": "ME",
        "state": "Maine",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "c"
      },
      {
        "stateCode": "MI",
        "state": "Michigan",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "c"
      },
      {
        "stateCode": "MN",
        "state": "Minnesota",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 100,
        "regD": "c"
      },
      {
        "stateCode": "MO",
        "state": "Missouri",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "c"
      },
      {
        "stateCode": "MS",
        "state": "Mississippi",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "c"
      },
      {
        "stateCode": "MT",
        "state": "Montana",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "c",
        "tieredBy": "state",
        "tiers": [
          {
            "startRange": 0,
            "endRange": 100000,
            "baseFee": 200,
            "mulitplier": 0,
            "subtractor": 0
          },
          {
            "startRange": 100000,
            "endRange": 900000,
            "baseFee": 200,
            "mulitplier": 0.001,
            "subtractor": 100000
          },
          {
            "startRange": 900000,
            "endRange": 0,
            "baseFee": 1000,
            "mulitplier": 0,
            "subtractor": 0
          }
        ]
      },
      {
        "stateCode": "NC",
        "state": "North Carolina",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 350,
        "regD": "c"
      },
      {
        "stateCode": "ND",
        "state": "North Dakota",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 100,
        "regD": "c"
      },
      {
        "stateCode": "NE",
        "state": "Nebraska",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "c"
      },
      {
        "stateCode": "NH",
        "state": "New Hampshire",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 500,
        "regD": "c"
      },
      {
        "stateCode": "NJ",
        "state": "New Jersey",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "NM",
        "state": "New Mexico",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 350,
        "regD": "c"
      },
      {
        "stateCode": "NV",
        "state": "Nevada",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 500,
        "regD": "c"
      },
      {
        "stateCode": "NY",
        "state": "New York",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "c"
      },
      {
        "stateCode": "OH",
        "state": "Ohio",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 100,
        "regD": "c"
      },
      {
        "stateCode": "OK",
        "state": "Oklahoma",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "OR",
        "state": "Oregon",
        "filingType": "paper",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "PA",
        "state": "Pennsylvania",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 525,
        "regD": "c"
      },
      {
        "stateCode": "RI",
        "state": "Rhode Island",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "c"
      },
      {
        "stateCode": "SC",
        "state": "South Carolina",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 300,
        "regD": "c"
      },
      {
        "stateCode": "SD",
        "state": "South Dakota",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "TN",
        "state": "Tennessee",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": true,
        "formD": true,
        "fee": 500,
        "regD": "c"
      },
      {
        "stateCode": "TX",
        "state": "Texas",
        "filingType": "efd",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 0,
        "regD": "c",
        "tieredBy": "total",
        "tiers": [
          {
            "startRange": 0,
            "endRange": 500000,
            "baseFee": 0,
            "mulitplier": 0.001,
            "subtractor": 0
          },
          {
            "startRange": 500000,
            "endRange": 0,
            "baseFee": 500,
            "mulitplier": 0,
            "subtractor": 0
          }
        ]
      },
      {
        "stateCode": "UT",
        "state": "Utah",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 100,
        "regD": "c"
      },
      {
        "stateCode": "VA",
        "state": "Virginia",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 250,
        "regD": "c"
      },
      {
        "stateCode": "VT",
        "state": "Vermont",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 600,
        "regD": "c"
      },
      {
        "stateCode": "WA",
        "state": "Washington",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 300,
        "regD": "c"
      },
      {
        "stateCode": "WI",
        "state": "Wisconsin",
        "filingType": "none",
        "threshhold": 0,
        "ppm": false,
        "formD": false,
        "fee": 0,
        "regD": "c"
      },
      {
        "stateCode": "WV",
        "state": "West Virginia",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 125,
        "regD": "c"
      },
      {
        "stateCode": "WY",
        "state": "Wyoming",
        "filingType": "swing",
        "threshhold": 0,
        "ppm": false,
        "formD": true,
        "fee": 200,
        "regD": "c"
      }
    ];

    function calculate(input, checkAgainst) {

      // Variables
      let outputArr = [];
      let isEfdRequired = false;
      let grandTotal = 0;
      let grandTotalInvested = 0;

      // Return Filing Calculator Function
      function calculateReturnFiling(state) {
        let returnFilingMessage = "";

        if (state.investorNumber <= state.threshhold) {
          returnFilingMessage = "Filing not required because the investor threshold has not been met."
        } else if (state.filingType === "none") {
          returnFilingMessage = "Filing not required."
        } else if ((state.filingType === "swing" && isEfdRequired === true) || (state.filingType === 'efd')) {
          returnFilingMessage = "efd"
        } else {
          returnFilingMessage = "paper"
        }
        return returnFilingMessage;
      }

      // Fee Calculator Function
      function calculateFee(state) {
        let totalFee = 0;

    if (state.tiers) {
      if (state.tieredBy === "total") {
        for (let x in state.tiers) {
          let thisIsIt = false;
          if (state.tiers[x].endRange === 0) {
            if (grandTotalInvested >= state.tiers[x].startRange) { thisIsIt = true; }
          } else {
            if (grandTotalInvested >= state.tiers[x].startRange && grandTotalInvested < state.tiers[x].endRange) { thisIsIt = true }
          }
          if (thisIsIt === true) {
            totalFee += (state.tiers[x].baseFee + (state.tiers[x].mulitplier * (grandTotalInvested - state.tiers[x].subtractor)))
          }
        }
      } else if (state.tieredBy === "state") {
        for (let x in state.tiers) {
          let thisIsIt = false;
          if (state.tiers[x].endRange === 0) {
            if (state.totalInvested >= state.tiers[x].startRange) { thisIsIt = true; }
          } else {
            if (state.totalInvested >= state.tiers[x].startRange && state.totalInvested < state.tiers[x].endRange) { thisIsIt = true }
          }
          if (thisIsIt === true) {
            totalFee += (state.tiers[x].baseFee + (state.tiers[x].mulitplier * (state.totalInvested - state.tiers[x].subtractor)))
          }
        }
      }
    } else if (state.filingType === "none") {
      totalFee += 0;
    } else {
      totalFee += state.fee
    }

    if (state.investorNumber <= state.threshhold) {
      totalFee = 0;
    }

    return totalFee;
  }

  for (let i in checkAgainst) {

    for (let j in input.stateGroups) {

      //Compares input vs state JSON file
      if ((checkAgainst[i].stateCode === input.stateGroups[j].stateCode) && (checkAgainst[i].regD === input.stateGroups[j].regD)) {

        //Calculate Grand Total Invested before other functions(used for other functions)
        grandTotalInvested += input.stateGroups[j].totalInvested;
        if (checkAgainst[i].filingType === "efd") {
          isEfdRequired = true;
        }

        //Adds 2 fields to object for comparison and pushes to array
        checkAgainst[i].investorNumber = input.stateGroups[j].investorNumber;
        checkAgainst[i].totalInvested = input.stateGroups[j].totalInvested;
        outputArr.push(checkAgainst[i]);
      }
    }
  }

  //Utilizes callback functions & decides of EFD is true
  for (let k in outputArr) {

    outputArr[k].totalFee = calculateFee(outputArr[k]);
    outputArr[k].returnFilingType = calculateReturnFiling(outputArr[k]);

    //Adds grand total
    grandTotal += outputArr[k].totalFee
  }

  // Console log tests
  console.log(outputArr);
  console.log('Grand Total Invested: '+ grandTotalInvested);
  if (isEfdRequired === true) {
    console.log("EFD Charge: $150.00");
    grandTotal += 150;
  }
  console.log('Total Blue Sky Fees: ' + grandTotal);
}


calculate(fakeInput, regCheck);
