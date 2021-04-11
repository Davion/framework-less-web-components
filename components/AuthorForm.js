import ObservableElement from './ObservableElement.js'

export default class AuthorForm extends ObservableElement {
  connectedCallback() {
    this.template = document
      .getElementById('author-form');
    const content = this.template
      .content
      .firstElementChild
      .cloneNode(true);

    this.appendChild(content);

    this.form = this.querySelector('form');
    this.form.querySelector('input').focus();
  }

  resetForm(inputs) {
    inputs.forEach(i => {
      i.value = '';
      i.classList.remove('is-valid');
    })
    inputs[0].focus();
  }

  this.form
  .addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      const inputs = this.form.querySelectorAll('input')
      const select = this.form.querySelector('select')

      console.log('Pressed Enter: ' +
        inputs[0].value + '|' +
        inputs[1].value + '|' +
        (select.value === 'Topic' ? '' : select.value))

      this.resetForm(inputs)
    }
  })

  this.form
  .addEventListener('change', e => {
    if (e.target.matches('select.search')
      && e.target.value !== 'Search by') {
      console.log('Filter by: ' + e.target.value)
    }
  })
}
