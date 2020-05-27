const initialState = [
  {
    id: 1590072986901,
    title: 'Backlog',
    value: 'backlog',
    bgColor: '#9BAAB2',
    icon: 'idea.png',
    cards: [
      {
        id: 1590072999897,
        title: 'First title',
        text: 'Changes to bundle landing page',
        status: 'backlog',
        label: 'UI design',
        labelColor: 'green'
      },
      {
        id: 1590073269940,
        title: 'Second title',
        text: 'Update numbers on the homepage',
        status: 'backlog',
        label: '',
        labelColor: 'purple'
      },
      {
        id: 1590073295009,
        title: 'Third title',
        text: 'Updating welcome email',
        status: 'backlog',
        label: 'Research',
        labelColor: 'red'
      },
    ]
  },
  {
    id: 1590079557563,
    title: 'Selected',
    value: 'selected',
    bgColor: '#F9D648',
    icon: 'sign.png',
    cards: [
      {
        id: 1590079658291,
        title: 'Something else',
        text: 'Experiment with the value of marketing',
        status: 'selected',
        label: 'Research',
        labelColor: 'red'
      },
      {
        id: 1590079718640,
        title: 'One more task',
        text: '5 things you should be doing differently',
        status: 'selected',
        label: '',
        labelColor: ''
      }
    ]
  },
  {
    id: 1590082874706,
    title: 'Running',
    value: 'running',
    bgColor: '#CA4554',
    icon: 'shoe.png',
    cards: []
  },
  {
    id: 1590082957675,
    title: 'Evaluating',
    value: 'evaluating',
    bgColor: '#48A9F8',
    icon: 'information.png',
    cards: []
  },
  {
    id: 1590083508117,
    title: 'Live',
    value: 'live',
    bgColor: '#98CA5B',
    icon: 'correct.png',
    cards: []
  }
];

const columnReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default columnReducer;
