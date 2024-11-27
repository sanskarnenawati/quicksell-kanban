const VIEW_STATE_KEY = 'kanbanViewState';


export const saveViewState = (state) => {
  try {
    localStorage.setItem(VIEW_STATE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save view state:', error);
  }
};

export const loadViewState = () => {
  try {
    const savedState = localStorage.getItem(VIEW_STATE_KEY);
    return savedState ? JSON.parse(savedState) : { groupBy: 'status', sortBy: 'priority' };
  } catch (error) {
    console.error('Failed to load view state:', error);
    return { groupBy: 'status', sortBy: 'priority' };
  }
};
