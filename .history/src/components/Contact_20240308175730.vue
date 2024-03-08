<script>
export default {
  data() {
    return {
      nameMsg: '',
      emailMsg: '',
      messageMsg: '',
      options: {
        url: 'https://calendly.com/lorenmucha/30-minute-meeting',
      },
    }
  },
  methods: {
    sendEmail() {
      this.$mail.send({
        from: 'John Doe',
        subject: 'Incredible',
        text: 'This is an incredible test message',
      })
    },
  },
}
</script>

<template>
  <div id="contact" class="section">
    <div>
      <h1>{{ $t('header.contact') }}</h1>
      <div>
        <CalendlyInlineWidget v-bind="options" />
      </div>

    </div>
  </div>
</template>
