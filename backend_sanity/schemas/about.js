export default {
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },        
        {
            name:'description',
            title:'Description',
            type:'array',
            of: [{type: 'block'}]
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'index',
            title:'Index',
            type:'number'
        },
        {
            name:'isActive',
            title:'IsActive',
            type:'boolean'
        },
        {
            name:'isMain',
            title:'IsMain',
            type:'boolean'
        },
    ]
}