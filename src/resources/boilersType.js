const boilersTypeRes =
{
    id: 4,
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
          {id:'category',type: 'text', name:'Category', onError:'Must have at least 1 characters', pattern: /^[a-z;,]{1,}$/i},
          {id:'description',type: 'text', name:'Description', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
          {id:'skills',type: 'text', name:'Skills', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
        ]
      },
      addForm:
      {
        title: 'Add new type of boiler' ,
        fields:
        [
          {id:'category',type: 'text', name:'Category', onError:'Must have at least 1 characters', pattern: /^[a-z;,]{1,}$/i},
          {id:'description',type: 'text', name:'Description', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
          {id:'skills',type: 'text', name:'Skills', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
        ]
      }
}
export default boilersTypeRes;