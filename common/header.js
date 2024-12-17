class headerComponent extends HTMLElement {
    connectedCallback() {
        this.innerHtml = `
            <div class="header">
                <button type="button">메뉴보기</button>
                <nav class="nav">
                    <ul class="gnb">
                        <li><a href="#">MENU1</a></li>
                        <li><a href="#">MENU2</a></li>
                        <li><a href="#">MENU3</a></li>
                        <li><a href="#">MENU4</a></li>
                    </ul>
                </nav>
            </div>
        `
    }
}   
customElements.define('app-header', headerComponent);