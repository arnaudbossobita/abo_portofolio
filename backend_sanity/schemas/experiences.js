export default {
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'start',
            title:'Start',
            type:'date'
        },
        {
            name:'end',
            title:'End',
            type:'date'
        },        
        {
            name:'isCurrent',
            title:'IsCurrent',
            type:'boolean'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}]
        },
        {
            name:'isActive',
            title:'IsActive',
            type:'boolean'
        },
    ]
}