import ObservableElement from './ObservableElement.js'

export default class AuthorGrid extends ObservableElement {
  connectedCallback() {
    this.template = document
      .getElementById('author-grid');
    this.rowTemplate = document
      .getElementById('author-row');
    const content = this.template
      .content
      .firstElementChild
      .cloneNode(true);
    this.appendChild(content);

    this.table = this.querySelector('table');
    this.updateContent();
  }

  updateContent() {
    this.table.style.display =
      (this.authors?.length ?? 0) === 0
        ? 'none'
        : '';

    this.table
      .querySelectorAll('tbody tr')
      .forEach(r => r.remove());
  }
}
