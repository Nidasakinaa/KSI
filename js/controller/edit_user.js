export function isiData(results) {  
    console.log("API Results:", results); // Log hasil API
    const inputMapping = [
        { id: 'username', path: 'username' },
        { id: 'role', path: 'role' }
    ];
  
    inputMapping.forEach(({ id, path }) => {
        const inputElement = document.getElementById(id);
        const value = getNestedValue(results, path);
        if (inputElement) {
            if (id === 'role') {
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
  