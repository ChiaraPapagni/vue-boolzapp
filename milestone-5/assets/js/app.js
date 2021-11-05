//istanza vue
const app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: dayjs('10/01/2020 15:30:55').format('HH:mm'),
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: dayjs('10/01/2020 15:50:00').format('HH:mm'),
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: dayjs('10/01/2020 16:15:22').format('HH:mm'),
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: dayjs('03/20/2020 16:30:00').format('HH:mm'),
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: dayjs('03/20/2020 16:30:55').format('HH:mm'),
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: dayjs('03/20/2020 16:35:00').format('HH:mm'),
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: dayjs('03/28/2020 10:10:40').format('HH:mm'),
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: dayjs('03/28/2020 10:20:10').format('HH:mm'),
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: dayjs('03/28/2020 16:15:22').format('HH:mm'),
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: dayjs('10/01/2020 15:30:55').format('HH:mm'),
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: dayjs('10/01/2020 15:50:00').format('HH:mm'),
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        c: 0,
        newMessage: {
            date: new dayjs().format('HH:mm'),
            text: '',
            status: 'sent',
        },
        search: '',
        activeMessage: {
            index: false,
            show: false,
        },
    },
    methods: {
        changeChat(i) {
            this.c = i;
        },
        addMessage() {
            if (this.newMessage.text != '') {
                this.contacts[this.c].messages.push(this.newMessage);
            }

            this.answer();

            this.newMessage = {
                date: new dayjs().format('HH:mm'),
                text: '',
                status: 'sent',
            };
        },
        answer() {
            let t = this;
            this.timer = setTimeout(function () {
                t.newMessage = {
                    date: new dayjs().format('HH:mm'),
                    text: 'ok',
                    status: 'received',
                };
                if (t.newMessage.text != '') {
                    t.contacts[t.c].messages.push(t.newMessage);
                }
                t.newMessage = {
                    date: new dayjs().format('HH:mm'),
                    text: '',
                    status: 'sent',
                };
            }, 1000);
        },
        dropdownMenu(i) {
            this.activeMessage.index = i;
            this.activeMessage.show = !this.activeMessage.show;
        },
        deleteMessage(i) {
            this.contacts[this.c].messages.splice(i, 1);
            this.activeMessage.show = !this.activeMessage.show;
        }
    },
    computed: {
        searchChat() {
            return this.contacts.filter((user) => {
                return user.name.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    }
});
