export default () => {
  const language = (navigator.language || 'en').toLocaleLowerCase()
  const cache = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang') as string) : undefined
  return cache || language.split('-')[0] || 'en'
}