export function gotoPage(page) {
  return {
    type: 'GOTO_PAGE',
    payload: page
  };
}