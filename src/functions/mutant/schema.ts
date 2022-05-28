export default {
  type: "object",
  properties: {
    dna: { type: 'array' }
  },
  required: ['dna']
} as const;
