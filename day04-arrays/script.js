const inputs = document.querySelectorAll('input, select');

inputs.forEach(input => input.addEventListener('change', handleUpdate));

handleUpdate();
function handleUpdate() {
  const ageMin = document.querySelector('#ageMin').value;
  const ageMax = document.querySelector('#ageMax').value;
  const sortField = document.querySelector('#sort').value;

  // Filter the data to be within the age ranges
  const filteredData = data.filter(person => person.age >= ageMin &&
                                             person.age <= ageMax);

  // Sort the data by the selected field, always sort asc
  const sortedData = filteredData.sort((person, other) => {
    if (person[sortField] < other[sortField]) return -1;
    if (person[sortField] > other[sortField]) return 1;
    return 0;
  });

  // Map the data to combine the first and last names
  const mappedData = sortedData.map(({first, last, age, country}) => {
    return {
      name: `${first} ${last}`,
      age,
      country
    }
  });

  // Create a dictionary (object) of all countries in the filtered data and
  // their occurrences
  const countryDict = filteredData.reduce((acc, val) => {
    if (val.country in acc) {
      acc[val.country] += 1;
    } else {
      acc[val.country] = 1;
    }
    return acc;
  }, {});

  // Map the dictionary into an array of objects with a country and count
  const countryData = Object.keys(countryDict).map(country => {
    return {
      'country': country,
      'count': countryDict[country]
    }
  });

  // Sort the countries largest to smallest
  const sortedCountryData = countryData.sort((country, other) => {
    if (country.count > other.count) return -1;
    if (country.count < other.count) return 1;
    return 0;
  });

  renderTable(mappedData);
  renderGraph(countryData);
}

function renderTable(data) {
  const tableBody = document.querySelector('#people tbody');

  while (tableBody.rows.length) {
    tableBody.deleteRow(0);
  }

  data.forEach(person => {
    const row = tableBody.insertRow();

    let cell = row.insertCell(0);
    cell.append(person.name);

    cell = row.insertCell(1);
    cell.append(person.age);

    cell = row.insertCell(2);
    cell.append(person.country);
  });
}

function renderGraph(data) {
  const maxCount = Math.max(...data.map(country => country.count));
  const barColorStep = Math.round(255 / maxCount);

  const tableBody = document.querySelector('#countries tbody');
  console.log(barColorStep)
  while (tableBody.rows.length) {
    tableBody.deleteRow(0);
  }

  data.forEach(country => {
    const row = tableBody.insertRow();

    const cell = row.insertCell(0);
    const bar = document.createElement('div');
    bar.append(country.count);
    bar.style.display = 'inline-block';
    bar.style.marginRight = '1rem';
    bar.style.textAlign = 'center';
    bar.style.color = 'white';
    console.log(country.count * barColorStep);
    bar.style.backgroundColor = `rgb(0, 0, ${country.count * barColorStep})`;
    bar.style.height = '1.5rem';
    bar.style.width = `${country.count/2}rem`;
    cell.append(bar);
    cell.append(country.country);
  });
}
