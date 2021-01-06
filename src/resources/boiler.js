const boilerRes =
{
  id: 2,
  title: 'Boilers',
  route: 'boilers',
  fields:
    [//Order matters
      'Description',
      'Type',
      'Maintenance Rate',
      'Hour Maintaince Cost',
      'Hour Eventual Cost',
      'Actions'
    ],
    editForm:
    {
      title: 'Edit Boiler',
      fields:
      [
        {id:'description',type: 'text', name:'Description', onError:'Must have at least 3 characters', pattern:/^[a-z]{3,}$/i},
        {id:'type',type: 'text', name:'Type' , onError:'Must have at least 1 digits', pattern: /^[0-9a-z]{1,}$/i},
        {id:'maintenance_rate',type: 'text', name:'Maintenance Rate', onError:'Must have at least 3 characters', pattern: /^[a-z;,]{1,}$/i},
        {id:'hour_maintenance_cost',type: 'number', name:'Hour Maintenance Cost', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
        {id:'hour_eventual_cost',type: 'number', name:'Daily Eventual Cost', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
      ]
    },
    addForm:
    {
      title: 'Add new Boiler' ,
      fields:
      [
        {id:'description',type: 'text', name:'Description', onError:'Must have at least 3 characters', pattern: /^[a-z]{3,}$/i},
        {id:'type',type: 'text', name:'Type' , onError:'Must have at least 1 digits', pattern: /^[0-9a-z]{1,}$/i},
        {id:'maintenance_rate',type: 'text', name:'Maintenance Rate', onError:'Must have at least 3 characters', pattern: /^[a-z]{1,}$/i},
        {id:'hour_maintenance_cost',type: 'number', name:'Hour Maintenance Cost', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
        {id:'hour_eventual_cost',type: 'number', name:'Daily Eventual Cost', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
      ]
    }
};

export default boilerRes;