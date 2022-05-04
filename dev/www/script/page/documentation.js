'documentation',
`
    ${Service.Util.Nav}
    <br>
    <div class="container">
        <div class="row">
            <div class="col-md-5 col-lg-3">
                <div class="card doc-nav overflow-auto" i0="sideNav">
                    <div class="card-header">
                        <h1 class="card-title">API</h1>
                    </div>
                    <div class="card-body">
                        <div class="accordion api-accordion" id="accordion">
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#gmr" aria-expanded="false" aria-controls="gmr">
                                        gmr
                                    </button>
                                </div>
                                <div class="accordion-collapse collapse" id="gmr" i0="accordian" data-bs-parent="#accordion">
                                    <div class="d-flex flex-column text-start" i0="list0">
                                        <div><button class="btn btn-link text-decoration-none" to="gmr.setup">gmr.setup</button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#gmrInstance" aria-expanded="false" aria-controls="gmrInstance">
                                        gmrInstance
                                    </button>
                                </div>
                                <div class="accordion-collapse collapse" id="gmrInstance" i0="accordian" data-bs-parent="#accordion">
                                    <div class="d-flex flex-column text-start" i0="list1">
                                        <div><button class="btn btn-link text-decoration-none" to="gmrInstance.scene">gmrInstance.scene</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrInstance.sprite">gmrInstance.sprite</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrInstance.prefab">gmrInstance.prefab</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrInstance.behavior">gmrInstance.behavior</button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#gmrScene" aria-expanded="false" aria-controls="gmrScene">
                                        gmrScene
                                    </button>
                                </div>
                                <div class="accordion-collapse collapse" id="gmrScene" i0="accordian" data-bs-parent="#accordion">
                                    <div class="d-flex flex-column text-start" i0="list2">
                                        <div><button class="btn btn-link text-decoration-none" to="gmrScene.addSprite">gmrScene.addSprite</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrScene.removeSprite">gmrScene.removeSprite</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrScene.onPreRender">gmrScene.onPreRender</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrScene.onPostRender">gmrScene.onPostRender</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrScene.addPrefab">gmrScene.addPrefab</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrScene.removePrefab">gmrScene.removePrefab</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrScene.spawn">gmrScene.spawn</button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#gmrSprite" aria-expanded="false" aria-controls="gmrSprite">
                                        gmrSprite
                                    </button>
                                </div>
                                <div class="accordion-collapse collapse" id="gmrSprite" i0="accordian" data-bs-parent="#accordion">
                                    <div class="d-flex flex-column text-start" i0="list3">
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.setAnimation">gmrSprite.setAnimation</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.move">gmrSprite.move</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.flip">gmrSprite.flip</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.getBounds">gmrSprite.getBounds</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.checkBounds">gmrSprite.checkBounds</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.setOutline">gmrSprite.setOutline</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.setBounds">gmrSprite.setBounds</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.trackUI">gmrSprite.trackUI</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.updateUI">gmrSprite.updateUI</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.getUI">gmrSprite.getUI</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.clearUI">gmrSprite.clearUI</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.isTouching">gmrSprite.isTouching</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.setParent">gmrSprite.setParent</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.destory">gmrSprite.destory</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.addSprite">gmrSprite.addSprite</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.removeSprite">gmrSprite.removeSprite</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.setOffset">gmrSprite.setOffset</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.getOffset">gmrSprite.getOffset</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="gmrSprite.getParent">gmrSprite.getParent</button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#gmrPrefab" aria-expanded="false" aria-controls="gmrPrefab">
                                        gmrPrefab
                                    </button>
                                </div>
                                <div class="accordion-collapse collapse" id="gmrPrefab" i0="accordian" data-bs-parent="#accordion">
                                    <div class="d-flex flex-column text-start" i0="list4">
                                        <div><button class="btn btn-link text-decoration-none" to="gmrPrefab.sprite">gmrPrefab.sprite</button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#gmrBehavior" aria-expanded="false" aria-controls="gmrBehavior">
                                        gmrBehavior
                                    </button>
                                </div>
                                <div class="accordion-collapse collapse" id="gmrBehavior" i0="accordian" data-bs-parent="#accordion">
                                    <div class="d-flex flex-column text-start" i0="list5">
                                        <div><button class="btn btn-link text-decoration-none" to="gmrBehavior.attach">gmrBehavior.attach</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
            </div>
            <div class="col-md-7 col-lg-9">
                <div i0="cards" class="d-grid gap-3"></div>
            </div>
            <br>
        </div>
        <br>
    </div>
`,
(ui, props) => {

    i0.load('nav', [
        {text: 'Download', href: '#download'}
    ], ui.nav)

    ;[
        ...ui.list0.childNodes,
        ...ui.list1.childNodes,
        ...ui.list2.childNodes,
        ...ui.list3.childNodes,
        ...ui.list4.childNodes,
        ...ui.list5.childNodes,
    ].forEach(el => {
        if(el && el.tagName && el.tagName !== 'HR'){
            const sectionId = el.children[0].getAttribute('to')
            el.onclick = () => {
                ui.accordian.classList.remove('show')
                setTimeout(
                    () => Service.Util.ScrollTo( ui.cards.querySelector(`[scroll="${sectionId}"]`) ),
                    0
                )
            }
        }
    })

    ui.sideNav.style['max-height'] = Math.floor(innerHeight * .86) + 'px'

    setTimeout( () =>
        document.querySelector('app').onscroll = () => {
            if(innerWidth > 800){
                ui.sideNav.style.top = document.querySelector('app').scrollTop + 'px'
            }
        },
        0
    )

    Service.Import.Docs().forEach(card => ui.cards.appendChild(i0.load('api-card', card)))

}