'download',
`
    ${Service.Util.Nav}
    <br>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">Download</h1>
            </div>
            <div class="card-body">
                <span class="text-muted">Coming soon...</span>
            </div>
        </div>
    </div>
`,
(ui, props) => {

    i0.load('nav', [
        {text: 'Documentation', href: '#documentation'}
    ], ui.nav)

    i0.load('code', 'npm i -g i0dev', ui.dev)
    i0.load('code', 'i0 project project-name', ui.dev2)
    i0.load('code', 'i0 build', ui.dev3)
    i0.load('code', 'i0 install', ui.dev4)
    i0.load('code', 'i0 refresh', ui.dev5)

}