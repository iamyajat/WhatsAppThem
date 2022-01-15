const COUNTRY_PHONE_MAP = {
  AD: "376",
  AE: "971",
  AF: "93",
  AG: "1-268",
  AI: "1-264",
  AL: "355",
  AM: "374",
  AN: "599",
  AO: "244",
  AQ: "672",
  AR: "54",
  AS: "1-684",
  AT: "43",
  AU: "61",
  AW: "297",
  AZ: "994",
  BA: "387",
  BB: "1-246",
  BD: "880",
  BE: "32",
  BF: "226",
  BG: "359",
  BH: "973",
  BI: "257",
  BJ: "229",
  BL: "590",
  BM: "1-441",
  BN: "673",
  BO: "591",
  BR: "55",
  BS: "1-242",
  BT: "975",
  BW: "267",
  BY: "375",
  BZ: "501",
  CA: "1",
  CC: "61",
  CD: "243",
  CF: "236",
  CG: "242",
  CH: "41",
  CI: "225",
  CK: "682",
  CL: "56",
  CM: "237",
  CN: "86",
  CO: "57",
  CR: "506",
  CU: "53",
  CV: "238",
  CW: "599",
  CX: "61",
  CY: "357",
  CZ: "420",
  DE: "49",
  DJ: "253",
  DK: "45",
  DM: "1-767",
  DO: "1-809, 1-829, 1-849",
  DZ: "213",
  EC: "593",
  EE: "372",
  EG: "20",
  EH: "212",
  ER: "291",
  ES: "34",
  ET: "251",
  FI: "358",
  FJ: "679",
  FK: "500",
  FM: "691",
  FO: "298",
  FR: "33",
  GA: "241",
  GB: "44",
  GD: "1-473",
  GE: "995",
  GG: "44-1481",
  GH: "233",
  GI: "350",
  GL: "299",
  GM: "220",
  GN: "224",
  GQ: "240",
  GR: "30",
  GT: "502",
  GU: "1-671",
  GW: "245",
  GY: "592",
  HK: "852",
  HN: "504",
  HR: "385",
  HT: "509",
  HU: "36",
  ID: "62",
  IE: "353",
  IL: "972",
  IM: "44-1624",
  IN: "91",
  IO: "246",
  IQ: "964",
  IR: "98",
  IS: "354",
  IT: "39",
  JE: "44-1534",
  JM: "1-876",
  JO: "962",
  JP: "81",
  KE: "254",
  KG: "996",
  KH: "855",
  KI: "686",
  KM: "269",
  KN: "1-869",
  KP: "850",
  KR: "82",
  KW: "965",
  KY: "1-345",
  KZ: "7",
  LA: "856",
  LB: "961",
  LC: "1-758",
  LI: "423",
  LK: "94",
  LR: "231",
  LS: "266",
  LT: "370",
  LU: "352",
  LV: "371",
  LY: "218",
  MA: "212",
  MC: "377",
  MD: "373",
  ME: "382",
  MF: "590",
  MG: "261",
  MH: "692",
  MK: "389",
  ML: "223",
  MM: "95",
  MN: "976",
  MO: "853",
  MP: "1-670",
  MR: "222",
  MS: "1-664",
  MT: "356",
  MU: "230",
  MV: "960",
  MW: "265",
  MX: "52",
  MY: "60",
  MZ: "258",
  NA: "264",
  NC: "687",
  NE: "227",
  NG: "234",
  NI: "505",
  NL: "31",
  NO: "47",
  NP: "977",
  NR: "674",
  NU: "683",
  NZ: "64",
  OM: "968",
  PA: "507",
  PE: "51",
  PF: "689",
  PG: "675",
  PH: "63",
  PK: "92",
  PL: "48",
  PM: "508",
  PN: "64",
  PR: "1-787, 1-939",
  PS: "970",
  PT: "351",
  PW: "680",
  PY: "595",
  QA: "974",
  RE: "262",
  RO: "40",
  RS: "381",
  RU: "7",
  RW: "250",
  SA: "966",
  SB: "677",
  SC: "248",
  SD: "249",
  SE: "46",
  SG: "65",
  SH: "290",
  SI: "386",
  SJ: "47",
  SK: "421",
  SL: "232",
  SM: "378",
  SN: "221",
  SO: "252",
  SR: "597",
  SS: "211",
  ST: "239",
  SV: "503",
  SX: "1-721",
  SY: "963",
  SZ: "268",
  TC: "1-649",
  TD: "235",
  TG: "228",
  TH: "66",
  TJ: "992",
  TK: "690",
  TL: "670",
  TM: "993",
  TN: "216",
  TO: "676",
  TR: "90",
  TT: "1-868",
  TV: "688",
  TW: "886",
  TZ: "255",
  UA: "380",
  UG: "256",
  US: "1",
  UY: "598",
  UZ: "998",
  VA: "379",
  VC: "1-784",
  VE: "58",
  VG: "1-284",
  VI: "1-340",
  VN: "84",
  VU: "678",
  WF: "681",
  WS: "685",
  XK: "383",
  YE: "967",
  YT: "262",
  ZA: "27",
  ZM: "260",
  ZW: "263",
};

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

async function getLocalCountry () {
  let locationData;
  try {
    locationData = await fetch("https://geolocation-db.com/json/", {
      method: "GET",
    });
    locationData = await locationData.json();
  } catch (err) {
    throw new Error(err);
  }
  const countryCode = locationData["country_code"];
  let countryPrefix = COUNTRY_PHONE_MAP[countryCode];

  return countryPrefix.split(", ")[0];
}

async function onClick () {
  let phoneNumber = document.getElementById("phone").value.trim();
  phoneNumber = phoneNumber.replace(/( |-)/g, "");
  if (phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
    document.getElementById("errormessage").innerHTML = "";
    let url = "https://wa.me/";
    if (phoneNumber !== "") {
      let countryCode = "";
      if (phoneNumber[0] != "+") {
        try {
          countryCode = await getLocalCountry();
          countryCode = "+" + countryCode;
        } catch (err) {
          console.log(err);
        }
      }
      url += countryCode + phoneNumber;
      let visibility = document.getElementById("messageShowHide").innerHTML;
      if (visibility === "- Add message") {
        let message = document.getElementById("messageData").value;
        message = encodeURIComponent(message);
        url += "?text=" + message;
      }
      window.open(url);
    }
  } else {
    document.getElementById("phone").style.borderColor = "red";
    document.getElementById("errormessage").innerHTML = "Invalid phone number";
    document.getElementById("phone").focus();
  }
}

document.getElementById("submit").addEventListener("click", onClick)

function messageShowHide () {
  var visibility = document.getElementById("messageShowHide").innerHTML
  if (visibility === "+ Add message") {
    document.getElementById("messageShowHide").innerHTML = "- Add message";
    document.getElementById("messageData").style.display = "block"
  } else {
    document.getElementById("messageShowHide").innerHTML = "+ Add message";
    document.getElementById("messageData").style.display = "none"
  }
}

document.getElementById("messageShowHide").addEventListener("click", messageShowHide);

function checkNumber (e) {
  if (e.target.value[0] === "+") {
    if (e.target.value.match(/[^\d]/)) {
      e.target.value = "+" + e.target.value.substring(1).replace(/[^\d]/g, "");
    }
  } else {
    if (e.target.value.match(/[^\d]/)) {
      e.target.value = e.target.value.replace(/[^\d]/g, "");
    }
  }
  if (e.key === 'Enter' || e.keyCode === 13) {
    onClick();
  }
}

document.getElementById("phone").addEventListener("keyup", checkNumber);


function onClickOutside (e) {
  if (!document.getElementById('submit').contains(e.target)) {
    document.getElementById("phone").style.borderColor = "#ccc";
  }
}

window.addEventListener('click', onClickOutside);