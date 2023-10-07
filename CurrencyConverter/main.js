const populate = async (value, currency) => {
    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_EuvrLORxMAiCjkJCqVwg6oghJNAAfW9w9BHOgLwp&base_currency=${currency}`;

    // const url=`https://api.currencyapi.com/v3/latest?apikey=cur_live_7UStkUqQNBmahSoy8K635tE3Sjr5fK1UVPmVloZ2&base_currency=${currency}`;


  
    try {
      const response = await fetch(url);
      const rJson = await response.json();
      
      document.querySelector(".output").style.display = "block";
    //  const rJson= {"data": {
    //     "ADA": {
    //       "code": "ADA",
    //       "value": 4.0790844143
    //     },
    //     "AED": {
    //       "code": "AED",
    //       "value": 3.6732704101
    //     }}}
      let myStr = "";
      for (const key of Object.keys(rJson["data"])) {
        const convertedValue = rJson["data"][key]["value"] * value;
        myStr += `
          <tr>
            <td>${key}</td>
            <td>${rJson["data"][key]["code"]}</td>
            <td>${convertedValue.toFixed(2)}</td>
          </tr>
        `;
      }
  
      const tableBody = document.querySelector("tbody");
      tableBody.innerHTML = myStr;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.getElementById("qty").value);
    const currency = document.getElementById("currency").value;
    populate(value, currency);
  });
  