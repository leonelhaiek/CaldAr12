const boilersTypeRes =
{
    id: 1,
    title: 'Type of Boilers',
    route: 'boilersType',
    fields:
      [//Order matters
        'Category',
        'Description',
        'Skills',
        'Actions'
      ],
      editForm:
      {
        title: 'Edit type of boiler',
        fields:
        [
          {id:'Category',type: 'text', name:'Category', onError:'Must have at least 1 characters', pattern: /^[a-z;,]{1,}$/i},
          {id:'Description',type: 'text', name:'Description', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
          {id:'Skills',type: 'text', name:'Skills', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
        ]
      },
      addForm:
      {
        title: 'Add new type of boiler' ,
        fields:
        [
          {id:'Category',type: 'text', name:'Category', onError:'Must have at least 1 characters', pattern: /^[a-z;,]{1,}$/i},
          {id:'Description',type: 'text', name:'Description', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
          {id:'Skills',type: 'text', name:'Skills', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
        ]
      }
}
export default boilersTypeRes;