'home',
`
    ${Service.Util.Nav}
    <br>
    <div class="container">
        <div class="row justify-content-md-center justify-content-lg-center">
            <div class="col-md-auto col-lg-auto col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header d-flex justify-content-center">
                        <img src="./asset/logo.PNG" width="128" height="128">
                    </div>
                    <div class="card-body">
                        <h1 class="card-title tls-font">gmr</h1>
                        <h5 class="card-subtitle text-muted tls-font mb-2">engine</h5>
                        <p class="card-text text-center">The JavaScript game engine solution.</p>
                        <div class="d-flex align-items-center">
                            <a href="#download" class="card-link text-decoration-none">Download</a>
                            <a href="#documentation" class="card-link btn btn-outline-primary text-decoration-none">Documentation</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`,
async (ui, props) => {

    i0.load('nav', [
        {text: 'Download', href: '#download'},
        {text: 'Documentation', href: '#documentation'}
    ], ui.nav)

}