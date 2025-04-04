
const menuMap = {
    0: "nashta: Poha, morning: Aloo, evening: Cabbage Bhaji",
    1: "Poha & Khichdi",
    2: "Upma & Rice Sambhar",
    3: "Sabudana Khichdi & Chapati Bhaji",
    4: "Misal Pav & Paneer Paratha",
    5: "Nashta  : Vadapav \n Morning  : Bhendi Bhaji \n Evening  : Flower Bhaji",
    6: "Nashta  : Pav Ptties \n Morning  : Tomato Bhaji \n Evening  : Shimla Mirch"
  };
  
  
  const today = new Date();
  const todayDay = today.getDay();
  const tomorrowDay = (todayDay + 1) % 7;
  
  document.getElementById("todayMenu").innerHTML = menuMap[todayDay].replace(/\n/g, "<br>");
  document.getElementById("tomorrowMenu").innerHTML = menuMap[tomorrowDay].replace(/\n/g, "<br>");
  
  
  const fullWeekMenu = [
    { day: "Monday", nashta: "Poha", morning: "Aloo", evening: "Cabbage Bhaji" },
    { day: "Tuesday", nashta: "Mirchi Bhajji", morning: "Flower Bhaji", evening: "Bhendi Bhaji" },
    { day: "Wednesday", nashta: "Kachori", morning: "Andakari Thali / Panner Thali", evening: "Loki Bhjai" },
    { day: "Thursday", nashta: "Kanda Bhajji", morning: "Akka Masur", evening: "Chole" },
    { day: "Friday", nashta: "Samosa", morning: "Chicken Thali / Paneer Thali", evening: "Cabbage Bhaji" },
    { day: "Saturday", nashta: "Vadapav", morning: "Bhendi Bhaji", evening: "Flower Bhaji" },
    { day: "Sunday", nashta: "Pav Patties", morning: "Tomato Bhaji", evening: "Shimla Mirch" }
  ];
  
  const menuTable = document.getElementById("weeklyMenu");
  
  const row2 = document.createElement("tr");
  row2.innerHTML = `
  <tr>
    <th colspan="4"  style="padding: 10px;"  style="padding: 15px;">5 Chapatis ,  Amti/Varan , Achar , Salad and Rice Plate will be included in Thali</th>
</tr>

      
    `;
    menuTable.appendChild(row2);

  fullWeekMenu.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.day}</td>
      <td>${item.nashta}</td>
      <td>${item.morning}</td>
      <td>${item.evening}</td>
    `;
    menuTable.appendChild(row);

  });
 
  
  
  const prices = {
      "Bhajji (All-> Mirchi, Kanda , Patties)": 18,
      "Tea": 5,
      "Poha": 12,
      "Vadapav":15,
      "Kachori":15,
      "Samosa":15,
    "Shahakari Thali": 50,
    "Andakari Thali": 80,
    "Paneer Thali":80,
    "Chiken Thali":100,
  };
  
  const priceTable = document.getElementById("priceTable");
  
  // Loop through the object and add rows dynamically
  for (const item in prices) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item}</td><td>₹${prices[item]}</td>`;
    priceTable.appendChild(row);
  }
  