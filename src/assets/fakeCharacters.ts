const fakeCharacters = [
  {
    id: '1',
    name: 'Adam Warlock',
    description:
      'A genetically engineered being with superhuman abilities and a connection to the Soul Gem.',
    path: 'https://s3-alpha-sig.figma.com/img/66f3/401f/6380e1c330e32763ea5a102f6b475c49?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV12rKehczErR7nK0zl6uO-6A67GSp-Pjc1AK9XZ5yLtqEaNRKJ80CWcf0XQ3Cxj~I~cdvnt43uY0mAg8qbmmCGaziynJ8YbFZJSrkrrtz9PYoSWBKpeOy7Ralh2FnT3lBIh3aSMaxkzbAcAu4AECpe8svjI3OEB1A1CHD6wYATDXS0C9NVk--YSRcdjORSxUKmdVCWNIaPPFJuXMpj3iEMALgGsFhGjdV5NKD443VYd3XlN~v5jwwAwagJuXGX9eEv65kri0MxVz9E9DUUCniNM1JZFZfwipYA4fdZyezfWrgC2z6pC6Wds9NbpqJkcsUswycQqZl6w99pKjolDbw__',
    favourite: false,
    comics: [
      {
        id: '1-1',
        title: 'Infinity Gauntlet (1991) #1',
        date: '1991',
        path: 'https://i.ibb.co/N29MKBPM/aberration.png',
      },
      {
        id: '1-2',
        title: 'Infinity Gauntlet (1991) #2',
        date: '1991',
        path: 'https://i.ibb.co/RmScV7Z/aberration-1.webp',
      },
    ],
  },
  {
    id: '2',
    name: 'Captain Marvel',
    description:
      'A cosmic-powered superhero with incredible strength and energy manipulation abilities.',
    path: 'https://s3-alpha-sig.figma.com/img/66f3/401f/6380e1c330e32763ea5a102f6b475c49?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV12rKehczErR7nK0zl6uO-6A67GSp-Pjc1AK9XZ5yLtqEaNRKJ80CWcf0XQ3Cxj~I~cdvnt43uY0mAg8qbmmCGaziynJ8YbFZJSrkrrtz9PYoSWBKpeOy7Ralh2FnT3lBIh3aSMaxkzbAcAu4AECpe8svjI3OEB1A1CHD6wYATDXS0C9NVk--YSRcdjORSxUKmdVCWNIaPPFJuXMpj3iEMALgGsFhGjdV5NKD443VYd3XlN~v5jwwAwagJuXGX9eEv65kri0MxVz9E9DUUCniNM1JZFZfwipYA4fdZyezfWrgC2z6pC6Wds9NbpqJkcsUswycQqZl6w99pKjolDbw__',
    favourite: false,
    comics: [
      {
        id: '2-1',
        title: 'Captain Marvel (2019) #1',
        date: '2019',
        path: 'https://i.ibb.co/sv9SxGkX/aberration-2.webp',
      },
      {
        id: '2-2',
        title: 'Avengers (2018) #5',
        date: '2018',
        path: 'https://i.ibb.co/8DGbQs87/aberration-3.webp',
      },
    ],
  },
  {
    id: '3',
    name: 'Doctor Strange',
    description:
      'The Sorcerer Supreme, master of the mystic arts and protector of Earth from magical threats.',
    path: 'https://s3-alpha-sig.figma.com/img/66f3/401f/6380e1c330e32763ea5a102f6b475c49?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV12rKehczErR7nK0zl6uO-6A67GSp-Pjc1AK9XZ5yLtqEaNRKJ80CWcf0XQ3Cxj~I~cdvnt43uY0mAg8qbmmCGaziynJ8YbFZJSrkrrtz9PYoSWBKpeOy7Ralh2FnT3lBIh3aSMaxkzbAcAu4AECpe8svjI3OEB1A1CHD6wYATDXS0C9NVk--YSRcdjORSxUKmdVCWNIaPPFJuXMpj3iEMALgGsFhGjdV5NKD443VYd3XlN~v5jwwAwagJuXGX9eEv65kri0MxVz9E9DUUCniNM1JZFZfwipYA4fdZyezfWrgC2z6pC6Wds9NbpqJkcsUswycQqZl6w99pKjolDbw__',
    favourite: false,
    comics: [
      {
        id: '3-1',
        title: 'Doctor Strange (2015) #1',
        date: '2015',
        path: 'https://i.ibb.co/ycRJ8Gs4/aberration-4.jpg',
      },
      {
        id: '3-2',
        title: 'Infinity War (1992) #3',
        date: '1992',
        path: 'https://i.ibb.co/CFDg2ht/aberration-5.webp',
      },
    ],
  },
  {
    id: '4',
    name: 'Scarlet Witch',
    description:
      'A powerful mutant with the ability to manipulate reality and cast hex spells.',
    path: 'https://s3-alpha-sig.figma.com/img/66f3/401f/6380e1c330e32763ea5a102f6b475c49?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV12rKehczErR7nK0zl6uO-6A67GSp-Pjc1AK9XZ5yLtqEaNRKJ80CWcf0XQ3Cxj~I~cdvnt43uY0mAg8qbmmCGaziynJ8YbFZJSrkrrtz9PYoSWBKpeOy7Ralh2FnT3lBIh3aSMaxkzbAcAu4AECpe8svjI3OEB1A1CHD6wYATDXS0C9NVk--YSRcdjORSxUKmdVCWNIaPPFJuXMpj3iEMALgGsFhGjdV5NKD443VYd3XlN~v5jwwAwagJuXGX9eEv65kri0MxVz9E9DUUCniNM1JZFZfwipYA4fdZyezfWrgC2z6pC6Wds9NbpqJkcsUswycQqZl6w99pKjolDbw__',
    favourite: false,
    comics: [
      {
        id: '4-1',
        title: 'House of M (2005) #1',
        date: '2005',
        path: 'https://i.ibb.co/N29MKBPM/aberration.png',
      },
      {
        id: '4-2',
        title: 'Avengers Disassembled (2004) #1',
        date: '2004',
        path: 'https://i.ibb.co/RmScV7Z/aberration-1.webp',
      },
    ],
  },
  {
    id: '5',
    name: 'Black Panther',
    description:
      'The King of Wakanda, a skilled warrior with enhanced abilities and advanced technology.',
    path: 'https://s3-alpha-sig.figma.com/img/66f3/401f/6380e1c330e32763ea5a102f6b475c49?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV12rKehczErR7nK0zl6uO-6A67GSp-Pjc1AK9XZ5yLtqEaNRKJ80CWcf0XQ3Cxj~I~cdvnt43uY0mAg8qbmmCGaziynJ8YbFZJSrkrrtz9PYoSWBKpeOy7Ralh2FnT3lBIh3aSMaxkzbAcAu4AECpe8svjI3OEB1A1CHD6wYATDXS0C9NVk--YSRcdjORSxUKmdVCWNIaPPFJuXMpj3iEMALgGsFhGjdV5NKD443VYd3XlN~v5jwwAwagJuXGX9eEv65kri0MxVz9E9DUUCniNM1JZFZfwipYA4fdZyezfWrgC2z6pC6Wds9NbpqJkcsUswycQqZl6w99pKjolDbw__',
    favourite: false,
    comics: [
      {
        id: '5-1',
        title: 'Black Panther (2016) #1',
        date: '2016',
        path: 'https://i.ibb.co/sv9SxGkX/aberration-2.webp',
      },
      {
        id: '5-2',
        title: 'Avengers (2018) #7',
        date: '2018',
        path: 'https://i.ibb.co/8DGbQs87/aberration-3.webp',
      },
    ],
  },
];

export default fakeCharacters;
