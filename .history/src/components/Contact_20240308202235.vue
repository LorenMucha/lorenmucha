<script>
export default {
  data() {
    return {
      mailSend: true,
      emailActive: false,
      scheduleActive: false,
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
      const emailSubject = `Nachricht von lorenmucha.de || ${this.nameMsg} || ${this.emailMsg}`
      this.$mail.send({
        from: email,
        subject: emailSubject,
        text: this.messageMsg,
      })
      this.mailSend = true
      this.nameMsg = ''
      emailMsg: '',
      messageMsg: '',
    },
    toggleEmail() {
      this.scheduleActive = false
      this.emailActive = !this.emailActive
    },
    toggleSchedule() {
      this.emailActive = false
      this.scheduleActive = !this.scheduleActive
    },
  },
}
</script>

<template>
  <div id="contact" class="section">
    <div>
      <h1>{{ $t('header.contact') }}</h1>
      <div class="rounded-md shadow-sm mt-5 space-x-4 hidden lg:inline-flex" role="group">
        <button @click="toggleSchedule()">
          Termin vereinbaren
        </button>
        <button @click="toggleEmail()">
          E-Mail schreiben
        </button>
      </div>
      <div v-if="scheduleActive">
        <CalendlyInlineWidget v-bind="options" />
      </div>
      <div class="flex justify-center items-center mt-12" />
      <div v-if="mailSend">
        <Icon name="ooui:success" size="8rem" class="w-auto mx-auto h-auto block text-blue-600" />
        <div>Email versendet</div>
      </div>
    </div>
    <div v-if="emailActive" class="pt-2">
      <div class="flex justify-center items-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-screen">
          <div class="form-group mb-6">
            <input
              v-model="nameMsg" type="text" class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                " placeholder="Name"
            >
          </div>
          <div class="form-group mb-6">
            <input
              id="email" v-model="emailMsg" type="email" name="email" required class="
                  form-control
                  block
                  peer
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                " placeholder="Email address"
            >
            <p class="invisible peer-invalid:visible text-red-700 font-light">
              Please enter a valid email address
            </p>
          </div>
          <div class="form-group mb-6">
            <textarea
              v-model="messageMsg" class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                " rows="3" placeholder="Message"
            />
          </div>
          <button
            class="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700
                focus:shadow-lg
                focus:outline-none
                focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out
              "
            @click="sendEmail"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
