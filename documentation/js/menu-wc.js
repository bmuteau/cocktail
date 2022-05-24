'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">cocktail documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' : 'data-target="#xs-components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' :
                                            'id="xs-components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' }>
                                            <li class="link">
                                                <a href="components/AheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' : 'data-target="#xs-components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' :
                                            'id="xs-components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' : 'data-target="#xs-components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' :
                                            'id="xs-components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailModule.html" data-type="entity-link" >CocktailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CocktailModule-9dace142a4e7f80e8bd460d0c23309955b063c4a1652ec2d4b74ad31126e513b3f3daa2fea1bb438ffc0d6c39ce2d0a3acaf8507856c90641c52205e6aba6af3"' : 'data-target="#xs-components-links-module-CocktailModule-9dace142a4e7f80e8bd460d0c23309955b063c4a1652ec2d4b74ad31126e513b3f3daa2fea1bb438ffc0d6c39ce2d0a3acaf8507856c90641c52205e6aba6af3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CocktailModule-9dace142a4e7f80e8bd460d0c23309955b063c4a1652ec2d4b74ad31126e513b3f3daa2fea1bb438ffc0d6c39ce2d0a3acaf8507856c90641c52205e6aba6af3"' :
                                            'id="xs-components-links-module-CocktailModule-9dace142a4e7f80e8bd460d0c23309955b063c4a1652ec2d4b74ad31126e513b3f3daa2fea1bb438ffc0d6c39ce2d0a3acaf8507856c90641c52205e6aba6af3"' }>
                                            <li class="link">
                                                <a href="components/CAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailRoutingModule.html" data-type="entity-link" >CocktailRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-1c1e800a9b5c1c896755aaac4dee6424f64e1f2fb15733b5df7cb41abbcf00f1228c6f1ab7c61dbfefa4bb3cb83a6c1eb7ecedf8cf18d7ab6c6ab644b1be211b"' : 'data-target="#xs-components-links-module-PublicModule-1c1e800a9b5c1c896755aaac4dee6424f64e1f2fb15733b5df7cb41abbcf00f1228c6f1ab7c61dbfefa4bb3cb83a6c1eb7ecedf8cf18d7ab6c6ab644b1be211b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-1c1e800a9b5c1c896755aaac4dee6424f64e1f2fb15733b5df7cb41abbcf00f1228c6f1ab7c61dbfefa4bb3cb83a6c1eb7ecedf8cf18d7ab6c6ab644b1be211b"' :
                                            'id="xs-components-links-module-PublicModule-1c1e800a9b5c1c896755aaac4dee6424f64e1f2fb15733b5df7cb41abbcf00f1228c6f1ab7c61dbfefa4bb3cb83a6c1eb7ecedf8cf18d7ab6c6ab644b1be211b"' }>
                                            <li class="link">
                                                <a href="components/CoktailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoktailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' : 'data-target="#xs-components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' :
                                            'id="xs-components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' }>
                                            <li class="link">
                                                <a href="components/UAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});