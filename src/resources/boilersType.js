const boilersTypeRes =
{
    id: 4,
    title: 'Types of Boilers',
    route: 'boilersType',
    fields:
      [//Order matters
        //'Category',
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
          {id:'description',type: 'text', name:'Description', onError:'At least 6 characters.', pattern: /[0-9a-zA-Z]{6,}/i},
          {id:'skills',type: 'text', name:'Skills', onError:'At least 6 characters', pattern: /[0-9a-zA-Z]{6,}/i},
        ]
      },
      addForm:
      {
        title: 'Add new type of boiler' ,
        fields:
        [
          {id:'category',type: 'text', name:'Category', onError:'Must have at least 1 characters', pattern: /[a-zA-Z]{1,}/i},
          {id:'description',type: 'text', name:'Description', onError:'At least 6 characters.', pattern: /[0-9a-zA-Z]{6,}/i},
          {id:'skills',type: 'text', name:'Skills', onError:'At least 6 characters', pattern: /[0-9a-zA-Z]{6,}/i},
        ]
      }
}
export default boilersTypeRes;