export default defineNuxtPlugin((nuxtApp) => {
  const reveal = () => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    elements.forEach((el) => observer.observe(el))
  }

  if (document.readyState === 'loading')
    window.addEventListener('DOMContentLoaded', reveal, { once: true })
  else
    reveal()

  nuxtApp.hook('page:finish', () => {
    reveal()
  })
})
