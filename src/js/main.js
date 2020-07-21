import './lib/lib';

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore exercitationem alias illo ab officiis accusamus quod quia praesentium rerum recusandae? Harum repellendus quidem cumque nobis, expedita iste? Sequi, nam ipsam.'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success', 'mr-10'],
                false,
                () => {
                    alert('Done!');
                }
            ],
            [
                'Another button',
                ['btn-warning'],
                true,
                () => {
                    alert('Hello');
                }
            ]
        ]
    }
}));