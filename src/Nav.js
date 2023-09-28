function Nav() {
    return (
        <>
            <div id="nav" className="nav-container d-flex">
                <div className="nav-content d-flex">
                    {/* Logo Start */}
                    <div className="logo position-relative">
                        <a href="Dashboards.Default.html">
                            {/* Logo can be added directly */}
                            {/* <img src="img/logo/logo-white.svg" alt="logo" /> */}
                            {/* Or added via css to provide different ones for different color themes */}
                            <div className="img"></div>
                        </a>
                    </div>
                    {/* Logo End */}

                    {/* Language Switch Start */}
                    <div className="language-switch-container">
                        <button className="btn btn-empty language-button dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</button>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">DE</a>
                            <a href="#" className="dropdown-item active">EN</a>
                            <a href="#" className="dropdown-item">ES</a>
                        </div>
                    </div>
                    {/* Language Switch End */}

                    {/* User Menu Start */}
                    <div className="user-container d-flex">
                        <a href="#" className="d-flex user position-relative" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="profile" alt="profile" src="img/profile/profile-9.webp" />
                            <div className="name">Lisa Jackson</div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end user-menu wide">
                            <div className="row mb-3 ms-0 me-0">
                                <div className="col-12 ps-1 mb-2">
                                    <div className="text-extra-small text-primary">ACCOUNT</div>
                                </div>
                                <div className="col-6 ps-1 pe-1">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">User Info</a>
                                        </li>
                                        <li>
                                            <a href="#">Preferences</a>
                                        </li>
                                        <li>
                                            <a href="#">Calendar</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 pe-1 ps-1">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Security</a>
                                        </li>
                                        <li>
                                            <a href="#">Billing</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mb-1 ms-0 me-0">
                                <div className="col-12 p-1 mb-2 pt-2">
                                    <div className="text-extra-small text-primary">APPLICATION</div>
                                </div>
                                <div className="col-6 ps-1 pe-1">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Themes</a>
                                        </li>
                                        <li>
                                            <a href="#">Language</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 pe-1 ps-1">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Devices</a>
                                        </li>
                                        <li>
                                            <a href="#">Storage</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mb-1 ms-0 me-0">
                                <div className="col-12 p-1 mb-3 pt-3">
                                    <div className="separator-light"></div>
                                </div>
                                <div className="col-6 ps-1 pe-1">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">
                                                <i data-acorn-icon="help" className="me-2" data-acorn-size="17"></i>
                                                <span className="align-middle">Help</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i data-acorn-icon="file-text" className="me-2" data-acorn-size="17"></i>
                                                <span className="align-middle">Docs</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 pe-1 ps-1">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">
                                                <i data-acorn-icon="gear" className="me-2" data-acorn-size="17"></i>
                                                <span className="align-middle">Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i data-acorn-icon="logout" className="me-2" data-acorn-size="17"></i>
                                                <span className="align-middle">Logout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* User Menu End */}

                    {/* Icons Menu Start */}
                    <ul className="list-unstyled list-inline text-center menu-icons">
                        <li className="list-inline-item">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#searchPagesModal">
                                <i data-acorn-icon="search" data-acorn-size="18"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" id="pinButton" className="pin-button">
                                <i data-acorn-icon="lock-on" className="unpin" data-acorn-size="18"></i>
                                <i data-acorn-icon="lock-off" className="pin" data-acorn-size="18"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" id="colorButton">
                                <i data-acorn-icon="light-on" className="light" data-acorn-size="18"></i>
                                <i data-acorn-icon="light-off" className="dark" data-acorn-size="18"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" data-bs-toggle="dropdown" data-bs-target="#notifications" aria-haspopup="true" aria-expanded="false" className="notification-button">
                                <div className="position-relative d-inline-flex">
                                    <i data-acorn-icon="bell" data-acorn-size="18"></i>
                                    <span className="position-absolute notification-dot rounded-xl"></span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end wide notification-dropdown scroll-out" id="notifications">
                                <div className="scroll">
                                    <ul className="list-unstyled border-last-none">
                                        <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                                            <img src="img/profile/profile-1.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                                            <div className="align-self-center">
                                                <a href="#">Joisse Kaycee just sent a new comment!</a>
                                            </div>
                                        </li>
                                        <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                                            <img src="img/profile/profile-2.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                                            <div className="align-self-center">
                                                <a href="#">New order received! It is total $147,20.</a>
                                            </div>
                                        </li>
                                        <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                                            <img src="img/profile/profile-3.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                                            <div className="align-self-center">
                                                <a href="#">3 items just added to wish list by a user!</a>
                                            </div>
                                        </li>
                                        <li className="pb-3 pb-3 border-bottom border-separator-light d-flex">
                                            <img src="img/profile/profile-6.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                                            <div className="align-self-center">
                                                <a href="#">Kirby Peters just sent a new message!</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* Icons Menu End */}

                    {/* Menu Start */}
                    <div className="menu-container flex-grow-1">
                        <ul id="menu" className="menu">
                            <li>
                                <a href="#dashboards" data-href="Dashboards.html">
                                    <i data-acorn-icon="home" className="icon" data-acorn-size="18"></i>
                                    <span className="label">Dashboards</span>
                                </a>
                                <ul id="dashboards">
                                    <li>
                                        <a href="Dashboards.Default.html">
                                            <span className="label">Default</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Dashboards.Visual.html">
                                            <span className="label">Visual</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Dashboards.Analytic.html">
                                            <span className="label">Analytic</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#apps" data-href="Apps.html">
                                    <i data-acorn-icon="screen" className="icon" data-acorn-size="18"></i>
                                    <span className="label">Apps</span>
                                </a>
                                <ul id="apps">
                                    <li>
                                        <a href="Apps.Calendar.html">
                                            <span className="label">Calendar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Apps.Chat.html">
                                            <span className="label">Chat</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Apps.Contacts.html">
                                            <span className="label">Contacts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Apps.Mailbox.html">
                                            <span className="label">Mailbox</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Apps.Tasks.html">
                                            <span className="label">Tasks</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#pages" data-href="Pages.html">
                                    <i data-acorn-icon="notebook-1" className="icon" data-acorn-size="18"></i>
                                    <span className="label">Pages</span>
                                </a>
                                <ul id="pages">
                                    <li>
                                        <a href="#authentication" data-href="Pages.Authentication.html">
                                            <span className="label">Authentication</span>
                                        </a>
                                        <ul id="authentication">
                                            <li>
                                                <a href="Pages.Authentication.Login.html">
                                                    <span className="label">Login</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Authentication.Register.html">
                                                    <span className="label">Register</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Authentication.ForgotPassword.html">
                                                    <span className="label">Forgot Password</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Authentication.ResetPassword.html">
                                                    <span className="label">Reset Password</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#blog" data-href="Pages.Blog.html">
                                            <span className="label">Blog</span>
                                        </a>
                                        <ul id="blog">
                                            <li>
                                                <a href="Pages.Blog.Home.html">
                                                    <span className="label">Home</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Blog.Grid.html">
                                                    <span className="label">Grid</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Blog.List.html">
                                                    <span className="label">List</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Blog.Detail.html">
                                                    <span className="label">Detail</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#miscellaneous" data-href="Pages.Miscellaneous.html">
                                            <span className="label">Miscellaneous</span>
                                        </a>
                                        <ul id="miscellaneous">
                                            <li>
                                                <a href="Pages.Miscellaneous.Faq.html">
                                                    <span className="label">Faq</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Miscellaneous.KnowledgeBase.html">
                                                    <span className="label">Knowledge Base</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Miscellaneous.Error.html">
                                                    <span className="label">Error</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Miscellaneous.ComingSoon.html">
                                                    <span className="label">Coming Soon</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Miscellaneous.Pricing.html">
                                                    <span className="label">Pricing</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Miscellaneous.Search.html">
                                                    <span className="label">Search</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Miscellaneous.Mailing.html">
                                                    <span className="label">Mailing</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Miscellaneous.Empty.html">
                                                    <span className="label">Empty</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#portfolio" data-href="Pages.Portfolio.html">
                                            <span className="label">Portfolio</span>
                                        </a>
                                        <ul id="portfolio">
                                            <li>
                                                <a href="Pages.Portfolio.Home.html">
                                                    <span className="label">Home</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Portfolio.Detail.html">
                                                    <span className="label">Detail</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#profile" data-href="Pages.Profile.html">
                                            <span className="label">Profile</span>
                                        </a>
                                        <ul id="profile">
                                            <li>
                                                <a href="Pages.Profile.Standard.html">
                                                    <span className="label">Standard</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Pages.Profile.Settings.html">
                                                    <span className="label">Settings</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#blocks" data-href="Blocks.html">
                                    <i data-acorn-icon="grid-5" className="icon" data-acorn-size="18"></i>
                                    <span className="label">Blocks</span>
                                </a>
                                <ul id="blocks">
                                    <li>
                                        <a href="Blocks.Cta.html">
                                            <span className="label">Cta</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Blocks.Details.html">
                                            <span className="label">Details</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Blocks.Gallery.html">
                                            <span className="label">Gallery</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Blocks.Images.html">
                                            <span className="label">Images</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Blocks.List.html">
                                            <span className="label">List</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Blocks.Stats.html">
                                            <span className="label">Stats</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Blocks.Steps.html">
                                            <span className="label">Steps</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Blocks.TabularData.html">
                                            <span className="label">Tabular Data</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Blocks.Thumbnails.html">
                                            <span className="label">Thumbnails</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Blocks.Users.html">
                                            <span className="label">Users</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mega">
                                <a href="#interface" data-href="Interface.html">
                                    <i data-acorn-icon="pocket-knife" className="icon" data-acorn-size="18"></i>
                                    <span className="label">Interface</span>
                                </a>
                                <ul id="interface">
                                    <li>
                                        <a href="#interfaceComponents" data-href="Interface.Components.html">
                                            <span className="label">Components</span>
                                        </a>
                                        <ul id="interfaceComponents">
                                            <li>
                                                <a href="Interface.Components.Accordion.html">
                                                    <span className="label">Accordion</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Alerts.html">
                                                    <span className="label">Alerts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Badge.html">
                                                    <span className="label">Badge</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Breadcrumb.html">
                                                    <span className="label">Breadcrumb</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Buttons.html">
                                                    <span className="label">Buttons</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.ButtonGroup.html">
                                                    <span className="label">Button Group</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Card.html">
                                                    <span className="label">Card</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Close.html">
                                                    <span className="label">Close Button</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Collapse.html">
                                                    <span className="label">Collapse</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Dropdowns.html">
                                                    <span className="label">Dropdowns</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.ListGroup.html">
                                                    <span className="label">List Group</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Modal.html">
                                                    <span className="label">Modal</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Navs.html">
                                                    <span className="label">Navs</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Offcanvas.html">
                                                    <span className="label">Offcanvas</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Pagination.html">
                                                    <span className="label">Pagination</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Popovers.html">
                                                    <span className="label">Popovers</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Progress.html">
                                                    <span className="label">Progress</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Spinners.html">
                                                    <span className="label">Spinners</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Toasts.html">
                                                    <span className="label">Toasts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Components.Tooltips.html">
                                                    <span className="label">Tooltips</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#interfaceForms" data-href="Interface.Forms.html">
                                            <span className="label">Forms</span>
                                        </a>
                                        <ul id="interfaceForms">
                                            <li>
                                                <a href="Interface.Forms.Layouts.html">
                                                    <span className="label">Layouts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Forms.Validation.html">
                                                    <span className="label">Validation</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Forms.Wizard.html">
                                                    <span className="label">Wizard</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Forms.InputGroup.html">
                                                    <span className="label">Input Group</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Forms.InputMask.html">
                                                    <span className="label">Input Mask</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Forms.GenericForms.html">
                                                    <span className="label">Generic Forms</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#formControls" data-href="Interface.Forms.Controls.html">
                                                    <span className="label">Controls</span>
                                                </a>
                                                <ul id="formControls">
                                                    <li>
                                                        <a href="Interface.Forms.Controls.Autocomplete.html">
                                                            <span className="label">Autocomplete</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Forms.Controls.CheckboxRadio.html">
                                                            <span className="label">Checkbox-Radio</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Forms.Controls.DatePicker.html">
                                                            <span className="label">Date Picker</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Forms.Controls.Dropzone.html">
                                                            <span className="label">Dropzone</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Forms.Controls.Editor.html">
                                                            <span className="label">Editor</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Forms.Controls.InputSpinner.html">
                                                            <span className="label">Input Spinner</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Forms.Controls.Rating.html">
                                                            <span className="label">Rating</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Forms.Controls.Select2.html">
                                                            <span className="label">Select2</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Forms.Controls.Slider.html">
                                                            <span className="label">Slider</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Forms.Controls.Tags.html">
                                                            <span className="label">Tags</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Forms.Controls.TimePicker.html">
                                                            <span className="label">Time Picker</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#interfacePlugins" data-href="Interface.Plugins.html">
                                            <span className="label">Plugins</span>
                                        </a>
                                        <ul id="interfacePlugins">
                                            <li>
                                                <a href="Interface.Plugins.Carousel.html">
                                                    <span className="label">Carousel</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.Charts.html">
                                                    <span className="label">Charts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.Clamp.html">
                                                    <span className="label">Clamp</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.ContextMenu.html">
                                                    <span className="label">Context Menu</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#pluginsDatatables" data-href="Interface.Plugins.Datatables.html">
                                                    <span className="label">Datatables</span>
                                                </a>
                                                <ul id="pluginsDatatables">
                                                    <li>
                                                        <a href="Interface.Plugins.Datatables.EditableRows.html">
                                                            <span className="label">Editable Rows</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Plugins.Datatables.EditableBoxed.html">
                                                            <span className="label">Editable Boxed</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Plugins.Datatables.RowsAjax.html">
                                                            <span className="label">Ajax Data</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Plugins.Datatables.RowsServerSide.html">
                                                            <span className="label">Server Side</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Plugins.Datatables.BoxedVariations.html">
                                                            <span className="label">Boxed Variations</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.Lightbox.html">
                                                    <span className="label">Lightbox</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.List.html">
                                                    <span className="label">List</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.Maps.html">
                                                    <span className="label">Maps</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.Notify.html">
                                                    <span className="label">Notify</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.Player.html">
                                                    <span className="label">Players</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.Progress.html">
                                                    <span className="label">Progress</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.Scrollbar.html">
                                                    <span className="label">Scrollbar</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.Shortcuts.html">
                                                    <span className="label">Shortcuts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Plugins.Sortable.html">
                                                    <span className="label">Sortable</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#interfaceContent" data-href="Interface.Content.html">
                                            <span className="label">Content</span>
                                        </a>
                                        <ul id="interfaceContent">
                                            <li>
                                                <a href="#icons" data-href="Interface.Content.Icons.html">
                                                    <span className="label">Icons</span>
                                                </a>
                                                <ul id="icons">
                                                    <li>
                                                        <a href="Interface.Content.Icons.Acorn.Interface.html">
                                                            <span className="label">Acorn Interface</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Content.Icons.Acorn.Commerce.html">
                                                            <span className="label">Acorn Commerce</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Content.Icons.Acorn.Learning.html">
                                                            <span className="label">Acorn Learning</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Content.Icons.Acorn.Medical.html">
                                                            <span className="label">Acorn Medical</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Content.Icons.BootstrapIcons.html">
                                                            <span className="label">Bootstrap Icons</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="Interface.Content.Images.html">
                                                    <span className="label">Images</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Content.Tables.html">
                                                    <span className="label">Tables</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Interface.Content.Typography.html">
                                                    <span className="label">Typography</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#menuVarieties" data-href="Interface.Content.Menu.html">
                                                    <span className="label">Menu</span>
                                                </a>
                                                <ul id="menuVarieties">
                                                    <li>
                                                        <a href="Interface.Content.Menu.HorizontalStandard.html">
                                                            <span className="label">Horizontal</span>
                                                        </a>
                                                    </li>
                                                    <li></li>
                                                    <li>
                                                        <a href="Interface.Content.Menu.VerticalStandard.html">
                                                            <span className="label">Vertical</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Content.Menu.VerticalSemiHidden.html">
                                                            <span className="label">Vertical Hidden</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Content.Menu.VerticalNoSemiHidden.html">
                                                            <span className="label">Vertical No Hidden</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Content.Menu.MobileOnly.html">
                                                            <span className="label">Mobile Only</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Interface.Content.Menu.Sidebar.html">
                                                            <span className="label">Sidebar</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* Menu End */}

                    {/* Mobile Buttons Start */}
                    <div className="mobile-buttons-container">
                        {/* Scrollspy Mobile Button Start */}
                        <a href="#" id="scrollSpyButton" className="spy-button" data-bs-toggle="dropdown">
                            <i data-acorn-icon="menu-dropdown"></i>
                        </a>
                        {/* Scrollspy Mobile Button End */}

                        {/* Scrollspy Mobile Dropdown Start */}
                        <div className="dropdown-menu dropdown-menu-end" id="scrollSpyDropdown"></div>
                        {/* Scrollspy Mobile Dropdown End */}

                        {/* Menu Button Start */}
                        <a href="#" id="mobileMenuButton" className="menu-button">
                            <i data-acorn-icon="menu"></i>
                        </a>
                        {/* Menu Button End */}
                    </div>
                    {/* Mobile Buttons End */}
                </div>
                <div className="nav-shadow"></div>
            </div>
        </>
        );
    }
    
    export default Nav;
    