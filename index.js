const APIURL = "https://corona.lmao.ninja/v2/countries/india";

const main = document.getElementById("main");

async function getRecords(url) {
    const resp = await fetch(url);
    const respData = await resp.json();


    showRecords(respData);


}
getRecords(APIURL);

function showRecords(record) {

    main.innerHTML = `
 <div class ="stats-container">
 <h1 class ="app-heading">Covid-19 Tracker India</h1>
 <h2>Cases</h2>

 <div class="cases-flex-container">
 <div class="cases-flex-item">
 <h4>Total Cases</h4>
      ${record.cases}
      </div>
      <div class="cases-flex-item">
      <h4>Cases Per Million</h4>
           ${record.casesPerOneMillion}
           </div>
           <div class="cases-flex-item">
      <h4>Case Reported Today</h4>
           ${record.todayCases}
           </div>    
 
 </div>

 <h2>Recovered Cases</h2>

 <div class="recovered-flex-container">
 <div class="recovered-flex-item">
 <h4>Total Recovered Cases</h4>
      ${record.recovered}
      </div>
      <div class="recovered-flex-item">
      <h4>Recovered  Cases Per Million</h4>
           ${record.recoveredPerOneMillion}
           </div>
           <div class="recovered-flex-item">
      <h4>Recovered Cases Today</h4>
           ${record.todayRecovered}
           </div>
 </div>

 <h2>Deaths</h2>

    <div class="death-flex-container">
    <div class="death-flex-item">
    <h4>Total Deaths</h4>
        ${record.deaths}
      </div>
      <div class="death-flex-item">
      <h4>Deaths Per Million</h4>
           ${record.deathsPerOneMillion}
           </div>
           <div class="death-flex-item">
           <h4>Deaths Today</h4>
           ${record.todayDeaths}
           </div>
</div>
<h2>Active Cases</h2>

    <div class="active-flex-container">
    <div class="active-flex-item">
    <h4>Total Active Cases</h4>
        ${record.active}
        </div>
        <div class="active-flex-item">
        <h4>Active Cases Per Million</h4>
                ${record.activePerOneMillion}
                </div>
                </div>

 <h2>Tests</h2>

    <div class="test-flex-container">
    <div class="test-flex-item">
    <h4>Total Tests</h4>
        ${record.tests}
        </div>
        <div class="test-flex-item">
        <h4>Test Per Million</h4>
            ${record.testsPerOneMillion}
            </div>   
            </div>                
 </div>
 
 `
}