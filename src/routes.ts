interface RoutesProps {
    id: number;
    path: string;
    text: string;
}

const routes: Array<RoutesProps> = [
    {
        id: 1,
        path: '/',
        text: 'Home'
    },
    {
        id: 2,
        path: '/button',
        text: 'Button'
    }, 
    {
        id: 3,
        path: '/button-group',
        text: 'Button Group'    
    },
    {
        id: 4,
        path: '/image',
        text: 'Image'
    },
    {
        id: 5,
        path: '/icon',
        text: 'Icon'
    },
    {
        id: 6,
        path: '/chip',
        text: 'Chip'
    },
    {
        id: 7,
        path: '/badge',
        text: 'Badge'
    },
    {
        id: 8,
        path: '/list',
        text: 'List'
    },
    {
        id: 9,
        path: '/tooltip',
        text: 'Tooltip'
    }, 
    {
        id: 10,
        path: '/table',
        text: 'Table'
    },
    {
        id: 11,
        path: '/tabs',
        text: 'Tabs'
    },
    {
        id: 12,
        path: '/form',
        text: 'Form'
    },
    {
        id: 13,
        path: '/select',
        text: 'Select'
    },
    {
        id: 14,
        path: '/dropdown',
        text: 'Dropdown'
    }
];

export default routes;