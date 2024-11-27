export const saveViewState = (viewState) => {
    localStorage.setItem('kanbanViewState', JSON.stringify(viewState));
  };
  
  export const loadViewState = () => {
    const savedState = localStorage.getItem('kanbanViewState');
    return savedState ? JSON.parse(savedState) : { groupBy: 'status', sortBy: 'priority' };
  };
  