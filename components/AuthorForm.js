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

    this.form
      .addEventListener('keypress', e => {
        if (e.key === 'Enter') {
          const inputs = this.form.querySelectorAll('input');
          const select = this.form.querySelector('select');
          
          if (!this.isValid(inputs)) return

          console.log('Pressed Enter: ' +
            inputs[0].value + '|' +
            inputs[1].value + '|' +
            (select.value === 'Topic' ? '' : select.value));

          this.resetForm(inputs);
        }
      });

    this.form
      .addEventListener('change', e => {
        if (e.target.matches('select.search')
          && e.target.value !== 'Search by') {
          console.log('Filter by: ' + e.target.value);
        }
      });
  }

  isValid(inputs) {
    let isInvalid = false
  
    inputs.forEach(i => {
      if (i.value && i.checkValidity()) {
        i.classList.remove('is-invalid')
        i.classList.add('is-valid')
      } else {
        i.classList.remove('is-valid')
        i.classList.add('is-invalid')
        isInvalid = true
      }
    })
  
    return !isInvalid
  }  

  resetForm(inputs) {
    inputs.forEach(i => {
      i.value = '';
      i.classList.remove('is-valid');
    })
    inputs[0].focus();
  }
}
