import React, { useState } from 'react';
import { TotalStudent, TotalUser } from './data';
import  {CardStudent, CardUser} from './Components/Cards';
import CurrentDateTime from './Components/DateTime';
 
import './Dashboard.css';
import Weather from './Components/Weather';

 
function Dashboard() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    
    return (
        <div   >
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">Admin</div>
                            <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div>
                        </a>

                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></a>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                         

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>	Organization </span>
                            </a>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item" href="/organization">Organization Management</a>
                                    <a className="collapse-item" href="buttons.html">Group</a>
                                    <a className="collapse-item" href="cards.html">Department</a>
                                    <a className="collapse-item" href="cards.html">Role</a>

                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>User Management</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item" href="utilities-color.html">User </a>

                                    <a className="collapse-item" href="utilities-color.html">User Listing</a>
                                 
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities2"
                                aria-expanded="true" aria-controls="collapseUtilities2">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>	Student Management</span>
                            </a>
                            <div id="collapseUtilities2" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item" href="utilities-color.html">Student </a>

                                    <a className="collapse-item" href="utilities-color.html">Student Listing</a>
                                 
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities3"
                                aria-expanded="true" aria-controls="collapseUtilities3">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>	Settings</span>
                            </a>
                            <div id="collapseUtilities3" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item" href="utilities-color.html">Device Health </a>

                                    <a className="collapse-item" href="utilities-color.html">Theme Settings</a>
                                    <a className="collapse-item" href="utilities-color.html">Time Zone Setting</a>

                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed"  href="/logout" >Logout</a>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />
  

                    </ul>
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"></i>
                                </button>

                                {/*  <!-- Topbar Search --> */}
                                <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                            aria-label="Search" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">

                                    {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-search fa-fw"></i>
                                        </a>
                                        {/*   <!-- Dropdown - Messages --> */}
                                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown">
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                    <input type="text" className="form-control bg-light border-0 small"
                                                        placeholder="Search for..." aria-label="Search"
                                                        aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">
                                                            <i className="fas fa-search fa-sm"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>

                                    {/*  <!-- Nav Item - Alerts --> */}
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            
                                             
                                        </a>
                                        
                                    </li>

                                    {/*  <!-- Nav Item - Messages --> */}
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            
                                            <CurrentDateTime />
                                        </a>
                                         
                                    </li>

                                    <div className="topbar-divider d-none d-sm-block"></div>

                                    {/* <!-- Nav Item - User Information --> */}
                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                                            <img className="img-profile rounded-circle"
                                                src="img/undraw_profile.svg" />
                                        </a>
                                        {/*  <!-- Dropdown - User Information --> */}
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Profile
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Settings
                                            </a>
                                            
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </a>
                                        </div>
                                    </li>

                                </ul>

                            </nav>
                            {/*  <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                {/*  <!-- Page Heading --> */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                    
                                </div>

                                {/*  <!-- Content Row --> */}
                                <div className="row">

                                   <CardUser data={TotalUser}  />   
                                   <CardStudent data={TotalStudent}  />  
                                   <Weather />
                                </div>

                                {/*  <!-- Content Row --> */}

                                <div className="row">

                                    {/*   <!-- Area Chart --> */}
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                                <div className="dropdown no-arrow">
                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                        aria-labelledby="dropdownMenuLink">
                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-area">
                                                    <canvas id="myAreaChart"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Pie Chart --> */}
                                    <div className="col-xl-4 col-lg-5">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                                <div className="dropdown no-arrow">
                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                        aria-labelledby="dropdownMenuLink">
                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-pie pt-4 pb-2">
                                                    <canvas id="myPieChart"></canvas>
                                                </div>
                                                <div className="mt-4 text-center small">
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-primary"></i> Direct
                                                    </span>
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-success"></i> Social
                                                    </span>
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-info"></i> Referral
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*   <!-- Content Row --> */}
                                <div className="row">

                                    {/*   <!-- Content Column --> */}
                                    <div className="col-lg-6 mb-4">

                                        {/* <!-- Project Card Example --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                            </div>
                                            <div className="card-body">
                                                <h4 className="small font-weight-bold">Server Migration <span
                                                    className="float-right">20%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-danger a2" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Sales Tracking <span
                                                    className="float-right">40%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-warning a3" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Customer Database <span
                                                    className="float-right">60%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar a7" role="progressbar"></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Payout Details <span
                                                    className="float-right">80%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-info a4" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Account Setup <span
                                                    className="float-right">Complete!</span></h4>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success a5" role="progressbar" ></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Color System --> */}
                                        <div className="row">
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-primary text-white shadow">
                                                    <div className="card-body">
                                                        Primary
                                                        <div className="text-white-50 small">#4e73df</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-success text-white shadow">
                                                    <div className="card-body">
                                                        Success
                                                        <div className="text-white-50 small">#1cc88a</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        Info
                                                        <div className="text-white-50 small">#36b9cc</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-warning text-white shadow">
                                                    <div className="card-body">
                                                        Warning
                                                        <div className="text-white-50 small">#f6c23e</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-danger text-white shadow">
                                                    <div className="card-body">
                                                        Danger
                                                        <div className="text-white-50 small">#e74a3b</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-secondary text-white shadow">
                                                    <div className="card-body">
                                                        Secondary
                                                        <div className="text-white-50 small">#858796</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-light text-black shadow">
                                                    <div className="card-body">
                                                        Light
                                                        <div className="text-black-50 small">#f8f9fc</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-dark text-white shadow">
                                                    <div className="card-body">
                                                        Dark
                                                        <div className="text-white-50 small">#5a5c69</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 mb-4">

                                        {/* <!-- Illustrations --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 a6"
                                                        src="img/undraw_posting_photo.svg" alt="..." />
                                                </div>
                                                <p>Add some quality, svg illustrations to your project courtesy of <a
                                                    target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                                    constantly updated collection of beautiful svg images that you can use
                                                    completely free and without attribution!</p>
                                                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                                    unDraw &rarr;</a>
                                            </div>
                                        </div>

                                        {/* <!-- Approach --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                                            </div>
                                            <div className="card-body">
                                                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                                    CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                                    custom components and custom utility classNamees.</p>
                                                <p className="mb-0">Before working with this theme, you should become familiar with the
                                                    Bootstrap framework, especially the utility classNamees.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/*   <!-- /.container-fluid --> */}

                        </div>
                        {/*   <!-- End of Main Content -->

                                        <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/*  <!-- End of Content Wrapper --> */}

                </div>
                {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/*  <!-- Logout Modal--> */}
                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </div>
    )
}

export default Dashboard;
