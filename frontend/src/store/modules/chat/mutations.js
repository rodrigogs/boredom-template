import Vue from 'vue';

export const startedTyping = (state) => {
  Vue.set(state, 'isTyping', true);
};

export const messageReceived = (state, message) => {
  Vue.set(state, 'isTyping', false);
  state.messages.push(message);
};

export const cursorUpdated = (state, cursor) => {
  Vue.set(state, 'cursor', cursor);
};

export const requirementsUpdated = (state, requirements) => {
  Vue.set(state, 'requirements', requirements);
};

export const messageSent = (state, message) => {
  state.messages.push({ delivered: false, ...message });
};

export const messageDelivered = (state, messageId) => {
  const message = state.messages.find((msg) => msg.id === messageId);
  message.delivered = true;
};