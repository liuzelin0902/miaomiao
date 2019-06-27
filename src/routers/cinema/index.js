export default {
    path : '/cinema',
    component : () => import('@/views/Cinema'),
    children : [
        {
            path : 'cList',
            component : () => import('@/components/CList')
        },
        {
            path : '/cinema',
            redirect : '/cinema/cList'
        }
    ]
}