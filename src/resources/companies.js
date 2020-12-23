const companiesRes =
{
  id: 3,
  title: 'Companies',
  route: 'companies',
  fields:
    [//Order matters
      'Address',
      'Boilers ID',
      'Full Name',
      'Phone',
      'Actions'
    ],
    editForm:
    {
      title: 'Edit company',
      fields:
      [
        {id:'address',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^[#.0-9a-zA-Z\s,-]+$/i},
        {id:'boilersId',type: 'array', name:'Boilers ID', onError:'Must have at least 1 boiler', pattern:  /^[0-9]+([0-9,])+[0-9]+$/},
        {id:'fullname',type: 'text', name:'Full Name', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
        {id:'phone',type: 'number', name:'Phone Number', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
        
      ]
    },
    addForm:
    {
      title: 'Add new company' ,
      fields:
      [
        {id:'address',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^[#.0-9a-zA-Z\s,-]+$/i},
        {id:'boilersId',type: 'array', name:'Boilers ID', onError:'Must have at least 1 boiler', pattern:  /^[0-9]+([0-9,])+[0-9]+$/},
        {id:'fullname',type: 'text', name:'Full Name', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
        {id:'phone',type: 'number', name:'Phone Number', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
      ]
    }
};

export default companiesRes;