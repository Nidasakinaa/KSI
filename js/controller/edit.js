export function isiData(results) {  
  console.log("API Results:", results); // Log hasil API
  const inputMapping = [
      { id: 'name', path: 'name' },
      { id: 'description', path: 'description' },
      { id: 'ingredients', path: 'ingredients' },
      { id: 'calories', path: 'calories' },
      { id: 'category', path: 'category' },
      { id: 'image', path: 'image' }
  ];

  inputMapping.forEach(({ id, path }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path);
      if (inputElement) {
          if (id === 'category') {
              const options = inputElement.options;
              for (let i = 0; i < options.length; i++) {
                  if (options[i].value === value) {
                      inputElement.selectedIndex = i;
                      break;
                  }
              }
          } else {
              inputElement.value = value || '';
          }
      }
  });

  console.log("Form diisi dengan data:", results);
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
}
