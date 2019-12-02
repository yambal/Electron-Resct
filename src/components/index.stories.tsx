import React from 'react';

export default { title: 'Button' };

export const withEmoji = () => (
  <button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
);