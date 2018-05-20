export default {
  data: () => ({
    user: {}
  }),
  methods: {
    onSubmit(...args) {
      this.$emit('submit', this.user)
    }
  }
}