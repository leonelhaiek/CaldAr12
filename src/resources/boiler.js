const boilerRes =
{
  id: 2,
  title: 'Boilers',
  route: 'boilers',
  fields:
    [//Order matters
      'Rol',
      'Email',
      'Full Name',
      'Phone',
      'Address',
      'Boilers',
      'Capabilities',
      'Hour Rate',
      'Daily Capacity',
      'Actions'
    ],
    editForm:
    {
      title: 'Edit Boiler',
      fields:
      [
        {id:'rol',type: 'text', name:'Rol', onError:'Must have at least 3 characters', pattern: /^[a-z]{3,}$/i},
        {id:'email',type: 'email', name:'Email', onError:'Invalid email', pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},
        {id:'fullname',type: 'text', name:'Full Name', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
        {id:'phone',type: 'number', name:'Phone Number', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
        {id:'address',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/i},
        {id:'boiler',type: 'text', name:'Boilers', onError:'Must have at least 1 characters', pattern: /^[a-z;,]{1,}$/i},
        {id:'capabilities',type: 'text', name:'Capabilities', onError:'Must have at least 3 characters', pattern: /^[a-z]{1,}$/i},
        {id:'hour_rate',type: 'number', name:'Hour Rate', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
        {id:'daily_capacity',type: 'number', name:'Daily Capacity', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
      ]
    },
    addForm:
    {
      title: 'Add new Boiler' ,
      fields:
      [
        {id:'rol',type: 'text', name:'Rol', onError:'Must have at least 3 characters', pattern: /^[a-z]{3,}$/i},
        {id:'email',type: 'email', name:'Email', onError:'Invalid email', pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},
        {id:'fullname',type: 'text', name:'Full Name', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
        {id:'phone',type: 'number', name:'Phone Number', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
        {id:'address',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/i},
        {id:'boiler',type: 'text', name:'Boilers', onError:'Must have at least 1 characters', pattern: /^[a-z;,]{1,}$/i},
        {id:'capabilities',type: 'text', name:'Capabilities', onError:'Must have at least 3 characters', pattern: /^[a-z]{1,}$/i},
        {id:'hour_rate',type: 'number', name:'Hour Rate', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
        {id:'daily_capacity',type: 'number', name:'Daily Capacity', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
      ]
    }
};

export default boilerRes;