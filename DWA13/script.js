const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']


// Exercise 1: Logging each name
names.forEach((name) => {
    console.log(name);
  });
  
  // Exercise 2: Logging each name with a matching province
  names.forEach((name, index) => {
    const province = provinces[index];
    console.log(`${name} (${province})`);
  });
  
  // Exercise 3: Converting province names to uppercase
  const uppercaseProvinces = provinces.map((province) => {
    return province.toUpperCase();
  });
  console.log(uppercaseProvinces);
  
  // Exercise 4: Creating an array with the amount of characters in each name
  const nameLengths = names.map((name) => {
    return name.length;
  });
  console.log(nameLengths);
  
  // Exercise 5: Sorting provinces alphabetically
  const sortedProvinces = provinces.sort();
  console.log(sortedProvinces);