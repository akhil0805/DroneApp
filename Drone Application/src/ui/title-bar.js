import {BaseElement} from './base-element.js';

export class TitleBar extends BaseElement{
    constructor(titleBar){
        super();
        this.titleBar = titleBar;
        this.links = [];
    }

    addLink(title,href){
      this.links.push(
        {title,
        href});
    }

    getElementString(){
      let links = '';
      for(let link of this.links){
        links += `<a class="mdl-navigation__link" style="cursor: pointer;">${link.title}</a>\n`;
      }
        return `<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">${this.titleBar}</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              ${links}
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">${this.titleBar}</span>
          <nav class="mdl-navigation">
            ${links}
          </nav>
        </div>
        <main class="mdl-layout__content">
          <div class="page-content"><!-- Your content goes here --></div>
        </main>
      </div>
      `
    }
}