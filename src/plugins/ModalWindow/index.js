export default {
  install (Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$modal = {
      EventBus: new Vue(),

      show (name, settings) {
        this.EventBus.$emit('show', { name, settings })
      },

      close () {
        this.EventBus.$emit('close')
      }
    }
  }
}
