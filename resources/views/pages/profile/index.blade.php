<!DOCTYPE html>
<html lang="en">

    
<!-- Mirrored from coderthemes.com/hyper_2/saas/dashboard-analytics.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Nov 2022 03:59:59 GMT -->
<head>
        <meta charset="utf-8" />
        <title>CRM NuKu Admin | NusantaraKu Dashboard Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />

        <!-- App favicon -->
        <link rel="shortcut icon" href="{{ URL::asset('assets/images/favicon.ico') }}">

        @include('master.master-css')
    </head>

    <body>
        <!-- Begin page -->
        <div class="wrapper">
            <!-- ========== Topbar Start ========== -->
            @include('master.topbar')
            <!-- ========== Topbar End ========== -->

            <!-- ========== Left Sidebar Start ========== -->
            @include('master.sidebar')
            <!-- ========== Left Sidebar End ========== -->

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->
            <div class="content-page">
                <div class="content">
                    
                    <!-- Start Content-->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">

                                    </div>
                                    <h4 class="page-title">Setting Akun</h4>
                                </div>
                            </div>
                        </div>

                        
                        <div class="row">
                            <div class="col-xl-3 col-lg-5">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <img src="{{ URL::asset('assets/images/users/eza2.jpg') }}" class="rounded-circle avatar-lg img-thumbnail"
                                        alt="profile-image">

                                        <h4 class="mb-0 mt-2">Reza Ezazee</h4>
                                        <p class="text-muted font-14">Admin</p>

                                    </div> <!-- end card-body -->
                                </div> <!-- end card -->


                            </div> <!-- end col-->

                            <div class="col-xl-9 col-lg-7">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="tab-content">
                                            <div class="tab-pane show active" id="input-types-preview">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <form>
                                                            <div class="mb-3">
                                                                <label for="example-disable" class="form-label">Nama Akun</label>
                                                                <input type="text" id="example-disable" class="form-control" disabled value="Reza ezazee">
                                                            </div>
        
                                                            <div class="mb-3">
                                                                <label for="example-email" class="form-label">Email</label>
                                                                <input type="email" id="example-email" name="example-email" class="form-control" placeholder="Email" value="rezazee@email.com">
                                                            </div>

                                                        </form>
                                                    </div> <!-- end col -->
        
                                                    <div class="col-lg-6">
                                                        <form>

                                                            <div class="mb-3">
                                                                <label for="password" class="form-label">Password</label>
                                                                <div class="input-group input-group-merge">
                                                                    <input type="password" id="password" class="form-control" placeholder="Enter your password" value="emilmutaqin123">
                                                                    <div class="input-group-text" data-password="false">
                                                                        <span class="password-eye"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                
                                                        </form>
                                                    </div> <!-- end col -->
                                                </div>
                                               <button type="button" class="btn btn-success">Simpan Perubahan</button>
                                                <!-- end row-->                      
                                            </div> <!-- end preview-->
                                        </div> <!-- end tab-content-->
                                    </div> <!-- end card-body -->
                                </div> <!-- end card -->
                            </div> <!-- end col -->
                        </div>
                <!-- content -->

                <!-- Footer Start -->
                @include('master.footer')
                <!-- end Footer -->

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->

        </div>
        <!-- END wrapper -->



             @include('master.script')
             

    </body>


<!-- Mirrored from coderthemes.com/hyper_2/saas/dashboard-analytics.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Nov 2022 04:00:53 GMT -->
</html>