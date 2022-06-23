const ConsumDataService = {
    getData: () => {
      const token = localStorage.getItem('consumDate') || null;
      return token;
    },
  
    setData: (data) => {
      const localData = localStorage.getItem('consumDate') || null;;
      let dataToSave = [];
      if (localData) {
        dataToSave = JSON.parse(localData);
      }
      dataToSave.push(data);
      localStorage.setItem('consumDate', JSON.stringify(dataToSave));
    },
  
  };
  
  export default ConsumDataService;