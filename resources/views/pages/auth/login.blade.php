<!DOCTYPE html>
<html lang="en">

    
<!-- Mirrored from coderthemes.com/hyper_2/saas/pages-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Nov 2022 04:01:37 GMT -->
<head>
        <meta charset="utf-8" />
        <title>Log In | NusantaraKu Dashboard Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="CMS Antar Untuk Bantuan Logistik" name="description" />
        <meta content="Coderthemes" name="author" />

        @include('master.master-css')
    </head>
    
    <body class="authentication-bg">
        <div class="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-4 col-lg-5">
                        <div class="card">

                            <!-- Logo -->
                            <div class="card-header pt-4 pb-4 text-center bg-primary">
                                <a href="/login">
                                    <span><img src="{{ URL::asset('assets/images/nuku(white).png') }}" alt="logo" height="50"></span>
                                </a>
                            </div>

                            <div class="card-body p-4">
                                
                                <div class="text-center w-75 m-auto">
                                    <h4 class="text-dark-50 text-center pb-0 fw-bold">Login</h4>
                                    <p class="text-muted mb-4">Lakukan Login Terlebih Dahulu.</p>
                                </div>

                                <form action="/login/login" method="POST">
                                    @csrf
                                    <div class="mb-3">
                                        <label for="emailaddress" class="form-label">Email address</label>
                                        <input class="form-control" type="email" id="emailaddress" required placeholder="Masukan Email">
                                    </div>

                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <div class="input-group input-group-merge">
                                            <input type="password" id="password" class="form-control" required placeholder="Masukan Password">
                                            <div class="input-group-text" data-password="false">
                                                <span class="password-eye"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-3 mb-0 text-center">
                                        <button name="submit" class="btn btn-primary" type="submit"> Log In </button>
                                    </div>

                                </form>
                            </div> <!-- end card-body -->
                        </div>
                        <!-- end card -->

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p class="text-muted">Beluk Punya Akun ? <a href="/register" class="text-muted ms-1"><b class="text-danger">Daftar</b></a></p>
                            </div> <!-- end col -->
                        </div>
                        <!-- end row -->

                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end page -->

        <footer class="footer footer-alt">
             <script>document.write(new Date().getFullYear())</script> ?? PT EMAS - Eka Mandiri Asa Sejati
        </footer>
        <!-- Vendor js -->
        <script src="assets/js/vendor.min.js"></script>
        
        <!-- App js -->
        <script src="assets/js/app.min.js"></script>

    </body>

<!-- Mirrored from coderthemes.com/hyper_2/saas/pages-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Nov 2022 04:01:37 GMT -->
</html>
