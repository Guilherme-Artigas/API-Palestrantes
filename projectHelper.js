const a = [
  {
    name: 'Henrique Albuquerque',
    age: 62,
    id: 1,
    talk: {
      watchedAt: '23/10/2021',
      rate: 5,
    },
  },
  {
    name: 'Heloísa Albuquerque',
    age: 67,
    id: 2,
    talk: {
      watchedAt: '23/10/2022',
      rate: 5,
    },
  },
  {
    name: 'Ricardo Xavier Filho',
    age: 33,
    id: 3,
    talk: {
      watchedAt: '23/10/2020',
      rate: 5,
    },
  },
  {
    name: 'Marcos Costa',
    age: 24,
    id: 4,
    talk: {
      watchedAt: '23/10/2020',
      rate: 5,
    },
  },
];
const id = 2;
const newPerson = {
  name: 'Guilherme Artigas',
  age: 30,
  talk: {
    watchedAt: '16/12/2022',
    rate: 1,
  },
};
const newList = a.map((talk) => { 
  if (talk.id === id) return { id: talk.id, ...newPerson };
  return talk;
});
console.log(newList);