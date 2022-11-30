<script>
export default {}
</script>

<template>
  <div id="cv" class="section">
    <div class="w-1/2">
      <h1>{{ $t('cv') }}</h1>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-6">
          <div class="time-card">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <img class="w-3 h-3 text-blue-600 dark:text-blue-400" src="~assets/icon/academy.svg">
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Freelancer als Full Stack Softwareentwickler
              <span
                class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
              >Aktuell</span>
            </h3>
            <h3 class="py-1">
              Vertical Life
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">07/2019 – Aktuell
            </time>
            <ul class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc">
              <li>Konzeption und Entwicklung von Frontend und Backend</li>
            </ul>
          </div>
        </li>
        <li class="mb-10 ml-6">
          <div class="time-card">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <img class="w-3 h-3 text-blue-600 dark:text-blue-400" src="~assets/icon/academy.svg">
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Full Stack Softwareentwickler
            </h3>
            <h3 class="py-1">
              DATEV eG
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">07/2019 – 06/2022
            </time>
            <ul class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc">
              <li>
                Konzeption und Entwicklung von API’s für den Bidirektionalen Datenaustausch zwischen On-Premises und
                externen Partnersystemen
              </li>
              <li>Entwicklung von Frontends mit Angular</li>
              <li>DevOps für Continuous Integration und Delivery</li>
              <li>Interner Konsultant in unterschiedlichen Projekten, mit Spring Reactive/MVC und Kotlin</li>
            </ul>
          </div>
        </li>
        <li class="mb-10 ml-6">
          <div class="time-card">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <img class="w-3 h-3 text-blue-600 dark:text-blue-400" src="~assets/icon/academy.svg">
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Wissenschaftlicher Mitarbeiter
            </h3>
            <h3 class="py-1">
              Leibniz Institut für ökologische Raumentwicklung
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10/2017 – 06/2019
            </time>
            <ul class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc">
              <li>
                Implementierung und Architektur des Web-GIS <a
                  href="https://monitor.ioer.de" target="_blank"
                  class="active-link"
                >Monitor der Siedlungs- und
                  Freiraumentwicklung</a>, mit einem React Frontend und
                Python/PHP Backend
              </li>
              <li>
                Entwicklung und Bereitstellung von Web-Processing-Services zur räumliche Berechnungen von
                Indikatorwerten
                als <a href="https://github.com/LorenMucha/Monitor-API" target="_blank" class="active-link">API</a> im
                Rahmen des
                <a target="_blank" href="http://sora.git.gesis.org/" class="active-link">SoRa-Forschungsprojektes</a>
              </li>
              <li>Betreuung von Masterarbeiten</li>
            </ul>
          </div>
        </li>
        <li class="mb-10 ml-6">
          <div class="time-card">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <img class="w-3 h-3 text-blue-600 dark:text-blue-400" src="~assets/icon/academy.svg">
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Wissenschaftliche Hilfskraft
            </h3>
            <h3 class="py-1">
              Leibniz Institut für ökologische Raumentwicklung
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">02/2015 – 09/2017
            </time>
            <ul class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc">
              <li>Design und Umsetzung einer Android App zur Interaktion mit Intikatorkarten</li>
              <li>Konzeption und Umsetzung einer Webanwendung, zur Verwaltung von OGC Diensten mit Flask und React</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

