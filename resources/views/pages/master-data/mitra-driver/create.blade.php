<!DOCTYPE html>
<html lang="en">

    
<!-- Mirrored from coderthemes.com/hyper_2/saas/dashboard-analytics.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Nov 2022 03:59:59 GMT -->
<head>
        <meta charset="utf-8" />
        <title> Tambah Mitra Driver | NusantaraKu Dashboard Admin</title>
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
                                    <h4 class="page-title">Tambah Mitra Driver</h4>
                                </div>
                            </div>
                        </div>

                        <!-- Form Edit Table Data Kabupaten / Kota -->
                    <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h2 class="header-title">Formulir Daftar Mita Driver Baru</h2>
                                        <p class="text-muted font-14">
                                            Isi Semua Kolom Yang Diperlukan untuk Mendaftar Mitra Driver Baru
                                        </p>
                                        <div class="tab-content">
                                            <div class="tab-pane show active" id="input-types-preview">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <form>
        
                                                            <div class="mb-3">
                                                                <label for="example-email" class="form-label">Email</label>
                                                                <input type="email" id="example-email" name="example-email" class="form-control" placeholder="Isi Email">
                                                            </div>

                                                            <div class="mb-3">
                                                                <label for="example-email" class="form-label">Pin Aplikasi</label>
                                                                <input type="number" id="example-email" name="example-email" class="form-control" placeholder="Isi Pin Aplikasi">
                                                            </div>
                                                        </form>
                                                    </div> <!-- end col -->

                                                    <div class="col-lg-6">
                                                        <form>
                                                            <div class="mb-3">
                                                                <label for="password" class="form-label">Password</label>
                                                                <div class="input-group input-group-merge">
                                                                    <input type="password" id="password" class="form-control" placeholder="Masukan Password">
                                                                    <div class="input-group-text" data-password="false">
                                                                        <span class="password-eye"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                
                                                        </form>
                                                    </div> <!-- end col -->
                                                    <!-- File Upload -->
                                                </div>
                                                <!-- end row-->                      
                                            </div> <!-- end preview-->
                                        </div> <!-- end tab-content-->
                                    </div> <!-- end card-body -->
                                </div> <!-- end card -->
                            </div><!-- end col -->
                        </div><!-- end row -->


                         <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h2 class="header-title">Formulir Data Diri Sesuai KTP</h2>
                                        <p class="text-muted font-14">
                                            Isi Data Diri Sesuai KTP
                                        </p>
                                        <div class="tab-content">
                                            <div class="tab-pane show active" id="input-types-preview">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <form>
                                                            <div class="mb-3">
                                                                <label for="example-email" class="form-label">Nama Sesuai KTP</label>
                                                                <input type="text" id="example-email" name="example-email" class="form-control" placeholder="Isi Nama Sesuai KTP">
                                                            </div>

                                                            <h6 class="font-15 mt-3">Jenis Kelamin</h6>
                                                                <div class="mb-3">
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" id="customRadio3" name="customRadio1" class="form-check-input">
                                                                        <label class="form-check-label" for="customRadio3">Laki - Laki</label>
                                                                    </div>
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" id="customRadio4" name="customRadio1" class="form-check-input">
                                                                        <label class="form-check-label" for="customRadio4">Perempuan</label>
                                                                    </div>
                                                                </div>

                                                                <div class="mb-3">
                                                                <label for="example-email" class="form-label">NIK KTP</label>
                                                                <input type="number" id="example-email" name="example-email" class="form-control" placeholder="Isi NIK">
                                                            </div>

                                                            <div class="mb-3">
                                                                <label for="example-email" class="form-label">Nomor HP</label>
                                                                <input type="number" id="example-email" name="example-email" class="form-control" placeholder="Isi Nomor HP">
                                                            </div>

                                                            <div class="mb-3">
                                                                    <label for="agama" class="form-label">Pilih Kabupaten</label>
                                                                    <select class="form-select mb-3" id="agama">
                                                                        <option selected>Pilih Kabupaten</option>
                                                                        <option value="1">Lamongan</option>
                                                                        <option value="2">Surabaya</option>
                                                                        <option value="3">Garut</option>
                                                                        <option value="4">Medan</option>
                                                                        <option value="5">Bogor</option>
                                                                        <option value="6">Bekasi</option>
                                                                    </select> 
                                                                </div>
                                                            
                                                        </form>
                                                    </div> <!-- end col -->
        
                                                    <div class="col-lg-6">
                                                        <form>
                                                            <div class="mb-3">
                                                                <label for="example-date" class="form-label">Tanggal Lahir</label>
                                                                <input class="form-control" id="example-date" type="date" name="date">
                                                            </div>

                                                            <h6 class="font-15 mt-3">Status</h6>
                                                                <div class="mb-3">
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" id="customRadio3" name="customRadio1" class="form-check-input">
                                                                        <label class="form-check-label" for="customRadio3">Sudah Menikah</label>
                                                                    </div>
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" id="customRadio4" name="customRadio1" class="form-check-input">
                                                                        <label class="form-check-label" for="customRadio4">Belum Menikah</label>
                                                                    </div>
                                                                </div>

                                                                <div class="mb-3">
                                                                    <label for="agama" class="form-label">Agama</label>
                                                                    <select class="form-select mb-3" id="agama">
                                                                        <option selected>Pilih Agama</option>
                                                                        <option value="1">Islam</option>
                                                                        <option value="2">Kristen Protestan</option>
                                                                        <option value="3">Katolik</option>
                                                                        <option value="4">Hindu</option>
                                                                        <option value="5">Budha</option>
                                                                        <option value="6">Khonghucu</option>
                                                                    </select> 
                                                                </div>
                                                                
                                                                <div class="mb-3">
                                                                    <label for="agama" class="form-label">Pilih Provinsi</label>
                                                                    <select class="form-select mb-3" id="agama">
                                                                        <option selected>Pilih Provinsi</option>
                                                                        <option value="1">Sumatera Selatan</option>
                                                                        <option value="2">Jawa Barat</option>
                                                                        <option value="3">Jawa Timur</option>
                                                                        <option value="4">Jawa Tengah</option>
                                                                        <option value="5">Riau</option>
                                                                        <option value="6">Aceh</option>
                                                                    </select> 
                                                                </div>

                                                                <div class="mb-3">
                                                                    <label for="agama" class="form-label">Pilih Kecamatan</label>
                                                                    <select class="form-select mb-3" id="agama">
                                                                        <option selected>Pilih Kecamatan</option>
                                                                        <option value="1">Wanaraja</option>
                                                                        <option value="2">Cilawu</option>
                                                                        <option value="3">Pngantikan</option>
                                                                        <option value="4">Karangpawitan</option>
                                                                        <option value="5">Limbangan</option>
                                                                        <option value="6">Bayongbong</option>
                                                                    </select> 
                                                                </div>
                                                        </form>
                                                    </div> <!-- end col -->
                                                    <div class="mb-3">
                                                                <label for="example-textarea" class="form-label">Alamat Lengkap Sesuai KTP</label>
                                                                <textarea class="form-control" id="example-textarea" rows="5" placeholder="Isi Alamat Lengkap Sesuai KTP"></textarea>
                                                            </div>
                                                    <!-- File Upload -->
                                                </div>
                                                <!-- end row-->                      
                                            </div> <!-- end preview-->
                                        </div> <!-- end tab-content-->
                                    </div> <!-- end card-body -->
                                </div> <!-- end card -->
                            </div><!-- end col -->
                        </div><!-- end row -->

                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h2 class="header-title">Formulir Data Driver</h2>
                                        <p class="text-muted font-14">
                                            Isi Semua Kolom Data Driver
                                        </p>
                                        <div class="tab-content">
                                            <div class="tab-pane show active" id="input-types-preview">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <form>
                                                            <div class="mb-3">
                                                                <label for="example-email" class="form-label">Nomor SIM</label>
                                                                <input type="number" id="example-email" name="example-email" class="form-control" placeholder="Isi Nomor SIM dengan Benar">
                                                            </div>

                                                            <div class="mb-3">
                                                                <label for="example-email" class="form-label">Nomor STNK</label>
                                                                <input type="number" id="example-email" name="example-email" class="form-control" placeholder="Isi Nomor STNK Dengan Benar">
                                                            </div>

                                                            <div class="mb-3">
                                                                    <label for="kategori-kendaraan" class="form-label">Kategori Kendaraan</label>
                                                                    <select class="form-select mb-3" id="kategori-kendaraan">
                                                                        <option selected>Pilih Kategori Kendaraan</option>
                                                                        <option value="1">Matic</option>
                                                                        <option value="2">Manual</option>
                                                                    </select> 
                                                                </div>

                                                            <div class="mb-3">
                                                                <label for="example-email" class="form-label">Nomor HP</label>
                                                                <input type="number" id="example-email" name="example-email" class="form-control" placeholder="Isi Nomor HP">
                                                            </div>
                                                        </form>
                                                    </div> <!-- end col -->
        
                                                    <div class="col-lg-6">
                                                        <form>
                                                            <div class="mb-3">
                                                                <label for="example-date" class="form-label">Tanggal Lahir</label>
                                                                <input class="form-control" id="example-date" type="date" name="date">
                                                            </div>

                                                                <div class="mb-3">
                                                                    <label for="brand-kendaraan" class="form-label">Brand Kendaraan</label>
                                                                    <select class="form-select mb-3" id="brand-kendaraan">
                                                                        <option selected>Pilih Brand Kendaraan</option>
                                                                        <option value="1">Honda</option>
                                                                        <option value="2">Yamaha</option>
                                                                        <option value="3">Suzuki</option>
                                                                        <option value="4">Kawasaki</option>
                                                                    </select> 
                                                                </div>

                                                                <div class="row g-2">
                                                                    <div class="mb-3 col-md-6">
                                                                        <label for="inputState" class="form-label">Tipe Kendaraan</label>
                                                                        <select id="inputState" class="form-select">
                                                                            <option>Pilih Tipe Kendaraan</option>
                                                                            <option>Motor</option>
                                                                            <option>Mobil</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="mb-3 col-md-4">
                                                                        <label for="inputZip" class="form-label"> CC Motor</label>
                                                                        <input type="number" class="form-control" id="inputZip">
                                                                    </div>
                                                                </div>

                                                                <div class="mb-3">
                                                                <label for="example-email" class="form-label">Tahun Kendaraan</label>
                                                                <input type="number" id="example-email" name="example-email" class="form-control" placeholder="Isi Tahun Kendaraan">
                                                            </div>

                                                            <div class="mb-3">
                                                                <label for="example-email" class="form-label">Nomor Plat Kendaraan</label>
                                                                <input type="number" id="example-email" name="example-email" class="form-control" placeholder="Isi Nomor Plat Kendaraaan">
                                                            </div>
                                                        </form>
                                                    </div> <!-- end col -->
                                                </div>
                                                <!-- end row-->                      
                                            </div> <!-- end preview-->
                                        </div> <!-- end tab-content-->
                                    </div> <!-- end card-body -->
                                </div> <!-- end card -->
                            </div><!-- end col -->
                        </div><!-- end row -->

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