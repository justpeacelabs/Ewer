
const AppState = {
  currentPage: 1
};

function gotoPage(page) {
  if (page > 1) {
    return page;
  }
  return 1;
}

export default function appReducer(state = { ...AppState }, {payload, type}) {
  switch (type) {
    case 'GOTO_PAGE':
      return {
        ...state,
        currentPage: gotoPage(payload)
      };
    default:
      return state;
  }
}