import './css/reset.css'
import './css/baseline.css'
import './tokens/index.css'
import './components/components.js'
import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <div class="body">
        <nav class="navbar" aria-label="Primary Navigation">
            <div class="nav">
                <img src="logo.png" alt="">
                <div class="nav-section">
                    <h6>Section name</h6>
                    <ul>
                        <li style="width: 100%;"><div class="nav-menu menu-active">Menu</div></li>
                        <li><a href="#"><div class="nav-menu">Menu</div></a></li>
                        <li><a href="#"><div class="nav-menu">Menu</div></a></li>
                        <li><a href="#"><div class="nav-menu">Menu</div></a></li>
                    </ul>
                </div>
                <div class="nav-section">
                    <h6>Section name</h6>
                    <ul>
                        <li><a href="#"><div class="nav-menu">Menu</div></a></li>
                        <li><a href="#"><div class="nav-menu">Menu</div></a></li>
                        <li><a href="#"><div class="nav-menu">Menu</div></a></li>
                        <li><a href="#"><div class="nav-menu">Menu</div></a></li>
                        <li><a href="#"><div class="nav-menu">Menu</div></a></li>
                        <li><a href="#"><div class="nav-menu">Menu</div></a></li>
                        <li><a href="#"><div class="nav-menu">Menu</div></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    
        <div class="content">
            <div class="grid">

                <lui-icon-button
                    aria-label="Fechar">
                    <i class="icon-circle-close-regular"></i>
                </lui-icon-button>


                <lui-alert
                    variant="warning">
                    <i slot="icon" class="icon-exclamation-fill"></i>

                    <span slot="title">Title</span>
                    <span slot="description">
                        Se o parágrafo não está quebrando dentro da div, pode ser que o comportamento padrão de quebra de linha tenha sido alterado por meio de estilos CSS como white-space.
                    </span>

                    <lui-button slot="action-primary">Text</lui-button>
                    <lui-button slot="action-secondary">Text</lui-button>
                </lui-alert>

                <div class="col-d-4">
                    <label class="styled-checkbox checkbox-md">
                        <input type="checkbox">
                        <span></span>
                        Checkbox
                    </label>
                    <label class="styled-checkbox checkbox-md">
                        <input type="checkbox">
                        <span></span>
                        Checkbox
                    </label>
                    <label class="styled-checkbox checkbox-md">
                        <input type="checkbox">
                        <span></span>
                        Checkbox
                    </label>
                    <label class="styled-checkbox checkbox-md">
                        <input type="checkbox">
                        <span></span>
                        Checkbox
                    </label>
                </div>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li><a class="link" href="#">Page 1</a></li>
                        <li><a class="link" href="#">Page 2</a></li>
                        <li aria-current="page">Page 3</li>
                    </ol>
                </nav>
        
                <a class="link" href="#">Link</a>
        
                <div class="col-d-4">
                    <button class="action-caution btn-md btn-pressing">Text</button>
                    <button class="action-success btn-md">Text</button>
                    <button class="action-info btn-md">Text</button>
                    <button class="action-danger btn-md">Text</button>
                    <lui-button
                        variant="accent"
                        size="md">
                        <i class="icon-circle-check-regular"></i>
                        Primary
                    </lui-button>
                    <lui-button
                        variant="secondary"
                        size="md">
                        Secondary
                    </lui-button>
                    <button class="action-neutral-light btn-md">Text</button>
                    <button class="action-transparent btn-md btn-pressing">Text</button>
                    <button class="icon-button">
                        <i class="icon-exclamation-fill"></i>
                    </button>
                </div>
        
                <div class="col-d-1">
                    <div class="alert bg-txt-bw-caution" role="alert">
                        <div class="alert-icon">
                            <i class="icon-exclamation-fill" style="color: var(--lui-color-feedback-caution-content-icon-hard);"></i>
                        </div>
                        <div>
                            <div class="alert-content">
                                <p class="">Se o parágrafo não está quebrando dentro da div, pode ser que o comportamento padrão de quebra de linha tenha</p>
                                <p class="">
                                    Se o parágrafo não está quebrando dentro da div, pode ser que o comportamento padrão de quebra de linha tenha sido alterado por meio de estilos CSS como white-space.
                                </p>
                            </div>
                            <div class="alert-actions">
                                <button class="action-caution btn-md">Text</button>
                                <button class="action-transparent btn-md">Text</button>
                            </div>
                        </div>
                        <button class="icon-button">
                            <i class="icon-circle-close-regular"></i>
                        </button>
                    </div>
                    <div class="alert bg-txt-bw-danger" role="alert">
                        <div class="alert-icon">
                            <i class="icon-circle-danger-fill" style="color: var(--lui-color-feedback-danger-content-icon-hard);"></i>
                        </div>
                        <div>
                            <div class="alert-content">
                                <p class="">Se o parágrafo não está quebrando dentro da div</p>
                                <p class="">
                                    Se o parágrafo não está quebrando dentro da div sido alterado por meio de estilos CSS como white-space.
                                </p>
                            </div>
                            <div class="alert-actions">
                                <button class="action-danger btn-md">Text</button>
                                <button class="action-transparent btn-md">Text</button>
                            </div>
                        </div>
                        <button class="icon-button">
                            <i class="icon-circle-close-regular"></i>
                        </button>
                    </div>
                    <div class="alert bg-txt-bw-info" role="alert">
                        <div class="alert-icon">
                            <i class="icon-circle-info-fill" style="color: var(--lui-color-feedback-info-content-icon-hard);"></i>
                        </div>
                        <div>
                            <div class="alert-content">
                                <p class="">Se o parágrafo não está quebrando dentro da div, pode ser que o comportamento padrão de quebra de linha tenha</p>
                                <p class="">
                                    Se o parágrafo não está quebrando dentro da div, pode ser que o comportamento padrão de quebra de linha tenha sido alterado por meio de estilos CSS como white-space. Para garantir que o texto quebre ao atingir o final da div, você pode ajustar o CSS da seguinte maneira:
                                </p>
                            </div>
                            <div class="alert-actions">
                                <button class="action-info btn-md">Text</button>
                                <button class="action-transparent btn-md">Text</button>
                            </div>
                        </div>
                        <button class="icon-button">
                            <i class="icon-circle-close-regular"></i>
                        </button>
                    </div>
                    <div class="alert bg-txt-bw-success" role="alert">
                        <div class="alert-icon">
                            <i class="icon-circle-check-fill" style="color: var(--lui-color-feedback-success-content-icon-hard);"></i>
                        </div>
                        <div>
                            <div class="alert-content">
                                <p class="">Se o parágrafo não está quebrando dentro da div, pode ser que o comportamento padrão de quebra de linha tenha</p>
                                <p class="">
                                    Se o parágrafo não está quebrando dentro da div, pode ser que o comportamento padrão de quebra de linha tenha sido alterado por meio de estilos CSS como white-space. Para garantir que o texto quebre ao atingir o final da div, você pode ajustar o CSS da seguinte maneira:
                                </p>
                            </div>
                            <div class="alert-actions">
                                <button class="action-success btn-md">Text</button>
                                <button class="action-transparent btn-md">Text</button>
                            </div>
                        </div>
                        <button class="icon-button">
                            <i class="icon-circle-close-regular"></i>
                        </button>
                    </div>
                </div>
                
                <div class="tag-md tag-md bg-txt-bw-caution">Em andamento</div>
        
                <p class="display">Display</p>
                <h1 class="title">1 Title</h1>
                <h2 class="headline">2 Headline</h2>
                <h3 class="subtitle">3 Subtitle</h3>
                <h4 class="block-title">4 Block title</h4>
                <h5 class="subheadline">5 Subheadline</h5>
                <h6 class="section-tag">6 Section tag</h6>
                <p class="body-lg">Body large</p>
                <p>Body medium</p>
                <p class="body-sm">Body small</p>
        
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <select name="nome" id="" class="form-field-md">
                        <option value="a">aaaa</option>
                        <option value="a">aaaa</option>
                        <option value="a">aaaa</option>
                        <option value="a">aaaa</option>
                    </select>
                </div>
        
                <div class="flex flex-column gap-16">
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input type="text" class="form-field-md" name="" id="name" placeholder="Text">
                    </div>
                    <div class="flex flex-justify-end">
                        <button class="btn-accent btn-md">Text</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

setupCounter(document.querySelector('#counter'))