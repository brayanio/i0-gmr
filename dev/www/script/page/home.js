'home',
`
    ${Service.Util.Nav}
    <br>
    <div class="container">
        <section class="card">
            <div class="card-header">
                <h1 class="card-title tls-font">gmr</h1>
                <h5 class="card-subtitle mb-0 text-muted tls-font">engine</h5>
            </div>
            <div class="card-body">
                <p class="card-text" style="max-width: 369px">The quickest game engine ever made by a single man in his basement.</p>
                <div class="d-flex align-items-center">
                    <a href="#download" class="card-link text-decoration-none">Download</a>
                    <a href="#documentation" class="card-link btn btn-outline-primary text-decoration-none">Documentation</a>
                </div>
            </div>
        </section>
    </div>
`,
async (ui, props) => {

    i0.load('nav', [
        {text: 'Download', href: '#download'},
        {text: 'Documentation', href: '#documentation'}
    ], ui.nav)

}