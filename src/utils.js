export const getTimeElapsed = (time) => {
    const timeElapsed = new Date(time * 1000).toISOString().substr(11, 8);
    return timeElapsed;
  };
  