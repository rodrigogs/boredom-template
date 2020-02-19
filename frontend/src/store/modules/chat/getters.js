export const isTyping = (state) => state.isTyping;

export const requirements = (state) => state.requirements;

export const cursor = (state) => state.cursor;

export const allMessages = (state) => [...state.messages];

export const sortedMessages = (state, getters) => {
  const messages = getters.allMessages;
  return messages.sort((a, b) => a.timestamp - b.timestamp);
};